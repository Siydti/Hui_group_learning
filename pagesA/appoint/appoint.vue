<template>
	<view class="appoint">
		<view class="appoint_title">
			预约后我们将通过电话联系您
		</view>
		
		<input type="number" placeholder="请输入您的电话号码" class="appoint_input"/>
		
		<view class="appoint_btn" @click="go_appointSucceed">
			立即预约
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			go_appointSucceed() {
				uni.redirectTo({
					url:'/pagesA/appointSucceed/appointSucceed'
				})
			}
		}
	}
</script>

<style>
@import url("./style/appoint.css");
</style>
