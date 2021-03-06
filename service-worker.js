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
    "revision": "7602345bfcad125dfe9fdd357afe1459"
  },
  {
    "url": "assets/css/0.styles.bd69c902.css",
    "revision": "a983973f87f878502cc9c41c24a02699"
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
    "url": "assets/js/14.763a395d.js",
    "revision": "9b5fb16ff139376ed071626319c1f834"
  },
  {
    "url": "assets/js/15.142402e9.js",
    "revision": "f38427e4cfda7a5f4df402666baf4567"
  },
  {
    "url": "assets/js/16.6f207fc2.js",
    "revision": "a27dd35fd0373b4611feed46a42505b8"
  },
  {
    "url": "assets/js/17.4e628c40.js",
    "revision": "13546910ea57d4955c3093f876f1ce00"
  },
  {
    "url": "assets/js/18.56c4f5d1.js",
    "revision": "a627caef022135bc3c9c32732bbcd86e"
  },
  {
    "url": "assets/js/19.d12f3771.js",
    "revision": "d8dfb7fc71a38e99219582863e471ba8"
  },
  {
    "url": "assets/js/20.d5f4103f.js",
    "revision": "9d031eb3f7c7e90316752c240eb95d31"
  },
  {
    "url": "assets/js/21.f455e8cf.js",
    "revision": "c855de26fc3f93e85b7deab84a734e36"
  },
  {
    "url": "assets/js/22.fa0c64c6.js",
    "revision": "b4d32ec7844b5922eec20431de00fe14"
  },
  {
    "url": "assets/js/23.227199af.js",
    "revision": "661fdc47ab5f67d41dace05390c9accc"
  },
  {
    "url": "assets/js/24.4e71e003.js",
    "revision": "bda36b7d0c3403f5e93aa9477cd6849d"
  },
  {
    "url": "assets/js/25.0b79596f.js",
    "revision": "12bc94e14359314b9309c186ddace8ad"
  },
  {
    "url": "assets/js/26.bbd272e2.js",
    "revision": "1e659c3df859f67f02bb9de5e4654cfb"
  },
  {
    "url": "assets/js/27.090516df.js",
    "revision": "bdeb194220c5bbd0c7cefc670eeb2ce4"
  },
  {
    "url": "assets/js/28.40f4f7b4.js",
    "revision": "99485f21bad8baf50d1fc6b41b2760a0"
  },
  {
    "url": "assets/js/29.c5edb347.js",
    "revision": "a2fb3a8a05b632e24cb9af34e6384038"
  },
  {
    "url": "assets/js/3.e25b494e.js",
    "revision": "2af11e69b4d1a11de9c2fae623e03783"
  },
  {
    "url": "assets/js/30.d03dc7bd.js",
    "revision": "ba6350d2e8ae3e05a36ab682fe82269b"
  },
  {
    "url": "assets/js/31.24c76278.js",
    "revision": "52c3332999c078265a1a6b5e534d6940"
  },
  {
    "url": "assets/js/32.3cdd3aba.js",
    "revision": "5b5814eb2d33146e3e90ac91c7882e5b"
  },
  {
    "url": "assets/js/33.c63ada10.js",
    "revision": "8880956efe4754e5f38d73a8d60aca9c"
  },
  {
    "url": "assets/js/34.8bad175e.js",
    "revision": "15216fb65f8ffc1d2402abe3cb8dd7e2"
  },
  {
    "url": "assets/js/35.abec9736.js",
    "revision": "33aa8feb5cc709e28331788ead7c7a73"
  },
  {
    "url": "assets/js/36.8691fb64.js",
    "revision": "de4f316c2f141fdb7e6f87e0deb76a42"
  },
  {
    "url": "assets/js/37.3a1c588a.js",
    "revision": "5e51cf12cf15ae8c76f119d9039e5813"
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
    "url": "assets/js/9.d86bf0ac.js",
    "revision": "675cd77b86f967e8bf0e73f006423043"
  },
  {
    "url": "assets/js/app.f271aa0b.js",
    "revision": "65a9b66b4e7c41ae6db3834e4d981c8e"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "ee6e7f8786f3a7f0dff58f8ba2500ff1"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "0c084b1344f1df6b0f6d7f408c8945dd"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "fbd8db4aa904c15bf9a904f3d36e8825"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "ada70e70bfc8d770c922ccc81d1bf6d1"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "25956e4bc87cb106eff00e5e66329d3e"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "8ea367cf547cba38e784edd27c79653f"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "f043fa9dccb966f04066dec070ab965c"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "2f6c2fbe1ff617e5360bd2907289a566"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "dab6681104bbdee04b2f107c2de76dd6"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "5a567b7ddfa480ff7a39b697a2f0a9eb"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "abdb7d5974a05edde6fd3ddbf92258dc"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "4c909b0684626151b331125fdf6c4946"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "b8548e67c4f7aa336ce3895453b6fe35"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "88e139b382ba5975c16709efd680e2a3"
  },
  {
    "url": "categories/index.html",
    "revision": "f382e5129dec9f67966f0c834edee330"
  },
  {
    "url": "categories/js/index.html",
    "revision": "8e90b95e01e1ad1e2d9f75aa2994d762"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "d1b768c13f5e53d25343ebfc896d1078"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "def72288a47172bcd3eca6b3df638fa0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5d9bae6a38810b807bdb3d1158efcd12"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "dd110edd5d1c277b795932e2ad2422db"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "1325840cbdd57714c31180c0079895f1"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "3d5515f5c288453837ef8d92afe2f9bb"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "507aaea0929fc98167c1dcf9e65f3198"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "033091fae941afd5bee03e2bbcf84bab"
  },
  {
    "url": "Friends/index.html",
    "revision": "f7394f376aeb37ffd43216dbf304d19c"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "1bc932a6cbf414775ae2e1fee39b7a06"
  },
  {
    "url": "message/index.html",
    "revision": "0fc28ab25048cc15b3e2fa6e26efd056"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "c7040a67bead6a20ca1c51ed276efe2a"
  },
  {
    "url": "tag/index.html",
    "revision": "ffb06f224dcb50ed45dcdf16efa1a525"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1050d011d476b610fa8c352286d432a2"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "1847f00b09b3559a58226b4785d95db9"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "d63eab2fc3ddb66c2b45320b88ef0dc4"
  },
  {
    "url": "tag/react/index.html",
    "revision": "7130a158760b5eb0975030fadcd59c67"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7381bccc8de45ec57640620bcdf9d759"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "0cb439fbca8b288ba202512e3791cf02"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "25709375043f4c763c61d0faa4397730"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "0cb41f45a318f6916849c15460d5ffc1"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "d1c4afbcfa779ad6fa985f5d27e846ba"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "6a783c612b8726be6ca2873fdc916d0d"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "1305892729f9d4704adacbfe3fb3d232"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "1124fe7b7c85a75667683e229b8c97e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "2635ec6c348c2f5d3b774eaa00f5cd83"
  },
  {
    "url": "web/index.html",
    "revision": "b7a98acd0d0034ea871a8125dca1ba31"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "d54c2876044679f20df9b43f532ddcad"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "ca245a346bd39d3588a24effa29c2bfc"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "ae29a38148b6ba6eafdbc725eb1d6e26"
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
