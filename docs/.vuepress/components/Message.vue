<template>
	<div>
		<h3 class="title">留言板</h3>
		<Content slot-key="tip"/>
		<p>各位看客老爷们留言吧，求求了🙏🙏🙏</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		created() {
		},
		methods: {
		}
	}
</script>

<style scoped>
	.title{
		position: relative;
		padding-left: 0.8rem;
		font-size: 1.4rem;
		font-weight: 500;
		line-height: 1.25;
	}
</style>
