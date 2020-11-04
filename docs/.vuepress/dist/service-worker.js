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
    "revision": "988e17b33b8a016fa697a701fad2cd94"
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
    "url": "assets/js/13.f515e619.js",
    "revision": "f37371137f6d203f2e6c84d0f2ad1079"
  },
  {
    "url": "assets/js/14.b48d1565.js",
    "revision": "f4070460d836ef7f8f3ecb2edf52b4f8"
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
    "url": "assets/js/8.b733e12f.js",
    "revision": "dbfbbd20a7fd1ff786ea54849e0cc3d9"
  },
  {
    "url": "assets/js/9.3f3da68e.js",
    "revision": "96b80a28691298893dabfe110cbc780e"
  },
  {
    "url": "assets/js/app.58844caa.js",
    "revision": "431e97af49ca60c3594fdedb56c38240"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "f541c81e7ae3324194ea51d4d3c25ab4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "79302eca5eea143ebc58cff46c68bc95"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "a08d1f6b83e0ad4f40faa6c79a6847a2"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "767623f8e742d83f968aded068ded0b8"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "6271495014bb3b7d9b8f1c7ee5879ad0"
  },
  {
    "url": "categories/index.html",
    "revision": "ac6c2de02e948f4e57b35f831b7d67da"
  },
  {
    "url": "categories/js/index.html",
    "revision": "7fb6fe05278ba350145898b23bc04f23"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "c807fa1ab00a730851b28db2c78ade57"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "44003fdcf33f15e710e94d08585c10fb"
  },
  {
    "url": "gametime/index.html",
    "revision": "584cc42759b9d63a25194ba5696a0bf2"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "43b2bef5c0b24705b1f55ec579d732e1"
  },
  {
    "url": "message/index.html",
    "revision": "4c906e68a3b84292ce155d1c23869c3d"
  },
  {
    "url": "movietime/index.html",
    "revision": "280ed0891f6ac4e0f611476f77258e47"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "1f8a0bab47bf3971f2f940cf90808b8e"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "2354f4c41c7c671913f9ce17a36cd33d"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "a33984fdd9b0243023ae659a528f0a68"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "522ff408b4c9711d8d694d3818e6628e"
  },
  {
    "url": "mylife/index.html",
    "revision": "3cc35f31ed77234fbee18e6bedd8d366"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "86e2fb82371f0659352cfc74113899f8"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "4d6145d49af56a9e4592ace75f20d529"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "2ae4c8e2a310bede9f05f5e24c3cfdc6"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "18cdcedadc003412b0e963af0d00f1d4"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "8aaa0d0737fd52c2459abac1b408e5e3"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "6ac46092074c22427af4c8560d7afeed"
  },
  {
    "url": "tag/index.html",
    "revision": "79bee38f768c5063986332ecb28bc57f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8fe47990858e7be071badfb19f41a8a6"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "36f03632d03e8c78499fa7634f244f0e"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "4727a7f2f036e1dba7e27c57f0d3a338"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9d8dc5f9cd45d850f04797e0ac1d5e6d"
  },
  {
    "url": "timeline/index.html",
    "revision": "384e43567bf8abb7c4e432d4ebb9aa83"
  },
  {
    "url": "web/index.html",
    "revision": "221201ffef84c618326fee7e349612cb"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "dda5ac297456ed67f91c783f69392e06"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "0460731fc38433f54a7cbf4331fa24bf"
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
