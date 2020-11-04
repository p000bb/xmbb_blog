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
    "revision": "a58e5b51ca9ef70fb8efdda42e1d188f"
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
    "url": "assets/js/1.9199ae9d.js",
    "revision": "654aeadf1650448e2ce25c9e4df3b0e3"
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
    "url": "assets/js/15.d252ffec.js",
    "revision": "71d0e29c080625119fac6e7b14db9479"
  },
  {
    "url": "assets/js/16.22bac513.js",
    "revision": "51a9db46972fe33188faf8229f93f702"
  },
  {
    "url": "assets/js/17.d75d48df.js",
    "revision": "84586c7a860090f83a988e7c5b9f8835"
  },
  {
    "url": "assets/js/18.dcddaffb.js",
    "revision": "1a9ddad1e71572d0cd4f86fe8525d49e"
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
    "url": "assets/js/app.36fa2d8c.js",
    "revision": "c482c40ac47411d4b4162e29f7a5328f"
  },
  {
    "url": "categories/index.html",
    "revision": "f7bdccd609d8ef7214ee04a658ecf7ca"
  },
  {
    "url": "categories/js/index.html",
    "revision": "9ebfabf7dda700eb8e3c075b32ebd36d"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "54add596e6a5d32a1526732bee6b3ee1"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "570f0964558a063d002382b2cf562e27"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "619ae71cdea3f6553cd28575f8978fb2"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "4a736c84a55bdc8ea1d9dacb93bfd22c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "05c84ce3ca411d0a7ed063a02dbadc30"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "9bb9bffecf2c67fa40b6e9acbacf4472"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "12ae24690fe67d8d26b9f4b4ff0bf51e"
  },
  {
    "url": "gametime/index.html",
    "revision": "902eaa145452c02676a7d578f4179281"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "2770745a0b2ad5dfd9b0908e0ce20053"
  },
  {
    "url": "message/index.html",
    "revision": "02c2b29d45d00d7bec8e411ff09150ec"
  },
  {
    "url": "movietime/index.html",
    "revision": "2d9c0ed5f86bf6c63c1252315f103d24"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "a4334332788fc0db249b01af673a105d"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "560aebaa69abd33ec49325d91655ff0f"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "8c4157712245d4a6fcb3f2e559eea590"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "40bcb8e72f960bce34457a6d474df4d4"
  },
  {
    "url": "mylife/index.html",
    "revision": "4ad63e216f7eb64ec56194c90217d0a6"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "ce502b031f5cc7b5e49c6cadddb5ebe5"
  },
  {
    "url": "tag/index.html",
    "revision": "e84ebe0a5ab5fcf5e7952182651df3bd"
  },
  {
    "url": "tag/js/index.html",
    "revision": "67a3fe1455273cd0db2267c5aed1988c"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "991b48f6dc01237e78a75724a2a550b8"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "2899521a01e511db71b79d2730ca8081"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "218e96f2a72ba2081fdb6f7b1b1e7cc7"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "e4351f1ea25067e953b5d4e16df467cb"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "4996d94c8100dd505a62d4ed3091d8ec"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "aeb7037454272142443deb105fa26b46"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "27f5f228104340bacb959e14b5bc0c4d"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "6d8ed20ecafa1bfed83de66e56f8f304"
  },
  {
    "url": "timeline/index.html",
    "revision": "ea1136035df16c5320b2f4e72648db57"
  },
  {
    "url": "web/index.html",
    "revision": "cdbe4023a4e74e0bf216f41a3e15cb55"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "c2c2e9f7babcdb98847ac95265d83e64"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "7acd1352fcff799da232d22fbe67dfb0"
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
