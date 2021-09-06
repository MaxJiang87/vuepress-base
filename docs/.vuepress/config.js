
module.exports = {
  base: "/vuepress/",
  lang: 'zh-CN',
  title: '国信会视文档平台',
  description: '这是国信会视的一个 VuePress 站点',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: ['autobar'],

  themeConfig: {
  	logo: 'https://www.halosee.com/img/logo-new.png',
  	logoDark: '',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: true,
    sidebarDepth:2,
  },

}