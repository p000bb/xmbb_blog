/*此mixins为任教学科*/
const formatNumber = n => {
	  n = n.toString()
	  return n[1] ? n : '0' + n
	};
export default {
	data(){
		return{
		}
	},
	methods: {
		timeChange(date = new Date(),type = "year"){
			const years = date.getFullYear()
			const month = date.getMonth() + 1
			const day = date.getDate()
			const hour = date.getHours()
			const minute = date.getMinutes()
			const second = date.getSeconds()
			var ymd = [years, month, day].map(formatNumber).join('-')
			var hms = ' ' + [hour, minute, second].map(formatNumber).join(':')
			if(type == 'year'){
				return ymd
			}else{
				return ymd + hms
			}
		}
	}
}
