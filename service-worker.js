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
    "revision": "ee783d8f2c8f95c07b32ab443fdfe84a"
  },
  {
    "url": "assets/css/0.styles.32d1343e.css",
    "revision": "fe52e4e29a70074e94af3624f7cb9f69"
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
    "url": "assets/js/1.9199ae9d.js",
    "revision": "654aeadf1650448e2ce25c9e4df3b0e3"
  },
  {
    "url": "assets/js/10.6a511a28.js",
    "revision": "c869329aa1839d7ffcbfbf99969feccc"
  },
  {
    "url": "assets/js/11.80bf6afe.js",
    "revision": "8d9603d4d7dbdb685f8055b1f904e68e"
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
    "url": "assets/js/16.4bc1e40a.js",
    "revision": "b4ba051632151f2346bf7cf25a55f0e6"
  },
  {
    "url": "assets/js/17.ff24295d.js",
    "revision": "d8426ec6f08aa9b4ac36b63a7b8c111e"
  },
  {
    "url": "assets/js/18.5689b29b.js",
    "revision": "f222fa6134c60437388b0fd406639afb"
  },
  {
    "url": "assets/js/19.a15247e7.js",
    "revision": "a88c76e92498e4688122cd05404524b9"
  },
  {
    "url": "assets/js/20.436bcfe0.js",
    "revision": "b822fb07f11f42ce09accb1bb3c2ef7a"
  },
  {
    "url": "assets/js/21.e6c1f70b.js",
    "revision": "55d7a95a96f657196d0d1152579523e1"
  },
  {
    "url": "assets/js/22.88636492.js",
    "revision": "9dee41908fd248294e0efd19899b67ed"
  },
  {
    "url": "assets/js/23.4ebcd99f.js",
    "revision": "a2c778f74f178b6a7faca44c3d66dbf7"
  },
  {
    "url": "assets/js/24.67364a0d.js",
    "revision": "11af819be4dc3c0b7b8ffa680a0b405b"
  },
  {
    "url": "assets/js/25.8f66f1e3.js",
    "revision": "36fca9ede1fbe76c673fb6cdd37b1f87"
  },
  {
    "url": "assets/js/26.a2fa5eb8.js",
    "revision": "0c0d4a60660693dc1ef0703b8c4fcdcd"
  },
  {
    "url": "assets/js/27.40de0244.js",
    "revision": "79b8cd338ccb6e910b3f3cae01c7b193"
  },
  {
    "url": "assets/js/28.20a70d92.js",
    "revision": "628b2df6463252815479ebae57317dfb"
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
    "url": "assets/js/8.21582600.js",
    "revision": "067c50c50bff61eae982dd278a31776b"
  },
  {
    "url": "assets/js/9.777a4092.js",
    "revision": "669d82fc099bf319839885da26f799cc"
  },
  {
    "url": "assets/js/app.de506651.js",
    "revision": "02d965abd0fa9680ae66b2424b9d20fc"
  },
  {
    "url": "categories/index.html",
    "revision": "b73237f9be936e2ff38c486c6284b305"
  },
  {
    "url": "categories/js/index.html",
    "revision": "745aa133b5184fcbfa37835db4ab3ec7"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "ddf6728373d76308cbd602bc47c10970"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "06bc6f2a62dcbe77df7be94c5c0bad18"
  },
  {
    "url": "categories/本站搭建/index.html",
    "revision": "00213ada936dd25e6f856b4831d88de7"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "a68216c4b04e19f94d17db7e00452728"
  },
  {
    "url": "ce-shi-yi-xia/ce-shi-shi-jian-zhou---fu-ben-2-.html",
    "revision": "04fb1118f3dbeccc339b60008eccd650"
  },
  {
    "url": "ce-shi-yi-xia/ce-shi-shi-jian-zhou---fu-ben-3-.html",
    "revision": "f2b8024af634139bbcdd82701e3be6fa"
  },
  {
    "url": "ce-shi-yi-xia/ce-shi-shi-jian-zhou---fu-ben.html",
    "revision": "d59c4abfaf825e3766115ae6b22e0cd6"
  },
  {
    "url": "ce-shi-yi-xia/ce-shi-shi-jian-zhou.html",
    "revision": "6da7b2cf769a4e47dcbd3cfde2f72c5f"
  },
  {
    "url": "gametime/index.html",
    "revision": "316ddbdf61d33997b76c2bdf8df90c2b"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "3dae1f1e8a00aa1a6eba747bacff4fca"
  },
  {
    "url": "message/index.html",
    "revision": "bfcda0aeef02ce2dc8a4a38a297e3044"
  },
  {
    "url": "movietime/index.html",
    "revision": "8c71f10380d70d5cdb9baba0ad7335ba"
  },
  {
    "url": "my/index.html",
    "revision": "209e6f9d89394332c5d530097a967607"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "da2236ce918ec4d0354e2af3524cf930"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "558fcad77aaeb3902b740b8803ce5c6d"
  },
  {
    "url": "mylife/index.html",
    "revision": "0910e061bf09ddb70d23d78427e5078d"
  },
  {
    "url": "tag/index.html",
    "revision": "ba203a8a4179e1f8f872afd123484a22"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0b1e5ab9b5b04999e428c6463ff2d4b6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7648b19a7496e6142c2c9c6a242f0a48"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "eed2aa9a92c3b61fba10a4c0ac7650d6"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "afcbe7d5f36c40a4d7644ab103f44f0f"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "d12ec424d9e1ca197f01eb35fe7f4a59"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "b5d6c6798a6f8fb53d0892bd82b3f803"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ef81cfccfeb092354d9cfeac811b461"
  },
  {
    "url": "web/index.html",
    "revision": "9021d84f3e2a3c3315edc5313e8fa2f1"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "5a818d6fa51baba6c3e21133908f36c6"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "231c9fa16d5e1e688bd360b599198114"
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
