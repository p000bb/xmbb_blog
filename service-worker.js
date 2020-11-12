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
    "revision": "5f69ecf7782ffa1eb820a7637a0c0b70"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "984a479062d2438a023fa134f138f96e"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "e0c6954551b7128a91a9e13b34ddc1b9"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "2aeaae909e217d119760b5d946c752d4"
  },
  {
    "url": "assets/css/0.styles.15951337.css",
    "revision": "f032a75cae8c943a23ee331c8b9516dd"
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
    "url": "assets/js/11.09e68760.js",
    "revision": "e0f0ca6d8514d613f21e2ee8bee76d30"
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
    "url": "assets/js/15.4a21262e.js",
    "revision": "04be5088b6e94d99dc906144c0e29974"
  },
  {
    "url": "assets/js/16.19a1b90e.js",
    "revision": "7e1ebf326f5ce211eff723aaf0fb46c1"
  },
  {
    "url": "assets/js/17.2cd4769f.js",
    "revision": "a0fb3173c51251b0a3105d9dfa6bbf40"
  },
  {
    "url": "assets/js/18.8724007f.js",
    "revision": "232a7eb2f6ed4fb9cc0f282c54e9a5e7"
  },
  {
    "url": "assets/js/19.e8a9c365.js",
    "revision": "e41cfcf410a80227d1a1bae2e6c20989"
  },
  {
    "url": "assets/js/20.96f7e5c9.js",
    "revision": "9c5ba654be2967b48feb4ec7aa82154b"
  },
  {
    "url": "assets/js/21.9afd5d30.js",
    "revision": "cf6f998f942cc3d1f6fdfd24553daa1c"
  },
  {
    "url": "assets/js/22.d1e21713.js",
    "revision": "56eb4e675830ae464ff21c171dbeb455"
  },
  {
    "url": "assets/js/23.b5628c77.js",
    "revision": "d555e05c631599c203bb5d7608fab7ef"
  },
  {
    "url": "assets/js/24.c17e2e61.js",
    "revision": "92ca489bf71898d0cd73a287335f0831"
  },
  {
    "url": "assets/js/25.875fa0d9.js",
    "revision": "b2ef2023495fb456c772ec5f6d041e56"
  },
  {
    "url": "assets/js/26.09561594.js",
    "revision": "53a89da1ae42350578ccafe12c222019"
  },
  {
    "url": "assets/js/27.138125d7.js",
    "revision": "171f24b408d9a5deb0bc993355d55f75"
  },
  {
    "url": "assets/js/28.21bff3b0.js",
    "revision": "d2dbe48c59eaac9a65dd1c766d7f2017"
  },
  {
    "url": "assets/js/29.88cc2fab.js",
    "revision": "07c80e4ada14af3acde813c5dba774e0"
  },
  {
    "url": "assets/js/3.5bd42c39.js",
    "revision": "a34c54e6cf405759ac056681831dd7f4"
  },
  {
    "url": "assets/js/30.c9a1007d.js",
    "revision": "26839493cf8e99c4bc976ecede75504f"
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
    "url": "assets/js/8.31e4e1b6.js",
    "revision": "69914749f1fc22e8cfd7d5dfb4f731fa"
  },
  {
    "url": "assets/js/9.71de3588.js",
    "revision": "6f0881b3fd71c0e48af00016e6fb9709"
  },
  {
    "url": "assets/js/app.2f6d60f2.js",
    "revision": "1a10a42697ce6aeb9492c3d4d3fab75d"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "bfe97938a6703488e9cb96a58848b4d7"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "96ddb5da6a4a2cb28a3fec2e8f2ad0ea"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "4a3165ea501694a69c50eb30bcde6dd4"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "2966d42672f04bca4d3e20353863149b"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "1eac33342e9c60e388d315f0667a0d89"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "377171781a900ae38389e5e982576912"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "bb3848941099018b6096ceec38bc52aa"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "6db163c010c66c532a3a64e2a7ad1e65"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "6e433ada2e651db9dea9cb6e5655e557"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "c043ef64b2d3d9ab5e9833e5e1a3ba52"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b31ff358013db65716b49dffd57b1f56"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "bc99a3a4618a3a29ed9d12e3187b4c93"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "99218c1f969a27b612a515481e8c1efc"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "41b66cb6ea637bd6899bd7fe7515aff7"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "29189c391c8b93d50c94d4cfde0090a1"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "0eb0b69ef3a259d6ea9d144a5cbcb330"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "46f9d31e47b2f308ac84a736900d1981"
  },
  {
    "url": "categories/index.html",
    "revision": "c699e0d014c06605b7ca7c14011a2ba5"
  },
  {
    "url": "categories/js/index.html",
    "revision": "b2ae4fedf1c2da4e7bb78b9781649ec8"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "114975279f9453f596aae72221318276"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "f06b0ae77f3cd89c73d253724e1053cf"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "ebb2c6cfe2b4c413db773fa7aa93faee"
  },
  {
    "url": "message/index.html",
    "revision": "8465758a2bf65ca111168b009197d267"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "2502b6ed42c1e9f4cc6ecd408d6273ad"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "81c970cd1041d86040ca9c9a0d3709f5"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "f4e60b9fae63fa97d1c346561b84860e"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "04994552d6ca4b0b5e423786b01329c6"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "31c5d71f3b7dcce0510ccfa87d749ac8"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "c89ee3794c324447288f2ec0d14763c6"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "abe5b0e76c6e2653eebb1d3e88b523bf"
  },
  {
    "url": "tag/index.html",
    "revision": "65fa928c70362bf8991a5e541fcc26ce"
  },
  {
    "url": "tag/js/index.html",
    "revision": "778b8f19ab6d18e714f514ea7557e82a"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "c46e30da6ea7233e8295fe438d2b5706"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "a812f553a54cce03098fa81b598b7693"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "25ead4afea6ed97cbe4c0a31c4577639"
  },
  {
    "url": "timeline/index.html",
    "revision": "9bed29ca364c7c99a1595daeebfa4f13"
  },
  {
    "url": "web/index.html",
    "revision": "8a870a1311d6ffe8c16b647cb4d8c008"
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
