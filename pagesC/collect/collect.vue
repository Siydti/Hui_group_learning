<template>
	<view class="collect">
		
		<view class="list" v-for="(item,index) in contentList" :key="index">
			
			<image src="/static/images/collect_listHead.png" style="width: 260rpx;height: 203rpx;border-radius: 15rpx;margin-right: 20rpx;"></image>
			
			<view class="main">
				
				<view class="title">
					WhenArt那时画室儿童小区WhenArt那时画室儿童小区
				</view>
				
				<view class="type">
					美术培训
				</view>
				
				<view class="topBox">
					<view class="left">
						<image src="/static/images/-e-hongbao (1).png" style="width: 22rpx;height: 28rpx;margin-right: 10rpx;"></image>
						<text class="price">1000.00</text>
						<text class="site">5km内</text>
					</view>
					<view class="right">
						<van-icon name="star-o" />
						<text>276</text>
					</view>
				</view>
				
				<view class="bottomBox">
					<view class="left">
						<text class="new_price">￥990</text>
						<text class="old_price">￥69.9</text>
						<view class="discount">
							<image src="/static/images/discount_bac.png" style="width: 64rpx;height: 20rpx;"></image>
							<text>0.5折</text>
						</view>
					</view>
					<view class="right">
						>640.7km
					</view>
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contentList:[1,2,3]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("./style/collect.css");
</style>
