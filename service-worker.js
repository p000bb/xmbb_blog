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
    "revision": "a050597dc3582757ffddfac19f793c03"
  },
  {
    "url": "assets/css/0.styles.e076b343.css",
    "revision": "3c0cdaa529c9fcd1f518ad2cf75975ff"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
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
    "url": "assets/img/movie/1.jpg",
    "revision": "d059b0c0d9a30af210b244f6f103c58e"
  },
  {
    "url": "assets/img/movie/2.jpg",
    "revision": "a0cf166087e0efe9d803fcb62500c1ea"
  },
  {
    "url": "assets/img/movie/3.jpg",
    "revision": "281f3559fe252895dce77dfd48f19a1e"
  },
  {
    "url": "assets/img/vuepress中使用elementUI_files/1.jpg",
    "revision": "ba50a15a5d7306a0982ae3d1a408c191"
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
    "url": "assets/js/1.72e2b203.js",
    "revision": "dfada8a5bbaf6a8dc18e477fbd532624"
  },
  {
    "url": "assets/js/10.2f9eaf04.js",
    "revision": "aee32f34792b6467ea7399a4e203728e"
  },
  {
    "url": "assets/js/11.df6d7cdc.js",
    "revision": "7ed4c034a565567904733bc02afdb534"
  },
  {
    "url": "assets/js/12.56ada8d3.js",
    "revision": "1b4991c833023d60b4afc9523bb90271"
  },
  {
    "url": "assets/js/13.bc20c4d8.js",
    "revision": "32af31a0fb064650df61f182bcb62a7a"
  },
  {
    "url": "assets/js/14.c0dd1153.js",
    "revision": "ec7909a7c8c9904b4c445ffa0dbf6e4d"
  },
  {
    "url": "assets/js/15.3b5925a6.js",
    "revision": "6b8f6445399b4d6f27003b9dc6b04cef"
  },
  {
    "url": "assets/js/16.a19d1dd9.js",
    "revision": "7ec57cb24e1609c828d4abd7f981f63a"
  },
  {
    "url": "assets/js/17.bd22255e.js",
    "revision": "cee578f8b33a081c44e2d3eede884390"
  },
  {
    "url": "assets/js/18.bf846cb5.js",
    "revision": "b1b7818d2ac56e183e2b08d55c13a51a"
  },
  {
    "url": "assets/js/19.62c94b39.js",
    "revision": "3b45e43739aa5a3b77725286c9ea80fa"
  },
  {
    "url": "assets/js/20.d0ee48db.js",
    "revision": "08a8db89188d831cdaf50794bd2fbb2a"
  },
  {
    "url": "assets/js/21.8ba51f70.js",
    "revision": "1e6c7a3968c081998ab1661927206693"
  },
  {
    "url": "assets/js/22.a8113675.js",
    "revision": "b47747c44abd0eccf1ab96ae44bbf829"
  },
  {
    "url": "assets/js/23.684d74bc.js",
    "revision": "eb6c9b88ff593105395c63e63c46b0e3"
  },
  {
    "url": "assets/js/24.fd398669.js",
    "revision": "33978c9a7dfc29878d20b29130fa4db7"
  },
  {
    "url": "assets/js/25.603aeaaa.js",
    "revision": "939ba5dd98267629ff9ceef8113a4249"
  },
  {
    "url": "assets/js/26.327f2e4a.js",
    "revision": "c2dbed18033cca2243abfef4e9c135df"
  },
  {
    "url": "assets/js/27.2cd1682d.js",
    "revision": "401ff75e6107deda75f4bfba10a30e3a"
  },
  {
    "url": "assets/js/3.dabdf111.js",
    "revision": "2841206235ad2c9c23cb59efb181a4d1"
  },
  {
    "url": "assets/js/4.b7f2e3b6.js",
    "revision": "9d61dcbcdda1cf593edeb8f6101c0531"
  },
  {
    "url": "assets/js/5.6e9d826d.js",
    "revision": "4df29eba1914d11c9d066db05c9120b8"
  },
  {
    "url": "assets/js/6.e1e1566b.js",
    "revision": "8af34e4a2e11896e60e28a5830b300dc"
  },
  {
    "url": "assets/js/7.d03a63ab.js",
    "revision": "64983f6156733a80c28258c74429ba78"
  },
  {
    "url": "assets/js/8.10f697a4.js",
    "revision": "5ba64841c57f55da46fcfb0f0bea2838"
  },
  {
    "url": "assets/js/9.a03eca13.js",
    "revision": "f1e234e24a24a975db122611c5c99fa0"
  },
  {
    "url": "assets/js/app.9e3d71dd.js",
    "revision": "22276d92371d6255fe5632cd58112366"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "4700b872e279689c75417f95e8891cbe"
  },
  {
    "url": "categories/index.html",
    "revision": "9714d30de60b23e749c5db50dc6069c8"
  },
  {
    "url": "categories/js/index.html",
    "revision": "b34958770cc4db415b29727d08b90ebf"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "624e45348baffc6708f5e20d1cb71c7d"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "c51c482e1986a6d19d88de1a180cb9da"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9a90b2a1e92e45782a57d8d2160fd8d8"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "70d44bc7922b9bc8463402dc1946da35"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "692d9f69544d07851c9280b70e7df268"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "98af3d490e209fb3e064fb0cf0c433ad"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "35bb70035bf4dfbeccd4588a9e342bc2"
  },
  {
    "url": "gametime/index.html",
    "revision": "75273a607e532d6cb32a6e96661c171a"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "dedcfccc22a1ba47b2c874f01bd6dcd9"
  },
  {
    "url": "message/index.html",
    "revision": "a405c38fc318c224061a2cd9fb16f853"
  },
  {
    "url": "movietime/index.html",
    "revision": "591ca356b28c0ee306245c9d994b3911"
  },
  {
    "url": "my/markdownyu-fa/markdwnyu-fa.html",
    "revision": "0e63eaa5aa1aa2df08e2e85b912f57bc"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "bd8688110e8488c49729780f5dd9da15"
  },
  {
    "url": "my/qian-duan/shi-yong-flv.js-obs-node-media-servershi-shi-zhi-bo.html",
    "revision": "6e0534a17e9351a52427e8cac07cdfc7"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "50035b71de10200afcdeaccc33f5a337"
  },
  {
    "url": "my/xiang-mu-da-jian/vuepresszhong-shi-yong-elementui.html",
    "revision": "7564446f445bf10ee8a40241002e601b"
  },
  {
    "url": "mylife/index.html",
    "revision": "b45729ca96ff1c1a09d3105276341d60"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "558dac7cd2823b454933efe878d60a0e"
  },
  {
    "url": "tag/index.html",
    "revision": "974cced00426cc080ea5f83da203938d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "43c3812b1fc7a2bf7d355272fa74551a"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "63210fbb3ca9018af5fd0b7a089da7c4"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "575bf905c52147280cc5b08343224074"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "652101462e86193264c49f001f0e9328"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "496d8580b5209a87798c8e1997df7c60"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "71d0be86c77242918e1ab26ef7b9bb61"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "3f5e9c1fbacfab3f1eace07a346def9e"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "47089a8b2d8422f8a6aa1f2bfb22ad69"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "bab8623ed8dc701f405b5858f14cd4cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "a1192dc03a3232a2473415fa3ec41803"
  },
  {
    "url": "web/index.html",
    "revision": "ff63bc055f76dde3865c27dac9743dfd"
  },
  {
    "url": "zhuan-zai/jsshi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "74af1116cd121fc5bc7064dc4ed535f9"
  },
  {
    "url": "zhuan-zai/vuezu-jian.html",
    "revision": "57836efaeb8d6031258bef92289d092b"
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
