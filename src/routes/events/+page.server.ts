import { CONFIG } from '$lib/config';
import { readCalendarEvents } from '$lib/server/calendar';
import { PROGRAM_HISTORY } from '$lib/programHistory';

export async function load({ fetch }) {
 const response = await fetch(CONFIG.events.calendarIcalLink, { signal: AbortSignal.timeout(20000) });
 if (!response.ok) throw new Error('Public calendar unavailable; refusing to publish an empty event archive.');
 const events = readCalendarEvents(await response.text());
 // A curated entry replaces a calendar copy of the same named event on the same day.
 const curated = PROGRAM_HISTORY;
 const distinct = events.filter(event => !curated.some(entry =>
  entry.start.slice(0, 10) === event.start.slice(0, 10) &&
  (entry.title === event.title || (entry.title.includes('Tegmark') && event.title.includes('Tegmark')) ||
   (entry.title.includes('Summer Technical Workshop') && /workshop/i.test(event.title)))
 ));
 return { events: [...distinct, ...curated], fetchedAt: new Date().toISOString() };
}
