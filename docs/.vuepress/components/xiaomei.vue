<template>
  <div class="flex">
    <el-image
      v-for="(url, i) in urls"
      :key="i"
      :src="url"
      lazy
      class="my-image"
      :style="width"
    ></el-image>
    <i v-for="item in urls.length - 1" :key="item + 'i'" :style="width"></i>
  </div>
</template>
<script>
const urlList = require("../public/assets/json/img.json");
export default {
  data() {
    return {
      urls: urlList,
      width: undefined,
    };
  },
  mounted() {
    if (typeof window !== "undefined") {
      const flex = document.querySelector(".flex");
      this.getWidth(flex);
      const body = document.querySelector(".theme-reco-content");
      body.style.maxWidth = "100%";
      window.onresize = () => {
        return (() => {
          this.getWidth(flex);
        })();
      };
    }
  },
  methods: {
    getWidth(flex) {
      const flexWidth = flex.clientWidth;
      const num = Math.floor(flexWidth / 500); //  最多几个
      this.width = `width:${500 + ((flexWidth % 500) - 100) / num}px`;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
