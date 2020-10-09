<template>
	<view class="recharge">
		<view class="box">
			<view class="infos">充值金额<text>（首页按红包剩余金额排序）</text></view>
			<view class="li">
				<text>￥</text>
				<input type="number" value="" />
			</view>
			<view class="title">只限于红包使用</view>
			<view class="items">
				<view class="item">
					<view class="text">约8000人/1000元</view>
					<view class="text">5公里内</view>
					<view class="iconfont iconchenggong"></view>
				</view>
				<view class="item">
					<view class="text">约8000人/1000元</view>
					<view class="text">5公里内</view>
				</view>
				<view class="item">
					<view class="text">约8000人/1000元</view>
					<view class="text">5公里内</view>
				</view>
			</view>
			<view class="btn">充值</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		min-height: 100%;
		background-color: #F2F2F2;
	}
	.recharge{
		padding: 30rpx;
		box-sizing: border-box;
		.box{
			background-color: #FFFFFF;
			border-radius: 20rpx;
			padding: 60rpx 30rpx;
			box-sizing: border-box;
			.items{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.item{
					width: 180rpx;
					height: 90rpx;
					border: 1px solid rgba(153, 153, 153, .5);
					border-radius: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					position: relative;
					.text{
						font-size: 20rpx;
						color: #999999;
					}
					.iconfont{
						position: absolute;
						right: -12rpx;
						top: -12rpx;
						font-size: 24rpx;
						color: #0CBF63;
					}
				}
			}
			.title{
				font-size: 20rpx;
				color: #999999;
				padding: 20rpx 0 30rpx 0;
			}
			.li{
				display: flex;
				align-items: center;
				padding: 30rpx 0;
				border-bottom: 1px solid rgba(153, 153, 153, .3);
				text{
					font-size: 62rpx;
					color: #333333;
					font-weight: bold;
					padding-right: 30rpx;
				}
				input{
					flex: 1;
					font-size: 34rpx;
					color: #333333;
				}
			}
			.infos{
				font-size: 25rpx;
				color: #666666;
				text{
					color: #FF6634;
					font-size: 20rpx;
					padding-left: 20rpx;
				}
			}
			.btn{
				width: 100%;
				height: 80rpx;
				background-color: rgba(12, 191, 99, .7);
				border-radius: 10rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
				margin-top: 60rpx;
			}
		}
	}
</style>
