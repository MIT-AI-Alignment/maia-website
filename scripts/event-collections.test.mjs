import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { build } from 'esbuild';

const compiled = await build({
 entryPoints: [new URL('../src/lib/eventCollections.ts', import.meta.url).pathname],
 bundle: true, platform: 'node', format: 'esm', write: false
});
const { eventCollection, groupEventRuns } = await import('data:text/javascript;base64,' + Buffer.from(compiled.outputFiles[0].text).toString('base64'));

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
 assert.equal(eventCollection({ id: '048peimga0769t74arerciidtn@google.com/2026-09-08T17:00:00Z', title: 'Tabling at Grad Resource Fair', start: '2026-09-08T17:00:00Z' }), null);
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
