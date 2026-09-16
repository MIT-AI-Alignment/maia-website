// Use this to make high-level changes to the website in one place.
export const CONFIG = {
    banner: {
        visible: true,
        text: "Join the MAIA mailing list for updates on events, programs, and opportunities.",
        link: "https://airtable.com/app3u6UqyNPuDm3bn/pagGaVOc5VOJO8pIF/form",
        ctaText: "Join mailing list"
    },
    // Modal shown the first time someone opens one of `showOnPaths` (or any page, if that list is
    // empty). Dismissal is remembered per `remember`: "device" = once ever in that browser
    // (localStorage), "session" = once per browser tab session. The key includes `href`, so
    // pointing it at a new campaign shows it again to people who dismissed the old one.
    // Never shown on the page `href` points to when that is an internal path.
    popup: {
        visible: true,
        showOnPaths: ["/"],
        remember: "device",
        icon: "fa-solid fa-graduation-cap",
        title: "Apply to AISF",
        text: "Apply to AISF - our introductory reading group about topics in AI safety.",
        ctaText: "Apply to AISF",
        dismissText: "Maybe later",
        href: "https://airtable.com/appl0nOt45L6eUfMu/pagJvamt09btxpfB3/form"
    },
    orientation: {
        // Linked from the /orientation26 QR short link, the banner, and the Orientation 2026 page.
        interestFormLink: "https://airtable.com/app3u6UqyNPuDm3bn/pagGaVOc5VOJO8pIF/form",
        // The printed banner + foam-board QR codes encode the bare homepage URL (and MIT's http->https
        // redirect drops any path), so the homepage sends phone visitors that arrive with no referrer
        // (= QR scans) straight to the form, once per device. Set to "" to turn this off.
        homepageQrRedirectUntil: ""
    },
    // TODO: See if up to date.
    mailingListLink: "https://mailchi.mp/0b6484dd282e/public",
    membership: {
        applicationLink: "https://airtable.com/appmfPejcK3lp2StV/pagywO1vQtW28ZYpA/form"
    },
    events: {
        // This is the public MAIA calendar, separate from the organizers' planning calendar.
        calendarIcalLink:
            "https://calendar.google.com/calendar/ical/e11a0576562133f0383f64cbca8dad84b0de285f16008b48eed6e80ea3d1f468%40group.calendar.google.com/public/basic.ics",
        calendarLink:
            "https://calendar.google.com/calendar/u/0?cid=ZTExYTA1NzY1NjIxMzNmMDM4M2Y2NGNiY2E4ZGFkODRiMGRlMjg1ZjE2MDA4YjQ4ZWVkNmU4MGVhM2QxZjQ2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
    },
    aisf_ml: {
        visible: true,
        deadline: "Wednesday, September 23 at 11:59 PM Eastern Time",
        deadline_short: "September 23",
        applicationLink: "https://airtable.com/appl0nOt45L6eUfMu/pagJvamt09btxpfB3/form"
    },
    aisf_gov: {
        visible: true,
        deadline: "",
        deadline_short: "",
        applicationLink: ""
    },
} as const;
