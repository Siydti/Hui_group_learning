<template>
	<view class="confrimOrder">
		<view class="info">
			<image src="../../static/imgs/img.png"></image>
			<text>少儿流利英语口语</text>
		</view>
		<view class="li">
			<view class="left">
				<text>学校名称</text>
			</view>
			<view class="right">新东方培训学校</view>
		</view>
		<view class="li lis">
			<view class="left">
				<text>小计</text>
			</view>
			<view class="right price">￥666.6</view>
		</view>
		<view class="li liss">
			<view class="left">
				<text>手机号码</text>
				<view class="phone">156****2089</view>
			</view>
		</view>
		<view class="btns">
			<view class="btn">去付款</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page{
		width: 100%;
		min-height: 100%;
		background-color: #F2F2F2;
	}
	.confrimOrder{
		.info{
			margin: 10rpx 0 20rpx;
			background: #FFFFFF;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			font-size: 0;
			display: flex;
			align-items: center;
			image{
				width: 220rpx;
				height: 160rpx;
				margin-right: 20rpx;
				border-radius: 10rpx;
			}
			text{
				font-size: 30rpx;
				color: #000000;
			}
		}
		.li{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx;
			box-sizing: border-box;
			background-color: #FFFFFF;
			.left{
				display: flex;
				align-items: center;
				text{
					font-size: 26rpx;
					color: #999999;
				}
				.phone{
					font-size: 26rpx;
					color: #000000;
					margin-left: 40rpx;
				}
			}
			.right{
				font-size: 26rpx;
				color: #999999;
			}
			.price{
				color: #FF6634;
			}
		}
		.lis{
			margin-top: 15rpx;
		}
		.liss{
			margin-top: 1px;
		}
		.btns{
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 300rpx;
			.btn{
				width: 630rpx;
				height: 80rpx;
				background: #0CBF63;
				border-radius: 10rpx;
				text-align: center;
				line-height: 80rpx;
				font-size: 30rpx;
				color: #FFFFFF;
			}
		}
	}
</style>
