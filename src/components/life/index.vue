<template>
	<div class="info" v-infinite-scroll="loadData">
		<div class="normal" style="display: flex;justify-content: space-between;">
			<h3 style="line-height: 40px;">个人生活</h3>
			<el-input placeholder="请输入关键字" v-model="keyword" style="width:20%;min-width: 200px;">
				<el-button slot="append" icon="el-icon-search" type="primary" @click="keywordSearch"></el-button>
			</el-input>
		</div>
		<div class="block normal">
		  <el-timeline>
		    <el-timeline-item :timestamp="item.add_time" placement="top" v-for="item in timeData">
		      <el-card>
				<h4 v-if="item.title">{{item.title}}</h4>
		        <p v-html="item.main"></p>
		      </el-card>
		    </el-timeline-item>
		  </el-timeline>
		</div>
	</div>
</template>

<script>
	import Allminxins from '../../mixins/Allminxins.js'
	export default {
		components: {},
		mixins: [Allminxins],
		data() {
			return {
				timeData:[],
				keyword:"",
				sfSearch:false
			}
		},
		computed: {},
		created() {
			this.getData()
		},
		methods: {
			getData(){
				this.$api.post('?s=App.Table.FreeQuery', {
					model_name: 'life',
					where: '[["id", ">", "0"]]',
					page: this.page,
					perpage: 10,
					order:["id DESC"]
				}).then((resp) => {
					this.total = resp.data.data.total
					resp.data.data.list.forEach((item) => {
						this.timeData.push(item)
					})
				})
			},
			keywordSearch(){
				// this.page = 1
				this.$api.post('?s=App.Table.FreeQuery', {
					model_name: 'life',
					page: this.page,
					perpage: 10,
					logic: 'or',
					where_title: 'LIKE-' + this.keyword,
					where_main: 'LIKE-' + this.keyword,
					where_add_time: 'LIKE-' + this.keyword,
					where_kind: 'LIKE-' + this.keyword,
				}).then((resp) => {
					this.total = resp.data.data.total
					this.message = resp.data.data.list
				})
			},
			loadData(){
				this.load(()=>{
					
				})
			}
		}
	}
</script>

<style>
</style>
