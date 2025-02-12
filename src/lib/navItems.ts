export const NAVIGATION_ITEMS = [
    { href: '/', label: 'Home' },
    {
        label: 'Initiatives',
        href: '/initiatives',
        dropdownItems: [
            { href: '/initiatives#research', label: 'Research' },
            { href: '/initiatives#current', label: 'Current Projects' }
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
    { href: '/blog', label: 'Blog (Soon!)' },
    { href: '/about', label: 'About' }
] as const;