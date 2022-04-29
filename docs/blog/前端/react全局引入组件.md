---
title: react全局引入组件
date: 2020-11-18 19:14:21
isShowComments: false
categories: 
  - 前端
tags: 
  - 小知识
  - 原创
  - react
---
### 在src的index.js目录下面天下如下代码
```js
	//	参考如下代码把下面引入的组件改成你自己的 名字自定义 然后就可以在别的组件里面直接this引用
	import http from "./api/axios.js"
	import moment from 'moment'
	
	React.Component.prototype.$moment = moment
	React.Component.prototype.$http = http
```
