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
    "revision": "6fd31477f6c9cfbb48ec7cd758270460"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "2de3db3fa76344ad5e0d9fbcb6030844"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "d99df896b783b655da2ee4fa957102b0"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "3432c50b6c6ac9ffa9abc2edb6ab7458"
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
    "url": "assets/js/20.f0f59158.js",
    "revision": "1d0c2ed41ee3c79a95f58171dc86ced0"
  },
  {
    "url": "assets/js/21.e551649a.js",
    "revision": "8ebb03ba94bce9bb1813a9334a30a8eb"
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
    "url": "assets/js/25.d9eb4236.js",
    "revision": "bec88c507642b6b2373e7aa1c6ac846a"
  },
  {
    "url": "assets/js/26.d51f4bcd.js",
    "revision": "8f42c0d933ff3939e68afc3416dd9281"
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
    "url": "assets/js/8.31e4e1b6.js",
    "revision": "69914749f1fc22e8cfd7d5dfb4f731fa"
  },
  {
    "url": "assets/js/9.71de3588.js",
    "revision": "6f0881b3fd71c0e48af00016e6fb9709"
  },
  {
    "url": "assets/js/app.5f157191.js",
    "revision": "d4c6bebc03ef79c5059be2d217f6259b"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "9e86fa7d2b53f79ed568c98367587c04"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "aa2d528c2e6fb779fdbba4fa6317d181"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "e9b6a5f7cc22c5414d01580d575f6820"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "27e5ce2ee2302597d69e4d984badf4b2"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "16f64ae8daaa2e9821f63f461aa3674c"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "96ea503e1a2f84545cde2dae46396e74"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "80f9c40627bb6350d8bb1f5c0159d12f"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "0fc5244ab6fa481720deea10bf4e9cf9"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "a3e8e954b4e994bc0c169f30bc02e339"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "40566bc34e6c5e2ea42a8077ab86cab2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "541a9271bf3b9217de0e551bc332a77c"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "8c3a2aab780783b6747e514555019f27"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "1493dad75875e8a4e09004bbcc5999e6"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "291e299578278c2717b59da5db82b27e"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "71630952ea99577bebfb41b72e9e75f0"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "38e7b32e0f7fdc83a414945661623d9b"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "ebae2054b249eef7a493f5aeb6d2b39f"
  },
  {
    "url": "categories/index.html",
    "revision": "e17cbc555aa4de2824247ae69164285a"
  },
  {
    "url": "categories/js/index.html",
    "revision": "20f14d609253ee18db8cbeafff71ee57"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "0d6577e0c43ed5b6ce8162297d3e69c5"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "2c5d8ce1ac4b1f8a58ce290f586fcdc2"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "e1ba0c78af3877fb3154ef6254840071"
  },
  {
    "url": "message/index.html",
    "revision": "97f80e8ed728297ccdcb7fbfab5299a3"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "497c7cb7bbb465899221131bbb751b05"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "010b6447949f950b7782ecef695226fa"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "0b84b3491efd956b2df14e8193a53aaf"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "7c46b5e348a78bacb642205a5876db46"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "3851ab2505529b1f3daf18dbfa1d4cbb"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "3444cd9d94484b2225c3c3a60b705280"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "03096968cfb3bed691cd455cc9acba8f"
  },
  {
    "url": "tag/index.html",
    "revision": "26e643bf8375b6076d9cb718bca0b1e8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "48d6bfd0401c255d4b9ec93d8965ba3f"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "703a8a798f472a8e2617104f27ee71db"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "68929c889fed401ae82c57b646879941"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "8d7613cf0693de459dac297f202a5367"
  },
  {
    "url": "timeline/index.html",
    "revision": "b82678d4ee94314c6875616ebeb2a0c4"
  },
  {
    "url": "web/index.html",
    "revision": "9eea0962a3f533691213a035f29c2119"
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
