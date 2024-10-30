/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [
        'introduction',
        {
            type: 'category',
            label: 'Installation',
            link: {
                type: 'generated-index',
            },
            collapsed: false,
            items: [
                {
                    type: 'category',
                    label: 'Official methods',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'installation/ms-store',
                        'installation/desktop',
                        'installation/docker',
                        'installation/jar',

                    ],
                },
                {
                    type: 'category',
                    label: 'Third-party methods',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'installation/thirdparty/podman',
                        'installation/thirdparty/pikapods',
                        'installation/thirdparty/scoop',
                        'installation/thirdparty/powershell-script',
                        'installation/thirdparty/yunohost',
                        'installation/thirdparty/freenas',
                        'installation/thirdparty/truenas',
                        'installation/thirdparty/qnap',
                        'installation/thirdparty/aur',
                    ],
                },
                {
                    type: 'category',
                    label: 'Configuration',
                    link: {
                        type: 'doc',
                        id: 'installation/configuration',
                    },
                    items: [
                        'installation/https',
                        'installation/oauth2',
                        'installation/gdrive',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Guides',
            collapsed: true,
            link: {
                type: 'generated-index',
            },
            items: [
                'guides/webui',
                'guides/desktop',
                'guides/libraries',
                'guides/trash',
                'guides/scan-analysis-refresh',
                'guides/image-formats',
                'guides/oneshots',
                'guides/edit-metadata',
                'guides/local-artwork-assets',
                'guides/user-accounts',
                'guides/server-settings',
                'guides/read-progress',
                'guides/collections',
                'guides/readlists',
                'guides/search',
                'guides/import-books',
                'guides/duplicate-files',
                'guides/duplicate-pages',
                {
                    type: 'category',
                    label: 'Readers',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'guides/webreader',
                        'guides/mihon',
                        'guides/kobo',
                        'guides/paperback',
                        'guides/cdisplayex',
                        'guides/opds',
                        'guides/panels',
                        'guides/chunky',
                    ],
                },
                'guides/theme',
                'guides/announcements',
                'guides/cli',
            ],
        },
        'contribution',
        'community',
        'faq',
    ],
    api: [
        {
            type: 'category',
            label: 'REST API',
            link: {
                type: 'doc',
                id: 'api/rest',
            },
            items: [
                'api/deprecation',
            ],
        },
    ],
}

module.exports = sidebars
