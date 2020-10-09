<template>
	<view class="cooperationList">
		<view class="ul">
			<view class="li">
				<view class="left">
					<view class="text">新东方培训学校</view>
					<view class="info">易珂   13600962369</view>
				</view>
				<view class="right">
					<view class="btn">同意</view>
					<view class="btn active">拒绝</view>
				</view>
			</view>
			<view class="li">
				<view class="left">
					<view class="text">新东方培训学校</view>
					<view class="info">易珂   13600962369</view>
				</view>
				<view class="right">
					<view class="btn">已同意</view>
				</view>
			</view>
			<view class="li">
				<view class="left">
					<view class="text">新东方培训学校</view>
					<view class="info">易珂   13600962369</view>
				</view>
				<view class="right">
					<view class="btn active">已拒绝</view>
				</view>
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
	.cooperationList{
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
						padding: 0 18rpx;
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
	}
</style>
