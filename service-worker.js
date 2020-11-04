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
    "revision": "c5a25258369c0df4f65db66b0698f89d"
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
    "url": "assets/js/app.9f397a39.js",
    "revision": "01b00b87482e5b398d7fbb40fad45879"
  },
  {
    "url": "categories/index.html",
    "revision": "45c8e1b2558777c1d2cb87925b66c732"
  },
  {
    "url": "categories/js/index.html",
    "revision": "adb380df1ba5c6b90e66a01d94489cf4"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "b5362d54dcde569910b306f60c7a513c"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "c48f96d1d89dcafa017e1bd6d0215b98"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "df4c4b415b81dff5196d556f5fcf92f6"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "0d6d4a618bba129d3d48e3e5f2fc2f6c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "3f89d6fe98aa76ac0f7a0da65a82e3ab"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "e273f77532c990e35df7f8005c60abb0"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "3fdda3b82be967aa0b0a364cbd1211fb"
  },
  {
    "url": "gametime/index.html",
    "revision": "5f9687accfef79a89c8441485560e407"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "3a18fe82d5641b7fecb98a9173a50919"
  },
  {
    "url": "message/index.html",
    "revision": "ccba3b85c778260de16dd9b1652bb027"
  },
  {
    "url": "movietime/index.html",
    "revision": "04def37a80e83d99ff8ba94d9e79cbbf"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "37df078f3291418a00a3653b0165a743"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "c2f4095a063db1deb2551a12b7630ac7"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "4211e4dceb63a99929f40c15b34d5f00"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "3257815e1b03218b91cb5a80bd8a05ca"
  },
  {
    "url": "mylife/index.html",
    "revision": "888247bbdab8b65aed3a2192ef2eb6bc"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "6f83ce362f4787e1c505951b75bee94e"
  },
  {
    "url": "tag/index.html",
    "revision": "5c296a03731755150ac8fe48bc3f8e66"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e7b3cf2cc4bbd4b443b46f71b061d999"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "0878730c8d45812173121a7f2c43a4c3"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "74c8e150207bb67a150fe17ebde8b64a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "b6648d9567944fa1384efe1dd1a7bdea"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "c0d9da796dc8ac35cdda6f43e49e79a4"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "73e0dcfe5746bc791109130c5729ce70"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "66abbeb136d531467f54c8e6357ca5ec"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "1cff22447bbc32e456767f56d2422542"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "bf06de770777c6dee30636e8ea3475ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "715ed7b7f928d0db96dcde075e6aeb21"
  },
  {
    "url": "web/index.html",
    "revision": "f69e3b947174fa994e9d1bb72966fb73"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "fb3e8da4d0f67901d447f87664c579e2"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "699913ad4e30b10842f97c3c6070cfb7"
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
