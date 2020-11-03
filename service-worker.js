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
    "revision": "85bb5b88a77cbc7f94560863398e9d14"
  },
  {
    "url": "assets/css/0.styles.145db4a4.css",
    "revision": "b765ed0fa92967e05469fe3cac251d43"
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
    "url": "assets/js/1.4aa6cefb.js",
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
    "url": "assets/js/3.59a5ed13.js",
    "revision": "3e97c36afbbaf5db9df16c2114abbdd6"
  },
  {
    "url": "assets/js/4.3bae252c.js",
    "revision": "85b81ef64ca3f7a6a7a03b1352190741"
  },
  {
    "url": "assets/js/5.e3c6653b.js",
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
    "url": "assets/js/app.8f932f26.js",
    "revision": "2a3821996a86c4d373c3f31cefcf50a7"
  },
  {
    "url": "categories/index.html",
    "revision": "6237773e6769cbbcc4c32bed5d01412c"
  },
  {
    "url": "categories/js/index.html",
    "revision": "a3e5f754beb65ef77eeca73f8022246d"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "1ab9b230d32abe950210ca91357e08c8"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "952dc67c065fe2e50f0de211e07b9fbf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5f9366ac1a7357ed0d1d32319aa74120"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "cc854e239900ba454a0331ed12c02d4e"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "039a955505d1f05e755fa2a977e6c1b9"
  },
  {
    "url": "gametime/index.html",
    "revision": "65f7b0d706ac1e5e32c7f0c89dc9e4b6"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "49c3ebec1b9cbac5ace76348e5922104"
  },
  {
    "url": "message/index.html",
    "revision": "cb4a69b574e64f1c28583ebfc914bf6f"
  },
  {
    "url": "movietime/index.html",
    "revision": "3adea99e2f18a2fb91bff96d4777189a"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "a9d2000796e698e87b801fa0671ceb35"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "0e7bbca13608274335f60ead7336fc58"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "ea7d1f0e3782b1341cf1fefd5817e762"
  },
  {
    "url": "mylife/index.html",
    "revision": "f11c430d21b3a22db99fdddc70030d92"
  },
  {
    "url": "tag/index.html",
    "revision": "0e45d28db005af584c3d1211e9004e18"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8d2bdc9f6d1c45f22f85d190d76a386a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c8b4b9145a8e22b9a4818a0d9bc35867"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "09423ee693f145dd57461f825bf0cb1e"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "347e7dafdf6124f235d2e390cff3326b"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "f043d08c3b5884552299a13665e07909"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "80314c9cbed475b13a9ae3e2cb738866"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "2a7fdfef3fbffd0561a09bd677ceee60"
  },
  {
    "url": "timeline/index.html",
    "revision": "6672b08b2ec0036025baeec8d07dc1ea"
  },
  {
    "url": "web/index.html",
    "revision": "0ec9527c7689f5aeb019707cfb8734af"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "8e72b396c3b91bbf42e8b80577148b3c"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "a845d8e72d9700219c0d360b21c3b0f8"
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
