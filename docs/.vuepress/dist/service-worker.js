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
    "revision": "511d9a6d34f6ef3a601dbee1b3b6e5f9"
  },
  {
    "url": "assets/css/0.styles.5b8d9ffe.css",
    "revision": "c02da25c1de1bb17ccda2851a684ca6c"
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
    "url": "assets/js/1.0733a366.js",
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
    "url": "assets/js/17.78ba43e1.js",
    "revision": "0ff678ce24e505215a6eb7c06aeb092e"
  },
  {
    "url": "assets/js/18.40321d49.js",
    "revision": "e70bb490a6975ff16ae46e387a542dcc"
  },
  {
    "url": "assets/js/19.6981d1f6.js",
    "revision": "7516ded1e4a1549c7c3bdae84869979e"
  },
  {
    "url": "assets/js/20.6a27a375.js",
    "revision": "8c877a2d4e62da4ca783aee5f5b95ede"
  },
  {
    "url": "assets/js/21.99850520.js",
    "revision": "eacae798181faff021ba0d5e6921c2c7"
  },
  {
    "url": "assets/js/22.79d69478.js",
    "revision": "d378a3149e927e0673d8f92014682619"
  },
  {
    "url": "assets/js/23.6c930749.js",
    "revision": "c648717d3eddb45d8334c52815c9b14e"
  },
  {
    "url": "assets/js/24.3edbc130.js",
    "revision": "eb73242c87af751cef17e660b40a1a8d"
  },
  {
    "url": "assets/js/25.1b59d592.js",
    "revision": "3dc1cfd10ddd9163da1db6df13dad800"
  },
  {
    "url": "assets/js/3.5a0164dd.js",
    "revision": "3e97c36afbbaf5db9df16c2114abbdd6"
  },
  {
    "url": "assets/js/4.aeb50a61.js",
    "revision": "85b81ef64ca3f7a6a7a03b1352190741"
  },
  {
    "url": "assets/js/5.9d920212.js",
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
    "url": "assets/js/8.6954aaa6.js",
    "revision": "22fa7e3c816942d117373cbb6db3c724"
  },
  {
    "url": "assets/js/9.9f03ab66.js",
    "revision": "2eb595dd0724d882d800633c00bf1744"
  },
  {
    "url": "assets/js/app.53ec36fa.js",
    "revision": "0e7152048fda4e01e90866d11f027ecf"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "de0b76e62fec59f169d1668bafca3078"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "78ecf5535fca4851b230b528f03e7d37"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "64d2555d62d43d92d6a39f0b8bce1194"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "02d7a98fa53dc8f2a1d833514b1bd935"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "6aeff072cdeb7dd0cdef985ed812f4d7"
  },
  {
    "url": "categories/index.html",
    "revision": "c6634061241a7c97db92e4de7d544e34"
  },
  {
    "url": "categories/js/index.html",
    "revision": "d1cfd14e8efbbe20703619f988193805"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "95fbcf9f07ae99fa31fb003bbc98828f"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "ef91cfdb8326af65e60bfba10f351d2a"
  },
  {
    "url": "gametime/index.html",
    "revision": "0a2bbc7c164c43d43e5caae9588f77b5"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "8b678b897fbe7682a8a38d09059d4b7a"
  },
  {
    "url": "message/index.html",
    "revision": "bd23f04ff9b84b3bd69dec512dcde062"
  },
  {
    "url": "movietime/index.html",
    "revision": "aa0bc3c1aa4f9770ba139e38a1135b58"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "279b60714e0ed8a2cc1e04410e15efd4"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "c4fce4e840d741dc318fcea741700970"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "e17aff8d8ae1be864ad2e805c044f830"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "c2adcf5eeea3aa75882daae8b09c86d0"
  },
  {
    "url": "mylife/index.html",
    "revision": "a0aa0c722ba02b661dd36c3496dae232"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "c1cd8e97d3736b1d7760a7e8079029ea"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "6786018f2c52301ee90594029c7339c8"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "9e36e3edb31cd05cae2c965771834cc4"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "7417ac4231b9d4fcd0abb8e570add765"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "45423406dfe79a3511721a019d997a50"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "a7c750284acf8aa646a0c752d121e785"
  },
  {
    "url": "tag/index.html",
    "revision": "3a1b02d46934a81c749ff99fb0718173"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7b5118ee20c8a1b2e1029640d81b9d9e"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "a571ccedf4612ae73d4850d062cb033e"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "44c3baedb25883ef7d49336fbdd411ff"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "dc39191d1a0acde93be519f0ed0b54c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "11d19ed9621d1a0c3c7d78860047ecf3"
  },
  {
    "url": "web/index.html",
    "revision": "b3d7cd56cc905c9d2be77cf9854f9875"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "a699441c674020583ee23906a5196289"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "6c674ca3598a7050215baf56a101c44e"
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
