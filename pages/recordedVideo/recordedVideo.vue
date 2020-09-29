<template>
	<view class="rexoedeVideo">
		<view class="items">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="left" @click="videoDetail(item)">
					<image src="../../static/imgs/cover.png" mode="widthFix"></image>
					<view class="icon">
						<view class="iconfont iconbofang1"></view>
					</view>
				</view>
				<view class="right">
					<view class="title">交互设计必学工具Axure</view>
					<view class="text">人生没有最优解，但是你可以用设计思维人生没 有最优解，但是你...</view>
					<view :class="item=='免费'?'price active':'price'">{{item}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['￥36.6','免费']
			}
		},
		methods: {
			videoDetail:function(item){
				uni.navigateTo({
					url:"../videoDetail/videoDetail?text="+item
				})
			}
		}
	}
</script>

<style lang="scss">
.rexoedeVideo{
	.items{
		.item{
			display: flex;
			align-items: center;
			padding: 30rpx;
			box-sizing: border-box;
			border-bottom: 1px solid rgba(153, 153, 153, .3);
			.left{
				font-size: 0;
				margin-right: 20rpx;
				position: relative;
				image{
					width: 160rpx;
				}
				.icon{
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					background: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-30rpx,-30rpx);
					.iconfont{
						font-size: 30rpx;
						color: #47B4B7;
					}
				}
			}
			.right{
				flex: 1;
				.title{
					font-size: 30rpx;
					color: #000000;
				}
				.text{
					font-size: 24rpx;
					color: #666666;
					padding: 10rpx 0 20rpx 0;
				}
				.price{
					font-size: 26rpx;
					color: #FF6634;
				}
				.active{
					color: #2DA5A6;
				}
			}
		}
	}
}
</style>
