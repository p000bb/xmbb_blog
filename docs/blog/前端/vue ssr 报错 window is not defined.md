---
title: vue ssr 报错 window is not defined
date: 2021-05-24 14:21:21
isShowComments: false
categories: 
  - 前端
tags: 
  - 小知识
  - vue
---
### 在mounted生命周期里重新window
```js
    mounted(){
        this.window = window;
    }
```

- 我们所有的数据不能放在vue中的mounted中获取
- 因为这样和客户端渲染没什么区别
- vue暴漏的这个环境支持window也就是说这个位置其实是client端做的
- 也就是在ssr所有功能实现之后在执行，这样我们和之前就没有任何区别了
