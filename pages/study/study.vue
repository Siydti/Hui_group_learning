<template>
	<view class="study">
		<!-- <image src="../../static/imgs/phone.png" mode="widthFix" class="phone"></image> -->
		<view class="items" v-for="index in 2" :key="index">
			<view class="img">
				<image src="../../static/imgs/11.png" mode="widthFix"></image>
				<!-- <image src="../../static/imgs/open.png" mode="widthFix" class="open"></image> -->
			</view>
			<view class="title">定制打造高端软件</view>
			<view class="info">小程序开发 公众号开发 APP开发 网站开发 网页设计 平面设计</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.study{
		padding: 20rpx;
		box-sizing: border-box;
		.phone{
			width: 100rpx;
			position: fixed;
			right: 20rpx;
			top: 50%;
			z-index: 1000;
		}
		.items{
			padding-bottom: 40rpx;
			.img{
				font-size: 0;
				position: relative;
				image{
					width: 100%;
				}
				.open{
					width: 90rpx;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-45rpx,-45rpx);
				}
			}
			.title{
				font-size: 30rpx;
				font-weight: bold;
				color: #333333;
				padding: 20rpx 0;
			}
			.info{
				font-size: 24rpx;
				color: #666666;
				
			}
		}
	}
</style>
