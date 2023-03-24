export const menuItems = [
    { id: 'product', title: 'Product', child: [] },
    { id: 'company', title: 'Commpany', child: [] },
    {
        id: 'connect', title: 'Connect ', child: [
            { id: 'contact', title: 'Contact' },
            { id: 'newsletter', title: 'Newsletter' },
            { id: 'linkedin', title: 'Linkedin' },
        ]
    },
]

export const footerLinks = [
    {
        id: 'product', title: 'Product', subLinks:
            [
                { id: 'overview', title: 'Overview', href: '#!' },
                { id: 'pricing', title: 'Pricing', href: '#!' },
                { id: 'marketplace', title: 'Marketplace', href: '#!' },
                { id: 'marketplacefeatures', title: 'features', href: '#!' },
                { id: 'integrations', title: 'integrations', href: '#!' }
            ]
    },
    {
        id: 'company', title: 'Company', subLinks:
            [
                { id: 'aboute', title: 'aboute', href: '#!' },
                { id: 'team', title: 'team', href: '#!' },
                { id: 'blog', title: 'blog', href: '#!' },
                { id: 'careers', title: 'careers', href: '#!' },
            ]
    },
    {
        id: 'connect', title: 'Connect', subLinks:
            [
                { id: 'contact', title: 'contact', href: '#!' },
                { id: 'newsletter', title: 'newsletter', href: '#!' },
                { id: 'linkedin', title: 'linkedin', href: '#!' },
            ]
    },
]

