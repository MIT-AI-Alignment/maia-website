export const NAVIGATION_ITEMS = [
    { href: '/', label: 'Home' },
    {
        label: 'Initiatives',
        href: '/initiatives',
        dropdownItems: [
            { href: '/initiatives/current', label: 'Current Projects' },
            { href: '/initiatives/past', label: 'Past Projects' },
            { href: '/initiatives/upcoming', label: 'Upcoming' }
        ]
    },
    {
        label: 'Get Involved',
        href: '/getinvolved',
        dropdownItems: [
            { href: '/getinvolved#aisf', label: 'AI Safety Fundamentals' },
            { href: '/getinvolved#workshops', label: 'Workshops' },
            { href: '/getinvolved#bootcamps', label: 'Bootcamps' },
            { href: '/getinvolved#membership', label: 'Membership' },
            { href: '/getinvolved#calendar', label: 'Calendar' }
        ]
    },
    { href: '/blog', label: 'Blog (Coming Soon!)' },
    { href: '/about', label: 'About' }
] as const;