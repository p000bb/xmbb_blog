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
    "revision": "d2f08a55e7ed8be00aa0d828e9b920f3"
  },
  {
    "url": "assets/css/0.styles.fc837961.css",
    "revision": "65e8a50fa5a8dd4e06381132cdf746a0"
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
    "url": "assets/js/1.979f1370.js",
    "revision": "ef041e7af55225d90e8e34242ff78826"
  },
  {
    "url": "assets/js/10.71214097.js",
    "revision": "92763313c43706777f44df13fd6b6f61"
  },
  {
    "url": "assets/js/11.ca125844.js",
    "revision": "dcbfb9f7ad00be4f90c8e15a0368649c"
  },
  {
    "url": "assets/js/12.213bd0a3.js",
    "revision": "e35c1ce5583dfd22c8edc3f2507d6c70"
  },
  {
    "url": "assets/js/13.1e1b2f41.js",
    "revision": "3a84b7536ac2917b42fe2698dfaf5d7d"
  },
  {
    "url": "assets/js/14.05dac451.js",
    "revision": "5ac72fdf14a96012a206d29e933348e0"
  },
  {
    "url": "assets/js/15.142402e9.js",
    "revision": "f38427e4cfda7a5f4df402666baf4567"
  },
  {
    "url": "assets/js/16.ea64a1ca.js",
    "revision": "cf3bea3f4c00e2df15c2964995ddd69e"
  },
  {
    "url": "assets/js/17.f3254b49.js",
    "revision": "322da48189a40db743b050742721855c"
  },
  {
    "url": "assets/js/18.14628e70.js",
    "revision": "075d4e23c04a986670ff464c9b80a9f5"
  },
  {
    "url": "assets/js/19.56a775dc.js",
    "revision": "80a46fb1b9d71ace61882e092f382a25"
  },
  {
    "url": "assets/js/20.819ef21a.js",
    "revision": "b5be3b0b031adced904909366e721f6f"
  },
  {
    "url": "assets/js/21.32ef46c9.js",
    "revision": "025429a104cb45605a133988445dea16"
  },
  {
    "url": "assets/js/22.16d92ada.js",
    "revision": "9eaf37793083cee4f2ddaa65a9ab25b7"
  },
  {
    "url": "assets/js/23.6bdd1d9e.js",
    "revision": "86485b9cb54a9b46282602fc32ebb5bd"
  },
  {
    "url": "assets/js/24.2076d776.js",
    "revision": "b7d1c5188a9dc5b295b7c632c05bc0ce"
  },
  {
    "url": "assets/js/25.28faf856.js",
    "revision": "ac2eaeba462defe1af7b901a821039a8"
  },
  {
    "url": "assets/js/26.2d4baea0.js",
    "revision": "0b939c880acaade6ba1f145db676c7dd"
  },
  {
    "url": "assets/js/27.6fb50a53.js",
    "revision": "3359c42efb0df1f3178e3e27b99540ad"
  },
  {
    "url": "assets/js/28.c46ff081.js",
    "revision": "341f343b7b27896755be11f8d5b2f387"
  },
  {
    "url": "assets/js/29.0098c307.js",
    "revision": "51c03a9fa879bf032c76b45ba3c61c1f"
  },
  {
    "url": "assets/js/3.e25b494e.js",
    "revision": "2af11e69b4d1a11de9c2fae623e03783"
  },
  {
    "url": "assets/js/30.bf172b52.js",
    "revision": "77716f51d25f397fd69c5dd9ecb071af"
  },
  {
    "url": "assets/js/31.37a48330.js",
    "revision": "fd25469786c07d497f0ad643765923e7"
  },
  {
    "url": "assets/js/32.b899b20c.js",
    "revision": "8541f71fc8def1e1ae879579bcb37670"
  },
  {
    "url": "assets/js/33.158ce8b2.js",
    "revision": "51391d7f52bc3e01539a6883ce95983c"
  },
  {
    "url": "assets/js/34.83d4661d.js",
    "revision": "f1b57288f41a46e81727744689015889"
  },
  {
    "url": "assets/js/35.e00797c7.js",
    "revision": "7d5afa7ce8b0bcc14982e1589cfde79c"
  },
  {
    "url": "assets/js/4.eee9d469.js",
    "revision": "3619da7e7f4522e522cca044aa55209e"
  },
  {
    "url": "assets/js/5.cb0fd10a.js",
    "revision": "e098b007fa6c7d225181f368759fcc45"
  },
  {
    "url": "assets/js/6.d760bee8.js",
    "revision": "b13679a1a9b168d1ed2e037f0ca173b4"
  },
  {
    "url": "assets/js/7.8211d329.js",
    "revision": "e23bbbec8d4b96360c1df2fa5fbb9893"
  },
  {
    "url": "assets/js/8.b71e6938.js",
    "revision": "9bb0683d54200ec417fac45a61cc7c3d"
  },
  {
    "url": "assets/js/9.8283b8aa.js",
    "revision": "c4f34bbbccfc9893ff1e01621497bd62"
  },
  {
    "url": "assets/js/app.dc197604.js",
    "revision": "9a4cdc8419a136d83a500e90735b78d8"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "a3bd26668ee0c29c90c91c176d9a1667"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "ae2ef2b09e5a45e9970010c91bf2d2f5"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "02f42b272f8a2b9856b2b5191db2332c"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "752c496cdcbf138a05455ce2949356c3"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "9273dcd0edc7be12418013e763365276"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "f5a04a408e0d6cf5a741d28ff54974f0"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "d595871961ba1e7424077cc6d1ade6e8"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "a273b497a463ca2d1df052a457066fab"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "302687e9f2ce637e072395e0836f6a8d"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "46d54a978356c72165cabe0833db0c1e"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "0a5dc3d6c41d8d8a65d329185e2ec14f"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "3a6f55aefa85f512f1d5becff7e1907c"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "e9dcd764f1774ad39650e16dd42ebe8f"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "2caaf06a3dd62708be9c705d974e08eb"
  },
  {
    "url": "categories/index.html",
    "revision": "35c8f003a21bf9cf436eef62cb982ae3"
  },
  {
    "url": "categories/js/index.html",
    "revision": "cc322c5ef05fa3a657c9f108e04faa79"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "be60467a761cf3159689805d75886118"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "7fcc248a23f08f084d9b34ee1d6dc3f9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4dae0f4ca4108076875efb3feec80731"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "e47bc3298101151d65b7e8f4cf9177d5"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "8b818a9a0d8e9986a92e5284c597603e"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "93b4b94a07fe1355a0aaaa61a178179c"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "abbe3dc7cb0f28b02c9b34b4844800d7"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "ed72c1aebaab78aa111bfbf8f25070d6"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "ba34917c2907ff7accc5036bfe85ce28"
  },
  {
    "url": "message/index.html",
    "revision": "818c486db4292f935caf8b132f251d1d"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "e7d300cfbb5445332019433ab84386ba"
  },
  {
    "url": "tag/index.html",
    "revision": "667f7ca41eef00b17a149f4dceac7447"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7da71d40fc3688ac6643f2a6bb1494f4"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "6639305ecb48beb8874d892d7322c5be"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "b9c6b719cc5d3b65d4691eb8508e23fa"
  },
  {
    "url": "tag/react/index.html",
    "revision": "6bf89723cd38aae64f7463ecd44cb7e7"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "02729af0ac13d0df4a3ec7dc9e464862"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "483f5ffc30bdc29eb8712acfefb8aa9a"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "c0e420239054c2ed1ec467751d1fe7f4"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "c4cc2e914233b32fb00ed43aec496022"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "c352b1b028ade7f4d47da46331227da0"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "e41f9d1b982b4580a9a009d01e21f190"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "f0a0b934502485474e420d10969a1280"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "5e4b32af6a0092eb09cfc7cec453371d"
  },
  {
    "url": "timeline/index.html",
    "revision": "20dd3413ea080d2775c7e80e3bfda1ef"
  },
  {
    "url": "web/index.html",
    "revision": "2da81533b18a4ffe27d307883d5fd9ee"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "869e8792a6286434d3ddaf6d2fe8fd21"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "2ca813fac1969a5293cd92fcbe24fd03"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "f3d78e1fa49de41d7ef40bb50f4d9cec"
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
