<template>
	<div>
		<h3 class="title">电影时间</h3>
		<ul>
			<li v-for="item in movieList" @click="goDouban(item.url)" class="movieLi">
				<div style="display: flex;">
					<div style="float: left;">
						<img :src="$withBase(item.img)" alt="" class="movie_img">
					</div>
					<div style="width: 100%;">
						<div class="title">{{item.title}}</div>
						<div>
							1111
						</div>
						<div class="page-info">
							观影时间{{item.time}}
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				movieList:[{
					title:'我和我的家乡',
					img:'/assets/img/movie/1.jpg',
					url:'https://movie.douban.com/subject/35051512/?from=showing',
					time:'2020-10-10 20:20',
					comment:'范伟老师演绎的最后一课，真的很感动。'
				}]
			}
		},
		created() {
		},
		methods: {
			goDouban(url){
				window.open(url)
			}
		}
	}
</script>

<style scoped>
	.title{
		position: relative;
		padding-left: 0.8rem;
		font-size: 1.4rem;
		font-weight: 500;
		line-height: 1.25;
	}
	.movieLi{
		cursor: pointer;
		list-style-type:none;
		margin: 0 auto 20px;
		padding: 16px 20px;
		border-radius: 0.25rem;
		border: 1px solid rgba(0, 0, 0, .1);
		/* box-shadow: var(--box-shadow) */
	}
	.movie_img{
		height:200px
	}
</style>
