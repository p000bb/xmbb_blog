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
    "revision": "e03cf0cb37bba6bf69e1bbcfb6eac2a2"
  },
  {
    "url": "assets/css/0.styles.47572dbc.css",
    "revision": "9481d1f7003789612efae3708c940c0a"
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
    "url": "assets/js/1.b26f73fc.js",
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
    "url": "assets/js/17.527c7a2d.js",
    "revision": "7f5a480d344a344d72cdd265f9dde3cb"
  },
  {
    "url": "assets/js/18.9b1051ac.js",
    "revision": "c80467bbc1ab08314301083e07e249c9"
  },
  {
    "url": "assets/js/19.a15247e7.js",
    "revision": "a88c76e92498e4688122cd05404524b9"
  },
  {
    "url": "assets/js/20.b9d4f508.js",
    "revision": "140953de14b1d09cc6137564c4a88992"
  },
  {
    "url": "assets/js/21.46839e70.js",
    "revision": "55d7a95a96f657196d0d1152579523e1"
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
    "url": "assets/js/3.6f9a478f.js",
    "revision": "3e97c36afbbaf5db9df16c2114abbdd6"
  },
  {
    "url": "assets/js/4.5dcb4ad9.js",
    "revision": "85b81ef64ca3f7a6a7a03b1352190741"
  },
  {
    "url": "assets/js/5.0ae972c9.js",
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
    "url": "assets/js/8.6f47e29d.js",
    "revision": "dbfbbd20a7fd1ff786ea54849e0cc3d9"
  },
  {
    "url": "assets/js/9.777a4092.js",
    "revision": "669d82fc099bf319839885da26f799cc"
  },
  {
    "url": "assets/js/app.809a29c1.js",
    "revision": "6f985723cb1cbe87811f554c9cedbd85"
  },
  {
    "url": "categories/index.html",
    "revision": "13e2b4bd69b329d253080a57e9d28682"
  },
  {
    "url": "categories/js/index.html",
    "revision": "ee06efab8760f5d2a2d4ff6fe4a3bb3f"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "da82f6b90b9c30ee74eca633fc27784e"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "8aa618dd8ac52e773c20ddcc00c4aa2d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ebda586fec473a4a9443fb37a255c82c"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "09e5587e2de419f30eacfa79faf59493"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "808fd696d8f3365a348a93096b2d8cff"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "e20c078385573277b100c7f3dff34dd3"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "7bc6532995facf6d679878c6f3ba58ad"
  },
  {
    "url": "gametime/index.html",
    "revision": "314f8c1fe173394263185676de571fbd"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "82b2fa20b3796ada42037132fbcfd901"
  },
  {
    "url": "message/index.html",
    "revision": "2c2c3e016aefc6df28ac58fab42a4402"
  },
  {
    "url": "movietime/index.html",
    "revision": "2d52e9f04291834cf0e3fc381de97520"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "87373f43075a2b927d400aa9d983a54c"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "d88550168573f0e39ea4ab4f39238ea5"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "675ae86e6f5580c32b34df57db18f3cf"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "3a28b076f68a57571894870dac7a0f39"
  },
  {
    "url": "mylife/index.html",
    "revision": "bbe234fec585d388ec396d48e2301475"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "7b8ccf3d2f1018347d03582ee735935f"
  },
  {
    "url": "tag/index.html",
    "revision": "85c8b4c89e2eef8ea46d9442dddeafb9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c716b45918296b5f8a33799b59250a87"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "8d12d5064f277b71dd54292cc0d51a5e"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "ff1277c1bc78024080a9ebb4873bfe22"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a498dc847d11f98dc978385a94bc6075"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "6872b443271887e2f524f899f8969327"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "0e2632d5b180a0b0b7801b6dd992e82c"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "9c008e6f0ce8e54d5dab483835201763"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "d6a3e6947c05e5634ce7c177a903d33e"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "d55266b3d7971a27feb127b0e7adfba8"
  },
  {
    "url": "timeline/index.html",
    "revision": "874948ab16d3b2b33cf47dbbc0e63b8f"
  },
  {
    "url": "web/index.html",
    "revision": "6d133e7389f0bb086e0e3f35d8547eb0"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "df4551db89564e064303f2df81093816"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "cf10a08096698e494cb3690359446819"
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
