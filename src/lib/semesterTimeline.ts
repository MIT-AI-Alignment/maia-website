import { localDate, type CalendarEvent } from './events';

const DAY_MS = 86_400_000;
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;

export const TIMELINE_CATEGORIES = [
 { id: 'programs', label: 'Programs', icon: 'fa-layer-group' },
 { id: 'workshops', label: 'Workshops', icon: 'fa-chalkboard-user' },
 { id: 'hackathons', label: 'Hackathons & Challenges', icon: 'fa-laptop-code' },
 { id: 'talks', label: 'Talks', icon: 'fa-microphone' },
 { id: 'socials', label: 'Socials', icon: 'fa-comments' },
 { id: 'tabling', label: 'Tabling', icon: 'maia-table-icon' },
 { id: 'other', label: 'Other', icon: 'fa-calendar-day' }
] as const;

export type TimelineCategory = typeof TIMELINE_CATEGORIES[number]['id'];
// These older calendar entries omit their format in the title and description.
// Their original MAIA event announcements identify them as talks.
const VERIFIED_EVENT_CATEGORIES: Readonly<Record<string, TimelineCategory>> = {
 '2gd2030tkofav427h76h9ec3nn@google.com': 'talks',
 '5di00sqis1am2hom7g2l8fne0b@google.com': 'talks',
 '531gc0t6lb2acgl7av05boh5ej@google.com': 'talks',
 '5oa8mnfra5idfaeotp3g5s0clc@google.com': 'talks'
};
export type Semester = { id: string; label: string; start: number; end: number };
export type TimelineItem = {
 event: CalendarEvent;
 left: number;
 width: number;
 marker: number;
 lane: number;
 continuesBefore: boolean;
 continuesAfter: boolean;
};

// Count local calendar days in UTC, so a DST transition never changes a day's width.
export function dayNumber(date: string): number {
 if (!DATE_ONLY.test(date)) throw new Error(`Expected a calendar date: ${date}`);
 const time = Date.parse(date + 'T00:00:00Z');
 if (!Number.isFinite(time) || new Date(time).toISOString().slice(0, 10) !== date) {
  throw new Error(`Invalid calendar date: ${date}`);
 }
 return time / DAY_MS;
}

function eventDay(value: string): number {
 return dayNumber(DATE_ONLY.test(value) ? value : localDate(new Date(value)));
}

export function eventDayRange(event: CalendarEvent): { start: number; end: number } {
 const start = eventDay(event.start);
 if (!event.end || event.end === event.start) return { start, end: start + 1 };
 // All-day DTEND is exclusive. For timed events, midnight belongs to the prior day.
 const end = DATE_ONLY.test(event.end)
  ? dayNumber(event.end)
  : eventDay(new Date(Date.parse(event.end) - 1).toISOString()) + 1;
 if (end < start) throw new Error(`Event ends before it starts: ${event.id}`);
 return { start, end: Math.max(start + 1, end) };
}

export function semesterForDate(date: string): Semester {
 const year = Number(date.slice(0, 4));
 const month = Number(date.slice(5, 7));
 dayNumber(date);
 const season = month <= 5 ? 'spring' : month <= 8 ? 'summer' : 'fall';
 const start = season === 'spring' ? `${year}-01-01` : season === 'summer' ? `${year}-06-01` : `${year}-09-01`;
 const end = season === 'spring' ? `${year}-06-01` : season === 'summer' ? `${year}-09-01` : `${year + 1}-01-01`;
 return {
  id: `${season}-${year}`, label: `${season[0].toUpperCase() + season.slice(1)} ${year}`,
  start: dayNumber(start), end: dayNumber(end)
 };
}

export function availableSemesters(events: CalendarEvent[]): Semester[] {
 const semesters = new Map<string, Semester>();
 for (const event of events) {
  const range = eventDayRange(event);
  let day = range.start;
  while (day < range.end) {
   const semester = semesterForDate(new Date(day * DAY_MS).toISOString().slice(0, 10));
   semesters.set(semester.id, semester);
   day = semester.end;
  }
 }
 return [...semesters.values()].sort((a, b) => b.start - a.start);
}

