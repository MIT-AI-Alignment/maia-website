import { localDate, type CalendarEvent } from './events';
import type { EventMedia } from './eventMedia';
import type { TimelineCategory } from './semesterTimeline';

export type PlannedEvent = {
 title: string; category: TimelineCategory; description: string; url?: string;
 date?: string; media?: EventMedia; imageCredit?: string;
 // Explicit identity phrase for calendar titles with different editorial wording.
 calendarSubject?: string;
};

const normalize = (text: string) => text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const urlIdentity = (value?: string) => {
 try { const url = new URL(value!); return url.origin + url.pathname.replace(/\/$/, ''); }
 catch { return undefined; }
};

export function matchesPlannedEvent(event: CalendarEvent, plan: PlannedEvent): boolean {
 if (event.kind === 'initiative') return false;
 const links = [event.url, ...(event.descriptionParts ?? []).map(part => part.href)];
 const identity = urlIdentity(plan.url);
 if (identity && links.some(link => urlIdentity(link) === identity)) return true;
 // Without a shared event URL require both date and an explicit title identity.
 const day = event.start.length === 10 ? event.start : localDate(new Date(event.start));
 if (!plan.date || plan.date !== day) return false;
 const title = normalize(event.title);
 return title === normalize(plan.title) || !!(plan.calendarSubject &&
  ` ${title} `.includes(` ${normalize(plan.calendarSubject)} `));
}

export function reconcilePlannedEvents(events: CalendarEvent[], plans: PlannedEvent[]) {
 return {
  events: events.map(event => {
   const plan = plans.find(plan => matchesPlannedEvent(event, plan));
   // Confirmed calendar details win; retain curated context where absent.
   return plan ? { ...event, url: event.url ?? plan.url, summary: event.summary ?? plan.description } : event;
  }),
  unmatched: plans.filter(plan => !events.some(event => matchesPlannedEvent(event, plan)))
 };
}

export function splitPlannedEvents(plans: PlannedEvent[], now: Date) {
 const today = localDate(now);
 return {
  upcoming: plans.filter(plan => !plan.date || plan.date >= today)
   .sort((a, b) => (a.date ?? '9999').localeCompare(b.date ?? '9999')),
  past: plans.filter(plan => plan.date && plan.date < today)
   .sort((a, b) => b.date!.localeCompare(a.date!))
 };
}
