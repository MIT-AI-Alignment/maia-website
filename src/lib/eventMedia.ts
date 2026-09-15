import type { CalendarEvent } from './events';

export type EventMedia = { imageUrl: string; imageAlt: string; sourceUrl?: string; kind?: 'photo' | 'artwork' | 'portrait' };

const eventMediaEntries: (EventMedia & { partifulId?: string; calendarId: string })[] = [
  {
    calendarId: "67nup42v5rga1hd39984n05da5",
    imageUrl: "/images/events/boba-representative.jpg",
    imageAlt: "Representative bubble tea photograph, not a photograph of the MAIA open house.",
    sourceUrl: "https://unsplash.com/photos/three-different-colored-cups-sitting-on-top-of-a-wooden-table-QN66qNwc1n8",
    kind: "photo"
  },
  {
    calendarId: "arena-spring-2026",
    imageUrl: "/images/logos/arena.png",
    imageAlt: "ARENA technical AI safety curriculum logo",
    sourceUrl: "https://www.arena.education/curriculum",
    kind: "artwork"
  },
  {
    "calendarId": "lajp0v94h503pbjnakll1ccpcc",
    "imageUrl": "/images/events/cpw-bon-me-2026-04-17.jpg",
    "imageAlt": "Representative photo of MAIA’s Bon Me food truck event on April 17, 2026, reused for this listing.",
    "kind": "photo"
  },
  {
    "calendarId": "t01e428lq1kfpikvld0k2otm8o",
    "imageUrl": "/images/events/tabling-2026-09-15.jpg",
    "imageAlt": "Students lining up beside MAIA’s tabling event near the MIT Student Center on September 15, 2026.",
    "kind": "photo"
  },
  {
    "calendarId": "up63jilcdd95uijsr8omes9v9k",
    "imageUrl": "/images/events/cpw-bagels-2026-04-16.jpg",
    "imageAlt": "MAIA bagel table and sign outside Kresge Auditorium during CPW 2026.",
    "kind": "photo"
  },
  {
    "calendarId": "10npmtes54dj298dqlmks4f49k",
    "imageUrl": "/images/events/cpw-bon-me-2026-04-17.jpg",
    "imageAlt": "Students around the MAIA table and Bon Me food truck outside the MIT Student Center during CPW 2026.",
    "kind": "photo"
  },
  {
    "calendarId": "ihbf247eorb6sscc2g5lmfiqsc",
    "imageUrl": "/images/events/cpw-midway-2026-04-18.jpg",
    "imageAlt": "Visitors at MAIA’s CPW 2026 Midway booth beneath the MIT Class of 2040 banner.",
    "kind": "photo"
  },
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
    "imageAlt": "Original MAIA and AISF social invitation artwork with a pizza and You’re Invited lettering",
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
  },
  {
    "calendarId": "maia-archive-8347ee4073a667a4157573ba06ee8f8f",
    "imageUrl": "/images/events/speaker-josh-clymer.jpg",
    "imageAlt": "Josh Clymer portrait",
    "sourceUrl": "https://joshclymer.substack.com/",
    "kind": "portrait",
    "partifulId": "wOCjVImmlyvdKsvQwVcN"
  },
  {
    "calendarId": "maia-archive-3eead03ea045f7dc1715b386d271e6e8",
    "imageUrl": "/images/events/speaker-aryan-bhatt.jpg",
    "imageAlt": "Aryan Bhatt portrait",
    "sourceUrl": "https://www.matsprogram.org/mentor/bhatt",
    "kind": "portrait"
  },
  {
    "calendarId": "6eqvq9hv6osj2mjhmt3sudpi6j",
    "imageUrl": "/images/events/speaker-neel-nanda.jpg",
    "imageAlt": "Neel Nanda portrait",
    "sourceUrl": "https://www.neelnanda.io/about",
    "kind": "portrait"
  },
  {
    "calendarId": "4gkbk3ftq8peoqse7jio33eaa9",
    "imageUrl": "/images/events/archive-maia-2026-014-cover.jpg",
    "imageAlt": "Max Tegmark portrait",
    "sourceUrl": "https://partiful.com/e/stdhTf8es2xF2fdNeIBT",
    "kind": "portrait"
  },
  {
    "calendarId": "5di00sqis1am2hom7g2l8fne0b",
    "imageUrl": "/images/events/archive-maia-2026-014-cover.jpg",
    "imageAlt": "Max Tegmark portrait",
    "sourceUrl": "https://partiful.com/e/stdhTf8es2xF2fdNeIBT",
    "kind": "portrait"
  },
  {
    "imageUrl": "/images/events/speaker-nicholas-carlini.jpg",
    "imageAlt": "Nicholas Carlini portrait",
    "sourceUrl": "https://nicholas.carlini.com/",
    "kind": "portrait",
    "calendarId": "maia-archive-33a39a9fe19563f56735abe5684b7fa5"
  },
  {
    "imageUrl": "/images/events/speaker-stephen-casper.jpg",
    "imageAlt": "Stephen Casper portrait",
    "sourceUrl": "https://www.hks.harvard.edu/faculty/stephen-casper",
    "kind": "portrait",
    "calendarId": "maia-archive-62b356a491ad269628775890256f64ee"
  },
  {
    "imageUrl": "/images/events/speaker-andreea-bobu.jpg",
    "imageAlt": "Andreea Bobu portrait",
    "sourceUrl": "https://www.mit.edu/~abobu/",
    "kind": "portrait",
    "calendarId": "maia-archive-2f07819f618e0d9abb5e3cb65b650ad3"
  },
  {
    "imageUrl": "/images/events/speaker-lucas-sato.jpg",
    "imageAlt": "Lucas Sato portrait",
    "sourceUrl": "https://metr.org/team/lucas-sato/",
    "kind": "portrait",
    "calendarId": "531gc0t6lb2acgl7av05boh5ej"
  },
  {
    "imageUrl": "/images/events/speaker-stephen-mcaleer.jpg",
    "imageAlt": "Stephen McAleer portrait",
    "sourceUrl": "https://mcaleste.github.io/",
    "kind": "portrait",
    "calendarId": "maia-archive-f36deedb40b64b2dfbc8ff7c2fd0cc4b"
  },
  {
    "imageUrl": "/images/events/speaker-david-krueger.jpg",
    "imageAlt": "David Krueger portrait",
    "sourceUrl": "https://www.davidscottkrueger.com/",
    "kind": "portrait",
    "calendarId": "maia-archive-4016c187705cd8eb2d5b35cfc8ca4ed4"
  },
  {
    "imageUrl": "/images/events/speaker-ajeya-cotra.jpg",
    "imageAlt": "Ajeya Cotra portrait",
    "sourceUrl": "https://metr.org/team/ajeya-cotra/",
    "kind": "portrait",
    "calendarId": "maia-archive-6d19eb17467c8dd87ae76c7141c59ce6"
  },
  {
    "imageUrl": "/images/events/speaker-daniel-kokotajlo.jpg",
    "imageAlt": "Daniel Kokotajlo portrait",
    "sourceUrl": "https://ai-futures.org/about",
    "kind": "portrait",
    "calendarId": "gvr4sus35riemvgvq8mbpet28g"
  },
  {
    "imageUrl": "/images/events/speaker-daniel-kokotajlo.jpg",
    "imageAlt": "Daniel Kokotajlo portrait",
    "sourceUrl": "https://ai-futures.org/about",
    "kind": "portrait",
    "calendarId": "01bfgfsoel54ollocm5in0i5hs"
  },
  {
    "imageUrl": "/images/events/speaker-richard-ngo.jpg",
    "imageAlt": "Richard Ngo portrait",
    "sourceUrl": "https://www.richardcngo.com/home",
    "kind": "portrait",
    "calendarId": "1co92gdrhi7b5sabo41ilkcr40"
  },
  {
    "imageUrl": "/images/events/speaker-adam-jermyn.jpg",
    "imageAlt": "Adam Jermyn portrait",
    "sourceUrl": "https://adamjermyn.com/",
    "kind": "portrait",
    "calendarId": "2gd2030tkofav427h76h9ec3nn"
  },
  {
    "imageUrl": "/images/events/speaker-zac-hatfield-dodds.jpg",
    "imageAlt": "Zac Hatfield-Dodds portrait",
    "sourceUrl": "https://zhd.dev/",
    "kind": "portrait",
    "calendarId": "mdnokn2m6nlhp5pc7ddc5na2mk"
  },
  {
    "imageUrl": "/images/events/speaker-nick-bostrom.jpg",
    "imageAlt": "Nick Bostrom portrait",
    "sourceUrl": "https://nickbostrom.com/",
    "kind": "portrait",
    "calendarId": "5lq1ffguo8nlpvv6vfn4a1nn44"
  },
  {
    "imageUrl": "/images/events/archive-extra-ai2027-report.png",
    "imageAlt": "AI 2027 report artwork showing branching AI development scenarios",
    "sourceUrl": "https://ai-2027.com/",
    "kind": "artwork",
    "calendarId": "ilspfi4b0qaign5i6rlgchb5e4"
  },
  {
    "imageUrl": "/images/events/workshop-2026-08-28-group.jpg",
    "imageAlt": "Participants outside Essex Woods at the August 2026 MAIA and AISST summer workshop.",
    "kind": "photo",
    "calendarId": "maia-archive-ca2869a6e8b429f9d52e4757a70b52dd"
  },
  {
    "imageUrl": "/images/events/activity-her-film.jpg",
    "imageAlt": "Official poster for the film Her",
    "sourceUrl": "https://www.warnerbros.com/movies/her",
    "kind": "artwork",
    "calendarId": "4vtr8rmgq19k1rvpl7i1opfg70"
  },
  {
    "imageUrl": "/images/events/activity-dr-strangelove-film.jpg",
    "imageAlt": "Official poster for Dr. Strangelove",
    "sourceUrl": "https://www.sonypictures.com/movies/drstrangeloveorhowilearnedtostopworryingandlovethebomb",
    "kind": "artwork",
    "calendarId": "cen5qmsppilf96j6taemar6lh0"
  },
  {
    "imageUrl": "/images/events/activity-avalon-game.jpg",
    "imageAlt": "The Resistance: Avalon board game box artwork",
    "sourceUrl": "https://www.asmodee.co.uk/products/ibcava1-the-resistance-avalon",
    "kind": "artwork",
    "calendarId": "7im0v34jts1e6d2csfcg0lr5ta"
  },
  {
    "imageUrl": "/images/events/activity-avalon-game.jpg",
    "imageAlt": "The Resistance: Avalon board game box artwork",
    "sourceUrl": "https://www.asmodee.co.uk/products/ibcava1-the-resistance-avalon",
    "kind": "artwork",
    "calendarId": "f0iig47o8k1u4ehgiovpsfjfg0"
  },
  {
    "imageUrl": "/images/events/activity-avalon-game.jpg",
    "imageAlt": "The Resistance: Avalon board game box artwork",
    "sourceUrl": "https://www.asmodee.co.uk/products/ibcava1-the-resistance-avalon",
    "kind": "artwork",
    "calendarId": "lvmhj9ts7qpanqpn48cij0kdgg"
  },
  {
    "calendarId": "arena-spring-2026-kickoff",
    "imageUrl": "/images/logos/arena.png",
    "imageAlt": "ARENA technical AI safety curriculum logo",
    "sourceUrl": "https://www.arena.education/curriculum",
    "kind": "artwork"
  },
  {
    "calendarId": "arena-spring-2025-kickoff",
    "imageUrl": "/images/logos/arena.png",
    "imageAlt": "ARENA technical AI safety curriculum logo",
    "sourceUrl": "https://www.arena.education/curriculum",
    "kind": "artwork"
  }
];

