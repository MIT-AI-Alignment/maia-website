import test from 'node:test';
import assert from 'node:assert/strict';
import { readCalendarEvents } from '../src/lib/server/calendar.ts';
import { displayDate, displayDateRange, displayTimeRange, splitEvents } from '../src/lib/events.ts';

const calendar = (...events) => ['BEGIN:VCALENDAR', 'VERSION:2.0', ...events, 'END:VCALENDAR'].join('\r\n');
const event = (...fields) => ['BEGIN:VEVENT', ...fields, 'END:VEVENT'].join('\r\n');

test('recurrences respect EXDATE and cancelled exceptions', () => {
 const events = readCalendarEvents(calendar(
  event('UID:series', 'DTSTART:20260901T180000Z', 'DTEND:20260901T190000Z',
   'RRULE:FREQ=DAILY;COUNT=4', 'EXDATE:20260902T180000Z', 'SUMMARY:Workshop'),
  event('UID:series', 'RECURRENCE-ID:20260903T180000Z', 'DTSTART:20260903T180000Z',
   'DTEND:20260903T190000Z', 'STATUS:CANCELLED', 'SUMMARY:Workshop')
 ));
 assert.deepEqual(events.map(e => e.start), ['2026-09-01T18:00:00.000Z', '2026-09-04T18:00:00.000Z']);
});

test('a moved recurrence uses its replacement time and title', () => {
 const events = readCalendarEvents(calendar(
  event('UID:move', 'DTSTART:20260901T180000Z', 'DTEND:20260901T190000Z', 'RRULE:FREQ=DAILY;COUNT=2', 'SUMMARY:Original'),
  event('UID:move', 'RECURRENCE-ID:20260902T180000Z', 'DTSTART:20260902T200000Z', 'DTEND:20260902T210000Z', 'SUMMARY:Moved')
 ));
 assert.equal(events[1].title, 'Moved');
 assert.equal(events[1].start, '2026-09-02T20:00:00.000Z');
});

test('Eastern time handles DST and UTC date boundaries', () => {
 assert.equal(displayDate('2023-02-12T00:00:00Z'), 'Feb 11, 2023');
 assert.equal(displayTimeRange('2026-09-09T18:00:00Z', '2026-09-09T20:00:00Z'), '2:00 PM–4:00 PM');
 assert.equal(displayTimeRange('2026-01-09T18:00:00Z', '2026-01-09T20:00:00Z'), '1:00 PM–3:00 PM');
});

test('all-day DTEND is exclusive; ongoing events stay upcoming', () => {
 const allDay = {id:'day',title:'Day',start:'2026-09-09',end:'2026-09-10'};
 assert.equal(displayDateRange(allDay), 'Sep 9, 2026');
 assert.equal(displayTimeRange(allDay.start, allDay.end), undefined);
 assert.equal(splitEvents([allDay], new Date('2026-09-10T03:59:00Z')).upcoming.length, 1);
 assert.equal(splitEvents([allDay], new Date('2026-09-10T04:00:00Z')).past.length, 1);
 const ongoing = {id:'now',title:'Now',start:'2026-09-09T18:00:00Z',end:'2026-09-09T20:00:00Z'};
 assert.equal(splitEvents([ongoing],new Date('2026-09-09T19:00:00Z')).upcoming.length,1);
});

test('invalid input fails instead of masquerading as an empty calendar', () => {
 assert.throws(() => readCalendarEvents('<html>Unavailable</html>'));
});

test('calendar HTML retains labeled RSVP and resource links without exposing markup', () => {
 const [item] = readCalendarEvents(calendar(event('UID:links', 'DTSTART:20260901T180000Z', 'SUMMARY:Talk',
  'DESCRIPTION:<p>Join our discussion.</p><p><a href="https://partiful.com/e/abc?x=1&amp;y=2"><b>RSVP here</b></a> or read <a href="https://example.org/paper">the paper</a>.</p>'
 )));
 assert.equal(item.description, 'Join our discussion.\nRSVP here or read the paper.');
 assert.deepEqual(item.descriptionParts.filter(part => part.href), [
  {text:'RSVP here',href:'https://partiful.com/e/abc?x=1&y=2'},
  {text:'the paper',href:'https://example.org/paper'}
 ]);
});

test('bare calendar URLs get concise labels and retain balanced parentheses', () => {
 const [item] = readCalendarEvents(calendar(event('UID:bare', 'DTSTART:20260901T180000Z', 'SUMMARY:Talk',
  'DESCRIPTION:RSVP: https://luma.com/example. Read (https://example.org/paper_(version)).'
 )));
 assert.equal(item.description, 'RSVP: Luma event. Read (example.org).');
 assert.deepEqual(item.descriptionParts.filter(part => part.href).map(part => part.href),
  ['https://luma.com/example', 'https://example.org/paper_(version)']);
});

test('unsafe protocols and HTML stay inert while safe encoded HTTP links remain usable', () => {
 const [item] = readCalendarEvents(calendar(event('UID:untrusted', 'DTSTART:20260901T180000Z', 'SUMMARY:Talk',
  'DESCRIPTION:<script>https://evil.example/</script><a href="javascript:alert(1)">bad</a> <a href="data:text/html,test">data</a> <a href="/relative">relative</a> <a href="https://">broken</a> <a href="https&#58;//example.org/?x=1&amp;y=2" onclick="alert(1)">&lt;img src=x onerror=alert(1)&gt;</a>'
 )));
 assert.deepEqual(item.descriptionParts.filter(part => part.href), [
  {text:'<img src=x onerror=alert(1)>',href:'https://example.org/?x=1&y=2'}
 ]);
 assert.equal(item.description, 'bad data relative broken <img src=x onerror=alert(1)>');
});

test('plain-text calendar paragraph breaks survive description parsing', () => {
 const [item] = readCalendarEvents(calendar(event('UID:paragraphs', 'DTSTART:20260901T180000Z', 'SUMMARY:Talk',
  'DESCRIPTION:First paragraph.\\n\\nSecond paragraph.\\nhttps://partiful.com/e/abc'
 )));
 assert.equal(item.description, 'First paragraph.\n\nSecond paragraph.\nPartiful event');
});


test('compact date ranges collapse repeated months and retain cross-year context', () => {
 const workshop = { id: 'workshop', title: 'Workshop', start: '2026-11-20', end: '2026-11-23' };
 assert.equal(displayDateRange(workshop, false), 'Nov 20–22');
 assert.equal(displayDateRange({ ...workshop, start: '2026-10-30', end: '2026-11-02' }, false), 'Oct 30–Nov 1');
 assert.equal(displayDateRange({ ...workshop, start: '2026-12-31', end: '2027-01-03' }, false), 'Dec 31, 2026–Jan 2, 2027');
 assert.equal(displayDateRange({ ...workshop, start: '2026-11-20', end: '2026-11-21' }, false), 'Nov 20');
 assert.equal(displayDateRange({ ...workshop, start: '2026-11-21T00:00:00Z', end: undefined }, false), 'Nov 20');
});
