<template>
	<view class="rexoedeVideo">
		
		<!-- <view style="flex: 1;overflow: scroll;"> -->
			
			<view style="text-align: center; padding-top: 50rpx;flex: 1;">
				暂无视频~
			</view>
		
		<!-- <view class="items">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="left" @click="videoDetail(item)">
					<image src="../../static/imgs/cover.png" mode="widthFix"></image>
					<view class="icon">
						<view class="iconfont iconbofang1"></view>
					</view>
				</view>
				<view class="right">
					<view class="title">公开视屏头部</view>
					<view class="text">公开视屏内容...</view>
					<view :class="item=='免费'?'price active':'price'">{{item}}</view>
				</view>
			</view>
		</view>
		</view> -->
		
		<view class="tabbar">
			<view @click="changeTabbar(index)" v-for="( item,index ) in tabbar" :key="index" :class="{ 'changeTabbar' : index == activeTabbar }">
				<image :src="item.iconPath" v-show=" index !== activeTabbar "></image>
				<image :src="item.selectedIconPath" v-show=" index == activeTabbar "></image>
				<text>{{ item.text }}</text>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['￥36.6','免费'],
				tabbar:[
					{
						"iconPath": "/static/images/ICON/home_empty.png",
						"selectedIconPath": "/static/images/ICON/home_fill.png",
						"text": "首页"
					}, {
						"iconPath": "/static/images/ICON/order_empty.png",
						"selectedIconPath": "/static/images/ICON/order_fill.png",
						"text": "订单"
					}, {
						"iconPath": "/static/images/ICON/play_empty.png",
						"selectedIconPath": "/static/images/ICON/play_fill.png",
						"text": "视频"
					}, {
						"iconPath": "/static/images/ICON/me_empty.png",
						"selectedIconPath": "/static/images/ICON/me_fill.png",
						"text": "我的"
					}
				],
				activeTabbar: 2,
			}
		},
		methods: {
			changeTabbar( index ) {
				console.log( index )
				
				if( index == 1 ) {
					uni.reLaunch({
						url:'/pages/orderForm/orderForm'
					})
				}else if( index == 0 ) {
					uni.reLaunch({
						url:'/pages/index/index'
					})
				}else if( index == 3 ) {
					
					uni.getStorage({
						key:'userType',
						success:res => {
							if( res.data == 'ordinary' ) { //普通用户
								uni.reLaunch({
									url:'/pages/myOrdinary/myOrdinary'
								})
							}else if( res.data == 'agent' ) { //代理
								uni.reLaunch({
									url:'/pages/myUser/myUser'
								})
							}else if( res.data == 'shop' ) { //商家
								uni.reLaunch({
									url:'/pages/mybusiness/mybusiness'
								})
							}
						}
					})
					
				}
			},
			videoDetail:function(item){
				uni.navigateTo({
					url:"../videoDetail/videoDetail?text="+item
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	
.rexoedeVideo{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	
	.items{
		.item{
			display: flex;
			align-items: center;
			padding: 30rpx;
			box-sizing: border-box;
			border-bottom: 1px solid rgba(153, 153, 153, .3);
			.left{
				font-size: 0;
				margin-right: 20rpx;
				position: relative;
				image{
					width: 160rpx;
				}
				.icon{
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					background: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-30rpx,-30rpx);
					.iconfont{
						font-size: 30rpx;
						color: #47B4B7;
					}
				}
			}
			.right{
				flex: 1;
				.title{
					font-size: 30rpx;
					color: #000000;
				}
				.text{
					font-size: 24rpx;
					color: #666666;
					padding: 10rpx 0 20rpx 0;
				}
				.price{
					font-size: 26rpx;
					color: #FF6634;
				}
				.active{
					color: #2DA5A6;
				}
			}
		}
	}

	.tabbar{
		background-color: #fff;
		border-top: 2rpx solid #9A9A9A;
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 20rpx;
		color: #9A9A9A;
		
		>view{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		image{
			width: 50rpx;
			height: 50rpx;
			margin-bottom: 5rpx;
		}
		
		.changeTabbar{
			color: #47B4B7;
			
		}
	}
		
}
</style>
