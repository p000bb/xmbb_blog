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
    "revision": "8dceef91d7c4e830beffad5ddb063ba7"
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
    "url": "assets/js/18.464e6548.js",
    "revision": "0aa2470da52d7230570fcf8e9fb8f402"
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
    "url": "assets/js/app.6c5aacc4.js",
    "revision": "2838a31e81cf765b10a69db8b4f0ff3f"
  },
  {
    "url": "categories/index.html",
    "revision": "3749eb6367d2399e90876a6605a9e074"
  },
  {
    "url": "categories/js/index.html",
    "revision": "c184a4d4ed14e395fe841e386bf9b3e8"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "2b1aa570fc8e22e0ab11989e61d26a43"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "0e613d2554d16232d7ccb5158a43e6f4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0c3c18f9be507bf148d9f04f514bae63"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "37a1518d8d19168047d4f243e2edaa38"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "f349a825a04f0636e715cdf1af646115"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "583f637e85ed2369f59a50502c6e92a1"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "e23cbbf2ff6b01d0eda0a19d6d863f84"
  },
  {
    "url": "gametime/index.html",
    "revision": "5211918f91ece749898764ee94ec4a8c"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "411e7cfdaa97d6eeb741f94684e336d9"
  },
  {
    "url": "message/index.html",
    "revision": "efc6b2d6552552cd4ad1a977aab06f91"
  },
  {
    "url": "movietime/index.html",
    "revision": "8dd24fb08f4bb8ca4d1e7636c1f89185"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "ee865fb37b252e7247d84ac7093cace2"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "ccf3c0324ef1ba226e4910a7da399386"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "511d13ce164ae753d940144612be660f"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "8a96ceb040ee7b2aa163c01b71617c86"
  },
  {
    "url": "mylife/index.html",
    "revision": "425acec9ebcf3c75706dfea962aa2ca3"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "1260ef34dd5a6652133c6a583cb57c4e"
  },
  {
    "url": "tag/index.html",
    "revision": "f1e5550d1f3fa51973837ac812f07718"
  },
  {
    "url": "tag/js/index.html",
    "revision": "a625170a10ed4f2e51b24dd02e2124d0"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "bde3218aae52741fd94781522397b5ef"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "36c8d6f430e02064580542bade952f34"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "248784f02f062687ff31b53468d6a88f"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "679894742eeec597eb02a9c860e151e7"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "a53ecfad708890d75032af35d7a4c565"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "05dac35a2b3faa048d1505f4718f9a30"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "fb673b2228f69e30974544d69536a8a7"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "559776b783586c1984e3732ed78e4e4b"
  },
  {
    "url": "timeline/index.html",
    "revision": "89474baf79cef4cb905c35762aa29e86"
  },
  {
    "url": "web/index.html",
    "revision": "94fea0752da435fd1c42c9bf30cdfb1a"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "37987d2216412ccb8b4069d3ac98fb37"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "3c8b5e181e896cdd07debe0ccca5a408"
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
