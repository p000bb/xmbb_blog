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
    "revision": "ec150f5e57ec419cf868e6a9261073bf"
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
    "url": "assets/js/app.3cd3379b.js",
    "revision": "3fad964fa078e4496b51941b59df87eb"
  },
  {
    "url": "categories/index.html",
    "revision": "313b617d8f6f366c36bd2ea38a06350c"
  },
  {
    "url": "categories/js/index.html",
    "revision": "e17ed1707aa8e3a355424444f3e64537"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "cac4d1336b47d05306be85daa548e5c4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "249cc1b65b825876868e9ac3b93a09ba"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7191ab9c347c32f5e869ef9f37c5af9b"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "5bdea9131f7d4febb1dc44e239000fe5"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "17fd876c5d730264ae080b8bf4cc418a"
  },
  {
    "url": "gametime/index.html",
    "revision": "90979947e0b8c1ee9eaf2e71f57747c4"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "926d9e923a92df9021111378e57b9756"
  },
  {
    "url": "message/index.html",
    "revision": "973c440ebf07aa26d763f044df369f08"
  },
  {
    "url": "movietime/index.html",
    "revision": "a77ffe507c5362b6a50a4ecc35770194"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "6e034da4ddd5cc279d4e380da053921f"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "df7da953f8706923947b4630f0712ca3"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "d0ebc0944cd2ced32cfba6e706feab22"
  },
  {
    "url": "mylife/index.html",
    "revision": "1c5a0df9a0a49a8ada0f68bf7391f9ba"
  },
  {
    "url": "tag/index.html",
    "revision": "2966c8e2797750cc6649050d5ed8937e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0ef04ff37259208f5c4d03179ece06eb"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e78d35f66773a8fba044ab6b10065e4c"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "a13d3488bb30f225ec126a2a21aa36bf"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "676362a0139733ca5402f1c21ff2fa3d"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "3b34c021d6bc897fbb484ba3ba309a0b"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "a5f54ed493aef6031c8506845318acde"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "4ff927a1b04196631ceb9e26771fb162"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a77c024a09710451b52bf165154008d"
  },
  {
    "url": "web/index.html",
    "revision": "127944470067a47ed88430ba84d72331"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "579d60889cb5cca902de2a67bafaffbd"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "d868d8462cacb22cd86181938a5182e8"
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
