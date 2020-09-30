<template>
	<view class="myOrdinary">
		<view class="top">
			<image src="../../static/imgs/bg.png" mode="widthFix"></image>
			<view class="info">
				<image src="../../static/imgs/logo.png" mode="" class="iconfont"></image>
				<text>最美小仙女</text>
			</view>
		</view>
		<view class="navs">
			<view class="li">
				<view class="iconfont iconwuxing"></view>
				<text>收藏</text>
			</view>
			<view class="li">
				<view class="iconfont iconpinglun" style="color: #2DAEE0;"></view>
				<text>评价</text>
			</view>
			<view class="li">
				<view class="iconfont iconshijian" style="color: #FF909E;"></view>
				<text>最近浏览</text>
			</view>
			<view class="li">
				<view class="iconfont iconhezuo" style="color: #61C28E;"></view>
				<text>我要合作</text>
			</view>
			<view class="li">
				<view class="iconfont iconkaifa___" style="color: #F19A3E;"></view>
				<text>软件开发</text>
			</view>
			<view class="li">
				<view class="iconfont iconshipin-tianchong" style="color: #EDBE2F;"></view>
				<text>视频制作</text>
			</view>
			<view class="li">
				<view class="iconfont icontongzhi" style="color: #3978A4;"></view>
				<text>系统通知</text>
				<view class="num">2</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	.myOrdinary{
		.top{
			font-size: 0;
			position: relative;
			image{
				width: 100%;
			}
			.info{
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				.iconfont{
					width: 120rpx;
					height: 120rpx;
					border-radius: 50rpx;
				}
				text{
					font-size: 34rpx;
					color: #FFFFFF;
					padding-top: 20rpx;
				}
			}
		}
		.navs{
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			padding-top: 30rpx;
			.li{
				width: 33.33%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				margin-bottom: 40rpx;
				position: relative;
				.iconfont{
					font-size: 48rpx;
					color: #DE00FF;
				}
				text{
					font-size: 26rpx;
					color: #999999;
					padding-top: 10rpx;
				}
				.num{
					position: absolute;
					right: 94rpx;
					top: 0;
					width: 24rpx;
					height: 24rpx;
					background: #FF1E1E;
					border-radius: 50%;
					font-size: 20rpx;
					color: #FFFFFF;
					text-align: center;
					line-height: 24rpx;
				}
			}
		}
	}
</style>
