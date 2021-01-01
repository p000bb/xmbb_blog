---
title: 使用flv.js+obs+node-media-server实时直播
date: 2020-11-3 18:10:24
isShowComments: false
categories: 
  - 实时直播
  - 转载
tags: 
  - flv.js
  - node-media-server
  - obs
---


## **1. 新建一个空白文件夹，并且初始化`npm init`**

## **2. 下载node-media-server**
```sh
npm install node-media-server --save
```
## **3. 新建一个入口文件index.js**
```js
const NodeMediaServer = require('node-media-server');
 
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};
 
var nms = new NodeMediaServer(config)
nms.run();
```
## **4. 开启服务**
```sh
node index.js
```

服务成功效果图：

<img :src="$withBase('/assets/img/使用flv_files/1.jpg')">

## **5. 新建一个index.html**

```html
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>直播</title>
</head>
<body>
   <script src="https://cdn.bootcss.com/flv.js/1.4.0/flv.min.js"></script>
   <div class='home'>
   <video id="videoElement" width="60%" controls class='video'></video>
   </div>
   <script>
       if (flvjs.isSupported()) {
           var videoElement = document.getElementById('videoElement');
           var flvPlayer = flvjs.createPlayer({
               type: 'flv',
               url: 'http://localhost:8000/live/hello.flv'
           });
           flvPlayer.attachMediaElement(videoElement);
           flvPlayer.load();
           flvPlayer.play();
       }
   </script>
</body>
</html>
```
::: tip 说明
[flv.js](https://github.com/bilibili/flv.js "flv.js")是来自Bilibli的开源项目。它解析FLV文件喂给原生HTML5 Video标签播放音视频数据，使浏览器在不借助Flash的情况下播放FLV成为可能
:::

## **6. 安装[http-server](https://github.com/http-party/http-server "http-server")并且启动**

```sh
npm install http-server -g
```
在浏览器中复制图下的地址：

<img :src="$withBase('/assets/img/使用flv_files/2.jpg')">

## **7. 使用obs进行推流**

- 首先先下载[obs](https://obsproject.com/ "obs")
- 打开obs - 设置

配置成下面这张图样的
串流秘钥为：`hello`(项目的url是http://localhost:8000/live/hello.flv)
<img :src="$withBase('/assets/img/使用flv_files/3.jpg')">

- 然后对obs进行推流

- 最后打开刚刚的链接就可以了

- 如果此时你的obs进行推流，视频里就是显示你正在推流的视频

<img :src="$withBase('/assets/img/使用flv_files/4.jpg')">
 









