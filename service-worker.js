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
    "revision": "128ea6ba33e9defd434393ea599fc710"
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
    "url": "assets/js/app.b94ec1c4.js",
    "revision": "e0551f185f1fa48440a8a6600e49974e"
  },
  {
    "url": "categories/index.html",
    "revision": "e563b2f6fb3d497a6df645e9f99df342"
  },
  {
    "url": "categories/js/index.html",
    "revision": "2db8aafbbafd8a856810399e33ae38e7"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "c9b46b6c282df764deeb0a5ad8c46658"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e7e0d53b50ca67d7be62dd227a5c3a6d"
  },
  {
    "url": "categories/本站搭建/index.html",
    "revision": "93d5767ce38e82bf7b29c4e8b49eef8c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "50eca09e7fb61d8eee7017cbf66a13b0"
  },
  {
    "url": "ce-shi-yi-xia/ce-shi-shi-jian-zhou---fu-ben-2-.html",
    "revision": "aefd1739fd9b79dd4eb8c7f56cf3c36a"
  },
  {
    "url": "ce-shi-yi-xia/ce-shi-shi-jian-zhou---fu-ben-3-.html",
    "revision": "a17ee4c68d638ca3188d02141da0388d"
  },
  {
    "url": "ce-shi-yi-xia/ce-shi-shi-jian-zhou---fu-ben.html",
    "revision": "5222a5950052f6351213c91dc615bbd7"
  },
  {
    "url": "ce-shi-yi-xia/ce-shi-shi-jian-zhou.html",
    "revision": "455a191a2353314e4ae3fcb731a7a4e1"
  },
  {
    "url": "gametime/index.html",
    "revision": "f06fdea6a41cd617134c81b73a2391c9"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "eb07b2b626a0b0cd38e9803fa9b283d7"
  },
  {
    "url": "message/index.html",
    "revision": "9f5f6258a5bd13bb301acaf33197dee2"
  },
  {
    "url": "movietime/index.html",
    "revision": "a466f2e12b83d861c3f4be0ecf3bbe3e"
  },
  {
    "url": "my/index.html",
    "revision": "8c112c8129f90d9b09770c21fc2cd932"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "9f802b0438a4061ce88b55b7137a14fb"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "b476a07f8db4e422608181cced47a4b9"
  },
  {
    "url": "mylife/index.html",
    "revision": "5a98a48b1824a85b78fe015e77e450ca"
  },
  {
    "url": "tag/index.html",
    "revision": "0a4edb87be0012c067eac31b3598b45b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "77a97c62c537497a6efa7fbef501e888"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f6dfefabe742c29baf3b410b4378b5a5"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "6789daabd7ec560bd130943a1b213297"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "4f4bee593a82a96d1b1094205885396e"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "587274873697a76f88f0a258f94463f5"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "82f23eb4af818c74de0f8a9cf1d68e1b"
  },
  {
    "url": "timeline/index.html",
    "revision": "69be907083af03ae168138df0432ed6e"
  },
  {
    "url": "web/index.html",
    "revision": "71f2f334684fe4cbe34c33f0fd0bc6bd"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "d93539cf3edbf972e40e5173b75f751a"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "16c914672a464521fedb107789b78fe6"
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
