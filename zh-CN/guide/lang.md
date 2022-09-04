---
title: 多国语言配置
lang: en-US
---

# {{ $frontmatter.title }}

:::warning
适配于 vitepress 1.x.x 版本的功能正在制作，下面是 0.x.x 版本的国际化方案
:::

你也可以配置多国语言，以首页为例，先在配置文件里配置下 locales，然后创建对应的语言文件夹与文件


## 改配置文件

需要在 config.ts 中配置 locales，注意 themeConfig 属性里也要配，两个 locales 内容是不一样的

themeConfig 中的 locales 配置是为了展示下拉菜单的展示内容

根Config 中的 locales 配置是为了展示头部标题内容，description属性可有可无

```js
// .vitepress/config.ts
export default defineConfigWithTheme<VuetomThemeConfig>({
  // ...
  themeConfig: {
    // ...
    locales: {
      '/zh-CN/': {
        label: '简体中文',
        selectText: '多国语言'
      },
      '/en-US/': {
        label: 'English',
        selectText: 'Languages'
      }
    }
  },
  locales: {
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Vuetom 主题',
      description: '为 Vitepress 提供的一款主题'
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Vuetom Theme',
      description: 'Theme For Vitepress'
    }
  }
})
```

**locales** 中的属性介绍

<b>lang</b>: 会直接设置给 `<html>` 标签

<b>title</b>: 不同语言时网站的标题，会替换之前定义的 title

<b>description</b>: 不同语言时网站的描述

<b>label</b>: 语言选择时展示出来的文本内容（例如：中文或English）

<b>selectText</b>: 语言选择时下拉菜单的文本（例如：多国语言或者Languages）



## 改首页

在 .vitepress 同级目录新建 `zh-CN` 和 `en-US` 文件夹，然后在这个文件夹中分别创建一个 `index.md` 文件

**zh-CN/index.md** 中写入 **中文首页** 要展示的内容

**en-US/index.md** 中写入 **英文首页** 要展示的内容

原来与 .vitepress 同级的 `index.md` 文件中可以改为转发至 `zh-CN/index` 或者 `en-US/index`

例如下方的代码，会直接将 `/` 转发到 `/zh-CN/` 这样就会直接前往中文首页了

```markdown
---
title: 'Vuetom Theme'
lang: en-US
page: true
---

<script setup>

if (typeof window !== 'undefined') {
  const preferredLang = 'zh-CN'
  window.location.pathname = `/${preferredLang}/`
}

</script>
```

::: warning
其实原理就是路径前加了一个语言标识，那么就在页面文件外加个语言文件夹就好了<br>
需要处理的就是书写导航栏和菜单栏时记得要在 link 属性前加上语言标识
:::

下面试试访问一下：

访问 localhost:3000/zh-CN/ 会前往中文首页

访问 localhost:3000/en-US/ 会前往英文首页

访问 localhost:3000 会前往 localhost:3000/zh-CN/
