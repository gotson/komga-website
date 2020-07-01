module.exports = {
    faq: [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'FAQ',
            path: '/faq/',
        },
        {
            title: 'Installation',
            path: '/installation/',
        },
        {
            title: 'Guides',
            path: '/guides/',
        },
        {
            title: 'Contribution',
            path: '/contribution/',
        },
    ],
    installation: [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'FAQ',
            path: '/faq/',
        },
        {
            title: 'Installation',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/installation/',
                '/installation/docker',
                '/installation/jar',
                '/installation/thirdparty',
                '/installation/user-accounts',
                '/installation/webui',
                '/installation/configuration',
            ],
        },
        {
            title: 'Guides',
            path: '/guides/',
        },
        {
            title: 'Contribution',
            path: '/contribution/',
        },
    ],
    guides: [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'FAQ',
            path: '/faq/',
        },
        {
            title: 'Installation',
            path: '/installation/',
        },
        {
            title: 'Guides',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/guides/',
                '/guides/libraries',
                '/guides/scan-analysis-refresh',
                '/guides/read-progress',
                '/guides/tachiyomi',
                '/guides/opds',
                '/guides/rest',
            ],
        },
        {
            title: 'Contribution',
            path: '/contribution/',
        },
    ],
    contribution: [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'FAQ',
            path: '/faq/',
        },
        {
            title: 'Installation',
            path: '/installation/',
        },
        {
            title: 'Guides',
            path: '/guides/',
        },
        {
            title: 'Contribution',
            path: '/contribution/',
        },
    ],
}