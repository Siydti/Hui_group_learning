<template>
	<view class="evaluate">
		
		<view class="main">
			
			<view class="title">
				评价（267）
			</view>
			
			
			<view class="list">
				
				<view class="head">
					<image src="../../static/images/head.png" style="width: 60rpx;height: 60rpx;border-radius: 50%;"></image>
				</view>
				
				<view class="content">
					
					<view class="name">
						快乐的小仙女
					</view>
					
					<view class="time">
						2019-08-16
					</view>
					
					<view :class="{'userSay':'userSay','active': isOpen == '全部' ? 'active' : '' }">
						这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评评价这是评价这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评价，这是文本这是文本这是评价这是评评价这是评价
					</view>
					
					<view class="isOpenbtn" @click="isOpenbtn">
						{{ isOpen }}
					</view>
					
					<view class="previously">
						
						<view class="left">
							<image src="/static/images/previously.png" style="width: 140rpx;height: 100rpx;border-radius: 10rpx;"></image>
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
			}
		},
		methods: {
			isOpenbtn() {
				if( this.isOpen == '全部' ) {
					this.isOpen = '收起'
				}else if( this.isOpen == '收起' ) {
					this.isOpen = '全部'
				} 
			}
		}
	}
</script>

<style>
@import url("./style/evaluate.css");
</style>
