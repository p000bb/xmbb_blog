module.exports = [
	['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
		messages: {
			home: '大爷快来玩啊',
			theme: '别把兄弟',
			close: '你知道我喜欢吃什么吗？痴痴地望着你。'
		},
	}],
	['@vuepress/medium-zoom', {
		selector: '.theme-reco-content :not(a) > img',
		options: {
			margin: 16
		}
	}],
	['vuepress-plugin-auto-sidebar'],
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
		icon: '起飞',
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
