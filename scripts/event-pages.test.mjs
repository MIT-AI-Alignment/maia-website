import test from 'node:test';
import assert from 'node:assert/strict';
import { eventPageUrl, readEventPage, shortEventSummary, fetchEventPage, enrichEventPages } from '../src/lib/server/eventPages.ts';
import { getEventMedia } from '../src/lib/eventMedia.ts';

const partiful = 'https://partiful.com/e/TestEvent';
const image = 'https://partiful.imgix.net/event-cover.jpg?auto=format&fit=crop';
const html = (description = 'Discuss AI safety. Meet the research community. More detail.', imageUrl = image) =>
 `<meta content="${imageUrl.replaceAll('&', '&amp;')}" property="og:image"><script id="__NEXT_DATA__" type="application/json">${JSON.stringify({ props: { pageProps: { event: { description } } } }).replaceAll('<', '\\u003c')}</script>`;
const event = (url = partiful) => ({ id: 'calendar-id/2026-10-14', title: 'Calendar title', start: '2026-10-14T22:00:00Z', end: '2026-10-14T23:00:00Z', location: 'Calendar venue', url });
const now = Date.parse('2026-10-08T00:00Z');

test('public source links are normalized and arbitrary hosts, credentials, ports, and paths refused', () => {
 assert.equal(eventPageUrl('https://www.partiful.com/e/TestEvent?c=tracking#details'), partiful);
 assert.equal(eventPageUrl('https://lu.ma/test-event?utm_source=calendar'), 'https://lu.ma/test-event');
 for (const url of ['http://partiful.com/e/TestEvent', 'https://partiful.com.evil.test/e/TestEvent', 'https://user:pass@partiful.com/e/TestEvent', 'https://partiful.com:8080/e/TestEvent', 'https://luma.com/api/events', 'https://localhost/', 'javascript:alert(1)']) assert.equal(eventPageUrl(url), undefined, url);
});

test('Partiful imports full source text and public cover, decodes HTML safely', () => {
 const data = readEventPage(html('Talk &amp; Q&A. <b>Meet researchers.</b><script>alert(1)</script>'), partiful);
 assert.equal(data.description, 'Talk & Q&A. Meet researchers.');
 assert.equal(data.imageUrl, image);
 assert.equal(shortEventSummary(data.description), 'Talk & Q&A. Meet researchers.');
});

test('Luma prefers the Event cover over a generic social preview', () => {
 const url = 'https://luma.com/research-talk';
 const data = readEventPage(`<meta property="og:image" content="https://images.lumacdn.com/social.jpg"><script type="application/ld+json">${JSON.stringify({ '@type': 'Event', description: 'Research talk. Followed by Q&A.', image: ['https://images.lumacdn.com/cover.jpg', 'https://images.lumacdn.com/social.jpg'] })}</script>`, url);
 assert.equal(data.imageUrl, 'https://images.lumacdn.com/cover.jpg');
 assert.equal(data.description, 'Research talk. Followed by Q&A.');
});

test('summaries retain abbreviations and URLs rather than dropping sentence beginnings', () => {
 assert.equal(shortEventSummary('Dr. Wang joins us at 6 p.m. Come meet him.'), 'Dr. Wang joins us at 6 p.m. Come meet him.');
 assert.equal(shortEventSummary('Visit https://example.com for details. Join us at 6 p.m. for a talk. More information later.'), 'Visit https://example.com for details. Join us at 6 p.m. for a talk.');
 assert.equal(shortEventSummary('A Ph.D. student joins us. It will be fun. Third sentence.'), 'A Ph.D. student joins us. It will be fun.');
});

test('malformed optional scripts fall back to OG; executable images are never imported', () => {
 assert.equal(readEventPage('<script id="__NEXT_DATA__">not JSON</script><meta property="og:description" content="A public talk."><meta property="og:image" content="javascript:alert(1)">', partiful).imageUrl, undefined);
 assert.equal(readEventPage('<meta name="description" content="Sign in to Partiful">', partiful), undefined);
 assert.equal(readEventPage('<meta property="og:image" content="https://127.0.0.1/secret">', partiful), undefined);
});

test('source redirects cannot turn the calendar integration into an arbitrary fetch', async () => {
 const calls = [];
 const data = await fetchEventPage(partiful, async url => {
  calls.push(url);
  return new Response(null, { status: 302, headers: { location: 'https://localhost/private' } });
 }, AbortSignal.timeout(500));
 assert.equal(data, undefined);
 assert.deepEqual(calls, [partiful]);
});

test('enrichment deduplicates RSVP sources, preserves calendar schedule and curated summary', async () => {
 let calls = 0;
 const rows = await enrichEventPages([event(), { ...event(), id: 'recurrence/2', summary: 'Reviewed archive summary' }], async () => {
  calls++;
  return new Response(html(), { headers: { 'content-type': 'text/html' } });
 }, {}, { now });
 assert.equal(calls, 1);
 assert.equal(rows[0].summary, 'Discuss AI safety. Meet the research community.');
 assert.equal(rows[0].media.imageUrl, image);
 assert.equal(rows[1].summary, 'Reviewed archive summary');
 assert.equal(rows[0].start, event().start);
 assert.equal(rows[0].title, event().title);
 assert.equal(rows[0].location, event().location);
});

test('a failed refresh retains last successful metadata and bundled fallback survives cold starts', async () => {
 const rows = await enrichEventPages([event()], async () => { throw new Error('offline'); }, {}, { now: now + 2 * 86400000 });
 assert.equal(rows[0].media.imageUrl, image);
 const coldUrl = 'https://partiful.com/e/ColdStart';
 const cold = await enrichEventPages([event(coldUrl)], async () => new Response('', { status: 503 }), {
  [coldUrl]: { sourceUrl: coldUrl, description: 'Previously verified description.', imageUrl: image }
 }, { now });
 assert.equal(cold[0].summary, 'Previously verified description.');
 assert.equal(cold[0].media.imageUrl, image);
});

test('one stalled event source cannot exhaust the page request budget', async () => {
 const start = performance.now();
 const rows = await enrichEventPages([event('https://partiful.com/e/SlowSource')], async (_url, { signal }) => {
  await new Promise((resolve, reject) => {
   const timer = setTimeout(resolve, 2000);
   signal.addEventListener('abort', () => { clearTimeout(timer); reject(signal.reason); }, { once: true });
  });
 }, {}, { now, budgetMs: 30 });
 assert.ok(performance.now() - start < 1000);
 assert.equal(rows[0].title, 'Calendar title');
 assert.equal(rows[0].media, undefined);
});

test('curated local media is retained over automatically imported artwork', () => {
 const row = { ...event(), id: '67nup42v5rga1hd39984n05da5@google.com/2026-10-14', media: { imageUrl: image, imageAlt: 'Imported cover', kind: 'artwork' } };
 assert.match(getEventMedia(row).imageUrl, /^\/images\/events\/boba-representative.jpg/);
 assert.equal(getEventMedia(event()), undefined);
});
