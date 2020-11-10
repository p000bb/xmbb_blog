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
    "revision": "d48bda1d11364f2692b448ac84ee7f06"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "9585ac7de098eee8e16866e1088afa70"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "bf68adc479fd5a257e1f1991b516cb0e"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "5f58ad1be5c1657d78da8e71cfc19857"
  },
  {
    "url": "assets/css/0.styles.494e6b9f.css",
    "revision": "d214095202ceaaffbec8860fcc8dfc07"
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
    "url": "assets/js/1.f792cb28.js",
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
    "url": "assets/js/3.880d42f7.js",
    "revision": "f441e482f2468612e71abe2baa08c367"
  },
  {
    "url": "assets/js/4.ead6ceeb.js",
    "revision": "bab61954a76174ae2fbb2b820169cceb"
  },
  {
    "url": "assets/js/5.f9a44927.js",
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
    "url": "assets/js/8.95af1c87.js",
    "revision": "90af627d57a58e867b0942c7095905a8"
  },
  {
    "url": "assets/js/9.36c03843.js",
    "revision": "c8361cba8008cb5a4f29b85381b6f9ee"
  },
  {
    "url": "assets/js/app.81705fcd.js",
    "revision": "7ee5cf95c050bf21aa3ed5336898de5a"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "2f0f18a4555b7a5a25499a446be9ce72"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "5c065ff472de10ef40eaec72427d7bae"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "45357c37997be71dff520a945c2e14db"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "bb25ac59bee4c4c731dd354e26047109"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "50d43072266da7fe43eea91d1440b205"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "e24dc00efc43b69b930c7451eba88877"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "9ea2951ed756606cf1613f80841c93fc"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "2c2b69a1ee4a8ed384112e9b41e0dfc2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ae05e43787be4d96bfadfd6a9d89a49e"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "4f0c68bd831cf1db99c5db052ae25fd9"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "03f9da7807ab613756516146b9216262"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "79fe5550f7cc40ab36447bc97f225819"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "2566a868b883267bf8354d371154422a"
  },
  {
    "url": "categories/index.html",
    "revision": "1c7d1f60408f1186498b1a7b98e3889c"
  },
  {
    "url": "categories/js/index.html",
    "revision": "95e9fac947666640a17d86202fbb36ec"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "d50ab38de1032f5f3cc25145674ad9e3"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "68a804f75a544c59fa9a3765d695bd7e"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "9c3e5925eb0f53caed07cb3527c310d2"
  },
  {
    "url": "message/index.html",
    "revision": "b4e8741715a5164fcab4ed9b570d0145"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "bee970960104f174547022f7a815ec36"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "05920cb15a6128ccefcc4b50c4d3b2d2"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "c731682b9d6d6d40479cf996f1558790"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "74fc58e092d81cfec02d137ba5fc0ca6"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "332683a47842e5a1a4bab3636c0bb3cc"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "aa3877c850c1a7d11c562ba661962442"
  },
  {
    "url": "tag/index.html",
    "revision": "c63ed932e14380edc1238ae0b26160f8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "a6d8cf607b111b3469798e517d32e168"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "928eda2a8c4ed03ac848b1468834c412"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "5e1f9ae4da5f995171a3f9baa7e6bb81"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f2e4e6c6eac889538591cc53fcdb09f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "42743c693715486a51083c11b46d0de8"
  },
  {
    "url": "web/index.html",
    "revision": "143504da4739a22784375395032987b6"
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
