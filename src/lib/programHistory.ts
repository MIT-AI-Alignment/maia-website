import type { CalendarEvent } from './events';

// Only dated, source-backed program ranges belong here. End dates are exclusive.
// The public calendar supplies the individual historical events and repeated sessions.
export const PROGRAM_HISTORY: CalendarEvent[] = [
 {
  id: 'summer-technical-workshop-2026', title: 'MAIA & AISST Summer Technical Workshop',
  start: '2026-08-28', end: '2026-08-31', kind: 'initiative',
  location: 'Essex Woods',
  description: 'A weekend of technical AI safety talks, small-group discussions, and one-on-ones with researchers.',
  url: '/getinvolved/#workshops'
 },
 {
  id: 'tegmark-member-meeting-2026', title: 'Member meeting with Max Tegmark',
  start: '2026-04-09T21:30:00Z', end: '2026-04-09T23:30:00Z', kind: 'event',
  location: 'CIC Gooseberry',
  description: 'Dinner and discussion on AI safety, mechanistic interpretability, and provably safe systems.',
  url: 'https://partiful.com/e/stdhTf8es2xF2fdNeIBT'
 },
 {
  id: 'aisf-summer-2026', title: 'Summer 2026 AI Safety Fundamentals',
  start: '2026-06-01', end: '2026-08-01', dateLabel: 'June–July 2026', kind: 'initiative',
  description: 'An eight-week reading and discussion program on AI safety. Cohorts met on different days; the archive shows the program months rather than a single session schedule.',
  url: '/aisf/'
 },
 {
  id: 'aisf-capstone-2026', title: 'AISF Capstone Hackathon',
  start: '2026-05-09T14:00:00Z', end: '2026-05-09T22:30:00Z', kind: 'event',
  location: 'CIC, Cambridge',
  description: 'A one-day project sprint in AI control, interpretability, and strategy, with team presentations and prizes.',
  url: 'https://luma.com/kqcuzd6o'
 },
 {
  id: 'arena-spring-2026-kickoff', title: 'Spring ARENA kickoff',
  start: '2026-02-19T23:30:00Z', end: '2026-02-20T02:00:00Z', kind: 'event',
  description: 'The first session of a planned ten-week technical AI safety upskilling program. Later sessions are not reconstructed without their individual records.',
  url: 'https://www.arena.education/curriculum'
 },
 {
  id: 'arena-spring-2025-kickoff', title: 'Spring ARENA coworking kickoff',
  start: '2025-03-01T15:00:00Z', end: '2025-03-01T20:00:00Z', kind: 'event',
  location: 'Hogsmeade, second floor',
  description: 'Technical AI safety coworking with the ARENA curriculum and TA support.',
  url: 'https://www.arena.education/curriculum'
 }
];
