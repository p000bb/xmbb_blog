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
    "revision": "0843a90856f353164a1a0d70ea74518b"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "6d24bd2e4b732aa42d8fa2174c3fd38a"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "56423c3657e899e8198e7f4cd313d511"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "c8b3841ed863e730b82dfcf562f69e6e"
  },
  {
    "url": "assets/css/0.styles.f9d706d0.css",
    "revision": "05d211ddc3e69147dcccca9e48ae8fd2"
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
    "url": "assets/js/1.3e1a2177.js",
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
    "url": "assets/js/18.d4490086.js",
    "revision": "fd4e510f40b7754048a31ff9a114a439"
  },
  {
    "url": "assets/js/19.77e2a6bc.js",
    "revision": "cc5229f37e8469116b7a5fe55a91df3d"
  },
  {
    "url": "assets/js/20.b538efc2.js",
    "revision": "f1c743b8629ff72303b29e2574f81012"
  },
  {
    "url": "assets/js/21.f8aeace2.js",
    "revision": "a6cb52b983990a76fe23d400322dfb8c"
  },
  {
    "url": "assets/js/22.71434ca3.js",
    "revision": "0b20a21ed553fd41e0207ae0a05e0540"
  },
  {
    "url": "assets/js/23.e36771e2.js",
    "revision": "9bef1397d82e879e4ab82a612f7ab120"
  },
  {
    "url": "assets/js/24.2076d776.js",
    "revision": "b7d1c5188a9dc5b295b7c632c05bc0ce"
  },
  {
    "url": "assets/js/25.201f8140.js",
    "revision": "8ed6149de25b989c7239bafd2a78c047"
  },
  {
    "url": "assets/js/26.aaa91752.js",
    "revision": "f027eee99c6158b436ba176a90b67085"
  },
  {
    "url": "assets/js/27.5bb9965b.js",
    "revision": "90316a1a02f604b03b220d9ae4046edd"
  },
  {
    "url": "assets/js/28.9e2654f0.js",
    "revision": "7a02c405c8d7969fe54e6b9dd0cd9d3b"
  },
  {
    "url": "assets/js/29.069ebfb2.js",
    "revision": "67e339e46f79a26590a35aba98755bc6"
  },
  {
    "url": "assets/js/3.5e4a5fcd.js",
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
    "url": "assets/js/4.bc8f2c43.js",
    "revision": "3619da7e7f4522e522cca044aa55209e"
  },
  {
    "url": "assets/js/5.e6d7ca90.js",
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
    "url": "assets/js/9.1a66e2c9.js",
    "revision": "b21621604c3a1df5211a8c2ac272cf06"
  },
  {
    "url": "assets/js/app.67a3043c.js",
    "revision": "0300a2da7f2fd96a532ede7d9446713c"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "9f089d18a44ba4ba733e0cad94d96f74"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "674384706f974d52a8f1fe2ab81765dc"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "4cbbf690269cd639d09b6e780f7c67dd"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "b731cc53f7e801850a62fed0fd7bc626"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "cdf68394d9b107703fc1702b93d63abd"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "611ab46c724cce9e83fc142d73685431"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "a128d52ea68449d4b240d8ac8a72d802"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "c03a50efb2dcd07a9fd4be9eac9e96bf"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "a741a0062a856a69dacb6f6280899885"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "6ae7b3dbae927656bc488f2bb2df8788"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "91f20f15b8d7c2adf975f96022afb16e"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "cf1812aa866add77d5c8b737ed2c907a"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "ac46cb28d7949ecec03b31d163e59080"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4f96a6a7bff921144966e932cda231b2"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "fb22292c97b7f95e175e3a913f802d43"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "4079b2037e8803ad2fec29719d488075"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "c159a4f3a7d3fe01607e43870aed6bbb"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "e1f35609bf62cbe44ac2e9c52eb6aff6"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "6e3f4575fb845c6b1c7ad9eaa51bc705"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "1baa2677fc557083757c90b6346a69a1"
  },
  {
    "url": "categories/index.html",
    "revision": "4e0280f94a811dcab118000073fb94bc"
  },
  {
    "url": "categories/js/index.html",
    "revision": "9c113023aafa1a56fcf6fbd869865ffb"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "0edcc7dcac959b81a15d2ccd5e96b79c"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "cf096fbb333e864e74e3cda7c287d5ec"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "a5390d3635c84ece50e2753f34ae2632"
  },
  {
    "url": "message/index.html",
    "revision": "95ca7b819730530b713bd0d2269fed9d"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "ae89e64e7b2d10ba1cf7e77b093f9b3d"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "5df3f602d08ef57e5e82112053444f44"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "7ac19ce98e55cb390986bd2413a81ed0"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "7d1ce7c6d342d3f078a2e0d2cbaf2647"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "3aa4521786df53a23c099a57f08d9eb9"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "9d20942bf23de12edd085ef9996f4f63"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "8ac901d4b12d4f30274e2b0726690475"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "59d61b723cd580d4793bba0bd1fa0684"
  },
  {
    "url": "tag/index.html",
    "revision": "d7e3f400d9f82fce75330ac572c5a03a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "03020753fd113132ec192b400d8b5861"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "5ca1234b37fa960a4906353ce105e2c7"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "2a9c294aa9d20e512f260164ffbd9dd4"
  },
  {
    "url": "tag/react/index.html",
    "revision": "05fb93a16bee8f0af33e4c9d6556231b"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f3739a80afbd3f4153a1236fc376e6fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "c1bcfa1f1ad73bee61af2536587ffeb7"
  },
  {
    "url": "web/index.html",
    "revision": "57adc621a50aad726a79e01236cef321"
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
