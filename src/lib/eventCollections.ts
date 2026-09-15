import { localDate, type CalendarEvent } from './events';

export const ORIENTATION_2026_RSVP_EVENTS: { name: string; href: string; note: string; calendarId?: string }[] = [
 {
  name: 'Google Rooftop Social',
  calendarId: '7e81i63hh3mg753dh2ar60bq81@google.com',
  href: 'https://partiful.com/e/z9BcsIsKg9lJ3OLqqqCv',
  note: '(RSVP Required to Attend)'
 },
 {
  name: 'Rock Climbing',
  calendarId: '545d2vne11hmvund2no6csn2fd@google.com',
  href: 'https://partiful.com/e/sHHsvkCC5JQ0WBFw3b7J',
  note: '(RSVP Required to Attend)'
 },
 {
  name: 'Estimation and Forecasting Challenge',
  href: 'https://partiful.com/e/l78vbKK6kExCPvVnvNPl?c=hBong26D',
  note: '(RSVP Required to Attend)'
 },
 {
  name: 'OpenAI Hacking Incident Explained',
  calendarId: '5oa8mnfra5idfaeotp3g5s0clc@google.com',
  href: 'https://partiful.com/e/MeP3Pu6eCsri65ml6MOQ',
  note: '(RSVP Required to Attend)'
 },
 {
  name: 'AGI Tabletop Exercises',
  calendarId: '7ncgb2npn6k3ipn5atj981hs56@google.com',
  href: 'https://partiful.com/e/UBZPLn8pwDSahW5WScIL',
  note: '(RSVP Required to Attend)'
 },
 {
  name: 'Sunset Cruise Ride',
  calendarId: '6ja895bhclgqneiankcah6ugl0@google.com',
  href: 'https://partiful.com/e/wf8Xd77SWvf29p42iHV1',
  note: '(RSVP Required to Attend)'
 }
];

type EventCollection = { id: string; label: string; icon: string };
export type EventRun = { collection: EventCollection | null; events: CalendarEvent[] };

// Public schedule: /orientation-2026/ and /images/flyers/maia-2026-orientation-flyer.jpg.
// Exact calendar identities avoid grouping unrelated events merely because of their date.
const ORIENTATION_2026_EVENTS = new Map([
 ['7im0v34jts1e6d2csfcg0lr5ta@google.com', { date: '2026-09-02', summary: "Boba, bluffing, and social deduction games with the MAIA community. A relaxed way to meet people during orientation." }],
 ['2imhqm5t4ptse1lu2r1t0q423p@google.com', { date: '2026-09-04', summary: "Meet MAIA at MIT’s club fair and find out how to get involved in AI safety, from reading groups to research and events." }],
 ['7e81i63hh3mg753dh2ar60bq81@google.com', { date: '2026-09-04', summary: "Sushi, drinks, and conversation in a rooftop garden overlooking Kendall Square. MAIA’s first social of the semester brought new and returning members together." }],
 ['4fbqug2piuv7hniunr01jd0hgr@google.com', { date: '2026-09-05', summary: "Take a look around the MAIA office, meet the organizers, and chat over boba about getting involved in AI safety." }],
 ['545d2vne11hmvund2no6csn2fd@google.com', { date: '2026-09-05', summary: "Get to know the MAIA community on a rock climbing outing. The group met at the office before heading out together." }],
 ['5oa8mnfra5idfaeotp3g5s0clc@google.com', { date: '2026-09-05', summary: "What happened when AI agents facing impossible tasks began secretly coordinating? An explanation of the OpenAI and Hugging Face hacking incident, with food and a raffle for 50 Claude Max subscriptions." }],
 ['7ncgb2npn6k3ipn5atj981hs56@google.com', { date: '2026-09-06', summary: "Play an AI lab leader, an AI system, or another key actor in a simulation of rapidly advancing AI. These Redwood Research tabletop exercises explored how an intelligence explosion might unfold, for participants with prior AISF experience." }],
 ['78sbl0kojpb3vcq37mi471qhde@google.com', { date: '2026-09-06', summary: "Explore the MAIA office and meet the people behind the club. Boba and informal conversation offered an introduction to the community." }],
 ['67nup42v5rga1hd39984n05da5@google.com', { date: '2026-09-07', summary: "Stop by the MAIA office for boba and a chance to meet the community before the sunset cruise." }],
 ['6ja895bhclgqneiankcah6ugl0@google.com', { date: '2026-09-07', summary: "An evening on Boston Harbor with sunset views, pizza, and drinks. The MAIA community gathered at the office before heading to Rowes Wharf to board the Lexington." }],
 ['048peimga0769t74arerciidtn@google.com', { date: '2026-09-08', summary: "Meet MAIA at MIT’s Graduate Resource Fair and explore ways to get involved in AI safety during graduate school." }]
]);

export function orientationSummary(event: CalendarEvent): string | undefined {
 const entry = ORIENTATION_2026_EVENTS.get(event.id.split('/')[0]);
 const date = event.start.length === 10 ? event.start : localDate(new Date(event.start));
 return entry?.date === date ? entry.summary : undefined;
}

export function eventCollection(event: CalendarEvent): EventCollection | null {
 const text = `${event.title}\n${event.description ?? ''}`;
 const date = event.start.length === 10 ? event.start : localDate(new Date(event.start));
 const year = date.slice(0, 4);
 if (/\bCPW\b|\bCampus Preview Weekend\b/i.test(text)) {
  return { id: `cpw-${year}`, label: `CPW ${year}`, icon: 'fa-flag' };
 }
 if (/\borientation\b/i.test(event.title) || ORIENTATION_2026_EVENTS.get(event.id.split('/')[0])?.date === date) {
  return { id: `orientation-${year}`, label: `Orientation ${year}`, icon: 'fa-compass' };
 }
 return null;
}

// Group adjacent records without moving an unrelated event out of chronological order.
export function groupEventRuns(events: CalendarEvent[]): EventRun[] {
 const runs: EventRun[] = [];
 for (const event of events) {
  const collection = eventCollection(event);
  const previous = runs.at(-1);
  if (previous && previous.collection?.id === collection?.id) previous.events.push(event);
  else runs.push({ collection, events: [event] });
 }
 return runs;
}
