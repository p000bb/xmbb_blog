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
    "revision": "cd134d6847bf56192aad6db29341f6b7"
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
    "url": "assets/js/app.8b92e72e.js",
    "revision": "394adf767d709fb9b9d40e0697f68a55"
  },
  {
    "url": "categories/index.html",
    "revision": "a15881d13f159279908cc2f683f7b33e"
  },
  {
    "url": "categories/js/index.html",
    "revision": "b559359070e9293c7ad325471e10cbea"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "2864dbf7a86dc7f39df253c7a0bb5d50"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "1e42ab5105bf07b38d9e80a5362a3810"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4115bd8bcc1fd9985d591c1454a857d2"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "41a7572cb9a6cc6be5194d066957437c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "aba6d879aa01ab7ee1ee3fdb8ff0eed1"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "7d5a0312e1cfaac18b8a1248fe768cd6"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "01e0ac2e1d37e163866c416ab24b6a6e"
  },
  {
    "url": "gametime/index.html",
    "revision": "05122442470e23288cd27fdb0ed993ea"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "aaa8d7aac3c2e27532a1ec4e72dd2b57"
  },
  {
    "url": "message/index.html",
    "revision": "bcbb797a578d0209c369619ecf6b75f2"
  },
  {
    "url": "movietime/index.html",
    "revision": "0fd9a6766ef7ac64db48bd4b697aee28"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "e7dcd6ca4f6508e47d438fcf8200289e"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "0372437ee1bd839881405f49bda8bdec"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "c558c07bc4c525a4219e249d561ddba0"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "27d019a9d1c946472466c7294a127669"
  },
  {
    "url": "mylife/index.html",
    "revision": "572de4e7a17bcc8c172d3ca62b9f72d9"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "4e2f82297f9c1009d9d9ae0ea2dd9d5e"
  },
  {
    "url": "tag/index.html",
    "revision": "8744d4ea1ac76844ae772ff83b88d4be"
  },
  {
    "url": "tag/js/index.html",
    "revision": "b5132d911712e197cd3233e562d67382"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "35774376ba63bd44fd7f7cd948e75758"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "db4f858a49dc367f1a0caaa73cea0772"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f61e7e8e9a1b496311b16756892e82dc"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "c4238029a2ee2e5e800a8376df03e149"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "32e475dbfe854ed9a5cb0b94ccd3e208"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "5ec8950dcbe92c116747bcc38179042d"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "c1ad36b3016d12938fe63123a43a741b"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "6c3372f8ee80ddef7aa6da1552a84035"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9fbda95d6d1cdfa118605d0e3f212c7"
  },
  {
    "url": "web/index.html",
    "revision": "e3e975235409f1ba75700a39263292d3"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "c413e705bdb4534187691850783ba3de"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "0ce64958bb5f9a791195581ba59bb5fd"
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
