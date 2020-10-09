<template>
	<view class="comment">
		
		<view class="type">
			<view :class="{'list':'list','active': index == active ? 'active' : '' }" v-for="(item,index) in typeList" :key="index" @click="changeState(index)">
				{{ item }}
			</view>
		</view>
		
		<view class="partition" style="height: 20rpx;"></view>
		
		<view class="main">
			
			<view class="list">
				
				<view class="head">
					<view class="left">
						<image src="/static/images/groupPurchase_profile.png" style="width: 80rpx;height: 80rpx;border-radius: 50%;"></image>
						<image src="/static/images/vip_logo.png" style="width: 20rpx;height: 20rpx;position: absolute;bottom: 0;right: 0;"></image>
					</view>
					<view class="right">
						
						<view class="top">
							我是大悦悦 <text>Lv4</text>
						</view>
						
						<view class="bottom">
							7月8日
						</view>
						
					</view>
				</view>
				
				<view class="score">
					<text>打分</text>
					<van-rate value="4.5" allow-half void-icon="star" color="#ee0a24"  void-color="#eee" readonly size="26rpx" />
				</view>
				
				<view :class="{'content' : 'content' , 'active' : isOpen == '全文' ? 'active' : '' }">
					这也快放暑假了，疫情原因在家呆着也荒废了许多时间，想着接着放假不能再放纵自己了无意中发现这家可以有体验课课，就报名体验课，校区整体干净整洁，每个屋子好用星座命名，小心思很到位，莫名好感，老师也很耐心，且风趣幽默，莫名好感，老师也很耐心，且风趣幽默莫名好感，老师也很耐心，且风趣幽默也很
				</view>
				
				<view class="isOpenbtn" @click="isOpenbtn(isOpen)" >
					{{isOpen}}
				</view>
				
				<view class="picture">
					
					<image src="/static/images/evaluate_img.png" style="width: 210rpx;height: 210rpx;margin-bottom: 15rpx;" v-for="(item,index) in pictureList" :key="index" ></image>
					
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList:['全部','最新点评','好评','差评','消费后点评（3）','体验课（4）','老师点赞（5）','环境很好（3）'],
				active:0,
				isOpen:'全文',
				pictureList:[1,2,3,4,5,6]
			}
		},
		methods: {
			changeState(index) {
				this.active = index
			},
			isOpenbtn(state) {
				if( state == '全文' ) {
					this.isOpen = '收起'
				}else if( state == '收起' ) {
					this.isOpen = '全文'
				}
			}
		}
	}
</script>

<style>
@import url("./style/comment.css");
</style>
