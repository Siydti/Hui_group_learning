<template>
	<view class="orderDetail">
		<view class="top">
			<image src="../../static/imgs/img.png"></image>
			<view class="right">
				<view class="title">英语入门特别简单</view>
				<view class="text">日常口语专项提高，主要锻炼儿童的开口日常口语专项提高，主要锻炼儿童</view>
				<view class="text">总价：￥66.6</view>
			</view>
		</view>
		<view class="middle">
			<view class="title">商家信息</view>
			<view class="foot">
				<view class="left">
					<view class="iconfont iconshangjia"></view>
					<text>新东方培训学校</text>
				</view>
				<view class="right">
					<view class="iconfont icondianhua" @click="goPhone"></view>
				</view>
			</view>
		</view>
		<view class="infos">
			<view class="title">订单信息</view>
			<view class="ul">
				<view class="li">
					<view class="left">数量：</view>
					<view class="right">2</view>
				</view>
				<view class="li">
					<view class="left">订单编号：</view>
					<view class="right">1598888888</view>
				</view>
				<view class="li">
					<view class="left">付款时间：</view>
					<view class="right">2020-08-19  18:20:06</view>
				</view>
				<view class="li">
					<view class="left">订单总价：</view>
					<view class="right">￥66.6</view>
				</view>
				<view class="li">
					<view class="left">实际付款：</view>
					<view class="right">￥66.6</view>
				</view>
				<view class="li">
					<view class="left">购买手机号：</view>
					<view class="right">1598888888</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			goPhone:function(){
				uni.makePhoneCall({
				    phoneNumber: '114'
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		min-height: 100%;
		background-color: #f2f2f2;
	}
	.orderDetail{
		.top{
			background: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx;
			box-sizing: border-box;
			image{
				width: 200rpx;
				height: 160rpx;
				margin-right: 30rpx;
				flex-shrink: 0;
			}
			.right{
				flex: 1;
				.title{
					font-size: 28rpx;
					color: #333333;
				}
				.text{
					font-size: 24rpx;
					color: #999999;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					width: 450rpx;
					margin-top: 10rpx;
				}
			}
		}
		.middle{
			background: #FFFFFF;
			padding: 30rpx;
			box-sizing: border-box;
			margin: 20rpx 0;
			.title{
				font-size: 30rpx;
				color: #333333;
				padding-bottom: 40rpx;
			}
			.foot{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left{
					display: flex;
					align-items: center;
					.iconfont{
						font-size: 30rpx;
						color: #999999;
					}
					text{
						font-size: 28rpx;
						color: #999999;
						padding-left: 20rpx;
					}
				}
				.right{
					.iconfont{
						font-size: 30rpx;
						color: #47B4B7;
					}
				}
			}
		}
		.infos{
			background: #FFFFFF;
			padding: 0 30rpx;
			box-sizing: border-box;
			.title{
				font-size: 30rpx;
				color: #333333;
				padding: 30rpx 0;
			}
			.ul{
				.li{
					display: flex;
					align-items: center;
					padding-bottom: 20rpx;
					.left{
						font-size: 24rpx;
						color: #666666;
						width: 200rpx;
					}
					.right{
						font-size: 24rpx;
						color: #999999;
					}
				}
			}
		}
	}
</style>
