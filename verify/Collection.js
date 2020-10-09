import Vue from 'vue'
import isCode from './isCode.js'

export default function Collection( ids , type , token ) {
	uni.request({
		url: Vue.prototype.apiServer + 'api/common/Collection',
		header: {
			'token': token,
		},
		data:{
			type: type,
			ids: ids
		},
		method: 'POST',
		success(res) {
			
			isCode( res.data.code )
			console.log('收藏调用成功')
			
		}
	})
}