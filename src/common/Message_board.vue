<template>
	<div>
		<h3 style="padding-bottom:10px" v-if="message">留个言吧</h3>
		<h3 style="padding-bottom:10px" v-else>回复{{userinfo.nickname}}</h3>
		<el-input placeholder="请输入昵称" v-model="messageForm.nickname" maxlength="15" show-word-limit clearable class="nickname">
		</el-input>
		<el-input type="textarea" placeholder="各位看客老爷们留个言把" v-model="messageForm.textarea" maxlength="100" show-word-limit>
		</el-input>
		<div class="info-footer">
			<el-popover placement="bottom" width="200" trigger="click">
				<div style="position: relative;">
					<ul class="emojis-ul" style="background: #F4F5F5;">
						<li v-for="item in emojis" class="emojis-li" @click="events(item,eventName[0])">{{item}}</li>
					</ul>
				</div>
				<div class="emoji" slot="reference">
					<i class="icon-emoji"></i>
				</div>
			</el-popover>
			<div>
				<el-button type="primary" size="mini" @click="events(messageForm,eventName[1])">{{footerName}}</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔',
					'😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️',
					'🔥', '🌈', '🍏', '⚽️', '❤️', '🇨🇳'
				],
				message:true,
			}
		},
		computed: {},
		//	用于接受父组件传过来的信息
		inject: ['userinfo'],
		props:{
			messageForm:{
				type:Object,
				default:()=>{
					return {}
				}
			},
			footerName:{
				type:String,
				default:'留言'
			},
			eventName:{
				type:Array,
				default:()=>{
					return ['push','publish']
				}
			}
		},
		created() {
		},
		methods: {
			events(item,type){
				this.$emit('events',{
					eventName:type,
					data:item
				})
			}
		}
	}
</script>

<style scoped>
	.emojis-ul {
		width: 200px;
		height: 100%;
		border: 2px solid #e8e8e8;
	}
	
	.emojis-li {
		cursor: pointer;
		display: inline-block;
	}
	
	.emoji {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		padding: 5px 10px 0 10px;
	}
	
	.emoji:hover {
		cursor: pointer;
	}
	
	.icon-emoji {
		width: 40px;
		height: 100%;
		background: url('../assets/icons/icon-emoji.svg') no-repeat;
		background-size: contain;
	}
	
	.info-footer {
		display: flex;
		justify-content: space-between;
		height: 30px;
		padding: 10px 10px 0 10px;
	}
	
	.nickname {
		width: 30%;
		min-width: 200px;
		margin-bottom: 20px;
	}
</style>
