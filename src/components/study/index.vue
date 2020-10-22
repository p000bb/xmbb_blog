<template>
	<div class="info">
		<div class="info-left">
			<ul>
				<li v-for="item in articleList" class="article-card">
					<div>
						<div class="list-title">
							<h2 style="color:#21759B">{{item.title}}</h2>
						</div>
						<div class="list-info">
							<span>发布日期：{{item.add_time}}</span>
							<span>种类：{{item.kind}}</span>
							<span>浏览量：{{item.numbers}}</span>
						</div>
						<div class="list-article">
							<p v-html="item.main"></p>
						</div>
						<div class="list-footer">
							<span>查看全文</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				articleList: []
			}
		},
		computed: {},
		created() {
			this.getList()
		},
		methods: {
			getList() {
				this.$api.post("api?s=App.Table.FreeQuery", {
					model_name: "blog",
					where: '[["id", ">", "1"]]',
					
				}).then((resp) => {
					this.articleList = resp.data.data.list
				})
			}
		}
	}
</script>

<style scoped>
</style>
