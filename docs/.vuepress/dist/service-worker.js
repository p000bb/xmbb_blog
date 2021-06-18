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
    "revision": "7451fc05afedf5323ffe99e45318ee09"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "26c9132acd26f9aa40501f7e81bb1119"
  },
  {
    "url": "个人生活/锻炼时间.html",
    "revision": "005f1bd7b5ee6ce1e099ce0e2b077f8a"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "1ddbf89193866fbdb1a18e858d02a45f"
  },
  {
    "url": "assets/css/0.styles.750c64f2.css",
    "revision": "21e149da09f09fb12dd96ae76e280b62"
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
    "url": "assets/js/1.eba33389.js",
    "revision": "51ee0df565fd2dc20b3f58c5799bc469"
  },
  {
    "url": "assets/js/10.693d7342.js",
    "revision": "9d41247325cbeb3265f776fb45bb6654"
  },
  {
    "url": "assets/js/11.ca980967.js",
    "revision": "d0c6700f212defafdfe6e91afb1b542f"
  },
  {
    "url": "assets/js/12.4da0e8df.js",
    "revision": "855c4d019098bc74d95c523abdea0f8f"
  },
  {
    "url": "assets/js/13.0d18ea9c.js",
    "revision": "37ff10bc1d5f9a80c557aafc500ef8e1"
  },
  {
    "url": "assets/js/14.06283b39.js",
    "revision": "a90a49157260ef791760ac4ffeede77e"
  },
  {
    "url": "assets/js/15.fab4bcef.js",
    "revision": "ed12e7af0c58e8e09f06d1d779899f6a"
  },
  {
    "url": "assets/js/16.3ef3c78d.js",
    "revision": "913f620747adb89edc559f473893ec05"
  },
  {
    "url": "assets/js/17.000d0f33.js",
    "revision": "187cbe4edd503dc340e713e0fe5bf69b"
  },
  {
    "url": "assets/js/18.8c2531f5.js",
    "revision": "156388549edc999e4c3eafdd75ba78eb"
  },
  {
    "url": "assets/js/19.fdfcdf07.js",
    "revision": "6d7e2e592efb0c6fc213d29337ef3d4a"
  },
  {
    "url": "assets/js/20.a4ec5b38.js",
    "revision": "094c5853681aec193fcbc16cce437f71"
  },
  {
    "url": "assets/js/21.e3698da3.js",
    "revision": "66f79fb4f2e6457c44db7c52c1ad530e"
  },
  {
    "url": "assets/js/22.a86b03f0.js",
    "revision": "e59b7b89c516c74dff5b1859a966732c"
  },
  {
    "url": "assets/js/23.2c19a812.js",
    "revision": "dd6a8324131184ab09e4e76da36d327f"
  },
  {
    "url": "assets/js/24.b39dfb47.js",
    "revision": "bf1c915b778e0e594c5680d7b0dd91b7"
  },
  {
    "url": "assets/js/25.25c7c5d7.js",
    "revision": "0f5813570ba22a182f14660f4a68792a"
  },
  {
    "url": "assets/js/26.cf1d6391.js",
    "revision": "f472e188ba30f4d54089ea4c89c01b3c"
  },
  {
    "url": "assets/js/27.af7b49e6.js",
    "revision": "bea87a5cbdcb075eaf926137e3b634b8"
  },
  {
    "url": "assets/js/28.974e0e84.js",
    "revision": "e1ce34baf7ba380436257cb0cd38c7ad"
  },
  {
    "url": "assets/js/29.aec4ebe8.js",
    "revision": "a1ebe7d982c94c75bc2986c9c9cbcc9c"
  },
  {
    "url": "assets/js/3.2a8ac9c7.js",
    "revision": "afda84670a488e79f196d5366c850fec"
  },
  {
    "url": "assets/js/30.e51640c7.js",
    "revision": "116526fbd34f57f7e2eb70fc9ac4b0ec"
  },
  {
    "url": "assets/js/31.22ac95b8.js",
    "revision": "a75cc711a40f067452803427b557c67f"
  },
  {
    "url": "assets/js/32.dd73fcb9.js",
    "revision": "7d0b18a55dbb4703156aaa1f353662bd"
  },
  {
    "url": "assets/js/33.fa5372e9.js",
    "revision": "5909e4ee7d65d79991636e075069027d"
  },
  {
    "url": "assets/js/34.3fab3c4e.js",
    "revision": "adfd6b30c8042863594cbaa942021750"
  },
  {
    "url": "assets/js/35.7fc8f1ab.js",
    "revision": "d8380a8283e1d6175fabba3c4b9f1942"
  },
  {
    "url": "assets/js/36.a47a13b7.js",
    "revision": "00cc89dddad8837669fd936d6d09a5d1"
  },
  {
    "url": "assets/js/37.ae953522.js",
    "revision": "6cfde66e5bf7cfdbf69ee6315a4dc552"
  },
  {
    "url": "assets/js/38.750c5281.js",
    "revision": "830c2af0c70429cea232f1e9ee8174dd"
  },
  {
    "url": "assets/js/39.816de31a.js",
    "revision": "6aab702ef22a3ac46a77fa857e43f46d"
  },
  {
    "url": "assets/js/4.e344b0b8.js",
    "revision": "eaefd62dfd682380d2b400cc0e411ef5"
  },
  {
    "url": "assets/js/40.60b144b2.js",
    "revision": "85bf1fdec46014277b283fbe23ac568a"
  },
  {
    "url": "assets/js/5.3a00df27.js",
    "revision": "58b6b73bae15316a8efbdd97ed0915aa"
  },
  {
    "url": "assets/js/6.4f21068c.js",
    "revision": "0c62c3a346d5382487bb70d8588a7f42"
  },
  {
    "url": "assets/js/7.c6d9b2ee.js",
    "revision": "d8ccdb4f649923725b3cf2976c655bb5"
  },
  {
    "url": "assets/js/8.19ad6912.js",
    "revision": "662cf4bb705f4f34d8c4820abc7d6d1f"
  },
  {
    "url": "assets/js/9.6f8e0649.js",
    "revision": "d00f21edaf73bc29d0acda678b0a5da8"
  },
  {
    "url": "assets/js/app.df97a352.js",
    "revision": "f6b056b5a87f0f2bbce988d2db28c2c9"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "5cc9c3a562e3f0418ca9eab9f6c8fcdc"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "fdabf419e34be8485f10663c0cc474db"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "1310476a86ab24a014a114f92c91cde8"
  },
  {
    "url": "blog/前端/flex布局换行左对齐解决方法.html",
    "revision": "c4f099ee7bf471b73c521616cc274264"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "71c911218e2e8825247d2542eddb83a5"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "c81cfdafc96d9a130d7ef350b07f0790"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "9bab1f4d710a6794b53c4e936fcb5727"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "21a3507d55aa9442c2524f81aeffbf92"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "25da9c159e484fa374d23e9a46f81f12"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "6c0e49c37061b6a599447e1f1c605c3c"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "6f4a0b8730f2037541b79e15e789b8ef"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "77fd3d8fb96a68aedb99cd3ece6644ae"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "31485f4075d5f4c93704585bdd1cb563"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "5617014304dd23e7c4e296d92425dc43"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "6580ac604d131a168016e5718bd8fb33"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e030599b157aa65e26a39a095b73cc74"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "313b8872e06dce825550b214a07864bc"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "f0ee7fc18dd251effab8467a71f5657d"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "e2adb115c8b59f001e4fe527b1f35a1b"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "218822f218a8ccd9f8fc44fd7c8f4d7b"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "0abc0032f83c498d68e0eb9a55e20610"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "7775b613eea9d59528968d4eb5872e23"
  },
  {
    "url": "categories/index.html",
    "revision": "cccf949e781a7516285b3eee7fd3f086"
  },
  {
    "url": "categories/js/index.html",
    "revision": "142e37a2fc8fcdaa4510c063faa4a1c7"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "f30671db83e034641eebc1f18b83ee44"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "140a4a7a5075cb114cea2352dfcd7421"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "4fb9e36a537fe03eb3e3e97a70a16afa"
  },
  {
    "url": "index.html",
    "revision": "fd3dd3870fc0cbe1a777a7b06a0020b8"
  },
  {
    "url": "message/index.html",
    "revision": "f3c2879bdd6877b941d22165cbbe8382"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "ca25a66d2c8e374eb9dcf4052059de09"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "4b68849db8eb8bd2854f03cb9cd70295"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "6b0ccba2ca250d66b828f92c13255aae"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "0b0eb291fa607fec0a5e0dc2843f1c64"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "32dc7dfb993ac32c66d044a5e8f3d57a"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "e817090e245612331851b087cef18cb1"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "63cc01a2e97b07c1cae7aab6a99af4cf"
  },
  {
    "url": "tag/css/index.html",
    "revision": "323befc0272b582ceceb98f144a22855"
  },
  {
    "url": "tag/flex布局/index.html",
    "revision": "ca2234c07c3c081de05338c1b1e3cd8a"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "b1fd2db67b79ec18b5a9ed8f1c70183f"
  },
  {
    "url": "tag/index.html",
    "revision": "97f9d5ff10540909563e01b643739478"
  },
  {
    "url": "tag/js/index.html",
    "revision": "edd10aed06e0774ec0bbe75008be743d"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "8b71dd9ec1987034a405cc360cbbd0e7"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "df2c2368ffea5b5ce0d893e52532b3d4"
  },
  {
    "url": "tag/react/index.html",
    "revision": "db7c51651258a9bca4a431d29d9c07a2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cf5687432cc9a5ec03cc0c2fd8a950db"
  },
  {
    "url": "timeline/index.html",
    "revision": "fad7b60b36ab74e45f2b853dea9a9834"
  },
  {
    "url": "web/index.html",
    "revision": "78890e0372baa22d2a80c6f4cc72ee2c"
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
