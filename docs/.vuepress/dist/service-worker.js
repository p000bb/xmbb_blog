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
    "revision": "b60c2c5977aa944f9e8fcf3c7533b0f3"
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
    "url": "assets/js/20.89e278aa.js",
    "revision": "fbc2db550a683150c1fc0bd387c30e3c"
  },
  {
    "url": "assets/js/21.99850520.js",
    "revision": "eacae798181faff021ba0d5e6921c2c7"
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
    "url": "assets/js/app.8bea3ac8.js",
    "revision": "81d101381f2b5efc032ad634730d689e"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "d134560b1eed02752cba81a85e3f5501"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1bc3b7727d84f2b6ff9524e4d3d43039"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "c790e9a358134ac1ba36930d428949b5"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "9037b21d686374db66c9a05f4663a1be"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "41c76ed1d3e0e270493170938c55b9af"
  },
  {
    "url": "categories/index.html",
    "revision": "15ff6e5d66df377071b5406fd2a28b4b"
  },
  {
    "url": "categories/js/index.html",
    "revision": "95bec1d48ee5850f8f04bd0356565513"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "0ec16ab27f166451bb802c97fb87ea83"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "403ad81265df20dd930c65d8475c8a05"
  },
  {
    "url": "gametime/index.html",
    "revision": "420c9dce07343ad949edbd8830b5132f"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "e2ed0e4d16c3c8b59bdbdd47c0ed5287"
  },
  {
    "url": "message/index.html",
    "revision": "e2814174ce05d9b07c0a73cba033a8ff"
  },
  {
    "url": "movietime/index.html",
    "revision": "87eb78f4f89e3b70a9c35812cae59b6a"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "64d39676a2618e1bde8c3cecb69d7619"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "e755167490e1adb36f8c35f4793da15b"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "f11571792876a7dcb00d9247e9c5dfe3"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "43d16c27471abb28f27407ebcafc7605"
  },
  {
    "url": "mylife/index.html",
    "revision": "7b444102f054d1b5b7c2f4fab2a5e615"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "4b5f324430dc26b935ec7e59bedc95dd"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "40e39737a05634cf742470f00eeeede3"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "a65b5b2042109e9af4df0f1356c029ce"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "d7b5ae500e226740048ae091a0689876"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "60fcb79595d7d9edd22f29dbfffe5457"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "bba13002d8768b693a9e7c540a376a0b"
  },
  {
    "url": "tag/index.html",
    "revision": "b28e25e364940146ab2fac3ac46592bc"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f14bfc39385e40141a546886ff3d0b6a"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "0f8885f858aabbfa00957b5f8243b2b2"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "b828f6fe5170fd83337007e04136af07"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a8cd0fd141599c19a851f820064ce449"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb94b5f3cdcc68339e88610ad3803ca5"
  },
  {
    "url": "web/index.html",
    "revision": "13053d56d0816d590d66fa06bf2ac2d5"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "071e595f59b9aa48f0229093fb92be2f"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "857bc9adbb8a0789c0da600f22feb6f0"
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
