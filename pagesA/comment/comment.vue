<template>
	<view class="comment">
		
		<!-- <view class="type">
			<view :class="{'list':'list','active': index == active ? 'active' : '' }" v-for="(item,index) in typeList" :key="index" @click="changeState(index)">
				{{ item }}
			</view>
		</view> -->
		
		<!-- <view class="partition" style="height: 20rpx;"></view> -->
		
		<view class="main">
			
			<view class="list" v-for="( item,index ) in schoolComment" :key="index">
				
				<view class="head">
					<view class="left">
						<image :src="item.icon" style="width: 80rpx;height: 80rpx;border-radius: 50%;"></image>
						<!-- <image src="/static/images/vip_logo.png" style="width: 20rpx;height: 20rpx;position: absolute;bottom: 0;right: 0;"></image> -->
					</view>
					<view class="right">
						
						<view class="top">
							{{ item.name }} <!-- <text>Lv4</text> -->
						</view>
						
						<view class="bottom">
							{{ item.create }}
						</view>
						
					</view>
				</view>
				
				<!-- <view class="score">
					<text>打分</text>
					<van-rate value="4.5" allow-half void-icon="star" color="#ee0a24"  void-color="#eee" readonly size="26rpx" />
				</view> -->
				
				<view :class="{'content' : 'content' , 'active' : isOpen == '全文' ? 'active' : '' }">
					{{ item.content }}
				</view>
				
				<view class="isOpenbtn" @click="isOpenbtn(isOpen)" >
					{{isOpen}}
				</view>
				
				<view class="picture">
					
					<image :src="items" style="width: 210rpx;height: 210rpx;margin-bottom: 15rpx;" v-for="(items,indexs) in item.img" :key="indexs" ></image>
					
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import isCode from '../../verify/isCode.js'
	import { showToast , hideToast } from '../../verify/loading.js'
	
	export default {
		data() {
			return {
				typeList:['全部','最新点评','好评','差评','消费后点评（3）','体验课（4）','老师点赞（5）','环境很好（3）'],
				active:0,
				isOpen:'全文',
				schoolComment:[],
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
		},
		onLoad( option ) {
			let _this = this
			
			//学校评论
			uni.getStorage({
				key: 'token',
				success: res => {
					
					showToast()
					uni.request({
						url: this.apiServer + 'api/school/schoolComment ',
						data: {
							sid: option.sid
						},
						header: {
							'token': res.data,
						},
						method: 'POST',
						success(res) {
							console.log( '学校评论' )
							console.log( res.data)
							isCode( res.data.code)
			
							_this.schoolComment  = res.data.data.list
							console.log(  _this.schoolComment  )
						}
					})
					hideToast()
					
				}
			})
		}
	}
</script>

<style lang="less">
@import url("./style/comment.less");

</style>
