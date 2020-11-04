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
    "revision": "934eb616396fbdf4e3f7f5576aa73668"
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
    "url": "assets/js/app.f30b4e24.js",
    "revision": "a7fc3784a11009e35816167b902c0f65"
  },
  {
    "url": "categories/index.html",
    "revision": "937783542981cabf4f836b8a46677d7a"
  },
  {
    "url": "categories/js/index.html",
    "revision": "c8c349a18b90384523367684b30c3c7c"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "73318f9314ba3b69156a189a7b2fd883"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "a7a2e6ebde64a1cd2062798a868a045d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e9341b32f941aac22aa17f83ef604a8a"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "37f463129465484a0133273b598ca04d"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "799a9dbcfaee473092b52728f298ae08"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "7a3f16c65a79cb105efae23dafdd234f"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "bd7b580d2b359025b93f875f931037fc"
  },
  {
    "url": "gametime/index.html",
    "revision": "35d62144d6972244e6331ff9ec58e1bc"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "20dca30f93f411523705dcbaa3b12776"
  },
  {
    "url": "message/index.html",
    "revision": "348d1359232f1087443c5192dfd18bd6"
  },
  {
    "url": "movietime/index.html",
    "revision": "ce6927355c822b8779fd982cb5c7dd16"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "39c16e79abe3a15171902d33881ad1d3"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "12c30b5056156ae098679b4495b037f9"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "2b0ab0f336c5867fc1aac41188698c0a"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "802ed3ec347a130923679922c8a9782a"
  },
  {
    "url": "mylife/index.html",
    "revision": "bc46907d33dc957027ab0205a034d9df"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "687ce131c0b18118cfabec200dbd3582"
  },
  {
    "url": "tag/index.html",
    "revision": "069e9af5ee7474e89de263e43fb41137"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e4f265744e7021eb8c3a56171c26f67e"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "5edbb7ca04c8198facd441eafdfcfe60"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "89e2e2ce55549ac1b3ed203e448a3fde"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7123ba0b181d26f2282efa2db934d3a7"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "23e593527e9cdc8cceec8d4bf92efbf3"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "717a9ddcfe029068d5163566808a7270"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "ce94f764640ba463d36fb30660bc6a60"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "f05160b9bea155ad858b6d3849dcadf5"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "8abf8dc8629b4db6f5d4e09645d9e1de"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd15eec4550da4a0769763e757cd2fce"
  },
  {
    "url": "web/index.html",
    "revision": "d908db258adea2768b5d1065fb711a2b"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "f1f4e9832e089112fe152a3256011c4a"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "549d0475615fb5e1e8c0cc9136b661e3"
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
