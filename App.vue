<script>
import getUserType from './verify/getUserType.js'

	export default {
		onLaunch: function() {
			console.log('App Launch')
			//获取用户类型
			uni.getStorage({
				key: 'token',
				success:res => {
					getUserType( res.data )
				}
			})
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./static/icons/icon.css");
</style>
