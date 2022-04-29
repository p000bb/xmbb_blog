<template>
  <div v-loading="loading">
    <div ref="myCharts" class="myCharts"></div>
    <div style="margin-top: 2rem">
      <div ref="category" class="category"></div>
    </div>
    <div style="margin-top: 2rem">
      <div ref="category1" class="category1"></div>
    </div>
    <!-- <el-timeline>
      <el-timeline-item
        :timestamp="item.timedate"
        placement="top"
        v-for="item in mylist"
        :key="item.id"
      >
        <el-card class="my-card">
          <h2>心得</h2>
          <div v-html="item.main" class="main"></div>
        </el-card>
      </el-timeline-item>
    </el-timeline> -->
    <!-- <el-pagination
      background
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
    >
    </el-pagination> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import moment from "moment";
import "moment/locale/zh-cn";
export default {
  data() {
    return {
      list: [],
      moreList: [],
      currentPage: 1,
      total: 1,
      pageSize: 10,
      loading: false,
      day: {},
    };
  },
  computed: {
    mylist() {
      return this.list.filter((item) => item.main);
    },
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
    filterBar(val) {
      let sum = 0;
      this.moreList
        .filter((item) => item.anaerobic_type == val)
        .forEach(() => {
          sum++;
        });
      return sum;
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
          this.getStatistical1(res.list);
          this.getStatistical2();
          console.log(res.list, 123);
          this.list = res.list.slice(
            (this.currentPage - 1) * this.pageSize,
            this.currentPage * this.pageSize
          );
          this.drawLine();
        });
    },
    getStatistical1(val) {
      val.forEach((item) => {
        let type = moment(item.timedate, "YYYY-MM-DD HH:mm:ss").format("dddd");
        this.day[type] === undefined ? (this.day[type] = 1) : this.day[type]++;
      });
      const data = this.day;
      let myChart = echarts.init(this.$refs.category);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
              "星期日",
            ],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "锻炼次数",
            type: "bar",
            barWidth: "60%",
            data: [
              data["星期一"],
              data["星期二"],
              data["星期三"],
              data["星期四"],
              data["星期五"],
              data["星期六"],
              data["星期日"],
            ],
          },
        ],
      });
    },
    getStatistical2() {
      console.log(this.filterData(1), 333);
      let myChart = echarts.init(this.$refs.category1);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["胸", "背", "肩", "手臂", "腿", "有氧"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "锻炼次数",
            type: "bar",
            barWidth: "60%",
            data: [
              this.filterBar(1),
              this.filterBar(2),
              this.filterBar(3),
              this.filterBar(4),
              this.filterBar(5),
              this.filterBar(6),
            ],
          },
        ],
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
  padding: 1.25rem;
}
.my-card div {
  color: #666666;
  font-weight: bold;
  font-size: 1rem;
}
.main {
  font-size: 0.7rem !important;
}
.myCharts {
  width: 100%;
  height: 20rem;
}
.category,
.category1 {
  width: 100%;
  height: 20rem;
}
@media screen and (max-width: 768px) {
  .myCharts {
    transform: rotate(90deg);
    width: 100%;
    height: 18.75rem;
  }
  .category,
  .category1 {
    transform: rotate(90deg);
    width: 100%;
    height: 18.75rem;
    margin-top:20rem!important;
  }
  .category1{
    margin-bottom:5rem;
  }
}
</style>
