export type EventDescriptionPart = { text: string; href?: string };

export type CalendarEvent = {
 id: string;
 title: string;
 summary?: string;
 start: string;
 end?: string;
 description?: string;
 descriptionParts?: EventDescriptionPart[];
 location?: string;
 url?: string;
 kind?: 'event' | 'initiative';
 dateLabel?: string;
};

const zone = 'America/New_York';
const isDay = (value: string) => value.length === 10;
export const localDate = (date: Date) => new Intl.DateTimeFormat('en-CA', {
 timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit'
}).format(date);

export function displayDate(value: string, showYear = true) {
 return new Intl.DateTimeFormat('en-US', {
  month: 'short', day: 'numeric', year: showYear ? 'numeric' : undefined, timeZone: isDay(value) ? 'UTC' : zone
 }).format(new Date(isDay(value) ? value + 'T12:00:00Z' : value));
}

export function displayTime(value: string) {
 if (isDay(value)) return;
 return new Intl.DateTimeFormat('en-US', {
  hour: 'numeric', minute: '2-digit', timeZone: zone
 }).format(new Date(value));
}

export function displayTimeRange(start: string, end?: string, showYear = true) {
 const startTime = displayTime(start);
 if (!startTime) return;
 if (!end || end === start) return startTime;
 const endTime = displayTime(end);
 if (!endTime) return startTime;
 const crossesYear = localDate(new Date(start)).slice(0, 4) !== localDate(new Date(end)).slice(0, 4);
 return startTime + '–' + (displayDate(start) === displayDate(end) ? '' : displayDate(end, showYear || crossesYear) + ', ') + endTime;
}

export function displayDateRange(event: CalendarEvent, showYear = true) {
 if (event.dateLabel) return event.dateLabel;
 if (!event.end || !isDay(event.start) || !isDay(event.end)) return displayDate(event.start, showYear);
 // iCalendar all-day DTEND is exclusive.
 const lastDay = new Date(event.end + 'T12:00:00Z');
 lastDay.setUTCDate(lastDay.getUTCDate() - 1);
 const end = lastDay.toISOString().slice(0, 10);
 if (end <= event.start) return displayDate(event.start, showYear);
 const crossesYear = event.start.slice(0, 4) !== end.slice(0, 4);
 return new Intl.DateTimeFormat('en-US', {
  month: 'short', day: 'numeric', year: showYear || crossesYear ? 'numeric' : undefined, timeZone: 'UTC'
 }).formatRange(new Date(event.start + 'T12:00:00Z'), lastDay).replace(/\s*–\s*/g, '–');
}

export function splitEvents(events: CalendarEvent[], now = new Date()) {
 const upcoming: CalendarEvent[] = [], past: CalendarEvent[] = [];
 for (const event of events) {
  const end = event.end || event.start;
  const active = isDay(end)
   ? (event.end && event.end !== event.start ? end > localDate(now) : end >= localDate(now))
   : new Date(end).getTime() >= now.getTime();
  (active ? upcoming : past).push(event);
 }
 upcoming.sort((a, b) => a.start.localeCompare(b.start));
 past.sort((a, b) => b.start.localeCompare(a.start));
 return { upcoming, past };
}
