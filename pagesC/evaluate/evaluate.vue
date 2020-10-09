<template>
	<view class="evaluate">
		
		<view v-if="!UserComment.length" style="padding-top: 50rpx;text-align: center;">
			小主，没找到关于您的评论记录哦~
		</view>
		
		<view class="main" v-else>
			
			<view class="title">
				评价（{{UserComment.length}}）
			</view>
			
			
			<view class="list" v-for="(item,index) in UserComment" :key="index">
				
				<view class="head">
					<image :src="item.icon" style="width: 60rpx;height: 60rpx;border-radius: 50%;"></image>
				</view>
				
				<view class="content">
					
					<view class="name">
						{{item.name}}
					</view>
					
					<view class="time">
						{{ item.create }}
					</view>
					
					<view :class="{'userSay':'userSay','active': isOpen == '全部' ? 'active' : '' }">
						{{item.content}}
					</view>
					
					<view class="isOpenbtn" @click="isOpenbtn">
						{{ isOpen }}
					</view>
					
					<view class="previously">
						
						<view class="left">
							<image :src="item.img[0]" style="width: 140rpx;height: 100rpx;border-radius: 10rpx;"></image>
						</view>
						
						<view class="mid">
							<view style="color: #333333;font-size: 22rpx;padding-top: 20rpx;padding-bottom: 20rpx;">新东方培训学校</view>
							<view style="color: #999999;font-size: 20rpx;">为各类职业提供专业的技能培训</view>
						</view>
						
						<view class="right">
							￥ 149.00
						</view>
						
					</view>
					
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isOpen:'全部',
				UserComment:[],
			}
		},
		methods: {
			isOpenbtn() {
				if( this.isOpen == '全部' ) {
					this.isOpen = '收起'
				}else if( this.isOpen == '收起' ) {
					this.isOpen = '全部'
				} 
			},
			
			//我的评论
			getUserComment() {
				let _this = this
				
				uni.getStorage({
					key:'token',
					success:res => {
						uni.request({
							url: _this.apiServer + 'api/user/UserComment',
							header: {
								"token": res.data,
							},
							data:{
								page:1
							},
							method:'POST',
							success: (res) => {
								console.log( '我的评论' )
								console.log( res.data )
								
								isCode( res.data.code )
								
								_this.UserComment = res.data.data.list
							}
						})
					}
				})
				
			},
		},
		onLoad() {
			//我的评论
			this.getUserComment()
		}
	}
</script>

<style>
@import url("./style/evaluate.css");
</style>
