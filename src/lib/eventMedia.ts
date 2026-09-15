import type { CalendarEvent } from './events';

export type EventMedia = { imageUrl: string; imageAlt: string; sourceUrl: string };

const eventArtwork: (EventMedia & { partifulId: string; calendarId: string })[] = [
  {
    "partifulId": "ThtJyAbrVrOAMDe89ObM",
    "calendarId": "uonmr030p3ivdk1c0avcktvihs",
    "imageUrl": "/images/events/stephen-casper-spring-2026.png",
    "imageAlt": "Original event illustration of a MAIA character riding a shoggoth",
    "sourceUrl": "https://partiful.com/e/ThtJyAbrVrOAMDe89ObM"
  },
  {
    "partifulId": "WrZC5kG5fFGOW5NHcgQL",
    "calendarId": "phkqklrejfr8v6h8tpg3j77074",
    "imageUrl": "/images/events/maia-cbai-social-2026.jpg",
    "imageAlt": "Original social artwork showing people and an AI character sharing pizza",
    "sourceUrl": "https://partiful.com/e/WrZC5kG5fFGOW5NHcgQL"
  },
  {
    "partifulId": "mKBekZGAMMXLlWwtHzQs",
    "calendarId": "83ovgqog39pf060aqg8aoo0em8",
    "imageUrl": "/images/events/phillip-christoffersen-spring-2026.jpg",
    "imageAlt": "Phillip Christoffersen pictured at a whiteboard on the original event page",
    "sourceUrl": "https://partiful.com/e/mKBekZGAMMXLlWwtHzQs"
  },
  {
    "partifulId": "1avgHD75AlzHBjzHMJQC",
    "calendarId": "bp05urquk4n6l0cbj12at0rcno",
    "imageUrl": "/images/events/rooftop-social-spring-2026.jpg",
    "imageAlt": "Original MAIA end-of-year rooftop social poster",
    "sourceUrl": "https://partiful.com/e/1avgHD75AlzHBjzHMJQC"
  },
  {
    "partifulId": "iOKPpKoS7l36jCMiInMB",
    "calendarId": "_dlgmio9dc5p66q39epiiqob26gr3ic1o6som4oj46lj6ap9k60q68cr368pj6p336lj6ae3581mmit31d5gmoqb7dpmmarjk5pnn4po",
    "imageUrl": "/images/events/mission-strawberry-2025.png",
    "imageAlt": "Strawberry artwork from the original Mission Strawberry event page",
    "sourceUrl": "https://partiful.com/e/iOKPpKoS7l36jCMiInMB"
  }
];

export function getEventMedia(event: CalendarEvent): EventMedia | undefined {
 const calendarId = event.id.split('@')[0];
 const linkedContent = [event.url, event.description, ...(event.descriptionParts ?? []).map(part => part.href)].filter(Boolean).join(' ');
 const partifulIds = [...linkedContent.matchAll(/https?:\/\/(?:www\.)?partiful\.com\/e\/([A-Za-z0-9]+)/g)].map(match => match[1]);
 return eventArtwork.find(artwork => artwork.calendarId === calendarId || partifulIds.includes(artwork.partifulId));
}
