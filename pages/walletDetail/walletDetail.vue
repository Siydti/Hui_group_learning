<template>
	<view class="walletDetail">
		<view class="items">
			
			<view class="item">
				<view class="left">
					<view class="r">
						<view class="name">快乐的小仙女</view>
						<view class="text">8月26   08:26</view>
					</view>
				</view>
				<view class="right">
					<view class="name active">+200.00</view>
					<view class="text">余额 120.38</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="r">
						<view class="name">快乐的小仙女</view>
						<view class="text">8月26   08:26</view>
					</view>
				</view>
				<view class="right">
					<view class="name">-200.00</view>
					<view class="text">余额 120.38</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.walletDetail{
		.items{
			border-top: 20rpx solid #F2F2F2;
			padding: 0 30rpx;
			box-sizing: border-box;
			.item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #FFFFFF;
				padding: 30rpx 0;
				box-sizing: border-box;
				margin-top: 4rpx;
				border-bottom: 1px solid #F2F2F2;
				.left{
					display: flex;
					align-items: center;
					font-size: 0;
					image{
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
					}
					.r{
						// margin-left: 20rpx;
						.name{
							font-size: 36rpx;
							color: #333333;
						}
						.text{
							font-size: 28rpx;
							color: #666666;
							padding-top: 10rpx;
						}
					}
				}
				.right{
					.name{
						font-size: 34rpx;
						font-weight: bold;
						color: #343434;
					}
					.active{
						color: #FF6634;
					}
					.text{
						font-size: 28rpx;
						color: #666666;
						padding-top: 10rpx;
					}
				}
			}
		}
	}
</style>
