import { CONFIG } from '$lib/config';
import type { CalendarEvent } from '$lib/events';
import { readCalendarEvents } from '$lib/server/calendar';
import { PROGRAM_HISTORY } from '$lib/programHistory';
import { ORIENTATION_2026_RSVP_EVENTS, orientationSummary } from '$lib/eventCollections';

const orientationLinks = new Map(ORIENTATION_2026_RSVP_EVENTS
 .filter(event => event.calendarId)
 .map(event => [event.calendarId, event.href]));

// Website-only roster removal; leave the source calendar unchanged.
function publicDescription(text: string): string {
 return text.replace(/\b(?:Felix Tudose|Ryan Baylon),\s*/g, '')
  .replace(/,\s*(?:Felix Tudose|Ryan Baylon)\b/g, '')
  .replace(/\b(?:Felix Tudose|Ryan Baylon)\b/g, '');
}

// Based on the joint workshop overview at https://aisst.ai/workshops and archived schedules.
function workshopSummary(event: CalendarEvent): string | undefined {
 if (!/workshop/i.test(event.title) || !/residential|MAIA.*AISST|AISST.*MAIA|summer technical AI safety/i.test(event.title)) return;
 if (/policy/i.test(event.title)) return 'A residential weekend exploring AI policy and governance with students, researchers, and practitioners. Talks, small-group discussions, and one-on-ones connect policy questions with possible career paths.';
 if (/technical/i.test(event.title)) return 'A residential weekend exploring technical AI safety with students and researchers. Research talks, small-group discussions, and one-on-ones offer space to dig into open problems and plan next steps.';
 return 'A weekend bringing the MIT and Harvard AI safety communities together with researchers and practitioners. Talks and small-group discussions explore AI safety research and policy, with time to meet people and exchange ideas.';
}

export async function load({ fetch }) {
 const response = await fetch(CONFIG.events.calendarIcalLink, { signal: AbortSignal.timeout(20000) });
 if (!response.ok) throw new Error('Public calendar unavailable; refusing to publish an empty event archive.');
 const events = readCalendarEvents(await response.text()).map(event => {
  const url = orientationLinks.get(event.id.split('/')[0]);
  return {
   ...event,
   description: event.description ? publicDescription(event.description) : event.description,
   descriptionParts: event.descriptionParts?.map(part => ({ ...part, text: publicDescription(part.text) })),
   url: url ?? event.url, summary: orientationSummary(event) ?? workshopSummary(event)
  };
 });
 return { events: [...events, ...PROGRAM_HISTORY], fetchedAt: new Date().toISOString() };
}
