// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Komga',
    tagline: 'Free and open source comics/mangas media server',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://komga.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'gotson', // Usually your GitHub org/user name.
    projectName: 'komga-website', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/gotson/komga-website/tree/master/',
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                },
                blog: {
                    blogTitle: 'Announcements',
                    blogDescription: 'Latest Komga announcements',
                    showReadingTime: true,
                    feedOptions: {
                        type: 'all',
                        title: 'Announcements',
                        description: 'Latest Komga announcements',
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true,
                },
            },
            navbar: {
                title: 'Komga',
                logo: {
                    alt: 'Komga Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'docsSidebar',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'api',
                        label: 'API',
                    },
                    { to: '/blog', label: 'Announcements', position: 'left' },
                    {
                        href: 'https://discord.gg/TdRpkDu',
                        className: 'header-discord-link',
                        'aria-label': 'Discord server',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/gotson/komga',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Introduction',
                                to: '/docs/introduction',
                            },
                            {
                                label: 'Installation',
                                to: '/docs/category/installation',
                            },
                            {
                                label: 'Guides',
                                to: '/docs/category/guides',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/TdRpkDu',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Announcements',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/gotson/komga',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'YU8KIUZCE7',

                // Public API key: it is safe to commit it
                apiKey: 'e73963bf9ea84cd3adf91eb33a62734f',

                indexName: 'komga',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                // replaceSearchResultPathname: {
                //     from: '/docs/', // or as RegExp: /\/docs\//
                //     to: '/',
                // },

                // Optional: Algolia search parameters
                searchParameters: {},

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: false,

                //... other Algolia params
            },
        }),
}

module.exports = config
