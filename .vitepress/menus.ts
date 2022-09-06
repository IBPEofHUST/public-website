const nav = () => [
  { text: '指引', link: '/zh-CN/guide/info', activeMatch: '/guide/' }
]

const sidebarGuide = () => [
  {
    text: 'IBPE综览',
    collapsible: true,
    items: [
      { text: '什么是IBPE?', link: '/zh-CN/guide/info' },
      { text: '阅读小组', link: '/zh-CN/guide/reading' },
      {
        text: '问题一览',
        link: '/zh-CN/guide/question'
      },
      {
        text: '主题目录',
        link: '/zh-CN/guide/prodir'
      }
    ]
  },
  {
    text: '进阶',
    collapsible: true,
    items: [
      {
        text: '主题配置',
        link: '/zh-CN/guide/config'
      },
      {
        text: '国际化',
        link: '/zh-CN/guide/lang'
      },
      {
        text: '夜间模式',
        link: '/zh-CN/guide/dark'
      } 
    ]
  }
]

const sidebarMdShow = () => [
  {
    text: '语法',
    collapsible: true,
    items: [
      {
        link: 'zh-CN/mdshow/example',
        text: 'MD语法示例'
      },
      {
        link: 'zh-CN/mdshow/custom',
        text: '自定义语法'
      },
      {
        link: 'zh-CN/mdshow/codeblock',
        text: '代码块展示'
      }
    ]
  }
]

export { nav, sidebarGuide, sidebarMdShow }
