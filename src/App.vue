<template>
	<div id="app">
		<div class="header">
			<el-row>
				<el-col :span="12">
					<img src="@/assets/img/logo.jpg" alt="" style="width: 50px;height: 50px;">
					<div>熊猫宝宝的个人博客</div>
				</el-col>
				<el-col :span="12">
					<ul class="header-ul">
						<li v-for="(item,index) in headerList" @click="headerClick(item)">
							{{item.title}}
						</li>
					</ul>
				</el-col>
			</el-row>
		</div>
		<keep-alive>
			<router-view />
		</keep-alive>
		<el-backtop target="#app" :visibility-height="100" title="返回顶部">
		</el-backtop>
	</div>
</template>

<style scoped>
	.header-ul {
		width: 100%;
	}

	.header-ul li {
		float: left;
		width: 16%;
		text-align: center;
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.header-ul li:hover {
		color: #409EFF;
		cursor: pointer;
	}
</style>
<script>
	export default {
		components: {},
		data() {
			return {
				headerList: [{
						title: "博客首页",
						url: "/index"
					},
					{
						title: "学习交流",
						url: "/study"
					},
					{
						title: "留言板",
						url: "/message"
					},
					{
						title: "个人生活",
						url: "/life"
					},
					{
						title: "游戏时间",
						url: "/game"
					},
					{
						title: "电影推荐",
						url: "/movie"
					},
				]
			}
		},
		computed: {},
		created() {
			if(localStorage.getItem('ip')) return
			this.getIP()
		},
		methods: {
			headerClick(item) {
				if (this.$route.path == item.url) return
				this.$router.push(item.url)
			},
			getIP(){
				this.$api.post("?s=Ext.IP.GetInfo").then((resp) => {
					localStorage.setItem('ip', resp.data.data.data.ip)
				})
			}
		}
	}
</script>
<style>
	/* @import "./assets/css/main.css"; */
	/* @import "./assets/css/color-dark.css";     /*深色主题*/
	/*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>
