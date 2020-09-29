<template>
	<view class="course">
		<view class="course_main">
		<text>课程详情</text>
		</view>
		
		<view class="course_bottom">
			<view class="course_bottom_left">
				<image src="/static/images/ICON/phone.png" style="width: 32rpx;height: 32rpx;margin-bottom: 10rpx;"></image><text>电话</text>
			</view>
			<view class="course_bottom_main" style="background-color: #FF6634;font-size: 35rpx;" @click="go_appoint">
				预约试听
			</view>
			<view class="course_bottom_main" style="background-color: #48B4B8;" @click="go_payment">
				<text style="font-size: 24rpx;margin-bottom: 5rpx;">￥888.8</text>
				<text style="font-size: 26rpx;">立即购买</text>
			</view>
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
			go_appoint() {
				uni.navigateTo({
					url:'/pagesA/appoint/appoint'
				})
			},
			go_payment() {
				uni.navigateTo({
					url:'/pagesA/payment/payment'
				})
			}
		}
	}
</script>

<style>
@import url("./style/course.css");
</style>
