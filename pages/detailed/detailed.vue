<template>
	<view class="detailed">
		<view class="navs">
			<view :class="index==navsIndex?'li active':'li'" v-for="(item,index) in navs" :key="index" @click="navsClick(index)">
				<text>{{item}}</text>
				<view class="line"></view>
				<view class="num">2</view>
			</view>
		</view>
		<view class="items">
			<view class="item">
				<view class="left">
					<image src="../../static/imgs/logo.png" mode=""></image>
					<view class="r">
						<view class="name">快乐的小仙女</view>
						<view class="text">8月26   08:26</view>
					</view>
				</view>
				<view class="right">+200.00</view>
			</view>
			<view class="item">
				<view class="left">
					<image src="../../static/imgs/logo.png" mode=""></image>
					<view class="r">
						<view class="name">快乐的小仙女</view>
						<view class="text">8月26   08:26</view>
					</view>
				</view>
				<view class="right">+200.00</view>
			</view>
			<view class="item">
				<view class="left">
					<image src="../../static/imgs/logo.png" mode=""></image>
					<view class="r">
						<view class="name">快乐的小仙女</view>
						<view class="text">8月26   08:26</view>
					</view>
				</view>
				<view class="right">+200.00</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				navs:['推客红包','推客返点','提现明细'],
				navsIndex:0
			}
		},
		methods:{
			navsClick:function(index){
				this.navsIndex=index;
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
	.detailed{
		.navs{
			background-color: #FFFFFF;
			height: 90rpx;
			padding: 0 70rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 4rpx;
			.li{
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				position: relative;
				height: 90rpx;
				position: relative;
				text{
					font-size: 30rpx;
					color: #333333;
				}
				.line{
					position: absolute;
					bottom: 0;
					width: 0;
					height: 6rpx;
					background: #FFFFFF;
					transition: width .2s linear;
				}
				.num{
					width: 24rpx;
					height: 24rpx;
					background: #FF1E1E;
					border-radius: 50%;
					color: #FFFFFF;
					font-size: 20rpx;
					text-align: center;
					line-height: 24rpx;
					position: absolute;
					right: -16rpx;
					top: 16rpx;
				}
			}
			.active{
				text{
					color: #47B4B7;
				}
				.line{
					background: #47B4B7;
					width:100rpx;
				}
			}
		}
		.items{
			.item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #FFFFFF;
				padding: 30rpx;
				box-sizing: border-box;
				margin-top: 4rpx;
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
						margin-left: 20rpx;
						.name{
							font-size: 30rpx;
							color: #343434;
						}
						.text{
							font-size: 24rpx;
							color: #9A9A9A;
							padding-top: 10rpx;
						}
					}
				}
				.right{
					font-size: 36rpx;
					color: #343434;
				}
			}
		}
	}
</style>
