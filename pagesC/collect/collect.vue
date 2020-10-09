<template>
	<view class="collect">
		
		<view v-if="!UserCollection.length" style="padding-top: 50rpx;text-align: center;">
			暂无收藏
		</view>
		
		<view class="list" v-for="(item,index) in UserCollection" :key="index" v-else>

			<image :src="item.cover" style="width: 260rpx;height: 203rpx;border-radius: 15rpx;margin-right: 20rpx;"></image>

			<view class="main">

				<view class="title">
					{{ item.name }}
				</view>

				<view class="type">
					{{ item.desc }}
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
	import isCode from '../../verify/isCode.js'
	
	export default {
		data() {
			return {
				UserCollection: []
			}
		},
		methods: {
			//收藏
			getUserInfo() {
				let _this = this
				
				uni.getStorage({
					key:'token',
					success:res => {
						uni.request({
							url: _this.apiServer + 'api/user/UserCollection',
							header: {
								"token": res.data,
							},
							data:{
								page:1
							},
							method:'POST',
							success: (res) => {
								console.log( '收藏' )
								console.log( res.data )
								
								isCode( res.data.code )
								
								_this.UserCollection = res.data.data.list
							}
						})
					}
				})
				
			},
		},
		onLoad() {
			//收藏
			this.getUserInfo()
		}
	}
</script>

<style>
	@import url("./style/collect.css");
</style>
