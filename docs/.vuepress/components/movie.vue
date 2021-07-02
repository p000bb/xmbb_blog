<template>
  <div class="movie">
    <!-- <h2>电影时间</h2> -->
    <Content slot-key="tip" />
    <ul v-loading="loading">
      <li
        v-for="(item, index) in movieList"
        class="movieLi"
        :key="index"
        :class="item.solo && 'solo'"
      >
        <div style="display: flex" v-if="!isMobile">
          <div style="margin-right: 1.5rem">
            <el-image
              :key="item.img"
              :src="item.img"
              lazy
              class="movie_img"
            ></el-image>
          </div>
          <div style="width: 100%">
            <h2 class="title" @click="goDouban(item.url)">{{ item.title }}</h2>
            <div class="movieInfo" v-html="item.comment"></div>
            <div class="page-info">
              <div class="tags">
                <i class="el-icon-timer"></i>{{ item.time }}
              </div>
              <div class="tags">
                <span>个人评分：</span>
                <el-rate
                  :value="item.rank / 2"
                  disabled
                  show-score
                  text-color="#ff9900"
                  :score-template="item.rank"
                >
                </el-rate>
              </div>
              <div class="tags">
                <span>城市：</span>
                <span>{{ item.city }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h2 class="title" @click="goDouban(item.url)">{{ item.title }}</h2>
          <div style="display: flex">
            <div style="margin-right: 1.5rem">
              <el-image
                :key="item.img"
                :src="item.img"
                lazy
                class="movie_img"
              ></el-image>
            </div>
            <div>
              <div class="movieInfo" v-html="item.comment"></div>
              <div class="page-info">
                <div class="tags">
                  <i class="el-icon-timer"></i>{{ item.time }}
                </div>
                <div class="tags">
                  <span style="margin-right: 1rem">个人评分:</span>
                  <el-rate
                    :value="item.rank / 2"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :score-template="item.rank"
                  >
                  </el-rate>
                  <div class="tags">
                    <span>城市：</span>
                    <span>{{ item.city }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
import isPhone from "../mixins/index";
const movieList = require("../public/assets/json/movie.json");
export default {
  mixins: [isPhone],
  data() {
    return {
      movieList: [],
      currentPage: 1,
      total: 1,
      pageSize: 10,
      loading: false,
      isMobile: false,
      windows: null,
    };
  },
  created() {
    this.isMobile = this.isPhone(); // 判断是手机端 还是pc端
    this.movieList = movieList.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
    this.total = movieList.length;
  },
  mounted() {
    this.windows = window;
  },
  methods: {
    goDouban(url) {
      this.windows.open(url);
    },
    handleCurrentChange(val) {
      this.loading = true;
      setTimeout(() => {
        this.currentPage = val;
        this.windows.scrollTo(0, 0);
        this.movieList = movieList.slice(
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
.title {
  cursor: pointer;
  position: relative;
  padding-left: 0.8rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.25;
  color: rgb(33, 117, 155);
}
.title:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #2999fe;
  visibility: hidden;
  transform: scaleX(0);
  transition: 0.3s ease-in-out;
}
.movieLi {
  border-bottom: 2px solid #e8e8e8;
  padding: 16px 20px;
  border-radius: 0.25rem;
  list-style-type: none;
}

.movieLi:last-child {
  border-bottom: none;
}

.movie_img {
  height: 200px;
  width: 150px;
  object-fit: contain;
}

.movieInfo {
  font-size: 1rem;
  line-height: 1.6rem;
  padding: 5px;
  margin-bottom: 5px;
  min-height: 120px;
}

.page-info {
  padding: 0 5px;
  display: flex;
  color: #a5a5a5;
  align-items: center;
}

.tags {
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

i {
  margin-right: 0.5rem;
}
.solo {
  background: #004eff2e;
}
@media screen and (max-width: 768px) {
  .movie_img {
    height: 6.25rem;
    width: 4.6875rem;
    object-fit: contain;
  }

  .movieInfo {
    font-size: 1rem;
    line-height: 1.6rem;
    padding: 0.3125rem;
    margin-bottom: 0.3125rem;
    min-height: 3.75rem;
  }

  .tags {
    margin-right: 1rem;
    display: block;
    align-items: center;
  }

  .page-info {
    padding: 0 0.3125rem;
    color: #a5a5a5;
    display: block;
    align-items: center;
  }
}
</style>
