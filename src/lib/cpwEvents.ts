export type CpwEvent = {
    title: string;
    location: string;
    time: string;
    hook?: string;
};

export type CpwDay = {
    label: string;
    date: string;
    events: CpwEvent[];
};

export const CPW_SCHEDULE: CpwDay[] = [
    {
        label: "Thursday",
        date: "April 16",
        events: [
            {
                title: "Bagels on Kresge Lawn",
                location: "Kresge Lawn",
                time: "9:00 to 11:30 AM",
                hook: "Drop by for bagels and chat with MAIA members."
            },
            {
                title: "Trust Issues: An Avalon Dinner",
                location: "Room 4-149",
                time: "7:00 to 9:00 PM",
                hook: "Dinner plus Avalon, the classic social deduction game."
            },
            {
                title: "Waffles + Her",
                location: "Room 4-237",
                time: "10:00 PM to 1:00 AM",
                hook: "Late night waffles and a screening of Her (2013)."
            },
            {
                title: "Social Deduction Games + Boba",
                location: "NEXT House",
                time: "11:00 PM to 2:00 AM",
                hook: "Mafia, Avalon, Blood on the Clocktower, and boba."
            }
        ]
    },
    {
        label: "Friday",
        date: "April 17",
        events: [
            {
                title: "Bon Me Food Truck",
                location: "Student Plaza",
                time: "3:30 to 8:30 PM",
                hook: "Free Bon Me on us. Find MAIA folks at the truck."
            },
            {
                title: "One Last Supper: Lobster Rolls, Boba, and More",
                location: "Room 4-237",
                time: "9:00 PM to 12:00 AM",
                hook: "The big one: lobster rolls, boba, and MAIA hangout."
            }
        ]
    },
    {
        label: "Saturday",
        date: "April 18",
        events: [
            {
                title: "Bon Me Food Truck",
                location: "Student Plaza",
                time: "1:00 to 4:00 PM",
                hook: "Round two of free Bon Me."
            },
            {
                title: "Midway",
                location: "Johnson Ice Rink",
                time: "1:00 to 3:00 PM",
                hook: "Come find the MAIA table at the CPW activities fair."
            },
            {
                title: "Rooftop Sushi Social",
                location: "Google Rooftop",
                time: "8:30 to 11:30 PM",
                hook: "Sushi under the stars with MAIA on the Google rooftop."
            }
        ]
    }
];
