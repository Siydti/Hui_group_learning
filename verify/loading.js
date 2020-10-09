export function showToast(msg='加载中...',icon='') {
	uni.showToast({
	    title: msg,
	    duration: 1500,
		icon: icon
	});
}

export function hideToast() {
	uni.hideToast()
}