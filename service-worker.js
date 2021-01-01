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
    "revision": "3f69cf83fc9174ea28f6b7adc975fe60"
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
    "url": "assets/js/app.4058bf1a.js",
    "revision": "3949b1684ed0598d3db17b399074b6ce"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "553222dbb7faf6877c85fc82d9dceece"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "7453fb68595624e072ab9c0ca966f156"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "bfe805bf2ac1de5083f9599709e0eb7a"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "8716b5898bb07df38edea5b0d13ade77"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "c681cd50abf320087e9509240196f6f0"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "f0ad213c6e920f9875a13a61e8b9fc87"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "fa74039df14bf6671d9913ad041520a4"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "b61e1dc2d74f0837163793ea1005e18c"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "eab735a1268e8d8eea27ec97ab171f1c"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "c129c9d2d59cee5f4ff72b3026532342"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "640025ac8130cea6e7dfedbd13e5187b"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "28b91039d76926ba42cfdb6c1a396583"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "d75613da7369e0c7325410939e7a09a4"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "ab55da5a87d1f3c77e6c2a7fc209d25d"
  },
  {
    "url": "categories/index.html",
    "revision": "5d4098365c4eb704d42ea22eba5df675"
  },
  {
    "url": "categories/js/index.html",
    "revision": "6508a1ff9b8704aec01a28824d26c693"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "f6ccc6bd0607ec3f528046ba45e0e6f5"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "85ee199f69dc899442baf68491515c42"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8e87b2830a9630b21a7c7430eb10f114"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "1274e2d3eb2e91c83f37c0699c2d8c6a"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "057f9fe6756edfd1fadc99100217be9f"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "8259e602c7eb7bfeb1ab3a004a4863bc"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "ac7ed4f2dd88330acb7bc2777ef29f62"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "82fef35ffcb5df025f2599e6fbc74d65"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "8bdf86059baae4e63b87524ee9af70e2"
  },
  {
    "url": "message/index.html",
    "revision": "8e23903e764b48f1e72744c3ee46c6d8"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "e99186d7e155c98c68a944fedead8f5c"
  },
  {
    "url": "tag/index.html",
    "revision": "f5a9364cec0861e175376bcfe3030f0e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ddb4c50102cd44154f4283c9ec593155"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "5a15fc08daf6ac73a4beb96717a22235"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "55950bef0df3c40b92ce9fe21162c4f9"
  },
  {
    "url": "tag/react/index.html",
    "revision": "1ad3ced2d9a1789e0bd8e453f8082113"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "768ec9ab06b11e26960b3361729aa9da"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "b5d43893fa56b059d205e753a2af4626"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "5a1bd2c931adf1d49b5ab076679b1b1d"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "8465eeb64060d2937ed701e877bf24a5"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "d4c91983d3ef91c39da3f941157f366c"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "60b70511c70526077e7c8e5ec37e02d8"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "fd69be40fb69de436917c29afe7cb6b5"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "cf318cbf571b6982a66e9e07352f25c3"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc4dbc6f55174d3d45544ae47344e497"
  },
  {
    "url": "web/index.html",
    "revision": "7702b9c2863f9bf4fbd0c645a18270b9"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "dfe42e096f76e8296c9aa5319ff1d8c7"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "6b4a805c5fe055c02db89934450cfdb8"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "fd7bc80c02aa615a31b88562426e6329"
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
