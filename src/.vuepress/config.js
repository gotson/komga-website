const pluginsConfig = require('./config/plugins')
const navBarConfig = require('./config/navBar')
const sideBarConfig = require('./config/sideBar')

module.exports = {
    title: 'Komga',
    description: 'Free and open source comics/mangas media server',
    dest: './public',
    port: 8082,
    themeConfig: {
        repo: 'gotson/komga',
        docsRepo: 'gotson/komga-website',
        docsDir: 'src',
        logo: '/assets/media/logo.svg',
        editLinks: true,
        editLinkText: 'Help us improve this page',
        lastUpdated: 'Last Updated',
        algolia: {
            apiKey: '22e14c07fbfff1a7938d8f9fbd548bdd',
            indexName: 'komga',
        },
        nav: navBarConfig,
        sidebar: {
            '/faq/': sideBarConfig.faq,
            '/installation/': sideBarConfig.installation,
            '/guides/': sideBarConfig.guides,
            '/contribution/': sideBarConfig.contribution,
        },
    },
    plugins: pluginsConfig,
    extraWatchFiles: [
        '.vuepress/config/plugins.js',
        '.vuepress/config/navBar.js',
        '.vuepress/config/sideBar.js',
    ],
}