const nav = require('./config/nav.js');
module.exports = {
	title: '熊猫宝宝',
	markdown: {
		lineNumbers: true // 代码行号
	},
	base:process.env.NODE_ENV === 'production'?'/xmbb_blog/':'/',
	theme: 'reco',
	themeConfig: {
		logo: 'http://cd7.yesapi.net/96B4B5059E3DB099C78FFA6E90182B33_20200529161747_0d862bd287f406b0f5d01fd62c54ddd8.jpg',
		nav,
		subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
		type: 'blog', //	主题类别
		author: '熊猫宝宝',
		postList: "detailed",
		smoothScroll: true,	// 页面滚动
		authorAvatar: 'http://cd7.yesapi.net/96B4B5059E3DB099C78FFA6E90182B33_20200529161747_0d862bd287f406b0f5d01fd62c54ddd8.jpg',
		lastUpdated: '上次更新', //	更新时间
		repo: 'p000bb/xmbb_blog', // 导航栏右侧生成Github链接
		vssueConfig: { //	评论栏配置
			platform: 'gitee',
			owner: 'xiong_ying001',
			repo: 'xmbb_blog',
			clientId: '1a5421591bd00c4ff449dcda281ff4289ea918463b07b718a15c5384a163a5b0',
			clientSecret: 'af039040df3fed9c2a85e72ee89344f9e345e7987173b66dd523098fbe3c5104',
			// showComment: false
		},
		blogConfig: {
		}
	},
	plugins: [
		['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
			messages: {
				home: '大爷快来玩啊',
				theme: '别把兄弟',
				close: '你知道我喜欢吃什么吗？痴痴地望着你。'
			},
			 // modelStyle:{
				//  left:'100px',
				//  bottom: '0px',
				//  opacity: '0.9'
			 // },
			 // btnStyle:{
				//   left: '90px',
				//   bottom: '40px',
			 // }
		}],
	]
}
