import { CONFIG } from '$lib/config';
import { readCalendarEvents } from '$lib/server/calendar';
import { PROGRAM_HISTORY } from '$lib/programHistory';
import { ORIENTATION_2026_RSVP_EVENTS, orientationSummary } from '$lib/eventCollections';

const orientationLinks = new Map(ORIENTATION_2026_RSVP_EVENTS
 .filter(event => event.calendarId)
 .map(event => [event.calendarId, event.href]));

export async function load({ fetch }) {
 const response = await fetch(CONFIG.events.calendarIcalLink, { signal: AbortSignal.timeout(20000) });
 if (!response.ok) throw new Error('Public calendar unavailable; refusing to publish an empty event archive.');
 const events = readCalendarEvents(await response.text()).map(event => {
  const url = orientationLinks.get(event.id.split('/')[0]);
  return { ...event, url: url ?? event.url, summary: orientationSummary(event) };
 });
 return { events: [...events, ...PROGRAM_HISTORY], fetchedAt: new Date().toISOString() };
}
