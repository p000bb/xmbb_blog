export default {
  methods: {
    isPhone() {
      //   var userAgentInfo = navigator.userAgent;

      // var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

      var mobile_flag = false;

      // //根据userAgent判断是否是手机
      // for (var v = 0; v < mobileAgents.length; v++) {
      //     if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
      //         mobile_flag = true;
      //         break;
      //     }
      //   }
      //   console.log(mobile_flag)
      //   return mobile_flag;
      // }
      if (window.screen.width <= 768) {
        mobile_flag = true;
      }
      return mobile_flag;
    }
  }
}
