<template>
	<div class="movie">
		<!-- <h2>电影时间</h2> -->
		<Content slot-key="tip" />
		<ul v-loading="loading">
			<li v-for="(item,index) in movieList" class="movieLi">
				<div style="display: flex;">
					<div style="margin-right: 1.5rem;">
						<!-- <img :src="$withBase(item.img)" alt="" class="movie_img"> -->
						<img :src="item.img" alt="" class="movie_img">
					</div>
					<div style="width: 100%;">
						<h2 class="title" @click="goDouban(item.url)">{{item.title}}</h2>
						<div class="movieInfo" v-html="item.comment"></div>
						<div class="page-info">
							<div class="tags"><i class="el-icon-timer"></i>{{item.time}}</div>
							<div class="tags">
								<span style="margin-right:1rem">个人评分:</span>
								<el-rate :value="item.rank/2" disabled show-score text-color="#ff9900" :score-template="item.rank">
								</el-rate>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<el-pagination background :current-page="currentPage" @current-change="handleCurrentChange" layout="prev, pager, next"
		 :total="total" :page-size="pageSize">
		</el-pagination>
	</div>
</template>

<script>
	const movieList = require('../public/assets/json/movie.json')
	export default {
		data() {
			return {
				movieList: [],
				currentPage: 1,
				total: 1,
				pageSize: 10,
				loading: false,
			}
		},
		created() {
			this.movieList = movieList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
			this.total = movieList.length
		},
		methods: {
			goDouban(url) {
				window.open(url)
			},
			handleCurrentChange(val) {
				this.loading = true;
				setTimeout(() => {
					this.currentPage = val
					window.scrollTo(0, 0);
					this.movieList = movieList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
					this.loading = false
				}, 1000)
			}
		}
	}
</script>

<style scoped>
	.title {
		cursor: pointer;
		position: relative;
		padding-left: 0.8rem;
		font-size: 1.4rem;
		font-weight: 500;
		line-height: 1.25;
		color: rgb(33, 117, 155)
	}
	.title:after{
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
		object-fit: contain
	}

	.movieInfo {
		font-size: 1.0rem;
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
		margin-right: .5rem;
	}
</style>
