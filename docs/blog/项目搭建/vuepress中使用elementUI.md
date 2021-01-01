---
title: vuepress中使用elementUI
date: 2020-11-6 10:45:21
isShowComments: false
categories: 
  - elementUI
  - vuepress
tags: 
  - 本站搭建
---

还在为手写样式而苦恼吗？本文章将教你在vuepress中引入elementUI来进行页面开发
<!-- more --> 

## 安装element

```sh
  yarn element-ui
```
## 添加enhanceApp.js

添加docs/.vuepress/enhanceApp.js

vuepress的目录结构如下：
```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)   <-- 修改这个文件
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
	Vue.use(ElementUI);
}

```

## 在具体的页面中使用elementUI

就比如我在改页面中使用了elementUI的分页组件来进行页面开发

<img :src="$withBase('/assets/img/vuepress中使用elementUI_files/1.jpg')">