export function semesterMonths(semester: Semester) {
 const months: { label: string; left: number; width: number }[] = [];
 let day = semester.start;
 while (day < semester.end) {
  const date = new Date(day * DAY_MS);
  const next = Math.min(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1) / DAY_MS, semester.end);
  months.push({
   label: date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }),
   left: (day - semester.start) / (semester.end - semester.start),
   width: (next - day) / (semester.end - semester.start)
  });
  day = next;
 }
 return months;
}

export function eventCategory(event: CalendarEvent): TimelineCategory {
 if (event.kind === 'initiative') return 'programs';
 const title = event.title.toLowerCase();
 if (/\bhackathons?\b|\bbattleprompting\b|\breward hacking event\b|\bmission strawberry\b|\b(?:estimation and )?forecasting challenge\b/.test(title)) return 'hackathons';
 if (/workshop|arena|upskilling|\blab$|\btabletop exercises?\b/.test(title)) return 'workshops';
 if (/social|mixer|movie|avalon|waffles|bagels|game|dinner|extravaganza|celebration|rock[ -]?climbing|cruise|escape room|office tours?|open house/.test(title)) return 'socials';
 if (/tabling|midway|food truck|bon me|orientation|\bcpw\b|demo booths?/.test(title)) return 'tabling';
 if (/talk|speaker|q\s*&\s*a|conversation|member meeting|lecture|fireside/.test(title)) return 'talks';
 const verifiedCategory = VERIFIED_EVENT_CATEGORIES[event.id?.split('/')[0]];
 if (verifiedCategory) return verifiedCategory;
 // Archive titles often name only the researcher and topic. Explicit format words
 // in the description fill that gap without overriding a workshop or social title.
 const description = event.description?.toLowerCase() ?? '';
 if (/\bhackathons?\b/.test(description)) return 'hackathons';
 if (/\bmember[ -]meetings?\b|\b(?:the|a|this|his|her|their|guest|research|member) talk\b|\bpresented\b|\bpresentation\b|\blecture\b|\bspeaker event\b/.test(description)) return 'talks';
 return 'other';
}

export function eventsInSemester(events: CalendarEvent[], semester: Semester): CalendarEvent[] {
 return events.filter(event => {
  const range = eventDayRange(event);
  return range.start < semester.end && range.end > semester.start;
 }).sort((a, b) => a.start.localeCompare(b.start) || a.id.localeCompare(b.id));
}

export function layoutTimeline(events: CalendarEvent[], semester: Semester): { items: TimelineItem[]; laneCount: number } {
 const duration = semester.end - semester.start;
 // Reserve label space separately from event duration. Dots show the actual date.
 const labelWidth = 0.18;
 const gap = 0.012;
 const items = eventsInSemester(events, semester).map(event => {
  const range = eventDayRange(event);
  const start = Math.max(range.start, semester.start);
  const end = Math.min(range.end, semester.end);
  const anchor = (start - semester.start + 0.5) / duration;
  const width = event.kind === 'initiative' ? (end - start) / duration : labelWidth;
  const left = event.kind === 'initiative'
   ? (start - semester.start) / duration
   : Math.min(anchor, 1 - width);
  return {
   event, left, width, marker: (anchor - left) / width, lane: 0,
   continuesBefore: range.start < semester.start, continuesAfter: range.end > semester.end
  };
 }).sort((a, b) => a.left - b.left || b.width - a.width || a.event.id.localeCompare(b.event.id));
 const laneEnds: number[] = [];
 for (const item of items) {
  let lane = laneEnds.findIndex(end => end + gap <= item.left);
  if (lane === -1) lane = laneEnds.length;
  laneEnds[lane] = item.left + item.width;
  item.lane = lane;
 }
 return { items, laneCount: laneEnds.length };
}
