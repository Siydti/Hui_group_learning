<template>
	<view class="order">
		<view class="navs">
			<view :class="index==navsIndex?'li active':'li'" v-for="(item,index) in navs" :key="index" @click="navsClick(index)">
				<text>{{item}}</text>
				<view class="line"></view>
			</view>
		</view>
		
		<view class="items">
			<view class="item">
				<view class="up">
					<view class="left">2019-08-14   22:20:15</view>
					<view class="right">待付款</view>
				</view>
				
				<view class="foot">
					<view class="left" @click="goDetail">
						<image src="../../static/imgs/img.png"></image>
						<view class="r">
							<view class="title">英语入门特别简单</view>
							<view class="text">数量：1</view>
							<view class="text">总价：￥66.6</view>
							<view class="text">截止日期：2019-08-30</view>
						</view>
					</view>
					<view class="right">
						付款
					</view>
				</view>
			</view>
			<view class="item">
				<view class="up">
					<view class="left">2019-08-14   22:20:15</view>
					<view class="right">待评价</view>
				</view>
				
				<view class="foot">
					<view class="left">
						<image src="../../static/imgs/img.png"></image>
						<view class="r">
							<view class="title">英语入门特别简单</view>
							<view class="text">数量：1</view>
							<view class="text">总价：￥66.6</view>
							<view class="text">截止日期：2019-08-30</view>
						</view>
					</view>
					<view class="right" @click="postComments">
						评价
					</view>
				</view>
			</view>
			<view class="item">
				<view class="up">
					<view class="left">2019-08-14   22:20:15</view>
					<view class="right">已评价</view>
				</view>
				
				<view class="foot">
					<view class="left">
						<image src="../../static/imgs/img.png"></image>
						<view class="r">
							<view class="title">英语入门特别简单</view>
							<view class="text">数量：1</view>
							<view class="text">总价：￥66.6</view>
							<view class="text">截止日期：2019-08-30</view>
						</view>
					</view>
					<!-- <view class="right">
						付款
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs:['全部订单','待付款','我的足迹','待评价'],
				navsIndex:0
			}
		},
		methods: {
			navsClick:function(index){
				this.navsIndex=index;
			},
			postComments:function(){
				uni.navigateTo({
					url:'../postComments/postComments'
				})
			},
			goDetail:function(){
				uni.navigateTo({
					url:"../orderDetail/orderDetail"
				})
			},
		}
	}
</script>

<style lang="scss">
page{
	width: 100%;
	min-height: 100%;
	background-color: #f2f2f2;
}
.order{
	.navs{
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 80rpx;
		padding: 0 70rpx;
		box-sizing: border-box;
		.li{
			font-size: 28rpx;
			color: #333333;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			position: relative;
			.line{
				width: 0rpx;
				position: absolute;
				bottom: 0;
				height: 6rpx;
				background: #ffffff;
				transition: width .2s linear;
			}
		}
		.active{
			color: #47B4B7;
			.line{
				background-color: #47B4B7;
				width: 100rpx;
			}
		}
	}
	
	.items{
		margin-top: 4rpx;
		.item{
			background: #ffffff;
			padding: 30rpx 0;
			margin-bottom: 10rpx;
			.up{
				padding: 0 30rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left{
					font-size: 24rpx;
					color: #666666;
				}
				.right{
					font-size: 24rpx;
					color: #47B4B7;
				}
			}
			.foot{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding:0 30rpx 0 60rpx;
				box-sizing: border-box;
				margin-top: 30rpx;
				.left{
					font-size: 0;
					display: flex;
					align-items: center;
					image{
						width: 160rpx;
						height: 160rpx;
						margin-right: 25rpx;
					}
					.r{
						.title{
							font-size: 28rpx;
							color: #343434;
							font-weight: bold;
						}
						.text{
							font-size: 24rpx;
							color: #9A9A9A;
							padding-top: 6rpx;
						}
					}
				}
				.right{
					font-size: 28rpx;
					color: #FF6634;
					font-weight: bold;
					width: 90rpx;
					height: 50rpx;
					border: 1px solid #FF6634;
					border-radius: 5rpx;
					text-align: center;
					line-height: 50rpx;
				}
			}
		}
	}
}
</style>
