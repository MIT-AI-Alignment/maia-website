import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { displayDateRange, splitEvents } from '../src/lib/events.ts';

const compiled = await build({
 entryPoints: [fileURLToPath(new URL('../src/lib/eventCollections.ts', import.meta.url))],
 bundle: true, platform: 'node', format: 'esm', write: false
});
const { eventCollection, groupEventRuns, combineFallWorkshops } = await import('data:text/javascript;base64,' + Buffer.from(compiled.outputFiles[0].text).toString('base64'));

const fallWorkshops = [
 { id: '62t93vcs72k239ci750rit6l2h@google.com/2026-11-06', start: '2026-11-06', end: '2026-11-09' },
 { id: '3j8q3d7vbgvdkbmqje21vm5cri@google.com/2026-11-13', start: '2026-11-13', end: '2026-11-16' },
 { id: '7ebmkf3cbhq7lgch1eq631qm97@google.com/2026-11-20', start: '2026-11-20', end: '2026-11-23' }
].map(event => ({ ...event, title: 'MAIA/AISST Workshop', location: 'Essex Woods, 1 Conomo Point Rd, Essex, MA 01929, USA' }));

test('November workshops share one listing with distinct dates and no address', () => {
 const [combined] = combineFallWorkshops([...fallWorkshops].reverse());
 assert.equal(combined.id, fallWorkshops[0].id);
 assert.equal(combined.location, undefined);
 assert.equal(displayDateRange(combined, false), 'Nov 6–8 · Nov 13–15 · Nov 20–22');
 assert.equal(splitEvents([combined], new Date('2026-11-23T04:59:00Z')).upcoming.length, 1);
 assert.equal(splitEvents([combined], new Date('2026-11-23T05:00:00Z')).past.length, 1);
 assert.deepEqual(combineFallWorkshops([combined]), [combined]);
});

test('workshop grouping preserves other records and never adds missing dates', () => {
 const unrelated = { ...fallWorkshops[0], id: 'different-calendar-record' };
 const events = [unrelated, fallWorkshops[2], fallWorkshops[0]];
 const original = structuredClone(events);
 const combined = combineFallWorkshops(events);
 assert.equal(combined.length, 2);
 assert.equal(combined[0], unrelated);
 assert.equal(displayDateRange(combined[1], false), 'Nov 6–8 · Nov 20–22');
 assert.deepEqual(events, original);
 assert.deepEqual(combineFallWorkshops([]), []);
});

test('all nine CPW activities are recognized from their public archive descriptions', async () => {
 const archive = JSON.parse(await readFile(new URL('../docs/event-archive-draft.json', import.meta.url), 'utf8'));
 const cpwEvents = archive.events.filter(event => event.category === 'CPW' && event.record_type !== 'collection');
 assert.equal(cpwEvents.length, 9);
 for (const event of cpwEvents) {
  assert.equal(eventCollection({ ...event, start: event.start_date }).id, 'cpw-2026', event.title);
 }
});

test('orientation membership uses the public flyer records, not dates or similar titles alone', () => {
 const rockClimbing = { id: '545d2vne11hmvund2no6csn2fd@google.com/2026-09-05T15:00:00Z', title: 'Rock Climbing', start: '2026-09-05T15:00:00Z' };
 assert.equal(eventCollection(rockClimbing).id, 'orientation-2026');
 assert.equal(eventCollection({ ...rockClimbing, id: 'unrelated' }), null);
 assert.equal(eventCollection({ ...rockClimbing, start: '2026-10-05T15:00:00Z' }), null);
 assert.equal(eventCollection({ id: '048peimga0769t74arerciidtn@google.com/2026-09-08T17:00:00Z', title: 'MAIA at the Graduate Resource Fair', start: '2026-09-08T17:00:00Z' }).id, 'orientation-2026');
});

test('grouped runs preserve chronological order and split around unrelated records', () => {
 const events = [
  { id: 'one', title: 'CPW brunch', start: '2026-04-10' },
  { id: 'two', title: 'CPW games', start: '2026-04-11' },
  { id: 'three', title: 'Research meeting', start: '2026-04-11' },
  { id: 'four', title: 'CPW social', start: '2026-04-12' }
 ];
 const runs = groupEventRuns(events);
 assert.deepEqual(runs.map(run => run.events.length), [2, 1, 1]);
 assert.deepEqual(runs.flatMap(run => run.events), events);
 assert.equal(runs[1].collection, null);
 assert.deepEqual(groupEventRuns([]), []);
});
