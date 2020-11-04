const nav = require('./config/nav.js');
const sidebar = require('./config/sidebar.js');
module.exports = {
	title: '熊猫宝宝',
	description: '欢迎来到90后快乐肥宅熊猫宝宝的个人博客😄😄😄',
	markdown: {
		lineNumbers: true // 代码行号
	},
	base: process.env.NODE_ENV === 'production' ? '/xmbb_blog/' : '/',
	theme: 'reco',
	themeConfig: {
		logo: 'http://cd7.yesapi.net/96B4B5059E3DB099C78FFA6E90182B33_20200529161747_0d862bd287f406b0f5d01fd62c54ddd8.jpg',
		nav,
		sidebar,
		subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
		type: 'blog', //	主题类别
		author: '熊猫宝宝',
		postList: "detailed",
		smoothScroll: true, // 页面滚动
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
			category: {
				location: 2, // 在导航栏菜单中所占的位置，默认2
				text: '分类' // 默认文案 “分类”
			},
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: '标签' // 默认文案 “标签”
			}
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
		['permalink-pinyin', {
			lowercase: true,
			separator: '-'
		}],
		['@vuepress/medium-zoom', {
			selector: 'img.zoom-custom-imgs',
			options: {
				margin: 16
			}
		}],
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: {
					message: "发现新内容可用",
					buttonText: "刷新"
				}
			}
		],
		['@vuepress-reco/vuepress-plugin-back-to-top', {
			icon:'起飞',
			customStyle: {
				right: '1rem',
				bottom: '6rem',
				width: '2.5rem',
				height: '2.5rem',
				'border-radius': '.25rem',
				'line-height': '2.5rem',
				backgroundImage: "url('/assets/img/logo.jpg')",
				backgroundRepeat: "round"
			}
		}],
	]
}
