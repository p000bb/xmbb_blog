import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('../components/home/index.vue'),
		},
		{
			path: '/index',
			name: 'index',
			component: () => import('../components/home/index.vue'),
		},
		{
			path: '/study',
			name: 'study',
			component: () => import('../components/study/index.vue'),
		},
		{
			path: '/message',
			name: 'message',
			component: () => import('../components/message/index.vue'),
		},
		{
			path: '/life',
			name: 'life',
			component: () => import('../components/life/index.vue'),
		},
		{
			path: '/movie',
			name: 'movie',
			component: () => import('../components/movie/index.vue'),
		},
		{
			path: '/game',
			name: 'game',
			component: () => import('../components/game/index.vue'),
		},
		{
			path: '*',
			name: '404',
			component: () => import('../components/404.vue'),
		},
	]
})

export default router