export function getEventMedia(event: CalendarEvent): EventMedia | undefined {
 const calendarId = event.id.split('@')[0];
 const linkedContent = [event.url, event.description, ...(event.descriptionParts ?? []).map(part => part.href)].filter(Boolean).join(' ');
 const partifulIds = [...linkedContent.matchAll(/https?:\/\/(?:www\.)?partiful\.com\/e\/([A-Za-z0-9]+)/g)].map(match => match[1]);
 const matched = eventMediaEntries.find(artwork => artwork.calendarId === calendarId || (artwork.partifulId !== undefined && partifulIds.includes(artwork.partifulId)));
 // Refresh image URLs after earlier preview builds left cached failed requests.
 if (matched) return { ...matched, imageUrl: `${matched.imageUrl}?v=20260915` };
 if (event.kind === 'initiative' && event.url?.includes('aisst.ai/')) {
  return { imageUrl: '/images/logos/aisst.png', imageAlt: 'AISST logo', kind: 'artwork' };
 }
 if (event.kind === 'initiative' && event.url?.includes('cbai.ai/')) {
  return { imageUrl: '/images/logos/cbai.png', imageAlt: 'Cambridge Boston Alignment Initiative logo', kind: 'artwork' };
 }
 if (event.kind === 'initiative' && event.url?.includes('arena.education')) {
  return { imageUrl: '/images/logos/arena.png', imageAlt: 'ARENA technical AI safety curriculum logo', kind: 'artwork' };
 }
 if (/\bAISF\b|AI Safety Fundamentals/i.test(event.title)) {
  return {
   imageUrl: '/images/logos/aisf.png',
   imageAlt: 'MAIA AI Safety Fundamentals logo',
   kind: 'artwork'
  };
 }
 if (event.start.length === 10 && /workshop/i.test(event.title)) {
  return {
   imageUrl: '/images/events/workshop-representative.jpg',
   imageAlt: 'Representative MAIA/AISST workshop group photo from 2025, reused across workshop listings.',
   kind: 'photo'
  };
 }
}
