<template>
	<view class="myOrdinary">
		
		<view style="flex: 1;overflow: scroll;">
			
		<view class="top">
			<image src="../../static/imgs/bg.png" mode="widthFix"></image>
			<view class="info">
				<image :src=" headImg " mode="" class="iconfont"></image>
				<text>{{ userName }}</text>
			</view>
		</view>
		<view class="navs">
			<navigator class="li"  hover-class="none" url="/pagesC/collect/collect">
				<view class="iconfont iconwuxing"></view>
				<text>收藏</text>
			</navigator>
			<navigator class="li"  hover-class="none" url="/pagesC/evaluate/evaluate">
				<view class="iconfont iconpinglun" style="color: #2DAEE0;"></view>
				<text>评价</text>
			</navigator>
			<navigator class="li"  hover-class="none" url="/pages/browse/browse">
				<view class="iconfont iconshijian" style="color: #FF909E;"></view>
				<text>最近浏览</text>
			</navigator>
			<navigator class="li"  hover-class="none" url="/pages/settlementPost/settlementPost">
				<view class="iconfont iconhezuo" style="color: #61C28E;"></view>
				<text>我要合作</text>
			</navigator>
			<navigator class="li"  hover-class="none"  url="../study/study">
				<view class="iconfont iconkaifa___" style="color: #F19A3E;"></view>
				<text>软件开发</text>
			</navigator>
			<navigator class="li"  hover-class="none" url="../study/study">
				<view class="iconfont iconshipin-tianchong" style="color: #EDBE2F;"></view>
				<text>视频制作</text>
			</navigator>
			<navigator class="li"  hover-class="none">
				<view class="iconfont icontongzhi" style="color: #3978A4;"></view>
				<text>系统通知</text>
				<view class="num">2</view>
			</navigator>
		</view>
		
		</view>
		<view class="tabbar">
			<view @click="changeTabbar(index)" v-for="( item,index ) in tabbar" :key="index" :class="{ 'changeTabbar' : index == activeTabbar }">
				<image :src="item.iconPath" v-show=" index !== activeTabbar "></image>
				<image :src="item.selectedIconPath" v-show=" index == activeTabbar "></image>
				<text>{{ item.text }}</text>
			</view>
		</view>
	
	</view>
</template>

<script>
	import isCode from '../../verify/isCode.js'
	import { showToast , hideToast } from '../../verify/loading.js'
	
	export default{
		data() {
			return {
				tabbar:[
					{
						"iconPath": "/static/images/ICON/home_empty.png",
						"selectedIconPath": "/static/images/ICON/home_fill.png",
						"text": "首页"
					}, {
						"iconPath": "/static/images/ICON/order_empty.png",
						"selectedIconPath": "/static/images/ICON/order_fill.png",
						"text": "订单"
					}, {
						"iconPath": "/static/images/ICON/play_empty.png",
						"selectedIconPath": "/static/images/ICON/play_fill.png",
						"text": "视频"
					}, {
						"iconPath": "/static/images/ICON/me_empty.png",
						"selectedIconPath": "/static/images/ICON/me_fill.png",
						"text": "我的"
					}
				],
				activeTabbar: 3,
				userName : '' ,
				headImg : '',
			}
		},
		methods:{
			changeTabbar( index ) {
				console.log( index )
				
				if( index == 1 ) {
					uni.reLaunch({
						url:'/pages/orderForm/orderForm'
					})
				}else if( index == 2 ) {
					uni.reLaunch({
						url:'/pages/recordedVideo/recordedVideo'
					})
				}else if( index == 0 ) {
					uni.reLaunch({
						url:'/pages/index/index'
					})
				}
			},
			//用户信息
			getUserInfo() {
				let _this = this
				
				uni.getStorage({
					key:'token',
					success:res => {
						
						showToast()
						uni.request({
							url: this.apiServer + 'api/user/UserInfo',
							header: {
								"token": res.data,
							},
							method:'POST',
							success: (res) => {
								console.log( '用户信息' )
								console.log( res.data )
								
								isCode( res.data.code )
								
								_this.userName = res.data.data.nickname
								_this.headImg = res.data.data.icon
							}
						})
						
						hideToast()
					}
				})
				
			},
		
		},
		onLoad() {
			let _this = this
			
			//用户信息
			this.getUserInfo()
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	
	.myOrdinary{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
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
	
		.tabbar{
			background-color: #fff;
			border-top: 2rpx solid #9A9A9A;
			height: 100rpx;
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 20rpx;
			color: #9A9A9A;
			
			>view{
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			
			image{
				width: 50rpx;
				height: 50rpx;
				margin-bottom: 5rpx;
			}
			
			.changeTabbar{
				color: #47B4B7;
				
			}
		}
	
	}
</style>
