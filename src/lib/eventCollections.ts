import { localDate, type CalendarEvent } from './events';

type EventCollection = { id: string; label: string; icon: string };
export type EventRun = { collection: EventCollection | null; events: CalendarEvent[] };

// Public schedule: /orientation-2026/ and /images/flyers/maia-2026-orientation-flyer.jpg.
// Exact calendar identities avoid grouping unrelated events merely because of their date.
const ORIENTATION_2026_EVENTS = new Map([
 ['7im0v34jts1e6d2csfcg0lr5ta@google.com', '2026-09-02'],
 ['2imhqm5t4ptse1lu2r1t0q423p@google.com', '2026-09-04'],
 ['7e81i63hh3mg753dh2ar60bq81@google.com', '2026-09-04'],
 ['4fbqug2piuv7hniunr01jd0hgr@google.com', '2026-09-05'],
 ['545d2vne11hmvund2no6csn2fd@google.com', '2026-09-05'],
 ['5oa8mnfra5idfaeotp3g5s0clc@google.com', '2026-09-05'],
 ['7ncgb2npn6k3ipn5atj981hs56@google.com', '2026-09-06'],
 ['78sbl0kojpb3vcq37mi471qhde@google.com', '2026-09-06'],
 ['67nup42v5rga1hd39984n05da5@google.com', '2026-09-07'],
 ['6ja895bhclgqneiankcah6ugl0@google.com', '2026-09-07']
]);

export function eventCollection(event: CalendarEvent): EventCollection | null {
 const text = `${event.title}\n${event.description ?? ''}`;
 const date = event.start.length === 10 ? event.start : localDate(new Date(event.start));
 const year = date.slice(0, 4);
 if (/\bCPW\b|\bCampus Preview Weekend\b/i.test(text)) {
  return { id: `cpw-${year}`, label: `CPW ${year}`, icon: 'fa-flag' };
 }
 if (/\borientation\b/i.test(event.title) || ORIENTATION_2026_EVENTS.get(event.id.split('/')[0]) === date) {
  return { id: `orientation-${year}`, label: `Orientation ${year}`, icon: 'fa-compass' };
 }
 return null;
}

// Group adjacent records without moving an unrelated event out of chronological order.
export function groupEventRuns(events: CalendarEvent[]): EventRun[] {
 const runs: EventRun[] = [];
 for (const event of events) {
  const collection = eventCollection(event);
  const previous = runs.at(-1);
  if (previous && previous.collection?.id === collection?.id) previous.events.push(event);
  else runs.push({ collection, events: [event] });
 }
 return runs;
}
