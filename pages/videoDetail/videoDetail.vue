<template>
	<view class="videoDetail">
		<view class="video">
			<video src="video.mp4" autoplay="1" id="myVideo"></video>
		</view>
		<view class="infos">
			<view class="name">交互设计必学工具Axure从入门到精通</view>
			<view :class="!addColor?'price active':'price'">￥36.6</view>
			<view class="text">axure是美国XX公司旗舰产品，是一个专业的快速原型...司旗舰产品，是一个专业的快速原型司旗舰产品，是一个专业的快速原型司</view>
		</view>
		<view class="btn" v-if="addColor" @click="confrimOrder">立即购买</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				addColor:true
			}
		},
		onLoad(options) {
			options.text=='免费'?this.addColor=false:this.addColor
		},
		onReady(res) {
		    this.videoContext = uni.createVideoContext('myVideo')
		},
		methods:{
			confrimOrder:function(){
				uni.navigateTo({
					url:'../confrimOrder/confrimOrder'
				})
			}
		}
	}
</script>

<style lang="scss">
	.videoDetail{
		.video{
			video{
				width: 100%;
			}
		}
		.infos{
			padding:  0 30rpx;
			box-sizing: border-box;
			.name{
				font-size: 30rpx;
				color: #333333;
				padding-top: 30rpx;
			}
			.price{
				font-size: 26rpx;
				color: #FF6634;
				padding: 20rpx 0 15rpx 0;
			}
			.active{
				color: #2DA5A6;
			}
			.text{
				font-size: 24rpx;
				color: #666666;
				line-height: 42rpx;
			}
		}
		.btn{
			width: 100%;
			height: 90rpx;
			background: #0CBF63;
			font-size: 30rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 90rpx;
			position: fixed;
			left: 0;
			bottom: 0;
		}
	}
</style>
