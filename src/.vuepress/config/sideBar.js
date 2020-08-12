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
                '/guides/local-artwork-assets',
                '/guides/user-accounts',
                '/guides/read-progress',
                '/guides/collections',
                '/guides/webreader',
                '/guides/tachiyomi',
                '/guides/opds',
                '/guides/rest',
                '/guides/theme',
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