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
    "revision": "3a149738a8720b728c3c704ecb212a77"
  },
  {
    "url": "assets/css/0.styles.81c214c6.css",
    "revision": "2b26a6b94e57257289eb3688e05bc195"
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
    "url": "assets/js/app.2a3bcae4.js",
    "revision": "530b30928100ebc1acbdbd2fa29b3f95"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "5b64fc681bdcfa4973afa8de83bf42b4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "12266afb3ab3e7224e172aa48a816bb8"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "b34bfb160ae9a78d2a24b630d00c7b6f"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "e10999445d57f7098c1026f4270cb627"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "8d1970857ea53e9b5658ce348bdac325"
  },
  {
    "url": "categories/index.html",
    "revision": "e9aa733ec6917221fa82ed3021f3e839"
  },
  {
    "url": "categories/js/index.html",
    "revision": "6a45d26c930348fa015985f9fca6ddd1"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "6a7d9e30838aace7163ceb7fe74114ae"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "3166cc90029d8b82424b579ce1a31f26"
  },
  {
    "url": "gametime/index.html",
    "revision": "3c91fec07e5c9d39fef3b2e8ad184380"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "7373ca9c2e498104efc45853881ebcb8"
  },
  {
    "url": "message/index.html",
    "revision": "74e4b4e112ef0a6785f770469400a180"
  },
  {
    "url": "movietime/index.html",
    "revision": "caa291e929877d541301d69718909988"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "34c62611a86eb797e0a90391d2248355"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "382128cb7183ca71ed2cf85bc2759a64"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "1301241aaca3d57899d74acdba235ed6"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "5c1fde5d0112f3170d3a5480d8a2550a"
  },
  {
    "url": "mylife/index.html",
    "revision": "444ed89851823839c4f07c6e6245e1d7"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "2f2b6d27dd03413cb91daf15ae6cc0a4"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "83cf0b9dbe28f161671949a16bac40f2"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "df5c1c532882cefa782318e174a59e58"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "38477c859f89fd11119b37a19ee340f5"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "c7a9263e84ce4b8f19d8040cdfbb6abd"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "7024e35ab59e33da4091852922910a8b"
  },
  {
    "url": "tag/index.html",
    "revision": "6648e393f267255a092d4d6f33ae7a7e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "824c24d441218b988a742dae076c1b6a"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "8a034e0d16198a2829afe0b88f716a79"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "8c6d9df49d5aa62fc610874befe6cb02"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "522123de04d40522d5c889ec5828c802"
  },
  {
    "url": "timeline/index.html",
    "revision": "8bd44bde5d4f5c0d57958aed381050f0"
  },
  {
    "url": "web/index.html",
    "revision": "f6233df1d82af8cb7d95ae5efcadb26e"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "c3ba685e0844dbc0a8a3263b5c03f0ba"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "931ddcac0877810fb51395e3198830eb"
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
