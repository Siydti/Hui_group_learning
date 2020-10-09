export default function codeVerify(openIdRes) {

	// 请求成功
	if (openIdRes.data.code == 1) {

		uni.getStorage({
			key: 'user_nm',
			success: res => {
				// 用户信息写入缓存
				uni.showToast({
					title: '登录成功,欢迎您' + res.data
				})
			}
		})
	
		

		uni.setStorage({
			key: 'token',
			data: openIdRes.data.data,
			success: function() {
				openIdRes.data.data;
			}
		})
		uni.setStorage({
			key: 'loginState',
			data: '已登录',
			success: function() {
				'已登录';
			}
		})


	}
	// 请求异常
	if (openIdRes.data.code == 0) {

		// 提示消息、让用户授权
		uni.showToast({
			title: '请求异常，请稍后再试',
			icon: 'none'
		});

	}
	// 登录问题
	if (openIdRes.data.code == -1) {

		// 提示消息、需要重新登录
		uni.showToast({
			title: '登录异常，请重新登录',
			icon: 'none'
		});

		setTimeout(() => {
			uni.setStorage('loginState', '未登录');

			uni.navigateTo({
				url: '/pages/index/index'
			})
		}, 3000)


	}
}
