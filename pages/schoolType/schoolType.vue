<template>
	<view class="schoolType">
		<view class="ul">
			<view :class="listIndex==index?'li active':'li'" v-for="(item,index) in list" :key="index" :style="(index+1)%5==0?'margin-right:0rpx;':'margin-right: 15rpx;'">{{item}}</view>
		</view>
		<view class="btns">
			<view class="btn">确认</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:['语言课','语言课','语言课','语言课','语言课','语言课','语言课','语言课','语言课','语言课','语言课','语言课',],
				listIndex:0
			}
		}
	}
</script>

<style lang="scss">
	.schoolType{
		.ul{
			padding: 20rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			.li{
				width: 130rpx;
				height: 50rpx;
				background: #F6F6F6;
				border-radius: 25rpx;
				font-size: 22rpx;
				color: #000000;
				text-align: center;
				line-height: 50rpx;
				margin-bottom: 20rpx;
			}
			.active{
				color: #FFFFFF;
				background-color: #2EA5A6;
			}
		}
		.btns{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			position: fixed;
			left: 0;
			bottom: 80rpx;
			.btn{
				width: 690rpx;
				height: 80rpx;
				background: #0CC064;
				border-radius: 10rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
			}
		}
	}
</style>
