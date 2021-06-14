---
title: flex布局换行左对齐解决方法
date: 2021-06-07 18:10:24
isShowComments: false
categories: 
  - 前端
tags: 
  - flex布局
  - css
---


### 如果每行行数不固定 元素宽度固定

```html
	<ul class="flex-ul">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
<!-- i标签的个数比元素的个数少1 -->
    </ul>
```

```css
    .flex-ul{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .flex-ul li{
        width:200px;
    }
    .flex-ul i{
        width: 100px;
    }
```
## 演示demo

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul class="flex-ul">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
    </ul>
</body>
<style>
    .flex-ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .flex-ul>li {
        background: cyan;
        list-style: none;
        width: 10rem;
        height:10rem;
        margin-bottom:1rem
    }
    .flex-ul>i {
        width: 10rem;
    }
</style>

</html>












