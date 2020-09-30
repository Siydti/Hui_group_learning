<template>
	<view class="detailed">
		<view class="navs">
			<view :class="index==navsIndex?'li active':'li'" v-for="(item,index) in navs" :key="index" @click="navsClick(index)">
				<text>{{item}}</text>
				<view class="line"></view>
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
	}
</style>
