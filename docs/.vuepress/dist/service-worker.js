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
    "revision": "2d53dcb663c03e7c4e42fa952ac9f021"
  },
  {
    "url": "assets/css/0.styles.7c64724c.css",
    "revision": "b2ab0aaedf363a1cd57b2ad4ef450f8a"
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
    "url": "assets/js/1.3c67f1e2.js",
    "revision": "dfada8a5bbaf6a8dc18e477fbd532624"
  },
  {
    "url": "assets/js/10.d3c43524.js",
    "revision": "093bfca58017c253d235539b9557a78d"
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
    "url": "assets/js/18.00e7208b.js",
    "revision": "62aa2991e2e69432c612c82cbed4945e"
  },
  {
    "url": "assets/js/19.a279463e.js",
    "revision": "a664e52738c1c36f58ee33931a818dcf"
  },
  {
    "url": "assets/js/20.44451b34.js",
    "revision": "f895e0e0d2ffa1c72881183d2bf40d1b"
  },
  {
    "url": "assets/js/21.5885fed8.js",
    "revision": "42cf8c1349e13f1297d7d08c387ff683"
  },
  {
    "url": "assets/js/22.2138d717.js",
    "revision": "36debad1a2a15b2a01238b13ae22222c"
  },
  {
    "url": "assets/js/23.091b2e49.js",
    "revision": "36c0ee2bee5a130dff7be8102a001a92"
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
    "url": "assets/js/3.977bec5e.js",
    "revision": "2841206235ad2c9c23cb59efb181a4d1"
  },
  {
    "url": "assets/js/4.7d3e8bc8.js",
    "revision": "9d61dcbcdda1cf593edeb8f6101c0531"
  },
  {
    "url": "assets/js/5.ddf5ad52.js",
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
    "url": "assets/js/8.46b182ba.js",
    "revision": "fc16681c645feb43dee7806021c63ecd"
  },
  {
    "url": "assets/js/9.a03eca13.js",
    "revision": "f1e234e24a24a975db122611c5c99fa0"
  },
  {
    "url": "assets/js/app.34ffb588.js",
    "revision": "25c7e4de19995e61d41540248328ce44"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "c52de8c26f209a8a12bea8c3fd8b392f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "355b8f3efa96cffa164f117eb890cb6e"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "8d213ee8e440728b8f787126b67f49b1"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "d377da8cb14db3f2ca0cdbc21a721815"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "d4f787af2c3c942c97ce0fab832ae1a2"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "07d4d81e8fb4f3ee501323c1cf31b8d4"
  },
  {
    "url": "categories/index.html",
    "revision": "33116a1b695d22345c8babf58f82133e"
  },
  {
    "url": "categories/js/index.html",
    "revision": "022d7360fc056be60c08b0e074a0dc4f"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "d9c38de9c3825bb11fb6e04fa35b18b4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "34ae93f648c4d7c18683a49d504c97e5"
  },
  {
    "url": "gametime/index.html",
    "revision": "9f83fb5f20d49d83b5be4b9e26aadf20"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "b4f35a792a6ab5e7827252095f87a276"
  },
  {
    "url": "message/index.html",
    "revision": "b83f0c3e5ff2980027e7414c06ace669"
  },
  {
    "url": "movietime/index.html",
    "revision": "dd1bc66fca7b64bc18c67d89f53d7666"
  },
  {
    "url": "my/markdownyu-fa/markdwnyu-fa.html",
    "revision": "75836eb8ab471a7c00ef5b968af7504d"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "f7bf55bd9a21bc5f5de21aba02f5d199"
  },
  {
    "url": "my/qian-duan/shi-yong-flv.js-obs-node-media-servershi-shi-zhi-bo.html",
    "revision": "ef482cbc46d40486103e871734d870c3"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "0de3b62c86bd77625ee067adc567f671"
  },
  {
    "url": "my/xiang-mu-da-jian/vuepresszhong-shi-yong-elementui.html",
    "revision": "6a91c2ea9274540ffe13d92a6b3eeb2e"
  },
  {
    "url": "mylife/index.html",
    "revision": "1c742e9f9c8b21d29b8bd4fa30432e81"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "ea6a449e4862af03d1e1921ea163c302"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "b1fabfdf3c5dc78677c57caaea32c9ca"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "4893f9bc97926288d4c944a89dfaf6e7"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "c928ec7da6b55970c455bce4db5da0c4"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "4d704af2acf7a04d67040d13c424a80e"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "0f73f418c563f730fa4c235794843d70"
  },
  {
    "url": "tag/index.html",
    "revision": "a0c1154f79a5b29b18004b63db0243d1"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6115eb3b724578052e6b92b66a159283"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "247d10ab2a32ee9d7d5b6d20958641d7"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "1abe10715abe46700731ada30389086a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "05ea7534819dcd94a4a815758a2a831b"
  },
  {
    "url": "timeline/index.html",
    "revision": "a938b81560d9e4918f3a38011c7842a9"
  },
  {
    "url": "web/index.html",
    "revision": "fafa5c56e0c6cdb0ca552896f644496f"
  },
  {
    "url": "zhuan-zai/jsshi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "7ae8db9671934e9e9231c6f28bfb323e"
  },
  {
    "url": "zhuan-zai/vuezu-jian.html",
    "revision": "5c5be7a1da6a7125ddcdc7be0e555131"
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
