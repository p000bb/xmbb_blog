// // vue.config.js
module.exports = {
	// publicPath: process.env.NODE_ENV === 'production' ? '/baiduAI' : '/',
	lintOnSave: false,
	devServer: {
		open: true,
		/* 使用代理 */
		proxy: {
			'/douban': {
				target: 'https://api.douban.com',
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/douban': ''
				}
			},
			'/api': {
				target: 'http://hn216.api.yesapi.cn',
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
	},
}
