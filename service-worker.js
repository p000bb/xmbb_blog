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
    "revision": "12b4f5d3e299cab8f5311c15d8a6b0f2"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "f326087990d11c8f00ed418f99b13426"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "51af49a7cc6452dc7a25d06ee2966219"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "f5eec3446254cde92babd6b4a0b01cda"
  },
  {
    "url": "assets/css/0.styles.899032c5.css",
    "revision": "bd1c274705905dbf290c692735841c48"
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
    "url": "assets/js/12.0da210b0.js",
    "revision": "58b99ab473a8666d88148f79b621d237"
  },
  {
    "url": "assets/js/13.bc20c4d8.js",
    "revision": "32af31a0fb064650df61f182bcb62a7a"
  },
  {
    "url": "assets/js/14.ba70e57e.js",
    "revision": "5dae3ac733f14a6edaded91410b00263"
  },
  {
    "url": "assets/js/15.7689e446.js",
    "revision": "6f44827a23561c3ef962efdc6ee6b9c4"
  },
  {
    "url": "assets/js/16.b8c8cd47.js",
    "revision": "688b8227736b67d1a4bd7e27dd08926b"
  },
  {
    "url": "assets/js/17.0d19eeac.js",
    "revision": "28262207f85ea95b2c49092f4989c4b6"
  },
  {
    "url": "assets/js/18.1eba429c.js",
    "revision": "c84bce2f9d958473a1ad136accf74d6c"
  },
  {
    "url": "assets/js/19.e63b6732.js",
    "revision": "a253f92ae9c4d69fa587d6de75eec48d"
  },
  {
    "url": "assets/js/20.348a78df.js",
    "revision": "e3fa6379c1462622fcb2d96573f5672c"
  },
  {
    "url": "assets/js/21.671767c4.js",
    "revision": "3804250c9a08b10fcc538342b4b4f560"
  },
  {
    "url": "assets/js/22.ba7bfe25.js",
    "revision": "1042c31432c2bd3b30f9844b8bc74b8a"
  },
  {
    "url": "assets/js/23.aea9145c.js",
    "revision": "aae2f8b38d98134caff27252831c6434"
  },
  {
    "url": "assets/js/24.6e42b889.js",
    "revision": "334ad21927eaa80da7f70977ac30dbb8"
  },
  {
    "url": "assets/js/25.65c491dd.js",
    "revision": "d5f46f0493272a025b71add2cc63d716"
  },
  {
    "url": "assets/js/26.d546f508.js",
    "revision": "9f58122a95540f972244fb818ddc7fac"
  },
  {
    "url": "assets/js/27.2dd8c94d.js",
    "revision": "ed6c8e3b834209d6e28aab73d57ae657"
  },
  {
    "url": "assets/js/28.d19bee36.js",
    "revision": "88bda86285867abcc5d0349b988b7118"
  },
  {
    "url": "assets/js/29.25e6a83e.js",
    "revision": "681d0a20f04467c30b7d3b722602f19b"
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
    "url": "assets/js/8.6be00c9e.js",
    "revision": "5825aca2637b55e4ca5cf63dc06aae55"
  },
  {
    "url": "assets/js/9.a03eca13.js",
    "revision": "f1e234e24a24a975db122611c5c99fa0"
  },
  {
    "url": "assets/js/app.0be7954e.js",
    "revision": "7beb7febdb5407cb5f18f4d31d92aad2"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "4b7e3929279ddc3a37835319455d1b3e"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "230f2394b0df1483f999413684ce65a8"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "848faa9fc4cb13f9eea486b20a19e05c"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "75ccfd1f123439062b6377f1177a9f33"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "e475cab10dd3db7c8eae18775b3b284f"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "2595dd1c404f485170d5c5d7a5bfacd0"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "7be5e1277a9b44b7c3d64e9dd152a79d"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "29b63eaed90e0a7ee183769ee61ca175"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "323d3b3d987d54fe1cb80ea08cfb3346"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1395873d9cecbd3d580b10d6e976e4bf"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "4ab296e9178c8bb792d3aeb63978a96b"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "d6e60981b046e478aa0826f887b0b00e"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "4cd2e581c165f02b72b5d7b60d662458"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "7655bb56619d40e0a1b8abc3bc688cda"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "f023effe76f9e99fcab0f390d7b964cd"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "e5753cb5e3b6716ff328f2b45b87f81f"
  },
  {
    "url": "categories/index.html",
    "revision": "ff35aec43e75cabbd61906eddbe63dad"
  },
  {
    "url": "categories/js/index.html",
    "revision": "a846734181f8422e8351d9273c2802a1"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "fcf93e5cd6a8999fa0c2ffbea8af6cee"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "5569ed4efc08cb0917ac6b715cbdda36"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "7a7a3a02210c9d97fb5e8845b0339773"
  },
  {
    "url": "message/index.html",
    "revision": "2803547f030a101aba0a6674e84f985c"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "d1c4b88377b6f98caf2ad445d382fa55"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "2f2748f80f89d9b0241d65e076ea0a33"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "31a7aacd5b9a890bd8e608977ca610f6"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "6f13a0c1717d0b0d4faea7fb619362c9"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "8228f832062e7853a1698140dd1fe9a7"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "1979f6d22004a20b99dcfbece625afb2"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "77053d498516f7dee669ce832fbe39fb"
  },
  {
    "url": "tag/index.html",
    "revision": "793ccc96293f172cb838177e1198d872"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2b72c40b95c9a2e9492d10b8c3e4a49c"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "a1bce75f56289c59263a340dee872633"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "80daaf8e144e722bd4dd18f0c93cc995"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "71f07e39305878a41575e3f9f42a4193"
  },
  {
    "url": "timeline/index.html",
    "revision": "7599ae3a2c96c08e41a2851c014fabe5"
  },
  {
    "url": "web/index.html",
    "revision": "dc8dca540f7042db7a388e38bd780f63"
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
