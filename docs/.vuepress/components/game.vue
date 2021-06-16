<template>
  <div v-loading="loading">
    <div ref="myCharts" :style="{ width: '100%', height: '300px' }"></div>
    <el-timeline>
      <el-timeline-item
        :timestamp="item.timedate"
        placement="top"
        v-for="item in list"
        :key="item.id"
      >
        <el-card class="my-card">
          <div v-if="item.aerobic_time">
            <h2>有氧训练</h2>
            <div style="display: flex; justify-content: space-between">
              <div>{{ item.aerobic }}</div>
              <div>时间:{{ item.aerobic_time }}</div>
            </div>
          </div>
          <div v-if="item.anaerobic">
            <h2>无氧训练</h2>
            <div v-html="item.anaerobic"></div>
          </div>
          <h2>心得</h2>
          <div v-html="item.main" class="main"></div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-pagination
      background
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      list: [],
      moreList: [],
      currentPage: 1,
      total: 1,
      pageSize: 10,
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    !this.loading && this.drawLine();
  },
  methods: {
    getType(val) {
      switch (val) {
        case 1:
          return "胸";
        case 2:
          return "背";
        case 3:
          return "肩";
        case 4:
          return "手";
        case 5:
          return "腿";
        case 6:
          return "有氧";
      }
    },
    filterData(val) {
      return this.moreList
        .filter((item) => item.anaerobic_type == val)
        .map((item) => [item.timedate.split(" ")[0], item.anaerobic_type]);
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.myCharts);
      // 绘制图表
      myChart.setOption({
        title: {
          top: 30,
          left: "center",
          text: "健身日历",
        },
        tooltip: {
          backgroundColor: "#555555",
          textStyle: {
            color: "#FFFFFF",
          },
          border: "#555555",
          formatter: (params) => {
            return `${params.value[0]}：${this.getType(params.value[1])}`;
          },
        },
        legend: {
          left: "center",
          top: 65,
          data: ["胸", "背", "肩", "手", "腿", "有氧"],
          textStyle: {
            color: "#000000",
          },
        },
        calendar: {
          top: 120,
          left: 30,
          right: 30,
          cellSize: ["auto", 13],
          range: "2021",
          itemStyle: {
            borderWidth: 0.5,
          },
          dayLabel: {
            nameMap: "cn",
          },
          monthLabel: {
            nameMap: "cn",
          },
          yearLabel: { show: false },
        },
        series: [
          {
            name: "胸",
            type: "scatter",
            coordinateSystem: "calendar",
            data: this.filterData(1),
          },
          {
            name: "背",
            type: "scatter",
            coordinateSystem: "calendar",
            data: this.filterData(2),
          },
          {
            name: "肩",
            type: "scatter",
            coordinateSystem: "calendar",
            data: this.filterData(3),
          },
          {
            name: "手",
            type: "scatter",
            coordinateSystem: "calendar",
            data: this.filterData(4),
          },
          {
            name: "腿",
            type: "scatter",
            coordinateSystem: "calendar",
            data: this.filterData(5),
          },
          {
            name: "有氧",
            type: "scatter",
            coordinateSystem: "calendar",
            data: this.filterData(6),
          },
        ],
      });
    },
    getData() {
      this.loading = true;
      this.axios
        .get("/?s=App.Table.FreeQuery", {
          model_name: "jianshen",
          where: '[["id", ">=", "0"]]',
          page: 1,
          perpage: 1000,
        })
        .then((res) => {
          this.loading = false;
          this.moreList = res.list;
          this.total = res.total;
          this.list = res.list.slice(
            (this.currentPage - 1) * this.pageSize,
            this.currentPage * this.pageSize
          );
          this.drawLine();
        });
    },
    handleCurrentChange(val) {
      this.loading = true;
      setTimeout(() => {
        this.currentPage = val;
        this.windows.scrollTo(0, 0);
        this.list = this.moreList.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.my-card {
  padding: 20px;
}
.my-card div {
  color: #666666;
  font-weight: bold;
  font-size: 16px;
}
.main {
  font-size: 12px !important;
}
</style>
