export const NAVIGATION_ITEMS = [
    {
        label: 'Home',
        href: '/',
        icon: 'fas fa-home'
    },
    {
        label: 'Initiatives',
        href: '/initiatives',
        icon: 'fas fa-lightbulb',
        dropdownItems: [
            { href: '/initiatives#research', label: 'Research' },
            { href: '/initiatives#current', label: 'Current Projects' }
        ]
    },
    {
        label: 'Get Involved',
        href: '/getinvolved',
        icon: 'fas fa-hands-helping',
        dropdownItems: [
            { href: '/getinvolved#aisf', label: 'AI Safety Fundamentals' },
            { href: '/getinvolved#membership', label: 'Membership' },
            { href: '/getinvolved#workshops', label: 'Workshops' },
            { href: '/getinvolved#bootcamps', label: 'Bootcamps' },
            // { href: '/getinvolved#calendar', label: 'Calendar' }
        ]
    },
    {
        label: 'About',
        href: '/about',
        icon: 'fas fa-info-circle',
        dropdownItems: [
            { href: '/about#about', label: 'About MAIA' },
            { href: '/about#executives', label: 'Executives' },
            { href: '/about#organizers', label: 'Organizers' },
            { href: '/about#advisors', label: 'Advisors' },
        ]
    },
] as const;