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
    "revision": "c7cf8e6b61e0ab864c4c39a0d47af868"
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
    "url": "assets/js/16.33992afa.js",
    "revision": "bc6e0b5650ed6e998fcf5dbe34ac2983"
  },
  {
    "url": "assets/js/17.c5357534.js",
    "revision": "f0138d1bd9290fad6c9c23a5612e8a0f"
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
    "url": "assets/js/8.df0c85b4.js",
    "revision": "5ba64841c57f55da46fcfb0f0bea2838"
  },
  {
    "url": "assets/js/9.a03eca13.js",
    "revision": "f1e234e24a24a975db122611c5c99fa0"
  },
  {
    "url": "assets/js/app.07dbfc61.js",
    "revision": "430a0e3e717655c46efb40f9742c54c0"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "50e9cda7f8c118e7462ae8313c183fd6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "90ebbf7311e6bd0503f847f1ddac7a06"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "1567fd537c110ce956fc7cd06f82a4d3"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "bc5617c83fcc60fdd579cfdff99b717e"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "c2b623652b6fcdde5ad00b540d86a02d"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "65e09b3386b1a48f496a784398c1ea85"
  },
  {
    "url": "categories/index.html",
    "revision": "7a4edc83b5fab747df84ff407cac3a2d"
  },
  {
    "url": "categories/js/index.html",
    "revision": "b3b185887c7b7c59b6d892ef12820f02"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "c4e27fbea587fe548db658e40631b76b"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "647f2c847b1ab7797e18e0fac6f32b5d"
  },
  {
    "url": "gametime/index.html",
    "revision": "5425d12a329b35efc5476ea2bab178d7"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "aee807b19a783725cad1b12b00abcc3a"
  },
  {
    "url": "message/index.html",
    "revision": "16decc0e17703d1a1412429a5c3ce2b1"
  },
  {
    "url": "movietime/index.html",
    "revision": "efbc9347e7e18de79451388eae544de5"
  },
  {
    "url": "my/markdownyu-fa/markdwnyu-fa.html",
    "revision": "e60b5ac0324574c0c6c2edb4096e0e71"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "23bbfc6d490df03a98b07d366b1be0c8"
  },
  {
    "url": "my/qian-duan/shi-yong-flv.js-obs-node-media-servershi-shi-zhi-bo.html",
    "revision": "a1f1f5e4e1b44b725c4f6b171bf94cfc"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "6e9e83ebd89d7a600fbf3afc87f67139"
  },
  {
    "url": "my/xiang-mu-da-jian/vuepresszhong-shi-yong-elementui.html",
    "revision": "9360b7a9a3a04f0a6ead0bcd338570b1"
  },
  {
    "url": "mylife/index.html",
    "revision": "2d33edf660838e7088ae2e1c772dd5b9"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "13c014316d19e0770d77185740d90ee4"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "3b03e6ffbe5e9081e7b1a8b6b4148c99"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "7dba68bab4d95d602f5c787378181966"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "9496a05749617d6ba2555150f0c12443"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "c5276b853f06d8589263b19d765b6831"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "edc526a48f14cbd13719f7ed4f061aad"
  },
  {
    "url": "tag/index.html",
    "revision": "941dc8759d569d07dc9166b6746308ef"
  },
  {
    "url": "tag/js/index.html",
    "revision": "42a81b7f111e594dbf28f1bc78a00baa"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "c2e721bfa731fb5bccacb89e11f564f5"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "f1d9b7e75c0f8934c36c07f1eef42b28"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "12693fe9c9052d51bfbf2264fafca9dc"
  },
  {
    "url": "timeline/index.html",
    "revision": "ee827fdb9fc127bc812d3db786e1e7d6"
  },
  {
    "url": "web/index.html",
    "revision": "1f9ce3f89fea72c335c323812319ca7f"
  },
  {
    "url": "zhuan-zai/jsshi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "ad7f677aaadaaee2adda8eaa4ae0caac"
  },
  {
    "url": "zhuan-zai/vuezu-jian.html",
    "revision": "9c28c1b5db876a22f70abab5c575d11d"
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
