/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a536248482eeebd4b51f81d896ac815d"
  },
  {
    "url": "assets/css/0.styles.8f6c0623.css",
    "revision": "0034097d00dcf8f70de6b6ab91194d17"
  },
  {
    "url": "assets/img/使用flv_files/1.jpg",
    "revision": "fb178fe3b77769a16af134e7c9b16cbe"
  },
  {
    "url": "assets/img/使用flv_files/2.jpg",
    "revision": "f3c44025168067afa9e9007db2c6ff5c"
  },
  {
    "url": "assets/img/使用flv_files/3.jpg",
    "revision": "de81c8933e4089624b4fdaadfb70e8e5"
  },
  {
    "url": "assets/img/使用flv_files/4.jpg",
    "revision": "1b6586004bcc2f060eace672caec910d"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "2a40145fd3a14660f63eeeff7bf37d81"
  },
  {
    "url": "assets/js/1.69b3a67d.js",
    "revision": "5dda18da3a58487a68e7e75c3dc34e21"
  },
  {
    "url": "assets/js/10.6a511a28.js",
    "revision": "c869329aa1839d7ffcbfbf99969feccc"
  },
  {
    "url": "assets/js/11.13bacb3d.js",
    "revision": "eae3011b3fffd805e484c4cf3f3bd18b"
  },
  {
    "url": "assets/js/12.d0670832.js",
    "revision": "fba7a160c920a06f2588135e347a71c0"
  },
  {
    "url": "assets/js/13.9e41dfa3.js",
    "revision": "ae698c6f2a6431efcc98e5ed4c5c3860"
  },
  {
    "url": "assets/js/14.ed7310e5.js",
    "revision": "2ac7a00a706857dae484c833bb2c1b3d"
  },
  {
    "url": "assets/js/15.4eb1ac8d.js",
    "revision": "69a312e22cfcfe5d6d0f6645511be815"
  },
  {
    "url": "assets/js/16.7db1146b.js",
    "revision": "5addbf1a68e7aa34985412965389ac59"
  },
  {
    "url": "assets/js/17.f374ec1f.js",
    "revision": "03b1a243615f47bc2b6985b98c308306"
  },
  {
    "url": "assets/js/18.40321d49.js",
    "revision": "e70bb490a6975ff16ae46e387a542dcc"
  },
  {
    "url": "assets/js/19.4e0dc49a.js",
    "revision": "f9a96d946e1a9000c27015154c330db0"
  },
  {
    "url": "assets/js/20.a2a95df7.js",
    "revision": "5a77c2695fa24180b22a2281d50d77cd"
  },
  {
    "url": "assets/js/21.32b7ea87.js",
    "revision": "123a73c844f3fac82b07aef076b08432"
  },
  {
    "url": "assets/js/22.0a571eff.js",
    "revision": "6bdf72b56151a6505b030e86b243e9e8"
  },
  {
    "url": "assets/js/23.0d4191a4.js",
    "revision": "a790eeca4138df758a24f6caaa85051d"
  },
  {
    "url": "assets/js/24.887ce52a.js",
    "revision": "c8d110d27d2aa68134a1c99f636f177d"
  },
  {
    "url": "assets/js/25.1b59d592.js",
    "revision": "3dc1cfd10ddd9163da1db6df13dad800"
  },
  {
    "url": "assets/js/3.5a0164dd.js",
    "revision": "3e97c36afbbaf5db9df16c2114abbdd6"
  },
  {
    "url": "assets/js/4.aeb50a61.js",
    "revision": "85b81ef64ca3f7a6a7a03b1352190741"
  },
  {
    "url": "assets/js/5.9d920212.js",
    "revision": "ad0e822df2c2d0fd68ca4f9243974b9f"
  },
  {
    "url": "assets/js/6.4a5c29cd.js",
    "revision": "1d402ea7d57516e4dc005b3b7c2a7953"
  },
  {
    "url": "assets/js/7.72cdd5ca.js",
    "revision": "62f5288f546a988bdf31b525bcb74f95"
  },
  {
    "url": "assets/js/8.6954aaa6.js",
    "revision": "22fa7e3c816942d117373cbb6db3c724"
  },
  {
    "url": "assets/js/9.9f03ab66.js",
    "revision": "2eb595dd0724d882d800633c00bf1744"
  },
  {
    "url": "assets/js/app.8bec73f4.js",
    "revision": "e4dacae4f2ac3ef1c8a5eb88f924eccc"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "42c95d602774c84386b03b91086d3c47"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0e7190e62be591c91e563921031f88c3"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "2c057ea806060e372ed93b25a9cca1ed"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "82dc8930926eebac1fcc6c6c3f098da8"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "f1cd49a4b244a8de1a6e259c430424fb"
  },
  {
    "url": "categories/index.html",
    "revision": "95d206bba65640eb7f893d686ee683d1"
  },
  {
    "url": "categories/js/index.html",
    "revision": "f785cad57e9480b2953dea6a731dd5e8"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "4c36332252fb3ff974f2f4fae836bf97"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "eb3e4244dbaf580a233d21c8138e56fb"
  },
  {
    "url": "gametime/index.html",
    "revision": "98e9ddd74d9773ac4a5aa3262e5fc0df"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "63fbb1ebbf34d1ac1ed2caf3133b5d29"
  },
  {
    "url": "message/index.html",
    "revision": "a9d6bc601833524789cc22e838aa0b99"
  },
  {
    "url": "movietime/index.html",
    "revision": "98ce49fd6b7cadc7fd1c679cbc8077f5"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "78b507a25a2519c011a9ac548d96c490"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "d4b4f1719ffbf450167375aeb74610ea"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "8e6257e0f5c0967b6923a11ecea48623"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "ff757697754531ae5269eae04ed321cf"
  },
  {
    "url": "mylife/index.html",
    "revision": "3b49bf268bd6a977d9a945a4c317f0a0"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "b983ed9955f731119fa8b26104112285"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "6d20b411c31414886b407fb6cf2d4472"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "5296cf07aa62b1796bb1199935b14c2b"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "16d874cac40f2e15cc0f602d5f7ad375"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "57b986019b145c649c254ebd055975d4"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "227b6975cd17f1be2aaed084da15b91d"
  },
  {
    "url": "tag/index.html",
    "revision": "cfe16eaf5d5732a029b38b566e7d79fd"
  },
  {
    "url": "tag/js/index.html",
    "revision": "186781b1fc06fe86d43a3c884a57b650"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "ae3bae7a43768a0b526ee3129684c2cc"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "b0090e8e6b27a66f378bccd33c80e6c8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "bcf0001399bc7febc2424a2bd97fb4f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "29a23cbf41b819fb69a800a83d7c40de"
  },
  {
    "url": "web/index.html",
    "revision": "fbafac9b2a0750a23dae9364c7d4d7c7"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "a8e2992d4e2332502d80616841dd068e"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "b5c318bc603b494e8591726d5a0a37ab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
