import Vue from 'vue'
import isCode from './isCode.js'

export default function getUserType( token ) {
	uni.request({
		url: Vue.prototype.apiServer + 'api/common/userType',
		header: {
			'token': token,
		},
		method: 'POST',
		success(res) {
			console.log(res.data)
			
			isCode( res.data.code )
			
			uni.setStorage({
				key: 'userType',
				data: res.data.data.type,
				success() {
					res.data.data.type
				}
			})
			
			uni.setStorage({
				key: 'userArea',
				data: res.data.data.area,
				success() {
					res.data.data.area
				}
			})
		}
	})
}