<template>
	<view class="withdrawal">
		<view class="box">
			<view class="title">提现金额</view>
			<view class="li">
				<text>￥</text>
				<input type="number" value="" />
			</view>
			<view class="infos">可提现金额：800元<text>（超出部分需要走银行汇款，税金6%）</text></view>
			<view class="btn" @click="withdrawalPost">提现</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			withdrawalPost:function(){
				uni.navigateTo({
					url:"../withdrawalPost/withdrawalPost"
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		min-height: 100%;
		background-color: #F2F2F2;
	}
	.withdrawal{
		padding: 30rpx;
		box-sizing: border-box;
		.box{
			background-color: #FFFFFF;
			border-radius: 20rpx;
			padding: 60rpx 30rpx;
			box-sizing: border-box;
			.title{
				font-size: 24rpx;
				color: #666666;
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
				font-size: 20rpx;
				color: #999999;
				padding-bottom: 60rpx;
				padding-top: 20rpx;
				text{
					color: #FF6634;
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
			}
		}
	}
</style>
