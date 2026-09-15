import ICAL from 'ical.js';
import type { CalendarEvent, EventDescriptionPart } from '../events';

function decodeEntities(value: string): string {
 const named: Record<string, string> = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
 return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, code: string) => {
  if (!code.startsWith('#')) return named[code.toLowerCase()];
  const point = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
  return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : entity;
 });
}

function plainText(value: string): string {
 return decodeEntities(value.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
  .replace(/<br\s*\/?>|<\/(?:p|div|li)>/gi, '\n').replace(/<[^>]*>/g, ''))
  .replace(/[^\S\n]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n');
}

function clean(value: unknown): string {
 return plainText(String(value ?? '')).replace(/\s+/g, ' ').trim();
}

function safeUrl(value: string): string | undefined {
 try {
  const url = new URL(value);
  if (url.protocol === 'https:' || url.protocol === 'http:') return url.href;
 } catch (error) {
  if (!(error instanceof TypeError)) throw error;
  // Malformed links remain ordinary escaped text.
 }
}

function linkLabel(href: string): string {
 const host = new URL(href).hostname.replace(/^www\./, '');
 if (host === 'partiful.com') return 'Partiful event';
 if (host === 'luma.com' || host === 'lu.ma') return 'Luma event';
 return host;
}

function descriptionParts(value: unknown): EventDescriptionPart[] {
 const parts: EventDescriptionPart[] = [];
 const text = String(value ?? '').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '');
 const appendText = (html: string) => {
  const text = plainText(html);
  let position = 0;
  for (const match of text.matchAll(/https?:\/\/[^\s<>"']+/gi)) {
   let candidate = match[0].replace(/[.,;:!?]+$/, '');
   // Sentence punctuation is not part of a URL; balanced path parentheses are.
   while (candidate.endsWith(')') && candidate.split(')').length > candidate.split('(').length) {
    candidate = candidate.slice(0, -1);
   }
   parts.push({ text: text.slice(position, match.index) });
   const href = safeUrl(candidate);
   parts.push(href ? { text: linkLabel(href), href } : { text: candidate });
   position = match.index! + candidate.length;
  }
  parts.push({ text: text.slice(position) });
 };
 let position = 0;
 // Extract links as data only. Calendar HTML is never rendered as HTML.
 for (const match of text.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a\s*>/gi)) {
  appendText(text.slice(position, match.index));
  const attribute = match[1].match(/(?:^|\s)href\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
  const href = attribute ? safeUrl(decodeEntities(attribute[1] ?? attribute[2] ?? attribute[3])) : undefined;
  const label = clean(match[2]);
  parts.push(href ? { text: label && label !== href ? label : linkLabel(href), href } : { text: label });
  position = match.index! + match[0].length;
 }
 appendText(text.slice(position));
 if (parts.length) {
  parts[0].text = parts[0].text.trimStart();
  parts[parts.length - 1].text = parts[parts.length - 1].text.trimEnd();
 }
 return parts.filter(part => part.text);
}

function iso(time: ICAL.Time): string {
 if (time.isDate) return time.toString();
 // Floating times in this public MIT calendar are local Cambridge times.
 if (time.zone === ICAL.Timezone.localTimezone) {
  const zone = ICAL.TimezoneService.get('America/New_York');
  if (!zone) throw new Error('Calendar is missing its local timezone');
  time = time.clone();
  time.zone = zone;
 }
 return time.toJSDate().toISOString();
}

// Expand genuine RFC 5545 occurrences, including exceptions and EXDATEs.
// Infinite series are bounded to two years ahead; historical events have no display cap.
export function readCalendarEvents(calendar: string, now = new Date()): CalendarEvent[] {
 const root = new ICAL.Component(ICAL.parse(calendar));
 if (root.name !== 'vcalendar') throw new Error('Invalid calendar response');
 for (const component of root.getAllSubcomponents('vtimezone')) {
  ICAL.TimezoneService.register(new ICAL.Timezone(component));
 }
 const limit = new Date(now);
 limit.setUTCFullYear(limit.getUTCFullYear() + 2);
 const result = new Map<string, CalendarEvent>();
 const components = root.getAllSubcomponents('vevent');
 for (const component of components) {
  const event = new ICAL.Event(component);
  if (event.isRecurrenceException()) continue;
  const iterator = event.iterator();
  let occurrence;
  let steps = 0;
  while ((occurrence = iterator.next())) {
   if (++steps > 10000) throw new Error('Calendar recurrence exceeded safety limit');
   if (occurrence.toJSDate() > limit) break;
   const detail = event.getOccurrenceDetails(occurrence);
   const item = detail.item;
   if (item.component.getFirstPropertyValue('status') === 'CANCELLED' ||
       /\bcancell?(?:ed|ation)\b/i.test(item.summary ?? '')) continue;
   const start = iso(detail.startDate);
   const end = iso(detail.endDate);
   const title = clean(item.summary);
   if (!title || !start) continue;
   const id = event.uid + '/' + occurrence.toString();
   const parts = descriptionParts(item.description);
   result.set(id, { id, title, start, end, description: parts.map(part => part.text).join(''), descriptionParts: parts,
    location: clean(item.location), kind: 'event' });
  }
 }
 return [...result.values()].sort((a, b) => a.start.localeCompare(b.start));
}
