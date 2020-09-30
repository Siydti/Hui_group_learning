<template>
	<view class="track">
		<view class="item" v-for="(item,index) in list" :key="index">
			<view class="title">{{item.text}}</view>
			<view class="box">
				<view class="info" @click="listClick(index)">
					<image src="../../static/imgs/logo.png" mode=""></image>
					<view class="right">
						<text>七月的妹妹</text>
						<view :class="item.select?'iconfont iconjiantouxia':'iconfont iconjiantou'"></view>
					</view>
				</view>
				<view class="ul" v-show="item.select">
					<view class="li"><text>查看了</text> 美术课程第5次</view>
					<view class="li"><text>查看了</text> 美术课程第5次</view>
					<view class="li"><text>查看了</text> 美术课程第5次</view>
					<view class="li"><text>查看了</text> 美术课程第5次</view>
					<view class="li"><text>查看了</text> 美术课程第5次</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[{text:'刚刚',select:false},{text:'刚刚',select:false}]
			}
		},
		methods:{
			listClick:function(index){
				this.list[index].select=!this.list[index].select
			}
		}
	}
</script>

<style lang="scss">
	.track{
		.item{
			padding:0 30rpx;
			box-sizing: border-box;
			.title{
				font-size: 30rpx;
				color: #000000;
				padding: 30rpx 0;
			}
			.box{
				box-shadow: 0px 2px 10rpx 0px rgba(0, 0, 0, 0.1);
				border-radius: 10rpx;
				padding:30rpx 40rpx 30rpx 10rpx ;
				box-sizing: border-box;
				.info{
					display: flex;
					align-items: center;
					font-size: 0;
					image{
						width: 80rpx;
						height: 80rpx;
						border-radius:50% ;
					}
					.right{
						margin-left: 20rpx;
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: space-between;
						text{
							font-size: 28rpx;
							color: #333333;
						}
						.iconfont{
							font-size: 30rpx;
							color: #999999;
						}
					}
				}
				.ul{
					padding-left: 110rpx;
					.li{
						font-size: 28rpx;
						color: #333333;
						padding-top: 15rpx;
						text{
							color: #47B4B7;
						}
					}
				}
			}
		}
	}
</style>
