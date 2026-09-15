import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { build } from 'esbuild';

const compiled = await build({
 entryPoints: [new URL('../src/lib/semesterTimeline.ts', import.meta.url).pathname],
 bundle: true, platform: 'node', format: 'esm', write: false
});
const { dayNumber, eventDayRange, semesterForDate, availableSemesters, eventsInSemester, layoutTimeline, eventCategory } =
 await import('data:text/javascript;base64,' + Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const spring = semesterForDate('2026-03-01');
const event = (id, start, end, kind = 'event') => ({ id, title: id, start, end, kind });

test('exclusive all-day ends and midnight timed ends do not spill into the next term', () => {
 const allDay = event('may', '2026-05-29', '2026-06-01');
 const midnight = event('midnight', '2026-05-31T23:00:00-04:00', '2026-06-01T00:00:00-04:00');
 assert.equal(eventDayRange(allDay).end, dayNumber('2026-06-01'));
 assert.equal(eventDayRange(midnight).end, dayNumber('2026-06-01'));
 assert.equal(eventsInSemester([allDay, midnight], semesterForDate('2026-06-01')).length, 0);
});

test('local Eastern dates and DST boundaries retain equal calendar-day widths', () => {
 assert.deepEqual(eventDayRange(event('UTC boundary', '2026-03-08T03:00:00Z')), {
  start: dayNumber('2026-03-07'), end: dayNumber('2026-03-08')
 });
 const dst = eventDayRange(event('DST', '2026-03-07T23:00:00-05:00', '2026-03-09T00:00:00-04:00'));
 assert.equal(dst.end - dst.start, 2);
 assert.equal(dayNumber('2026-03-09') - dayNumber('2026-03-08'), 1);
});

test('long programs clip to semester bounds and expose continuation flags', () => {
 const long = event('program', '2025-12-01', '2026-08-01', 'initiative');
 const { items } = layoutTimeline([long], spring);
 assert.equal(items[0].left, 0);
 assert.equal(items[0].width, 1);
 assert.ok(items[0].continuesBefore && items[0].continuesAfter);
 assert.deepEqual(availableSemesters([long]).map(term => term.id), ['summer-2026', 'spring-2026', 'fall-2025']);
});

test('overlapping programs and nearby point labels occupy separate lanes', () => {
 const { items, laneCount } = layoutTimeline([
  event('A', '2026-02-01', '2026-04-01', 'initiative'),
  event('B', '2026-03-01', '2026-05-01', 'initiative'),
  event('C', '2026-04-15', '2026-05-01', 'initiative')
 ], spring);
 assert.equal(laneCount, 2);
 assert.notEqual(items[0].lane, items[1].lane);
 assert.equal(items[0].lane, items[2].lane);
 const points = layoutTimeline([event('one', '2026-05-30'), event('two', '2026-05-31')], spring);
 assert.equal(points.laneCount, 2);
 for (const item of points.items) {
  assert.ok(item.left >= 0 && item.left + item.width <= 1);
  assert.ok(item.marker >= 0 && item.marker <= 1);
 }
});

test('invalid calendar dates fail; empty data produces no fictional semesters', () => {
 assert.throws(() => dayNumber('2026-02-30'));
 assert.deepEqual(availableSemesters([]), []);
 assert.deepEqual(layoutTimeline([], spring), { items: [], laneCount: 0 });
});

test('archived researcher-and-topic titles use explicit talk formats from their descriptions', async () => {
 const archive = JSON.parse(await readFile(new URL('../docs/event-archive-draft.json', import.meta.url), 'utf8'));
 for (const id of ['maia-2026-001', 'maia-2026-010', 'maia-2026-011', 'maia-2026-013', 'maia-2026-018']) {
  const archivedEvent = archive.events.find(item => item.id === id);
  assert.ok(archivedEvent, `Missing regression fixture ${id}`);
  assert.equal(eventCategory(archivedEvent), 'talks', archivedEvent.title);
 }
});

test('title categories take precedence over incidental speaker descriptions', () => {
 const description = 'A guest presented their research. The talk was followed by dinner.';
 for (const [title, expected] of [
  ['Residential AI Safety Workshop', 'workshops'],
  ['Community Social', 'socials'],
  ['Bon Me Food Truck', 'tabling'],
  ['Rock-climbing with MAIA', 'socials'],
  ['MAIA Harbor Cruise', 'socials']
 ]) assert.equal(eventCategory({ title, description }), expected, title);
 assert.equal(eventCategory({ title: 'AISF', kind: 'initiative', description }), 'programs');
 assert.equal(eventCategory({ title: 'Planning afternoon', description: 'Meet friends and talk about next semester.' }), 'other');
});
