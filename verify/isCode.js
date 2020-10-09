export default function isCode(code) {

	// 请求成功
	if (code == 1) {

		return true

	}
	// 请求异常
	if (code == 0) {

		// 提示消息、让用户授权
		uni.showToast({
			title: '请求异常，请稍后再试',
			icon: 'none'
		});
		
		setTimeout( () => {
			uni.navigateBack({
				delta:1,
			})
		}, 2000 )

		return false
	}
	// 登录问题
	if (code == -1) {

		// 提示消息、需要重新登录
		uni.showToast({
			title: '登录异常，请重新登录',
			icon: 'none'
		});

		setTimeout(() => {
			console.log( 1 )
			uni.setStorage({
				key:'loginState',
				data:'未登录',
				success() {
					'未登录'
				}
			});
			uni.setStorage({
				key:'user_fa',
				data:'',
				success() {
					'未登录'
				}
			});
			

			uni.switchTab({
				url:'/pages/index/index'
			})
		}, 3000)
		
		return false

	}
}
