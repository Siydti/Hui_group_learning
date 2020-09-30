<template>
	<view class="mechanism">
		<view class="li">
			<image src="../../static/imgs/img.png" mode=""></image>
			<view class="right">
				<view class="name">新东方培训</view>
				<view class="text">总浏览量：2667人</view>
				<view class="text">总金额：<text>￥26095</text></view>
			</view>
		</view>
		<view class="li">
			<image src="../../static/imgs/img.png" mode=""></image>
			<view class="right">
				<view class="name">新东方培训</view>
				<view class="text">总浏览量：2667人</view>
				<view class="text">总金额：<text>￥26095</text></view>
			</view>
		</view>
		<view class="li">
			<image src="../../static/imgs/img.png" mode=""></image>
			<view class="right">
				<view class="name">新东方培训</view>
				<view class="text">总浏览量：2667人</view>
				<view class="text">总金额：<text>￥26095</text></view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page{
		width: 100%;
		min-height: 100%;
		background: #F2F2F2;
	}
	.mechanism{
		.li{
			font-size: 0;
			display: flex;
			align-items: center;
			padding: 25rpx 30rpx;
			box-sizing: border-box;
			background: #FFFFFF;
			margin-top: 4rpx;
			image{
				width: 200rpx;
				height: 120rpx;
				border-radius: 10rpx;
			}
			.right{
				margin-left: 30rpx;
				.name{
					font-size: 28rpx;
					color: #333333;
					font-weight: bold;
					padding-bottom: 10rpx;
				}
				.text{
					font-size: 24rpx;
					color: #999999;
					text{
						color: #47B4B7;
					}
				}
			}
		}
	}
</style>
