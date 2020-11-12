const { description } = require('../../package')

module.exports = {
  title: 'Woomy\'s blog',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  base: '/blog',
  theme: 'yuu',
  themeConfig: {
    repo: 'Woomy4680-exe',
    editLinks: false,
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: false,
    nav: [],
    sidebar: {}
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
