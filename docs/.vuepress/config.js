const nav = require('./config/nav.js');
const sidebar = require('./config/sidebar.js');
const plugins = require('./config/plugins.js');
module.exports = {
	chainWebpack(config) {
		config.resolve.alias.set('core-js/library/fn', 'core-js/features');
	},
	title: '熊猫宝宝',
	description: '欢迎来到90后快乐肥宅熊猫宝宝的个人博客😄😄😄',
	markdown: {
		lineNumbers: true // 代码行号
	},
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'referrer', content: 'no-referrer' }],
	],
	base: process.env.NODE_ENV === 'production' ? '/' : '/',
	theme: 'reco',
	themeConfig: {
		logo: '/assets/img/logo.jpg',
		nav,
		sidebar,
		subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
		type: 'blog', //	主题类别
		author: '熊猫宝宝',
		postList: "detailed",
		// displayAllHeaders: true,
		smoothScroll: true, // 页面滚动
		authorAvatar: '/assets/img/logo.jpg',
		tag: '标签',
		category: '分类',
		lastUpdated: '上次更新', //	更新时间
		repo: 'p000bb/xmbb_blog', // 导航栏右侧生成Github链接
		docsBranch: 'master',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: '编辑一下！',
		sidebarDepth: 1,
		vssueConfig: { //	评论栏配置
			platform: 'gitee',
			owner: 'xiong_ying001',
			repo: 'xmbb_blog',
			clientId: '1a5421591bd00c4ff449dcda281ff4289ea918463b07b718a15c5384a163a5b0',
			clientSecret: 'af039040df3fed9c2a85e72ee89344f9e345e7987173b66dd523098fbe3c5104',
			showComment: false
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
	plugins: plugins
}
