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
    "revision": "1e84de9761a4bb4d20fb2efd4a3d3245"
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
    "url": "assets/js/11.aa1b4717.js",
    "revision": "d00cfecd9d49ea0c9ae802909eeb7561"
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
    "url": "assets/js/18.48420f92.js",
    "revision": "23f953c38548a2a4f369b01312dda2b0"
  },
  {
    "url": "assets/js/19.323e3b0f.js",
    "revision": "62d5933c6bf327b8d47efe48d808454e"
  },
  {
    "url": "assets/js/20.436bcfe0.js",
    "revision": "b822fb07f11f42ce09accb1bb3c2ef7a"
  },
  {
    "url": "assets/js/21.f8a381ca.js",
    "revision": "d50c5fc7c4d627737d57b57049bed8ec"
  },
  {
    "url": "assets/js/22.163bca1c.js",
    "revision": "5ac1726a2dd44ade8f55e03cb2ed309a"
  },
  {
    "url": "assets/js/23.6498b796.js",
    "revision": "c563f5e303fe00b90014d24e3626bca2"
  },
  {
    "url": "assets/js/24.647458ab.js",
    "revision": "3acd342cf93460fd1b8b2c136de690e1"
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
    "url": "assets/js/app.8ce92a12.js",
    "revision": "478ed8e856013e562818940f69fe8b03"
  },
  {
    "url": "categories/index.html",
    "revision": "c3796fb44f74b0f8d4d21de25d2413ac"
  },
  {
    "url": "categories/js/index.html",
    "revision": "488c9fa46d58bde6d663a611ad8e5511"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "1f63fd961c5a9a808fc0cf918ba2897d"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "e2ea068bea725261eaccaab1d6d2c77b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f3bf0c53b7b1f7261204790ee3a5c4dd"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "80c161f8da2d329a0ede074e446bd1e9"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "ae0d0af3e2e5c02b5424de067c536fbd"
  },
  {
    "url": "gametime/index.html",
    "revision": "04bfb31a6a81c7a7a7b88cdeb8d4d632"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "7764c5288e67a597d07d7982f30751f9"
  },
  {
    "url": "message/index.html",
    "revision": "d30067646ba7784bed4dfa02a4535784"
  },
  {
    "url": "movietime/index.html",
    "revision": "3ef821e9eb4bf449fdfe4fa1f980b276"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "fcafa1d3608faf7184fcbefef5f85e13"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "643aac749a35c78ed13bf537fbaae4f8"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "46e489445fec7907fe4b8a8c359202ca"
  },
  {
    "url": "mylife/index.html",
    "revision": "e2c59a7de9dffa2588f91035b48213fc"
  },
  {
    "url": "tag/index.html",
    "revision": "6dac3b1f6ebf5f8b58e677b46e7a6e74"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6317fa16b6a147d392de4596d5e7e16b"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7bc5e857901de5c89cc8b53b1f4b5cfe"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "2b1fc3c8bc034ac261f8ab1e932e691a"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "c212db03faed3fdb1bddb3d55e3b2eb2"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "f4c7d92d9f44fd782ab2fdeb7ea84e81"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "507aa9302a02f894dbf219e0573337be"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "d4b6f9d24d7446f4cc7a3087d2d96903"
  },
  {
    "url": "timeline/index.html",
    "revision": "85abf74c37b2a55db55ebf60426974db"
  },
  {
    "url": "web/index.html",
    "revision": "98eed609981dcce6f5e0f44541af8bdb"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "9a2d1b2716fe86d10496a90e2c0ab8c1"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "8bd15d402c9c42f41691ddd5e7b738e5"
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
