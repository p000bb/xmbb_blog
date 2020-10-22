export default{
	data(){
		return{
			page: 1,	// 页数
			total: 1,	// 总数
		}
	},
	computed: {
	},
	methods:{
		load(callback){
			if (this.total / 10 < this.page) return
			this.page++
			callback&&callback()
		},
	}
}