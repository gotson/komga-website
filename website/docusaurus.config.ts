import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs'

import { themes } from 'prism-react-renderer'

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

const config: Config = {
    title: 'Komga',
    tagline: 'A media server for your comics, mangas, BDs, magazines and eBooks',
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
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/gotson/komga-website/tree/master/website/',
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                    docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
                },
                blog: {
                    blogTitle: 'Announcements',
                    blogDescription: 'Latest Komga announcements',
                    showReadingTime: true,
                    onUntruncatedBlogPosts: 'ignore',
                    feedOptions: {
                        type: 'all',
                        title: 'Announcements',
                        description: 'Latest Komga announcements',
                    },
                },
                theme: {
                    customCss: [
                        './src/css/custom.css',
                        './src/css/openapi-highcontrast.css',
                    ],
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: 'api', // plugin id
                docsPluginId: 'classic', // configured for preset-classic
                config: {
                    komga: {
                        specPath: 'https://raw.githubusercontent.com/gotson/komga/refs/heads/master/komga/docs/openapi.json',
                        outputDir: 'docs/openapi',
                        downloadUrl: 'https://raw.githubusercontent.com/gotson/komga/refs/heads/master/komga/docs/openapi.json',
                        sidebarOptions: {
                            groupPathsBy: 'tagGroup',
                            categoryLinkSource: 'tag',
                        },
                    } satisfies OpenApiPlugin.Options,
                },
            },
        ],
    ],

    themes: ['docusaurus-theme-openapi-docs'], // export theme components

    themeConfig:
        {
            colorMode: {
                respectPrefersColorScheme: true,
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: false,
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
                        type: 'localeDropdown',
                        position: 'right',
                        dropdownItemsAfter: [
                            {
                                type: 'html',
                                value: '<hr style="margin: 0.3rem 0;">',
                            },
                            {
                                href: 'https://crowdin.com/project/komga-website',
                                label: 'Help us translate',
                            }
                        ]
                    },
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
                additionalLanguages: [
                    'bash',
                    'diff',
                    'json',
                    'ruby',
                    'csharp',
                    'php',
                    'java',
                    'powershell',
                    'dart',
                    'objectivec',
                    'r',
                ],
            },
            languageTabs: [
                {
                    highlight: 'bash',
                    language: 'curl',
                    logoClass: 'curl',
                },
                {
                    highlight: 'python',
                    language: 'python',
                    logoClass: 'python',
                },
                {
                    highlight: 'javascript',
                    language: 'nodejs',
                    logoClass: 'nodejs',
                },
                {
                    highlight: 'java',
                    language: 'java',
                    logoClass: 'java',
                    variant: 'unirest',
                },
                {
                    highlight: 'kotlin',
                    language: 'kotlin',
                    logoClass: 'kotlin',
                },
                {
                    highlight: 'powershell',
                    language: 'powershell',
                    logoClass: 'powershell',
                },
                {
                    highlight: 'swift',
                    language: 'swift',
                    logoClass: 'swift',
                },
                {
                    highlight: 'rust',
                    language: 'rust',
                    logoClass: 'rust',
                },
            ],
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
        } satisfies Preset.ThemeConfig,
}

module.exports = config
