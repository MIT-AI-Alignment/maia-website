// Use this to make high-level changes to the website in one place.
export const CONFIG = {
    banner: {
        visible: false,
        text: "Applications for our virtual Summer AISF are now open!",
        link: "https://airtable.com/appHwdJxaquLCsb75/pagWI2NzqQcyF37iQ/form",
        ctaText: "Apply now by May 22nd!"
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
        deadline: "",
        deadline_short: "",
        applicationLink: "",
        fallInterestFormLink:
            "https://airtable.com/appHwdJxaquLCsb75/pagMgBP9vydmwnBF4/form"
    },
    aisf_gov: {
        visible: true,
        deadline: "",
        deadline_short: "",
        applicationLink: ""
    },
} as const;
