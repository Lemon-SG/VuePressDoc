module.exports = {
    title: 'Lemon',
    description: 'Hello VuePress of Lemon',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
        {text: 'Nav1', link: '/nav/nav-test' },
        {text: 'VueApp', link: '../../public/index.html' },
        {text: '百度一下', link: 'https://baidu.com'}      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  }