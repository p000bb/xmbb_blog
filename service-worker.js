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
    "revision": "94b43f72b39e8b7ebac5c2d69448790b"
  },
  {
    "url": "assets/css/0.styles.ac051010.css",
    "revision": "21fb4575b6d0b20cb0ff0dc2bf8e3c1d"
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
    "url": "assets/js/9.4695f805.js",
    "revision": "c569412fdc025e647fed305e96c9b12a"
  },
  {
    "url": "assets/js/app.b7996b97.js",
    "revision": "e4e995e06337a8971c29dd29427a78f8"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "cf3ee12c38f53eac163dcc2e4e6afe18"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "7ae9189afacb062a107e645ab9d07656"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "67ed20dbd8ddb0c358ae2994a4c68536"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "45eb9c0898266d7c2af5b0bbda832cda"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "b1fdc1af2c443b3343f5a0e35189eec1"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "166e434d44e3f529475ae5d08139744f"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "a613935041f4d6b19de5408cb5826ae2"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "46edbbbe4c48cfb57bdb7ebc2ee757ed"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "0946fe2e9d5aabf4923e2f3efb374dbe"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "290bbd34b862aeb500e8359fd1a62b39"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "a4850f441ea595dd14d4855126f03760"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "3c30a2545c3d7a9d9f94a7b4915d1c60"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "4ebd60aabae3446807280b092fd3f0d8"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "fed2f08d67e2b67bb6079bdb10153d51"
  },
  {
    "url": "categories/index.html",
    "revision": "df9f7a7ad160597cb5c1f5b051b10dc8"
  },
  {
    "url": "categories/js/index.html",
    "revision": "0a96a6b234c02b7ad300284e3fb28cfd"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "41f28a720836cfef8d4f385b86d67547"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "b3a586a903422692bd1d429a7647ad34"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8654e624d4816af74b43e97f474d62ab"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "9e6d623bdc07180daeb36384b8239969"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "9b9c49601888df9a6241ff58d80c7ea4"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "2d411a3dbb4190c21ce352b9830d8308"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "49ff0e70a77df0692053ee442f3fa842"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "3f07478dd1ea94d736fc635fab8c38ee"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "48a30a69c046f06725871b343000a78f"
  },
  {
    "url": "message/index.html",
    "revision": "121329befec009818bb4cb00650adc0b"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "6c8b89009c929870158ed61d2c9308ab"
  },
  {
    "url": "tag/index.html",
    "revision": "a31bb7bd359ad1fe8a83139bc78d2685"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6a112988cc64bb72e8a7b4c2f8b01d8a"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "48a69e0d3ca7beaf200c1d17634bdf11"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "abcb75c3d4c39ecb3495378aea676f66"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f5cf985a9bcee681102c00336f4b379d"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "d6771e64ba58af039ac97b27b7cc7e63"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "ed626d1f48c5fa1ca247125bbc09e168"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "44b332f89fe5ddbcf64f11609397feeb"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "cde405195620641f3c8600fb7ddfc4d4"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "6748da5ad7e772d49f8001c5b3144e52"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "4ab497d7666ffbc335019eb1ade79343"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "d1d029a7f536eac96b6dc88b1f18c318"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "2b719583e01e31d024371ca69f09bc12"
  },
  {
    "url": "timeline/index.html",
    "revision": "373eb97f6c5dfa7ef688eedad0f3590d"
  },
  {
    "url": "web/index.html",
    "revision": "f790b1786a5b1dd817a697aefaaf7e9e"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "18e4084a485cc5939bbc963bb9025ce8"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "e64c61f1cb275a35b050efb10ca24a4c"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "263dcc504a434a0aeda79ba8ef5b3f6c"
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
