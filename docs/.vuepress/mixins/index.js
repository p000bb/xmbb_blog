export default {
  methods: {
    isPhone() {
      if(typeof window === 'undefined') return false
      let mobile_flag = false;
      if (document.documentElement.clientWidth <= 768) {
        mobile_flag = true;
      }
      return mobile_flag;
    }
  }
}
