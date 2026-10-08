import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const compiled = await build({
 entryPoints: [fileURLToPath(new URL('../src/lib/plannedEvents.ts', import.meta.url))],
 bundle: true, platform: 'node', format: 'esm', write: false
});
const { reconcilePlannedEvents, splitPlannedEvents, matchesPlannedEvent } = await import('data:text/javascript;base64,' + Buffer.from(compiled.outputFiles[0].text).toString('base64'));

const plan = { title: 'Talk with Stephen Casper', calendarSubject: 'Stephen Casper', date: '2026-10-06', category: 'talks', description: 'Tuesday, October 6.', url: 'https://example.org/event' };
const confirmed = { id: 'calendar-casper', title: '[Speaker Event] Prof. Stephen Casper: Doing Impactful AI Risk Management Research', start: '2026-10-06T22:00:00Z', end: '2026-10-06T23:00:00Z', location: '32-141', description: 'Confirmed calendar description' };

test('expired dated plans move to archive; future and undated plans remain', () => {
 const dwarkesh = { title: 'Dwarkesh Fireside Chat', date: '2026-09-23', category: 'talks', description: 'Original description', url: 'https://partiful.com/e/original' };
 const undated = { title: 'Future talk', category: 'talks', description: 'Date TBD' };
 const result = splitPlannedEvents([plan, dwarkesh, undated], new Date('2026-10-05T16:00:00Z'));
 assert.deepEqual(result.past, [dwarkesh]);
 assert.deepEqual(result.upcoming, [plan, undated]);
});
test('date-only plans expire at Eastern midnight, not UTC midnight', () => {
 assert.equal(splitPlannedEvents([plan], new Date('2026-10-07T03:59:59Z')).upcoming.length, 1);
 assert.equal(splitPlannedEvents([plan], new Date('2026-10-07T04:00:00Z')).past.length, 1);
});
test('same-date curated speaker merges with differently worded calendar title without losing facts', () => {
 const result = reconcilePlannedEvents([confirmed], [plan]);
 assert.equal(result.unmatched.length, 0);
 assert.deepEqual(result.events, [{ ...confirmed, url: plan.url, summary: plan.description }]);
 assert.equal(matchesPlannedEvent(result.events[0], plan), true, 'curated media remains matchable');
});
test('different dates, different speakers and programs are not conflated', () => {
 assert.equal(matchesPlannedEvent({ ...confirmed, start: '2026-10-07T22:00:00Z' }, plan), false);
 assert.equal(matchesPlannedEvent({ ...confirmed, title: 'Talk with Stephen Smith' }, plan), false);
 assert.equal(matchesPlannedEvent({ ...confirmed, kind: 'initiative' }, plan), false);
});
test('shared event URL reconciles rescheduling and preserves authoritative metadata', () => {
 const event = { ...confirmed, start: '2026-10-08T22:00:00Z', url: plan.url + '?utm_source=calendar', summary: 'Authoritative summary' };
 const result = reconcilePlannedEvents([event], [plan]);
 assert.equal(result.unmatched.length, 0);
 assert.deepEqual(result.events[0], event);
});
test('stable calendar UID reconciles undated plans while preserving rescheduled facts', () => {
 const undated = { title: 'Talk with Garrison Lovely', calendarId: 'garrison@google.com', category: 'talks', description: 'A fireside chat with Garrison Lovely.' };
 const event = { ...confirmed, id: 'garrison@google.com/2026-10-22T22:00:00Z', title: 'Garrison Lovely - Fireside Chat', start: '2026-10-22T22:00:00Z', end: '2026-10-22T23:30:00Z', location: 'Confirmed room' };
 const result = reconcilePlannedEvents([event], [undated]);
 assert.equal(result.unmatched.length, 0);
 assert.deepEqual(result.events[0], { ...event, url: undefined, summary: undated.description });
 assert.equal(matchesPlannedEvent({ ...event, id: 'different@google.com/2026-10-22T22:00:00Z' }, undated), false);
 assert.equal(matchesPlannedEvent({ ...event, kind: 'initiative' }, undated), false);
});
test('RSVP links in calendar descriptions match, while dates alone never match', () => {
 assert.equal(matchesPlannedEvent({ ...confirmed, title: 'Renamed talk', descriptionParts: [{ text: 'RSVP', href: plan.url }] }, plan), true);
 assert.equal(matchesPlannedEvent({ ...confirmed, title: 'Unrelated event' }, { ...plan, calendarSubject: undefined, url: undefined }), false);
});
