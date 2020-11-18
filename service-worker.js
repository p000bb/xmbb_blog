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
    "revision": "f3aa735385df6f788f81bb990dc371c0"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "d40dab1edc34e03047fcaedc3d2f4a2f"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "b9dce39eaa222d64a69d914a3f779423"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "775eeb98b1f5681dffe8384885063dee"
  },
  {
    "url": "assets/css/0.styles.f1b11aa3.css",
    "revision": "706ade6c5be74299ea3fd4971c2f685a"
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
    "url": "assets/js/13.3dac5237.js",
    "revision": "9605188964fbea9bf8191872ca376964"
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
    "url": "assets/js/17.3bdc363a.js",
    "revision": "1af3ece987b76335ffd79fa169b4cd72"
  },
  {
    "url": "assets/js/18.7fd82d8f.js",
    "revision": "05c72397c43aaf44567859dc37553368"
  },
  {
    "url": "assets/js/19.d5c235c7.js",
    "revision": "19b6b04f5b1e12f60f71a77b4b0aa5b8"
  },
  {
    "url": "assets/js/20.3b9e8ac0.js",
    "revision": "fd7e12063db59a16f6d74118ec21473c"
  },
  {
    "url": "assets/js/21.74598fad.js",
    "revision": "c2b708f5cf71a9af2ff2227d5f2b39b3"
  },
  {
    "url": "assets/js/22.c0e9c747.js",
    "revision": "727342be21640243dbedee624c2c93a2"
  },
  {
    "url": "assets/js/23.235806a6.js",
    "revision": "f1b8df0a05d2e89ab1cf1f8bee67c1cb"
  },
  {
    "url": "assets/js/24.599e59ed.js",
    "revision": "806aa954fd478cc559b094d338384f94"
  },
  {
    "url": "assets/js/25.dd397e2e.js",
    "revision": "b5d2c1a06bf919334ec320c22ef3a01b"
  },
  {
    "url": "assets/js/26.a852d125.js",
    "revision": "aba272c77c6f2c06bc6edc2d01c79e93"
  },
  {
    "url": "assets/js/27.1a8af06e.js",
    "revision": "cd27741abaa80bc4da32cfed016bdb2e"
  },
  {
    "url": "assets/js/28.9be89b84.js",
    "revision": "6723d92e3c2ef9ecf1b2199cf8b3d404"
  },
  {
    "url": "assets/js/29.52b3acc0.js",
    "revision": "1cb20e8a4bdff12fb2d643875b85fc76"
  },
  {
    "url": "assets/js/3.5bd42c39.js",
    "revision": "a34c54e6cf405759ac056681831dd7f4"
  },
  {
    "url": "assets/js/30.99584842.js",
    "revision": "74423ea3374b648d6fb5c25db0372a7f"
  },
  {
    "url": "assets/js/31.5e9f3cd7.js",
    "revision": "eb66a7284f6219a7f48f3d7e1fdbc454"
  },
  {
    "url": "assets/js/32.2ce62192.js",
    "revision": "5c35d15980061e32a1f5d7b917f2b990"
  },
  {
    "url": "assets/js/33.f829da85.js",
    "revision": "6d230e1e2ea28d3149b76d88134a8b77"
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
    "url": "assets/js/8.d7c40073.js",
    "revision": "e908c62ac9189a4b43197ca6a0451476"
  },
  {
    "url": "assets/js/9.71de3588.js",
    "revision": "6f0881b3fd71c0e48af00016e6fb9709"
  },
  {
    "url": "assets/js/app.a829001a.js",
    "revision": "8a1c8667a0f33fb2b8fa8f665e2183ca"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "00cb871bc0ca9b7ccc93e2ca732b185e"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "60e73774088d2112590c9850954e5ba0"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "6f13781b37b974b014fb9adcf4c5be6f"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "496ef87e456b4414689194b0260a70fb"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "c9111d8912cdaf20c72a142380c2259e"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "2a088dc43cdc560ff6da5800d3c82a6b"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "befe2b5a92f3b26a5b8249d83bbeefce"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "a3cd0773fbff940f777974dbac56be3c"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "6159a58d0ef68e912df29bc919c51674"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "b09d7d5263de79f7370fafb8b3ed7c5d"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "48d4ffec3b9a9343ca4326b8a62f780e"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "aa554a7b2ae121f3cf7dfe5c2444b9b3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "328531650208a67d194ba6268fdeecfe"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "a393741f974a9b348d48cd4bdb234ba5"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "dd865afa9c7bb12a86331d0605024995"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "e4a41aa42b25ae1a8c0c56572ded3046"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "360827b3744174b08f8e065aeb13506d"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "c8c708c3b56fc093826dc18d1a788ed1"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "0eb67b0c7e5a99ac5480d5bad78aafef"
  },
  {
    "url": "categories/index.html",
    "revision": "d5d35901a53bfc236022a91782275dab"
  },
  {
    "url": "categories/js/index.html",
    "revision": "bb776fe3c914787c4660560d50c93b18"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "1d8ba1f24716cc2fd748bffdfeb94da2"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "c9ca4c3c0838115009245439f0f51b46"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "570972d70d3e5f95402af32794d0ef5b"
  },
  {
    "url": "message/index.html",
    "revision": "d3176c03903dfc880eb138d17e9803c2"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "ce91a7326ddac3c21be2acf30543d65f"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "4415fb0e2e7e9e1b3d143ba575b0e059"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "322d186e81a7d79b84adb42ef5d79d01"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "3e60f26d516804faabfbcc8ca5067ac4"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "a327218d20dbc724b54f1912d18aecdd"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "997fe6f3e1a2d7bcf9294162ea5f020c"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "97dc0dddf0531bff83770b020e739930"
  },
  {
    "url": "tag/index.html",
    "revision": "cd8c7803a81375e18638b2dc11ff0138"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ebdd4649ed5eb1c626ebbd5ccd83db42"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "87a9b8a552f6ff02734a34a500454130"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "b7e6cb47f085b0a522352f516fdad657"
  },
  {
    "url": "tag/react/index.html",
    "revision": "adb20a0ce670f02db097f8b25256ce3f"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "882e86aa7db5d97f1788c5727b603bc5"
  },
  {
    "url": "timeline/index.html",
    "revision": "158a9d81807f4a5dcf5b2181b8154e45"
  },
  {
    "url": "web/index.html",
    "revision": "1026ad0af0700a34712d4d9480be8f6d"
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
