<template>
	<div class="info" v-infinite-scroll="loadData">
		<div class="normal">
			<messageBoard :messageForm="messageForm"  @events="events"></messageBoard>
		</div>
		<div style="margin-top:20px" class="normal">
			<div style="display: flex;justify-content: space-between;">
				<h3 style="padding-bottom:10px">留言板</h3>
				<el-input placeholder="请输入关键字" v-model="keyword" style="width:20%;min-width: 200px;">
					<el-button slot="append" icon="el-icon-search" type="primary" @click="keywordSearch"></el-button>
				</el-input>
			</div>
			<div>
				<ul>
					<li v-for="item in message">
						<div style="margin-top:30px">
							<div style="display: flex;">
								<img :src="defaultImg" alt="找不到图片" class="comment_img">
								<p style="width: 100%;padding-left: 15px;">
									<span style="color: #52A9D4">{{item.nickname}}</span>
									<span style="color: #ccc;margin-left: 10px;">({{item.add_time}})</span><br>
									<span v-html="item.content"></span>
								</p>
								<el-popover placement="left" width="400" trigger="click" :value="visible">
									<messageBoard :messageForm="messageForm2"  @events="events" :eventName="['replyPush','replyPublish']"></messageBoard>
									<span class="huifu" @click="huifuMessage(item)" slot="reference">回复</span>
								</el-popover>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import messageBoard from '../../common/Message_board.vue'
	import time from '../../../utils/time.js'
	import Allminxins from '../../mixins/Allminxins.js'
	export default {
		components: {
			messageBoard
		},
		mixins: [time,Allminxins],
		data() {
			return {
				dialog2: false,
				emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔',
					'😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️',
					'🔥', '🌈', '🍏', '⚽️', '❤️', '🇨🇳'
				],
				message: [],
				defaultImg: 'https://img1.doubanio.com/icon/user_normal.jpg',
				keyword: "",
				messageForm:{
					nickname:"",
					textarea:"",
				},
				messageForm2:{
					nickname:"",
					textarea:"",
				},
				visible:false,
				user:{}
			}
		},
		computed: {},
		provide(){
			return {
				userinfo:this.dbsx
			}
		},
		created() {
			this.getMessage()
		},
		methods: {
			events(option){
				option.eventName && this[option.eventName](option)
			},
			push(option){
				this.messageForm.textarea = this.messageForm.textarea+option.data
			},
			//	填写留言板
			publish(option) {
				if (option.data.nickname == "") return this.$message.error('请填写昵称');
				if (option.data.textarea == "") return this.$message.error('请填写留言');
				let list = {
					content: option.data.textarea,
					nickname: option.data.nickname,
				}
				this.$api.post('api?s=App.Table.Create', {
					model_name: 'message',
					data: JSON.stringify(list),
				}).then(() => {
					this.$message({
						showClose: true,
						message: '留言成功',
						type: 'success'
					});
					this.messageForm.nickname = ""
					this.messageForm.textarea = ""
					this.getMessage()
				})
			},
			replyPush(option){
				this.messageForm2.textarea = this.messageForm2.textarea+option.data
			},
			replyPublish(option){
				if (option.data.nickname == "") return this.$message.error('请填写昵称');
				if (option.data.textarea == "") return this.$message.error('请填写留言');
				let list = [{
					content: option.data.textarea,
					nickname: option.data.nickname,
					add_time:this.timeChange(new Date(),'day'),
					pid:this.user.id,
					pname:this.user.nickname
				}]
				this.$api.post('api?s=App.Table.Update', {
					model_name: 'message',
					id:this.user.id,
					data_son:list,
				}).then(() => {
					this.visible = false
					this.$message({
						showClose: true,
						message: '留言成功',
						type: 'success'
					});
					this.messageForm2.nickname = ""
					this.messageForm2.textarea = ""
					this.getMessage()
				})
			},
			//	获取留言数据
			getMessage() {
				this.$api.post('api?s=App.Table.FreeQuery', {
					model_name: 'message',
					where: '[["id", ">", "0"]]',
					page: this.page,
					perpage: 10
				}).then((resp) => {
					this.total = resp.data.data.total
					resp.data.data.list.forEach((item) => {
						this.message.push(item)
					})
				})
			},
			//	滚动条到底部加载数据
			loadData() {
				this.load(()=>{
					this.getMessage()
				})
			},
			//	关键字搜索
			keywordSearch() {
				this.$api.post('api?s=App.Table.FreeQuery', {
					model_name: 'message',
					page: 1,
					perpage: 10,
					logic: 'or',
					where_nickname: 'LIKE-' + this.keyword,
					where_add_time: 'LIKE-' + this.keyword,
					where_content: 'LIKE-' + this.keyword,
				}).then((resp) => {
					this.total = resp.data.data.total
					this.message = resp.data.data.list
				})
			},
			//	消息回复
			huifuMessage(item) {
				this.visible = true
				this.user = item
				console.log(this.user)
			},
		}
	}
</script>
<style scoped>
	.comment_img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	.huifu {
		float: right;
		color: #ccc;
		display: block ruby
	}

	.huifu:hover {
		color: #409EFF
	}
</style>
