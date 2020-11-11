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
    "revision": "bf715b8b6b92939b9511aeb32b6dcfac"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "579eef055feeaa386be6d195e644da02"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "f43eb71faf0ff2777d7df767798e758f"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "f22db43837271f76ff7967b29c6f5578"
  },
  {
    "url": "assets/css/0.styles.6a3e777c.css",
    "revision": "64131d6968e5a6499ff7607dc9574f0c"
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
    "url": "assets/js/1.cf4cf02d.js",
    "revision": "3e04ebfa18cf6e18147ea9b844ac0ea4"
  },
  {
    "url": "assets/js/10.ba8d412a.js",
    "revision": "bc2c566055714630225c1d0560339b8b"
  },
  {
    "url": "assets/js/11.8bfddde7.js",
    "revision": "6fb5832cae133cf2ef8be53d32af4f21"
  },
  {
    "url": "assets/js/12.08b67d03.js",
    "revision": "466b6f23d3b795c5a8c9659bab681a44"
  },
  {
    "url": "assets/js/13.03f982b5.js",
    "revision": "3e79a44e6dd450244752a92fe8a4e16f"
  },
  {
    "url": "assets/js/14.27ae8a56.js",
    "revision": "4e14161acae5719fe5ab37bfc8e393ff"
  },
  {
    "url": "assets/js/15.6b32ea4d.js",
    "revision": "ff7d72348cb34537164badd32d6d4c70"
  },
  {
    "url": "assets/js/16.19a1b90e.js",
    "revision": "7e1ebf326f5ce211eff723aaf0fb46c1"
  },
  {
    "url": "assets/js/17.d6da100a.js",
    "revision": "111057a0105fb6934a557308aabf2628"
  },
  {
    "url": "assets/js/18.a855d8dd.js",
    "revision": "a0be96878ef0770208d2d798df3fe6c6"
  },
  {
    "url": "assets/js/19.e461d30d.js",
    "revision": "f738f01e7f519395273997d4b2be053e"
  },
  {
    "url": "assets/js/20.f881f4a4.js",
    "revision": "4055e33baf77631b176c46837216d2ea"
  },
  {
    "url": "assets/js/21.226aefc5.js",
    "revision": "eefa39435ebb600073c096d1971b4595"
  },
  {
    "url": "assets/js/22.5e4a2c4b.js",
    "revision": "e88cbba9cbe3f17f61e5836ace442a0e"
  },
  {
    "url": "assets/js/23.3655e354.js",
    "revision": "8fc14c3c5998f6c011d312499da00d47"
  },
  {
    "url": "assets/js/24.4c3acd7f.js",
    "revision": "53561dc8464949bb5ef515a069cc9145"
  },
  {
    "url": "assets/js/25.864965aa.js",
    "revision": "e6351ec8e3336c9f37a25ec1bc0e0356"
  },
  {
    "url": "assets/js/26.cd38f6c1.js",
    "revision": "87dd874ae6b917b1e9a3c58b093659c4"
  },
  {
    "url": "assets/js/27.3784d514.js",
    "revision": "1f13851e7890b64ae8e578fc3c37412e"
  },
  {
    "url": "assets/js/28.acc9659a.js",
    "revision": "cfcfee84bd27794938db4ed05087d14c"
  },
  {
    "url": "assets/js/29.5d2aec79.js",
    "revision": "741df61a62e5ff1f8247cffef0419914"
  },
  {
    "url": "assets/js/3.5bd42c39.js",
    "revision": "a34c54e6cf405759ac056681831dd7f4"
  },
  {
    "url": "assets/js/30.14bcd135.js",
    "revision": "2d9e0700d3324f6adebb563fbd44ebd8"
  },
  {
    "url": "assets/js/31.289ed0fc.js",
    "revision": "30f4dafb02327f06e78ced22903ce0a6"
  },
  {
    "url": "assets/js/4.507d936b.js",
    "revision": "9141fba794cd2ff682be607077c5c7ef"
  },
  {
    "url": "assets/js/5.d68adb2e.js",
    "revision": "6ecd26516aa0d3a8ab382d9db30865d1"
  },
  {
    "url": "assets/js/6.eb7e9cf8.js",
    "revision": "a1058f30436ff55314a7f87881ec7325"
  },
  {
    "url": "assets/js/7.5406e3b4.js",
    "revision": "2ce3d2ca6ef7877d7f09b6485e830ae6"
  },
  {
    "url": "assets/js/8.291eed5d.js",
    "revision": "4837bdc066bff38f33fe76d2ed765ee7"
  },
  {
    "url": "assets/js/9.71de3588.js",
    "revision": "6f0881b3fd71c0e48af00016e6fb9709"
  },
  {
    "url": "assets/js/app.32f1e4bd.js",
    "revision": "0b36709129d47d1c43273fb61f968582"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "14cda3a42595b366545d73883ccd1376"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "d453314132a8f8140538f7198dfe3f9c"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "e247e099b5ac49b979e3d589cb1aa3e8"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "3bc74e6d71fca541ea722e93051d615d"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "ac62f4616db1a22bbd6351b803635536"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "b6add42a9440b7e91da5c3e500907973"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "75f6f0eaccc6c2c61342fa9fdb1fc772"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "65b570f2cb44954c4e5083e5426154bc"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "c6c8509a18bb91586f1dc1349c9a42e2"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "70d25476d45818ceca39a02a4e76bbe6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "56d6ccae5e433dcd51d84ed47d34923c"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "7b426e3bdf17816e312d7ad80fcc9702"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "51adc4376e2fb3653ce4761b5237ff89"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "8e7353d9153a35dcf1619a3f27b19ed2"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "66f0ff003130d6ea6baed836c0b05195"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "8fc35be7796197d3f8992a680570a9a8"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "b63dfdf69057c7e5f9369120b52bf049"
  },
  {
    "url": "categories/index.html",
    "revision": "5488d13ef2586591b7bfc73fa67f7d38"
  },
  {
    "url": "categories/js/index.html",
    "revision": "afa6d92063192871b34dfb20e9a3d358"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "8071e0745cad04fb2f684bf4f149804d"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "653737a026381f134e88b0e50f23683b"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "23f89e63ae1e513d840528cacd2361d8"
  },
  {
    "url": "message/index.html",
    "revision": "927ac53a135cb6d1733a9fc26ce7079c"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "7c5b94b7d686784c81b06817e680796f"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "265617db441b0b6ac10aa3aa55fa9740"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "fdb952f6eb325aab143358fb490a402f"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "182fd9302d9f49f60fdbbdbf79344499"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "41456c020d9f75dff25081bc6eb6d4a3"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "aee14c9b9cabe662b8ae40de53e906e8"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "047389b6a1127ae4efb1a6a031f1f4c7"
  },
  {
    "url": "tag/index.html",
    "revision": "708b130be9734ba8fee426ccacc31ebf"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7433af17b31bcde274d36d0bbed732a5"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "99f4ceb558cc74285fcdba78806f6981"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "0458aebd359590a080602e285e1af45d"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ef4fbffaeb7b1f67cd599c0d72b86beb"
  },
  {
    "url": "timeline/index.html",
    "revision": "d2991706298ce0edf1b97e41a17e2fcf"
  },
  {
    "url": "web/index.html",
    "revision": "66e58142590e1534fc93603b3ce23a3d"
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
