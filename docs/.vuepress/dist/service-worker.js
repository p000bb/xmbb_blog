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
    "revision": "a66c1700fac7051375ec72dbaba18b1a"
  },
  {
    "url": "assets/css/0.styles.da921609.css",
    "revision": "9e19aab2a422d81c6a421942f1834715"
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
    "url": "assets/js/1.69b3a67d.js",
    "revision": "5dda18da3a58487a68e7e75c3dc34e21"
  },
  {
    "url": "assets/js/10.6a511a28.js",
    "revision": "c869329aa1839d7ffcbfbf99969feccc"
  },
  {
    "url": "assets/js/11.13bacb3d.js",
    "revision": "eae3011b3fffd805e484c4cf3f3bd18b"
  },
  {
    "url": "assets/js/12.d0670832.js",
    "revision": "fba7a160c920a06f2588135e347a71c0"
  },
  {
    "url": "assets/js/13.9e41dfa3.js",
    "revision": "ae698c6f2a6431efcc98e5ed4c5c3860"
  },
  {
    "url": "assets/js/14.ed7310e5.js",
    "revision": "2ac7a00a706857dae484c833bb2c1b3d"
  },
  {
    "url": "assets/js/15.a7a94596.js",
    "revision": "4fc6022e83ab8055eae29a39e9c128ac"
  },
  {
    "url": "assets/js/16.22bac513.js",
    "revision": "51a9db46972fe33188faf8229f93f702"
  },
  {
    "url": "assets/js/17.f374ec1f.js",
    "revision": "03b1a243615f47bc2b6985b98c308306"
  },
  {
    "url": "assets/js/18.40321d49.js",
    "revision": "e70bb490a6975ff16ae46e387a542dcc"
  },
  {
    "url": "assets/js/19.4e0dc49a.js",
    "revision": "f9a96d946e1a9000c27015154c330db0"
  },
  {
    "url": "assets/js/20.a2a95df7.js",
    "revision": "5a77c2695fa24180b22a2281d50d77cd"
  },
  {
    "url": "assets/js/21.32b7ea87.js",
    "revision": "123a73c844f3fac82b07aef076b08432"
  },
  {
    "url": "assets/js/22.0a571eff.js",
    "revision": "6bdf72b56151a6505b030e86b243e9e8"
  },
  {
    "url": "assets/js/23.0d4191a4.js",
    "revision": "a790eeca4138df758a24f6caaa85051d"
  },
  {
    "url": "assets/js/24.887ce52a.js",
    "revision": "c8d110d27d2aa68134a1c99f636f177d"
  },
  {
    "url": "assets/js/25.1b59d592.js",
    "revision": "3dc1cfd10ddd9163da1db6df13dad800"
  },
  {
    "url": "assets/js/3.5a0164dd.js",
    "revision": "3e97c36afbbaf5db9df16c2114abbdd6"
  },
  {
    "url": "assets/js/4.aeb50a61.js",
    "revision": "85b81ef64ca3f7a6a7a03b1352190741"
  },
  {
    "url": "assets/js/5.9d920212.js",
    "revision": "ad0e822df2c2d0fd68ca4f9243974b9f"
  },
  {
    "url": "assets/js/6.4a5c29cd.js",
    "revision": "1d402ea7d57516e4dc005b3b7c2a7953"
  },
  {
    "url": "assets/js/7.72cdd5ca.js",
    "revision": "62f5288f546a988bdf31b525bcb74f95"
  },
  {
    "url": "assets/js/8.6954aaa6.js",
    "revision": "22fa7e3c816942d117373cbb6db3c724"
  },
  {
    "url": "assets/js/9.9f03ab66.js",
    "revision": "2eb595dd0724d882d800633c00bf1744"
  },
  {
    "url": "assets/js/app.fb053647.js",
    "revision": "14675ddb5e534723ac952f1fa30568a0"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "158c26b3768b83b78c7422b2b35c761f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5633c34dfa22c32e23ed98b684093ee4"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "cc64f5c92f3e4bf8eb23d8798597f005"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "223c5e6976fa626c2dabab435e5ca8fb"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "de5a38a71f4549b36138ca13e3e50a5d"
  },
  {
    "url": "categories/index.html",
    "revision": "8188eaf9f6132ea5d08629deb86e1b9d"
  },
  {
    "url": "categories/js/index.html",
    "revision": "e46552097ff1ca56a2c10445da97a3e2"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "0e3a8cddd41b1eab2e60927cf4fec73b"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "dbd6229ca2b831a1e35c2ebd20eee371"
  },
  {
    "url": "gametime/index.html",
    "revision": "6598dea4da03057342b54ec29fb3c218"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "index.html",
    "revision": "b438f21722130b80389494e9a86e9630"
  },
  {
    "url": "message/index.html",
    "revision": "228cd1ddf84f9ea7b3011c9a849922cd"
  },
  {
    "url": "movietime/index.html",
    "revision": "eabcd7d80f4e98348df3156b62c439ec"
  },
  {
    "url": "my/markdown-yu-fa/markdwn-yu-fa.html",
    "revision": "e770f57c7f94bac33a949c4bb557663d"
  },
  {
    "url": "my/qian-duan/ru-he-jie-jue-tu-pian-jia-zai-shi-bai-de-wen-ti.html",
    "revision": "7187d3c291060cea3bd106601669b493"
  },
  {
    "url": "my/qian-duan/shi-yongflv.js-obs-node-media-server-shi-shi-zhi-bo.html",
    "revision": "625a8212b830a929f83c50b3b735ff1c"
  },
  {
    "url": "my/xiang-mu-da-jian/ben-zhan-da-jian.html",
    "revision": "a6ec3c4cd61c473421476772b9e4c333"
  },
  {
    "url": "mylife/index.html",
    "revision": "3f142422f9b4f0d98cd0c3099fdfbb18"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "7e03e2708f8418f9f3755be6004b68ea"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "3f3f01a70e8f491991a4a1e38ad5c4d8"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "23d1eb6fd5eb812b7a0d6d2794427bff"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "4cd4d5e4b2271e0ad916a6105c0e3ef1"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "504e38461125f1b4a48a4763a403b660"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "2f6e55c720a4083c70861e07d8a3cb45"
  },
  {
    "url": "tag/index.html",
    "revision": "b2bc5276a5247a48c34c58071843fa9a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "509579d61c152a304c9e371227995ebc"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "a80f18882569f6b17ed32c0057705b40"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "79cbec6f9d2308efaf77a9ed09bf53f8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "76905aa839da47930eef6642afba555d"
  },
  {
    "url": "timeline/index.html",
    "revision": "e35411458ff711e9a93b9bd0a321bbbc"
  },
  {
    "url": "web/index.html",
    "revision": "ba16c161de554b40eff07d031dcf7c16"
  },
  {
    "url": "zhuan-zai/js-shi-xian-wu-xian-ceng-ji-shu-xing-shu-ju-jie-gou.html",
    "revision": "798875e5f905a7c76661f08702788fc4"
  },
  {
    "url": "zhuan-zai/vue-zu-jian.html",
    "revision": "09aa1a96a7aedb3a7115a7f2866bf3f2"
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
