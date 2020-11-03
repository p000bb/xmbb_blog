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
    "revision": "84a7f4dd95bc0d5b0923219756b8e3cc"
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
    "url": "assets/js/13.6c9b2563.js",
    "revision": "23be8524bb52b8c8a7fb96eda4dea4a0"
  },
  {
    "url": "assets/js/14.b48d1565.js",
    "revision": "f4070460d836ef7f8f3ecb2edf52b4f8"
  },
  {
    "url": "assets/js/15.de0ed862.js",
    "revision": "067a3dc3a1d9cab67d9b2d980985d08e"
  },
  {
    "url": "assets/js/16.22bac513.js",
    "revision": "51a9db46972fe33188faf8229f93f702"
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
    "url": "assets/js/app.60047904.js",
    "revision": "259d97f3056960ea6067ed22a4d1e1b8"
  },
  {
    "url": "categories/index.html",
    "revision": "ff07d683d22d5690275fbe7aaf0a11d5"
  },
  {
    "url": "categories/js/index.html",
    "revision": "038b6f3b30758a9cb5c3ecc88be4d128"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "8a2657223ffa4abb4ec13bfe1c3e1db6"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "03434087931fc45664b48be4dd8c28ee"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3b04275eb887101909100483073a527e"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "cc93cc65d4ac18be21ed078e78168c33"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "8f7666e0246899c3b8edff0b93c93cdb"
  },
  {
    "url": "gametime/index.html",
    "revision": "f4fd6637fbd8d212fc2c07663130e2c7"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "d23c5a4fffeaaa0c7810f08abcfd5fcc"
  },
  {
    "url": "message/index.html",
    "revision": "e57097f092ed9ff0d83871f616121b40"
  },
  {
    "url": "movietime/index.html",
    "revision": "1d8b63d16d73487e97f56971bed73797"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "5b5124dda9001a65c5671e1c13bbcf3c"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "db70ed0c4ad62ae7670639ec2ae70bca"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "585afe3e3c570429445533f91409793b"
  },
  {
    "url": "mylife/index.html",
    "revision": "561476929d20cd72aa4315737b4f3a18"
  },
  {
    "url": "tag/index.html",
    "revision": "1e2b8e9b3c099a22e295e0d1c8895ddc"
  },
  {
    "url": "tag/js/index.html",
    "revision": "dd2073c581ab291fcadfc9fdb9c91aff"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3121794471e65925ad8b7c26e4b9d56b"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "6fd3f22051f5e52d4d6346ff344db0df"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "635d75dd96cf7a390fd889e27555fea5"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "0559d53f1c989d11506d1794f194159c"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "1722e939a7bb07602216e69a360dc475"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "cda2558a804f2e76da053db3dec266be"
  },
  {
    "url": "timeline/index.html",
    "revision": "ac9e317adc4d9e1bd112dc0cb83c75e4"
  },
  {
    "url": "web/index.html",
    "revision": "db7a36365d43e05b4cdea3cd0bb6105f"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "f8270c2b271b381fb6932b245ad53d35"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "3161bbd0c19d8c3b7c49328ce92a57da"
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
