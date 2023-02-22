const baseUrl = 'http://121.89.205.189:3000/api'

export default {
	get(url, data){
		uni.showLoading({
			title: '加载中...',
		})
		return new Promise((resolve, reject) => {
			uni.request({
				method: 'GET',
				url: baseUrl + url,
				data: data || {},
				header: {},
				timeout: 10000,
				success: res => resolve(res.data) ,
				fail:err => reject(err),
				complete: () => {
					uni.hideLoading()
				}
			})
		})
	},
	post(url, date){
		
		uni.showLoading({
			title: '加载中...',
		})
		return new Promise((resolve, reject) => {
			uni.request({
				method: 'POST',
				url: baseUrl + url,
				data: data || {},
				header: {},
				timeout: 10000,
				success: res => resolve(res.data) ,
				fail:err => reject(err),
				complete: () => {
					uni.hideLoading()
				}
			})
		})
	}
}