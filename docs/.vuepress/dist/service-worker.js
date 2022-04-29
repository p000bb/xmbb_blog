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
    "revision": "c73c72148e6b26531b9b68a023f859bd"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "bd65605dd11bdf8e133315e35af6fe0c"
  },
  {
    "url": "个人生活/锻炼时间.html",
    "revision": "ed7fcc9f32dbdb6a04d81533b2cb8468"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "b1894c04467c4380608522e551e4cb76"
  },
  {
    "url": "assets/css/0.styles.f7449a5a.css",
    "revision": "43fbe3a2403965d8553c9ba68095c09c"
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
    "url": "assets/js/1.cf74e047.js",
    "revision": "a822f1c817c453a87556f53f5bfbba20"
  },
  {
    "url": "assets/js/10.5b2d2161.js",
    "revision": "97e003442ea4acaf7867b52b87cd1777"
  },
  {
    "url": "assets/js/11.069a60f4.js",
    "revision": "a0b31af7257632789cdd71201a70d8f6"
  },
  {
    "url": "assets/js/12.eda83912.js",
    "revision": "6738124cbe08dfed5eaebdd3d5d6fe33"
  },
  {
    "url": "assets/js/13.8c4d5637.js",
    "revision": "d754aadfbac7e6b643d6563321f9ccdd"
  },
  {
    "url": "assets/js/14.e2cdd549.js",
    "revision": "cf3181eb5330ae7c2c16d83fd06287cb"
  },
  {
    "url": "assets/js/15.9ec046c4.js",
    "revision": "ddf4a9cdb3305d9998c899a07ef8bd69"
  },
  {
    "url": "assets/js/16.ea065811.js",
    "revision": "76cad507079f263d0e935016937f167d"
  },
  {
    "url": "assets/js/17.cd280360.js",
    "revision": "399540ce109f9d6282e139a01594756a"
  },
  {
    "url": "assets/js/18.0e2b5ef7.js",
    "revision": "bdbd18e3af09558d49645ed6541edf26"
  },
  {
    "url": "assets/js/19.1ea979e1.js",
    "revision": "8e518501de24b811ff34f9d0d5c5e890"
  },
  {
    "url": "assets/js/20.28ced907.js",
    "revision": "0f5d7f7516abc53120a8c1bf1c5a25b6"
  },
  {
    "url": "assets/js/21.f6f68dc8.js",
    "revision": "49e5a19514b478400ffc085652e85a6c"
  },
  {
    "url": "assets/js/22.8ac16bb5.js",
    "revision": "366a8f139e1c5713827d9d756c38a4e8"
  },
  {
    "url": "assets/js/23.0202d897.js",
    "revision": "aa77703c112f85cd24542debde81e30a"
  },
  {
    "url": "assets/js/24.c601a69e.js",
    "revision": "f0e82072ae927bcfb66c391341054c14"
  },
  {
    "url": "assets/js/25.d98ea40d.js",
    "revision": "fc1c108c958609546828cc2a60c3634d"
  },
  {
    "url": "assets/js/26.c0586c0c.js",
    "revision": "0ce73928a89cffac951e14b1ab900473"
  },
  {
    "url": "assets/js/27.6e46a98c.js",
    "revision": "a2a801d378600d0a4ddbeb0d6d0b6bd4"
  },
  {
    "url": "assets/js/28.55de2ab3.js",
    "revision": "01affccb38951bd48ac2218aad9dd749"
  },
  {
    "url": "assets/js/29.8bb54c38.js",
    "revision": "3096de2b8e94a5182e25465ba39b225f"
  },
  {
    "url": "assets/js/3.74e7f41c.js",
    "revision": "0b11ccd51b20df8cc3e592b311dea032"
  },
  {
    "url": "assets/js/30.489c7406.js",
    "revision": "43a931c27603a64e411c990a82ad1786"
  },
  {
    "url": "assets/js/31.8da3342c.js",
    "revision": "1515687e12a1a78843c1a77a3617de94"
  },
  {
    "url": "assets/js/32.3ff0d1e9.js",
    "revision": "3821eee73e0dcfa08411d26515094560"
  },
  {
    "url": "assets/js/33.8e159dbb.js",
    "revision": "55b5f21f46520439c190f5ddd0f4a380"
  },
  {
    "url": "assets/js/34.8c7fa165.js",
    "revision": "7020a00e8953978fda30767f00b2a150"
  },
  {
    "url": "assets/js/35.6a8842ed.js",
    "revision": "239d60378a2ae9ed470cb5b823be3486"
  },
  {
    "url": "assets/js/36.efb5d9fa.js",
    "revision": "a0995386ae1e39bbf401e570845a54c5"
  },
  {
    "url": "assets/js/37.4bae62a4.js",
    "revision": "d72cb01c79fc55670feee2cda7eaeefb"
  },
  {
    "url": "assets/js/38.41b46b2e.js",
    "revision": "ce677fb6d25922b3b9a1418e4e5eb2c1"
  },
  {
    "url": "assets/js/39.af081049.js",
    "revision": "5a26406c684ade9a50f7721d139a1484"
  },
  {
    "url": "assets/js/4.33af8126.js",
    "revision": "8a6f089001e83e1d5de5e59b206088cc"
  },
  {
    "url": "assets/js/40.0b93dffe.js",
    "revision": "82a3b80baa25cdf70859e1ac5762c86c"
  },
  {
    "url": "assets/js/5.213e694d.js",
    "revision": "d1a7c568f604259cefbea8124888e58c"
  },
  {
    "url": "assets/js/6.ea7a25d7.js",
    "revision": "cd4c503bb554723574d8ab10b8815ea2"
  },
  {
    "url": "assets/js/7.47b2ca6a.js",
    "revision": "430aed2557d372c60f5b9a4b7a8860ae"
  },
  {
    "url": "assets/js/8.7722d02a.js",
    "revision": "445441f89db1aefafa6b0526b852647f"
  },
  {
    "url": "assets/js/9.3bd0f12f.js",
    "revision": "ea07ad965eaf0679661de6f0ac8c405b"
  },
  {
    "url": "assets/js/app.0c024949.js",
    "revision": "aa45a61027c997cdb9eb5167dae51ede"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "9c5b51e8957616cf31f0ad70f173fb1c"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "2e77b13d8ca31d9c2ab62e0a89c778dc"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "3a5737ca46d9b1786ffb6c567cf86e4e"
  },
  {
    "url": "blog/前端/flex布局换行左对齐解决方法.html",
    "revision": "93c7c4e82b14a88d36104142d1a53a01"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "252f7a46819effef90df3cc43f0d906f"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "2c2c068975f537aba025fd24ce828151"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "fc05152f9339b1f16418dadb9952f4ae"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "47663b812c033fd50b9eb42c1c923ce6"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "8244c5aa09a75ccd805c325b83bed3bf"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "3f1cf7aa70d015563fbfab1e18f13707"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "3903374d64f793c792763c10bef03bf3"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "b3ee4d13e2291e73d565c458ab0011e1"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "45173a80ddfcd754b34bd756daa356fd"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "319870c25e9a304549c7b0923ce8197a"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "d75146ca50a1c8ffadad04f2c08b5645"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ef996e7a67ed79a00ce5a5b8687b0b95"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "49e8be7f6f775672d81539bf341fa515"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "31a457d2f69440bd6e7f051532a7e6b4"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "e4f53cc659520eefcc8bc35008ed8c8e"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "5fdbe77a232924d6e58a679c5b0e1bf0"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "83ab74da1ba4212e7882f07bddec136c"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "1a760206ae756486e25763e6f612497d"
  },
  {
    "url": "categories/index.html",
    "revision": "634722893c010201379dcce954726404"
  },
  {
    "url": "categories/js/index.html",
    "revision": "9621f50184e9de3a72fb571e4250e0d3"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "55d61ed7fdb4afae8c03054b64080e73"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "278d7d96c8c263cde6cfc6cecfabcc89"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "e8643f23ed7f8377a461cbbe7d6637ff"
  },
  {
    "url": "index.html",
    "revision": "73198aec7f483ff951f1c961f6c12009"
  },
  {
    "url": "message/index.html",
    "revision": "61a94109bf2f48987b862336b2af88e2"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "e50be7ccf3e74ce2dc1e3d5d2aba8fab"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "9d634d53e396a01e1e815d3edde4b891"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "ccf7112f6cc50dbd5f928331b6bbf47e"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "a1e9397ef69c875e0e1806c483eb2fff"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "f9b93a2d5c0c3582f0c424e0a921e9ae"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "9806e3f5ad43892bbae36d0a781b7017"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "6d61ec9326be618cc998d261a665c879"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8331131fd400be0c122bbb9aeee66edf"
  },
  {
    "url": "tag/flex布局/index.html",
    "revision": "65d776077b99dc12d4830100da5a76ff"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "185d6ca234053e46d5e20d3695ed24fd"
  },
  {
    "url": "tag/index.html",
    "revision": "4fc2780f1c5d544bc8459547c947cf3a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3abe7cce3daf38f849c34b7bc34176be"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "599a3e7d06b463547a1d917f59746eec"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "6c908af453709fad651b965818d73226"
  },
  {
    "url": "tag/react/index.html",
    "revision": "821d70760c3c4927e29dd745e6274f6b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3c0328add12650a304eb02c2b1747358"
  },
  {
    "url": "timeline/index.html",
    "revision": "d94b70e9285e56508c4989b270d022f1"
  },
  {
    "url": "web/index.html",
    "revision": "11aa7711e67bde1ebc169ebf249a0877"
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
