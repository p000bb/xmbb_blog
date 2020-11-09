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
    "revision": "504397c027bb6ec5004ce3bdb9ac50e5"
  },
  {
    "url": "assets/css/0.styles.cbd6ed7a.css",
    "revision": "ef2206f10a4326b33826080f781ad77a"
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
    "url": "assets/js/1.48cae044.js",
    "revision": "270a5b5de9afeab6d79016aec396c7bb"
  },
  {
    "url": "assets/js/10.021d7e23.js",
    "revision": "3ec88a1400e46911fc8c7d317783b346"
  },
  {
    "url": "assets/js/11.b6fdc423.js",
    "revision": "3233136f1a4904c80ae0f7c633da15c4"
  },
  {
    "url": "assets/js/12.7dff4279.js",
    "revision": "36080927bba47eb49e6fad9ed891e2b6"
  },
  {
    "url": "assets/js/13.434d8120.js",
    "revision": "447b5687b8ef69a86c4160f55b70a62b"
  },
  {
    "url": "assets/js/14.7a6bcfec.js",
    "revision": "153f3a73f91123c65e6be201068958f1"
  },
  {
    "url": "assets/js/15.c049fe01.js",
    "revision": "b661b43d79a300fcad01c7cdcab9f21d"
  },
  {
    "url": "assets/js/16.542cbfa1.js",
    "revision": "ac141b0b025ee0d762528f4392c694e1"
  },
  {
    "url": "assets/js/17.24e3b951.js",
    "revision": "4b252a25f55dc6464594caaedeeb2c27"
  },
  {
    "url": "assets/js/18.df2ba003.js",
    "revision": "1b83d78171912c103b399a3d850bf740"
  },
  {
    "url": "assets/js/19.15a4fb1a.js",
    "revision": "61f90b3b8c066bc009b774ebacf3c2b7"
  },
  {
    "url": "assets/js/20.6bed0ca2.js",
    "revision": "938225b1856059e7c511e97cc3ecd2fd"
  },
  {
    "url": "assets/js/21.54ecbdb2.js",
    "revision": "de408acbce8d1a766be94e2ae0c25c7a"
  },
  {
    "url": "assets/js/22.29a7d147.js",
    "revision": "97e0f33ef09cf5e8115755814bc1ff28"
  },
  {
    "url": "assets/js/23.55257b5b.js",
    "revision": "67712d6884869991862cfa2a5613de11"
  },
  {
    "url": "assets/js/24.60d32fae.js",
    "revision": "d9237942b8f08a9d71612313a87cc920"
  },
  {
    "url": "assets/js/25.d122743b.js",
    "revision": "0647974a0b583e1a9773de4245a07184"
  },
  {
    "url": "assets/js/26.83a455cd.js",
    "revision": "058e6c8fa816d7e896f8b0a707e8f32c"
  },
  {
    "url": "assets/js/27.c760e1ef.js",
    "revision": "921652017645bb04bc981f188b26a5f5"
  },
  {
    "url": "assets/js/28.e9560f72.js",
    "revision": "16bb98e676d2cf8dff677514efaa448e"
  },
  {
    "url": "assets/js/3.c21d25f0.js",
    "revision": "f441e482f2468612e71abe2baa08c367"
  },
  {
    "url": "assets/js/4.45378515.js",
    "revision": "bab61954a76174ae2fbb2b820169cceb"
  },
  {
    "url": "assets/js/5.9c4e8ebb.js",
    "revision": "29321f9d0aa0814689cb12be97f8baa4"
  },
  {
    "url": "assets/js/6.6244f561.js",
    "revision": "a11999ff632a73556a94707c61f24bed"
  },
  {
    "url": "assets/js/7.14c5f762.js",
    "revision": "4afcf93ac89cca04a4dd7d356d9a7061"
  },
  {
    "url": "assets/js/8.559ad8d2.js",
    "revision": "90af627d57a58e867b0942c7095905a8"
  },
  {
    "url": "assets/js/9.56017ce6.js",
    "revision": "c8361cba8008cb5a4f29b85381b6f9ee"
  },
  {
    "url": "assets/js/app.6f3ff07c.js",
    "revision": "d97b61b7ee77f62025c740b4e7e4f8df"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "cf6bd3c6285f7bad1e8ce664bef4cec0"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "162a30394f2f9e208ed5c3c931da6838"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "9b34a39ebc9242e8c51aee5a94f232af"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "1e64692dbc95abfb329c0f655318adf9"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "2b071aa56e97143ef7f68f4c254966b7"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "94262248aff98c38122af502ee32cb87"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "7d85c9d7e2837892501fef8ff69e6e92"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "fe60a321cf8d2fe371392e74eabb72bc"
  },
  {
    "url": "categories/index.html",
    "revision": "f37a5d76f4678b91113188dbf3b52fad"
  },
  {
    "url": "categories/js/index.html",
    "revision": "63b8f2eb0183f4e74b4d2c154f157281"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "ae848c819c287edcfa789a04051d6701"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "ced40909b95cd1b92aa3aaa5c64043f2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3d13a114afd2c6ef32f8026cb88529c2"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "4b2d95a7a79c8dbfde84b9fc494a3bee"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "b7f022684d6a36abc6184984c61b0de5"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "dfd6b7dd2e9b880bfe1c1f2da3f36b83"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "380dbcdf6e8366476728c69941190a5b"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "e2de36dbcabcc2d23aa19158cf4c8fb2"
  },
  {
    "url": "message/index.html",
    "revision": "ef784ea5cec04c52c662f666b25cdca7"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "774c1d6cda9362a82e4f4287d5cdd71f"
  },
  {
    "url": "tag/index.html",
    "revision": "b0bb02fd46bfcf0c63d78e54109b3107"
  },
  {
    "url": "tag/js/index.html",
    "revision": "775ca06d0fd59ead8b90b3eb8c787787"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "e525a32e710a960f437af511b22b0f18"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "23f4e7af92af32269f1252b739b2a0bf"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9a79832a5df53f636ae2d94bded073d4"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "d11bbe4ea5981080029a85cc7b084371"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "3576ded675e4b2cfb720c3be8023eeb1"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "e6a2b49e5f062c4e8a151058eb8ec896"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "ae00bca80b1125a81204a71ee879625e"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "018f451adf503515747afb3a2001b2a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "667f4e540c2b4bb933d609fdae640a4a"
  },
  {
    "url": "web/index.html",
    "revision": "533c2b90933cf367efe6efa51fc70fc9"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "5517ad82a6e8f3196ce6755b23584697"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "be02333852d8f7fce2a63423c322715c"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "34ff831a53a6aff7344f359763710630"
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
