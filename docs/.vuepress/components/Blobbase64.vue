<template>
	<div>
		<Content slot-key="five" />
		<div style="margin-bottom:50px">
			<Content slot-key="first" />
			<div style="text-align: center;">
				<el-divider content-position="left">图片上传</el-divider>
				<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
				 :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :http-request="upLoad">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
			<el-collapse v-if="imageUrl">
			  <el-collapse-item title="base64编码" name="1">
			    <p v-html="imageUrl" class="base64_p"></p>
			  </el-collapse-item>
			</el-collapse>
			<el-divider content-position="left">关键代码</el-divider>
			<Content slot-key="three" />
		</div>
		<div>
			<Content slot-key="two" />
			<el-divider content-position="left">图片链接</el-divider>
			<div style="display: flex;">
			<input type="text" class="input_text" placeholder="输入图片url" v-model="imageUrl1">
			<button :class="button_text" @click="webUrl(imageUrl1)">检测</button>
			</div>
			<el-collapse v-if="base64">
			  <el-collapse-item title="base64编码" name="1">
			    <p v-html="base64" class="base64_p"></p>
			  </el-collapse-item>
			</el-collapse>
			<el-divider content-position="left">关键代码</el-divider>
			<Content slot-key="four" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: '',
				imageUrl1:'',
				base64:"",
			};
		},
		computed: {
			button_text() {
				if (this.imageUrl1) {
					return "button_text_active"
				} else {
					return "button_text"
				}
			}
		},
		methods: {
			webUrl(item){
				let that = this;
				window.URL = window.URL || window.webkitURL;
				var xhr = new XMLHttpRequest();
				xhr.open("get", item, true);
				// 至关重要
				xhr.responseType = "blob";
				xhr.send();
				xhr.onload = function() {
					if (this.status == 200) {
						//得到一个blob对象
						var blob = this.response;
						// 至关重要
						//	进行文件格式和大小验证
						const isJPG = blob.type === 'image/jpeg';
						const isGIF = blob.type === 'image/gif';
						const isPNG = blob.type === 'image/png';
						const isBMP = blob.type === 'image/bmp';
						const isLt2M = blob.size / 1024 / 1024 < 2;
						if(blob.type === 'text/html'){
							that.$message.error('请输入正确的图片链接地址!');
							return
						}
						if (!isJPG && !isGIF && !isPNG && !isBMP) {
							that.$message.error('图片链接必须是JPG/GIF/PNG/BMP 格式!');
							return
						}
						if (!isLt2M) {
							that.$message.error('图片链接大小不能超过 2MB!');
							return
						}
						let reader = new FileReader();
						reader.readAsDataURL(blob);
						reader.onload = (e) => {
							that.base64 = e.target.result
						};
					}else{
						that.$message.error('请输入正确的图片地址');
					}
				}
			},
			handleAvatarSuccess(res, file) {
				// this.imageUrl = URL.createObjectURL(file.raw);
			},
			upLoad(file) {
				let fileList = file.file;
				let reader = new FileReader(); //html5读文件
				reader.readAsDataURL(fileList);
				reader.onload = (e) => {
					this.imageUrl = e.target.result
				}
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isGIF = file.type === 'image/gif';
				const isPNG = file.type === 'image/png';
				const isBMP = file.type === 'image/bmp';
				const isLt2M = file.size / 1024 / 1024 < 2;
				let sf = true;
				if (!isJPG && !isGIF && !isPNG && !isBMP && sf) {
					sf = false;
					 this.$message.error('图片必须是JPG/GIF/PNG/BMP 格式!');
					
				}
				if (!isLt2M && sf) {
					sf = false;
					 this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return sf ;
			}
		}
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	.input_text {
		width: 450px;
		font-size: 14px;
		line-height: 38px;
		outline: none;
		text-indent: 11px;
		border-right: 0;
		/* background: rgba(0, 0, 0, .45); */
		border: 1px solid #666;
		caret-color: #000000;
		color: #000000;
	}
	.button_text {
		color: #ccc;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		min-width: 116px;
		font-size: 14px;
		line-height: 38px;
		border: 1px solid #666;
		outline: none;
		background-color: rgba(0, 0, 0, .45);
		cursor: pointer;
	}
	
	.button_text_active {
		background-color: #0073eb;
		color: #fff;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		min-width: 116px;
		font-size: 14px;
		line-height: 38px;
		border: 1px solid #0073eb;
		outline: none;
		cursor: pointer;
	}
	.base64_p{
		max-height: 300px;
		overflow: auto;
		word-break:break-all
	}
</style>
