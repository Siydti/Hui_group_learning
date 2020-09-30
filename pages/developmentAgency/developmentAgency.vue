<template>
	<view class="developmentAgency">
		<view class="ul">
			<view class="li">
				<view class="left">
					<view class="text">小仙宝宝申请成为我的代理</view>
					<view class="info">2019-08-16</view>
				</view>
				<view class="right">
					<view class="btn">同意</view>
					<view class="btn active">拒绝</view>
				</view>
			</view>
			<view class="li">
				<view class="left">
					<view class="text">小仙宝宝申请成为我的代理</view>
					<view class="info">2019-08-16</view>
				</view>
				<view class="right">
					<view class="btn">同意</view>
					<view class="btn active">拒绝</view>
				</view>
			</view>
			<view class="li">
				<view class="left">
					<view class="text">小仙宝宝申请成为我的代理</view>
					<view class="info">2019-08-16</view>
				</view>
				<view class="right">
					<view class="btn">同意</view>
					<view class="btn active">拒绝</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="li">
				<view class="iconfont iconicon-test"></view>
				<text>分享给好友</text>
			</view>
			<view class="li">
				<view class="iconfont iconpengyouquan-copy" style="color: #40CE00;"></view>
				<text>生成海报</text>
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
		background-color: #F2F2F2;
	}
	.developmentAgency{
		.ul{
			.li{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 30rpx;
				box-sizing: border-box;
				background-color: #FFFFFF;
				height: 120rpx;
				margin-top: 4rpx;
				.left{
					.text{
						font-size: 28rpx;
						color: #333333;
					}
					.info{
						font-size: 24rpx;
						color: #999999;
					}
				}
				.right{
					display: flex;
					align-items: center;
					.btn{
						width: 80rpx;
						height: 50rpx;
						background: #0CBF63;
						border-radius: 5rpx;
						font-size: 24rpx;
						color: #FFFFFF;
						text-align: center;
						line-height: 50rpx;
					}
					.active{
						background-color: #999999;
						margin-left: 30rpx;
					}
				}
			}
		}
		.footer{
			display: flex;
			align-items: center;
			justify-content: space-around;
			background: #FFFFFF;
			width: 100%;
			height: 220rpx;
			position: fixed;
			left: 0;
			bottom: 0;
			.li{
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				.iconfont{
					font-size: 100rpx;
					color: #00C201;
				}
				text{
					font-size: 28rpx;
					color: #333333;
				}
			}
		}
	}
</style>
