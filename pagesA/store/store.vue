<template>
	<view class="store">
		
		<view class="store_banner">
			<swiper class="swiper"  autoplay="ture" :interval="interval" :duration="duration" style="height: 100%;">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 100%;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
			</swiper>
		
		<view class="store_bannerBtn_box">
			<view class="store_bannerBtn_video">
				<image src="../../static/images/ICON/store_video.png" style="width: 30rpx;height: 30rpx;margin-right: 10rpx;"></image>
				<text>13</text>
			</view>
			<view class="store_bannerBtn_image">
				<image src="../../static/images/ICON/store_image.png" style="width: 30rpx;height: 30rpx;margin-right: 10rpx;"></image>
				<text>13</text>
			</view>
		</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				interval: 2000, //自动切换时间间隔
				duration: 500, //滑动动画时长
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("./style/store.css");
</style>
