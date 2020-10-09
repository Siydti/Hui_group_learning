<template>
	<view class="myBusiness">
		
		<view style="flex: 1;overflow: scroll;">
			
		<view class="top">
			<image src="../../static/imgs/bg.png" mode="widthFix"></image>
			<view class="info">
				<image :src=" headImg " mode="" class="iconfont"></image>
				<text>{{ userName }}</text>
			</view>
		</view>
		<view class="navs">
			<navigator class="li" hover-class="none" url="/pagesc/collect/collect">
				<view class="iconfont iconwuxing"></view>
				<text>收藏</text>
			</navigator>
			<navigator class="li" hover-class="none" url="/pagesC/evaluate/evaluate">
				<view class="iconfont iconpinglun" style="color: #2DAEE0;"></view>
				<text>评价</text>
			</navigator>
			<navigator class="li" hover-class="none" url="/pages/browse/browse">
				<view class="iconfont iconshijian" style="color: #FF909E;"></view>
				<text>最近浏览</text>
			</navigator>
			<navigator class="li" hover-class="none" url="/pages/customerManagement/customerManagement">
				<view class="iconfont iconguanliyuan" style="color: #A18CD1;"></view>
				<text>客户管理</text>
			</navigator>
			<navigator class="li" hover-class="none" url="/pages/settlementPost/settlementPost">
				<view class="iconfont iconhezuo" style="color: #61C28E;"></view>
				<text>我要合作</text>
			</navigator>
			<navigator class="li" hover-class="none" url="../study/study">
				<view class="iconfont iconkaifa___" style="color: #F19A3E;"></view>
				<text>软件开发</text>
			</navigator>
			<navigator class="li" hover-class="none" url="../study/study">
				<view class="iconfont iconshipin-tianchong" style="color: #EDBE2F;"></view>
				<text>视频制作</text>
			</navigator>
			<navigator class="li" hover-class="none" url="/pages/recharge/recharge">
				<view class="iconfont iconshouzhimingxicaifuhongbaoyue" style="color: #ED5151;"></view>
				<text>红包充值</text>
			</navigator>
			<navigator class="li" hover-class="none" url="">
				<view class="iconfont icontongzhi" style="color: #3978A4;"></view>
				<text>系统通知</text>
				<view class="num">2</view>
			</navigator>
		</view>
		<view class="infos">
			<view class="left">
				<image src="../../static/imgs/logo.png"></image>
				<view class="r">
					<view class="text">本周100(元)</view>
					<view class="text active">本月2687(元)</view>
				</view>
			</view>
			<view class="right">
				<view class="text">累计56292(元)</view>
				<view class="btns">
					<view class="btn" @click="withdrawal">提现</view>
					<view class="btn active" @click="detailed">明细</view>
				</view>
			</view>
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
	import { showToast , hideToast } from '../../verify/loading.js'
	
	export default{
		data() {
			return{
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
			withdrawal:function(){
				uni.navigateTo({
					url:"../withdrawal/withdrawal"
				})
			},
			detailed:function(){
				uni.navigateTo({
					url:"../detailed/detailed"
				})
			},
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
				
				showToast('加载中...')
				uni.getStorage({
					key:'token',
					success:res => {
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
					}
				})
				hideToast()
				
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
	
	.myBusiness{
		width: 100%;
		height: 100%;
		display: felx;
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
			border-bottom: 20rpx solid #F2F2F2;
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
		.infos{
			display: flex;
			align-items: center;
			padding: 50rpx 40rpx;
			box-sizing: border-box;
			.left{
				display: flex;
				align-items: center;
				font-size: 0;
				margin-right: 80rpx;
				image{
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
				}
				.r{
					padding-left: 20rpx;
					.text{
						font-size: 24rpx;
						color: #666666;
					}
					.active{
						padding-top: 40rpx;
					}
				}
			}
			.right{
				.text{
					font-size: 24rpx;
					color: #666666;
				}
				.btns{
					display: flex;
					align-items: center;
					padding-top: 30rpx;
					.btn{
						width: 102rpx;
						height: 52rpx;
						border: 1px solid #47B4B7;
						border-radius: 6rpx;
						font-size: 28rpx;
						color: #47B4B7;
						text-align: center;
						line-height: 52rpx;
					}
					.active{
						color: #FF6634;
						border-color: #FF6634;
						margin-left: 20rpx;
					}
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
