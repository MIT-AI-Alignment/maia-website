import type { CalendarEvent } from './events';

// Program periods are for the semester overview, not individual meeting times.
// dateLabel explains their precision. End dates are exclusive.
// The public calendar supplies the individual historical events and repeated sessions.
export const PROGRAM_HISTORY: CalendarEvent[] = [
 {
  id: 'arena-fall-2025', title: 'Fall 2025 AISST/MAIA ARENA Technical Upskilling',
  start: '2025-09-01', end: '2026-01-01', dateLabel: 'Fall 2025 · approximate semester range', kind: 'initiative',
  description: 'Technical AI safety upskilling using the ARENA curriculum for the AISST and MAIA community. This entry represents the fall semester; exact session dates are not reconstructed.',
  url: 'https://www.arena.education/curriculum'
 },
 {
  id: 'cambria-summer-2026', title: 'Summer 2026 CAMBRIA · CBAI',
  start: '2026-05-18', end: '2026-08-29', dateLabel: 'Three 3-week cohorts · May–August 2026', kind: 'initiative',
  description: 'Run by the Cambridge Boston Alignment Initiative (CBAI), CAMBRIA is an intensive ML and AI safety bootcamp based on the ARENA curriculum, with teaching assistants and capstone projects. The summer schedule comprised May 18–June 5 in Harvard Square, July 6–24 in Manhattan hosted by Collider, and August 10–28 in Harvard Square. This overview spans the three separate cohorts, including the gaps between them.',
  url: 'https://www.cbai.ai/cambria'
 },
 {
  id: 'arena-spring-2025', title: 'Spring 2025 ARENA technical upskilling',
  start: '2025-03-01', end: '2025-06-01', dateLabel: 'March–May 2025 · program months', kind: 'initiative',
  description: 'Saturday coworking sessions using the ARENA curriculum, with TA support and flexible progress through ML and alignment topics. The spring series began on March 1 and continued the upskilling work from IAP. The range shows program months, not exact weekly sessions.',
  url: 'https://www.arena.education/curriculum'
 },
 {
  id: 'arena-iap-2025', title: 'IAP 2025 ARENA bootcamp',
  start: '2025-01-01', end: '2025-02-01', dateLabel: 'January 2025 · approximate IAP range', kind: 'initiative',
  description: 'A structured MAIA upskilling program over IAP, with TAs from MAIA and AISST. Participants worked through ARENA fundamentals, transformers, interpretability, and reinforcement learning. Exact session dates are not reconstructed in this overview.',
  url: 'https://www.arena.education/curriculum'
 },
 {
  id: 'arena-fall-2024', title: 'Fall 2024 Saturday ARENA · AISST',
  start: '2024-10-01', end: '2024-12-01', dateLabel: 'October–November 2024 · program months', kind: 'initiative',
  description: 'Saturday technical upskilling at the AISST office using the ARENA curriculum, led by Alex Semendinger. This related program ran through November 16; the November 23 session was cancelled. The range shows program months rather than individual sessions.',
  url: 'https://www.arena.education/curriculum'
 },
 {
  id: 'techsprints-spring-2024', title: 'Spring 2024 MAIA TechSprints',
  start: '2024-02-01', end: '2024-06-01', dateLabel: 'Spring 2024 · approximate semester range', kind: 'initiative',
  description: 'Saturday technical coworking with deep learning and mechanistic interpretability tracks using ARENA materials, alongside small projects and research. Sessions included TA-supported work, shared meals, and participation from Harvard AISST members. Exact session dates are not reconstructed in this overview.',
  url: 'https://www.arena.education/curriculum'
 },
 {
  id: 'aisf-fall-2025', title: 'Fall 2025 AI Safety Fundamentals',
  start: '2025-09-01', end: '2025-12-01', dateLabel: 'Fall 2025 · approximate semester range', kind: 'initiative',
  description: 'A reading and discussion program introducing participants to AI safety. This entry represents the semester in which the program ran; the displayed range does not reconstruct exact cohort or session dates.',
  url: '/aisf/'
 },
 {
  id: 'aisf-spring-2025', title: 'Spring 2025 AI Safety Fundamentals',
  start: '2025-02-01', end: '2025-05-01', dateLabel: 'Spring 2025 · approximate semester range', kind: 'initiative',
  description: 'A reading and discussion program introducing participants to AI safety. This entry represents the semester in which the program ran; the displayed range does not reconstruct exact cohort or session dates.',
  url: '/aisf/'
 },
 {
  id: 'aisf-fall-2024', title: 'Fall 2024 AI Safety Fundamentals',
  start: '2024-09-01', end: '2025-01-01', dateLabel: 'Fall 2024 · approximate semester range', kind: 'initiative',
  description: 'A reading and discussion program introducing participants to AI safety. This entry represents the semester in which the program ran; the displayed range does not reconstruct exact cohort or session dates.',
  url: '/aisf/'
 },
 {
  id: 'aisf-spring-2024', title: 'Spring 2024 AI Safety Fundamentals',
  start: '2024-02-01', end: '2024-05-01', dateLabel: 'Spring 2024 · approximate semester range', kind: 'initiative',
  description: 'A reading and discussion program introducing participants to AI safety. This entry represents the semester in which the program ran; the displayed range does not reconstruct exact cohort or session dates.',
  url: '/aisf/'
 },
 {
  id: 'aisf-fall-2023', title: 'Fall 2023 AI Safety Fundamentals',
  start: '2023-09-01', end: '2024-01-01', dateLabel: 'Fall 2023 · approximate semester range', kind: 'initiative',
  description: 'A reading and discussion program introducing participants to AI safety. This entry represents the semester in which the program ran; the displayed range does not reconstruct exact cohort or session dates.',
  url: '/aisf/'
 },
 {
  id: 'aisf-spring-2023', title: 'Spring 2023 AI Safety Fundamentals',
  start: '2023-02-01', end: '2023-06-01', dateLabel: 'Spring 2023 · approximate semester range', kind: 'initiative',
  description: 'A reading and discussion program introducing participants to AI safety. This entry represents the semester in which the program ran; the displayed range does not reconstruct exact cohort or session dates.',
  url: '/aisf/'
 },
 {
  id: 'aisf-fall-2026', title: 'Fall 2026 AI Safety Fundamentals',
  start: '2026-10-01', end: '2026-11-26', dateLabel: 'October 1–November 25, 2026 · eight weeks', kind: 'initiative',
  description: 'An eight-week reading and discussion fellowship on AI safety, planned to begin October 1. Participants meet in weekly cohorts to discuss the fundamentals of AI safety.',
  url: '/aisf/'
 },
 {
  id: 'aisf-spring-2026', title: 'Spring 2026 AI Safety Fundamentals',
  start: '2026-03-01', end: '2026-06-01', dateLabel: 'March–May 2026 · program months', kind: 'initiative',
  description: 'An eight-week reading and discussion fellowship on AI safety, with multiple weekly cohorts. This overview shows the months in which the spring program ran, rather than exact first and last meeting dates. Cohort schedules varied; final sessions continued after the May 9 capstone hackathon.',
  url: '/aisf/'
 },
 {
  id: 'arena-spring-2026', title: 'Spring 2026 ARENA technical upskilling',
  start: '2026-02-01', end: '2026-06-01', dateLabel: 'February–May 2026 · program months', kind: 'initiative',
  description: 'A technical AI safety upskilling series using the ARENA curriculum. The program began with a February 19 kickoff; session reminders continued through May 9, and organizers announced on May 14 that remaining sessions would stop for the semester. The bar shows program months, not uninterrupted meetings or exact course boundaries.',
  url: 'https://www.arena.education/curriculum'
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
