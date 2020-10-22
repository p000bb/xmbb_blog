// // vue.config.js
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/xmbb_blog' : '/',
	lintOnSave: false,
	devServer: {
		// host: process.env.NODE_ENV === 'production' ? 'xiong_ying001.gitee.io/xmbb_blog' : '',
		open: true,
		/* 使用代理 */
		// proxy: {
		// 	'/douban': {
		// 		target: 'https://api.douban.com',
		// 		changeOrigin: true,
		// 		secure: false,
		// 		pathRewrite: {
		// 			'^/douban': ''
		// 		}
		// 	},
		// 	'/api': {
		// 		target: 'https://hn216.api.yesapi.cn',
		// 		changeOrigin: true,
		// 		secure: false,
		// 		pathRewrite: {
		// 			'^/api': ''
		// 		}
		// 	}
		// },
	},
}
