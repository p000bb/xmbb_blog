<template>
  <div v-loading="loading">
    <el-timeline>
      <el-timeline-item
        :timestamp="item.add_time"
        placement="top"
        v-for="item in list"
        :key="item.id"
      >
        <el-card v-html="item.html" class="my-card"> </el-card>
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
export default {
  data() {
    return {
      list: [],
      currentPage: 1,
      total: 1,
      pageSize: 10,
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.axios
        .get("/?s=App.Table.FreeQuery", {
          model_name: "pyq",
          where: '[["id", ">=", "0"]]',
          page: this.currentPage,
          perpage: 10,
        })
        .then((res) => {
          this.loading = false;
          this.list = res.list;
          this.total = res.total;
        });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
    },
  },
};
</script>

<style scoped>
.my-card {
  padding: 20px;
}
</style>
