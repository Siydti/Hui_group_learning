<template>
	<view class="browse">
		<view class="ul">
			<view class="li">
				<image src="../../static/imgs/browse.png" mode="widthFix"></image>
				<view class="r">
					<view class="name">新东方培训学校</view>
					<view class="info">为各类职业提供专业的技能培训</view>
				</view>
			</view>
			<view class="li">
				<image src="../../static/imgs/browse.png" mode="widthFix"></image>
				<view class="r">
					<view class="name">新东方培训学校</view>
					<view class="info">为各类职业提供专业的技能培训</view>
				</view>
			</view>
			<view class="li">
				<image src="../../static/imgs/browse.png" mode="widthFix"></image>
				<view class="r">
					<view class="name">新东方培训学校</view>
					<view class="info">为各类职业提供专业的技能培训</view>
				</view>
			</view>
			<view class="li">
				<image src="../../static/imgs/browse.png" mode="widthFix"></image>
				<view class="r">
					<view class="name">新东方培训学校</view>
					<view class="info">为各类职业提供专业的技能培训</view>
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
		background: #F2F2F2;
	}
	.browse{
		.ul{
			.li{
				background: #FFFFFF;
				padding: 30rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				font-size: 0;
				margin-top: 4rpx;
				image{
					width: 210rpx;
				}
				.r{
					margin-left: 20rpx;
					.name{
						font-size: 30rpx;
						color: #333333;
						font-weight: bold;
					}
					.info{
						font-size: 26rpx;
						color: #999999;
						padding-top: 30rpx;
					}
				}
			}
		}
	}
</style>
