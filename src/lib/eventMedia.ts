import type { CalendarEvent } from './events';

export type EventMedia = { imageUrl: string; imageAlt: string; sourceUrl?: string; kind?: 'photo' | 'artwork' };

const eventMediaEntries: (EventMedia & { partifulId?: string; calendarId: string })[] = [
  {
    "partifulId": "ThtJyAbrVrOAMDe89ObM",
    "calendarId": "uonmr030p3ivdk1c0avcktvihs",
    "imageUrl": "/images/events/stephen-casper-spring-2026.png",
    "imageAlt": "Original event illustration of a MAIA character riding a shoggoth",
    "sourceUrl": "https://partiful.com/e/ThtJyAbrVrOAMDe89ObM",
    "kind": "artwork"
  },
  {
    "partifulId": "WrZC5kG5fFGOW5NHcgQL",
    "calendarId": "phkqklrejfr8v6h8tpg3j77074",
    "imageUrl": "/images/events/maia-cbai-social-2026.jpg",
    "imageAlt": "Original social artwork showing people and an AI character sharing pizza",
    "sourceUrl": "https://partiful.com/e/WrZC5kG5fFGOW5NHcgQL",
    "kind": "artwork"
  },
  {
    "partifulId": "mKBekZGAMMXLlWwtHzQs",
    "calendarId": "83ovgqog39pf060aqg8aoo0em8",
    "imageUrl": "/images/events/phillip-christoffersen-spring-2026.jpg",
    "imageAlt": "Phillip Christoffersen pictured at a whiteboard on the original event page",
    "sourceUrl": "https://partiful.com/e/mKBekZGAMMXLlWwtHzQs",
    "kind": "artwork"
  },
  {
    "partifulId": "1avgHD75AlzHBjzHMJQC",
    "calendarId": "bp05urquk4n6l0cbj12at0rcno",
    "imageUrl": "/images/events/rooftop-social-spring-2026.jpg",
    "imageAlt": "Original MAIA end-of-year rooftop social poster",
    "sourceUrl": "https://partiful.com/e/1avgHD75AlzHBjzHMJQC",
    "kind": "artwork"
  },
  {
    "partifulId": "iOKPpKoS7l36jCMiInMB",
    "calendarId": "_dlgmio9dc5p66q39epiiqob26gr3ic1o6som4oj46lj6ap9k60q68cr368pj6p336lj6ae3581mmit31d5gmoqb7dpmmarjk5pnn4po",
    "imageUrl": "/images/events/mission-strawberry-2025.png",
    "imageAlt": "Strawberry artwork from the original Mission Strawberry event page",
    "sourceUrl": "https://partiful.com/e/iOKPpKoS7l36jCMiInMB",
    "kind": "artwork"
  },
  {
    "calendarId": "6ja895bhclgqneiankcah6ugl0",
    "imageUrl": "/images/events/sunset-cruise-fall-2026.jpg",
    "imageAlt": "Group photo aboard the MAIA sunset cruise in Boston Harbor, September 2026",
    "kind": "photo",
    "partifulId": "wf8Xd77SWvf29p42iHV1",
    "sourceUrl": "https://partiful.com/e/wf8Xd77SWvf29p42iHV1"
  },
  {
    "calendarId": "545d2vne11hmvund2no6csn2fd",
    "imageUrl": "/images/events/rock-climbing-fall-2026.jpg",
    "imageAlt": "MAIA participants at the climbing wall during the September 2026 rock climbing outing",
    "kind": "photo",
    "partifulId": "sHHsvkCC5JQ0WBFw3b7J",
    "sourceUrl": "https://partiful.com/e/sHHsvkCC5JQ0WBFw3b7J"
  },
  {
    "calendarId": "048peimga0769t74arerciidtn",
    "imageUrl": "/images/events/grad-resource-fair-fall-2026.jpg",
    "imageAlt": "MAIA organizers and visitors at the Graduate Resource Fair booth in September 2026",
    "kind": "photo"
  },
  {
    "calendarId": "7e81i63hh3mg753dh2ar60bq81",
    "imageUrl": "/images/events/google-rooftop-social-fall-2026.jpg",
    "imageAlt": "Attendees talking at the MAIA rooftop social in September 2026",
    "kind": "photo"
  },
  {
    "calendarId": "5oa8mnfra5idfaeotp3g5s0clc",
    "imageUrl": "/images/events/openai-incident-talk-fall-2026.jpg",
    "imageAlt": "Audience and speakers at the OpenAI Incident Explained talk in September 2026",
    "kind": "photo"
  },
  {
    "calendarId": "0vetqlmuqg7hiedhc7habinj18",
    "partifulId": "R8arDcMFNH7MkCPMrdVK",
    "imageUrl": "/images/events/archive-maia-2026-006-cover.jpg",
    "imageAlt": "MAIA character riding a shoggoth, from the original MAIA and AISF social invitation",
    "sourceUrl": "https://partiful.com/e/R8arDcMFNH7MkCPMrdVK",
    "kind": "artwork"
  },
  {
    "calendarId": "jmcg3j485nmn7ku752nrgqgc50",
    "partifulId": "stdhTf8es2xF2fdNeIBT",
    "imageUrl": "/images/events/archive-maia-2026-014-cover.jpg",
    "imageAlt": "Max Tegmark portrait from his original MAIA member-meeting invitation",
    "sourceUrl": "https://partiful.com/e/stdhTf8es2xF2fdNeIBT",
    "kind": "artwork"
  },
  {
    "calendarId": "lue4c75au1mtu4e6qearhhfqbk",
    "partifulId": "VezKYKeNbNceYeB6GYN7",
    "imageUrl": "/images/events/archive-maia-2025-040-cover.jpg",
    "imageAlt": "Robot shaking hands with Earth, from the MAIA and Impact at MIT social invitation",
    "sourceUrl": "https://partiful.com/e/VezKYKeNbNceYeB6GYN7",
    "kind": "artwork"
  },
  {
    "calendarId": "d9vh5151ijvt2ntf42t3rhd83o",
    "partifulId": "pUfxCM59MDu1w8Bv99Ji",
    "imageUrl": "/images/events/archive-maia-2025-043-cover.jpg",
    "imageAlt": "People and an AI character sharing pizza, from the original MAIA pizza social invitation",
    "sourceUrl": "https://partiful.com/e/pUfxCM59MDu1w8Bv99Ji",
    "kind": "artwork"
  },
  {
    "calendarId": "1sjrug1fsass2lcmb6jkn3jn9o",
    "partifulId": "zH6l5jKsx9yR1TtKU7N7",
    "imageUrl": "/images/events/maia-cbai-social-2026.jpg",
    "imageAlt": "People and an AI character sharing pizza, from the original MAIA end-of-semester invitation",
    "sourceUrl": "https://partiful.com/e/zH6l5jKsx9yR1TtKU7N7",
    "kind": "artwork"
  },
  {
    "calendarId": "7ncgb2npn6k3ipn5atj981hs56",
    "partifulId": "UBZPLn8pwDSahW5WScIL",
    "imageUrl": "/images/events/archive-calendar-7ncgb2npn6k3ipn5atj981hs56-cover.jpg",
    "imageAlt": "AI scenario board from the original AGI tabletop exercises invitation",
    "sourceUrl": "https://partiful.com/e/UBZPLn8pwDSahW5WScIL",
    "kind": "artwork"
  },
  {
    "calendarId": "7e1eac8d9e5b4d0c932425082fa25cfc",
    "partifulId": "YFbhfSxB4GhydFYQ26kQ",
    "imageUrl": "/images/events/archive-calendar-7e1eac8d9e5b4d0c932425082fa25cfc-cover.jpg",
    "imageAlt": "People and robots playing games in the original MAIA kickoff social illustration",
    "sourceUrl": "https://partiful.com/e/YFbhfSxB4GhydFYQ26kQ",
    "kind": "artwork"
  },
  {
    "calendarId": "2imhqm5t4ptse1lu2r1t0q423p",
    "imageUrl": "/images/events/midway-club-fair-fall-2026.jpg",
    "imageAlt": "Students visiting the MAIA booth at the MIT club fair in September 2026",
    "kind": "photo"
  },
  {
    "calendarId": "nj234ep9ok8rm082i86eg8ijd4",
    "partifulId": "SlfSVkbyXF0G9qGg6hDn",
    "imageUrl": "/images/events/archive-maia-2026-008-cover.jpg",
    "imageAlt": "Original MAIA and AISF social invitation artwork with a pizza and You\u2019re Invited lettering",
    "sourceUrl": "https://partiful.com/e/SlfSVkbyXF0G9qGg6hDn",
    "kind": "artwork"
  },
  {
    "calendarId": "8v1dac1vpdp8qo14ruan4glmn0",
    "partifulId": "wXqpUXtaJOzHY29mDQcR",
    "imageUrl": "/images/events/archive-maia-2026-020-cover.jpg",
    "imageAlt": "Original MAIA and Science Policy Initiative mixer invitation illustration of friends sharing pizza",
    "sourceUrl": "https://partiful.com/e/wXqpUXtaJOzHY29mDQcR",
    "kind": "artwork"
  },
  {
    "calendarId": "2ir3qh0prtmkm9dqbgooda2k9g",
    "partifulId": "IlcfjCpKufDe2prerMoE",
    "imageUrl": "/images/events/archive-maia-2025-039-cover.jpg",
    "imageAlt": "Original MAIA May social invitation artwork with colorful gradients and Party Immediately lettering",
    "sourceUrl": "https://partiful.com/e/IlcfjCpKufDe2prerMoE",
    "kind": "artwork"
  }
];

export function getEventMedia(event: CalendarEvent): EventMedia | undefined {
 const calendarId = event.id.split('@')[0];
 const linkedContent = [event.url, event.description, ...(event.descriptionParts ?? []).map(part => part.href)].filter(Boolean).join(' ');
 const partifulIds = [...linkedContent.matchAll(/https?:\/\/(?:www\.)?partiful\.com\/e\/([A-Za-z0-9]+)/g)].map(match => match[1]);
 return eventMediaEntries.find(artwork => artwork.calendarId === calendarId || (artwork.partifulId !== undefined && partifulIds.includes(artwork.partifulId)));
}
