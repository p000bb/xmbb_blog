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
    "revision": "bb3e434bf0e400bd4a4803116c72436a"
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
    "url": "assets/js/app.8db603cb.js",
    "revision": "a46eb404264d71fc71cb458e1a728690"
  },
  {
    "url": "categories/index.html",
    "revision": "50edf643b9ff0c698d3f4e799e4a36af"
  },
  {
    "url": "categories/js/index.html",
    "revision": "b8d4d44a0df7d4aabfdb5c0e149b91dd"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "6355eed130a631ddb7e91216ae84274a"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "ed153ad7e2ceed2078427d3abbc07815"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "44c6d31889ef19c4a699e24b40b33993"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "eb3d21e68f7c124502faf93a862367d6"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "1bd31adb187866e3e67840a1eaaff2a0"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "ad3873cd67e2be7c5682bd0221a47492"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "c5de903b48f66c6f7812cc6961f93e11"
  },
  {
    "url": "gametime/index.html",
    "revision": "acbedd036e5ce5e963d4c8111b41374f"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "5708d8fadefb4540fd1530ee6fe2ebe6"
  },
  {
    "url": "message/index.html",
    "revision": "69d53b7866b5d0ba2b1496605da701be"
  },
  {
    "url": "movietime/index.html",
    "revision": "392bcecdc802affffb99267e41813db0"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "bd6b16033ba230c41d9888c39c2658e3"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "4cf20c39ed743916ba41016f43aa3c4a"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "f2f7c3741d46a582efc5602bb1de732e"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "bfa800b71043ffbd806e6a41210f5c17"
  },
  {
    "url": "mylife/index.html",
    "revision": "6e622d6ce3376a2f4c7b377ebeea3d61"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "20319840d110b73f2d44099c48e79586"
  },
  {
    "url": "tag/index.html",
    "revision": "d4bdb035433e06f6bfea74db0be39a14"
  },
  {
    "url": "tag/js/index.html",
    "revision": "943e3a472dcc3979863c32ed28c79989"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "45d74da0ad217d84686bf04979f169b9"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "0f74346b0dba9b708edde450826910d0"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "66a0603d59ea37f39c4477a7e45db7d3"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "42a3a26c658f88097b14c1887ebde9f4"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "22c83d17a982c98a5d20db5576910be1"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "b63314d2651940747bf9ba6056d39b8a"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "0e4858d49a8b21b62b14083eb243b14e"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "5bc4c52771e42bd214c12ac8c96659c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "11ae3e0f7d3b43e4d7efd5579a536749"
  },
  {
    "url": "web/index.html",
    "revision": "94989b774cd730f5c93747e63fcdc9b6"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "43943a05a0d27ec283850a556cf80aea"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "d6f1a5e6ec059b7eb0ce1f87cc1f6744"
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
