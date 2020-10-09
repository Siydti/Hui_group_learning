<template>
	<view class="appointSucceed">
		<view class="groupSuccess_main">
			<view class="groupSuccess_main_title">
				<image src="/static/images/groupSuccess_logo.png" style="width: 60rpx;height: 60rpx;margin-right: 20rpx;"></image>
				<text>{{ title }}</text>
			</view>
			<view class="groupSuccess_main_hint">
				已经成功拼团：
			</view>
			<view class="groupSuccess_main_scholl">
				【{{ name }} 】
			</view>
			<view class="groupSuccess_main_hint">
				请留意您的手机，我们将通知商户尽快与您联系
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
				title: '',
				name : '',
			}
		},
		methods: {
			
		},
		onLoad(option) {
			console.log( option )
			
			if( option.type == '预约' ) {
				let _this = this
				//学校详情
				uni.getStorage({
					key: 'token',
					success: res => {
						
						showToast()
						uni.request({
							url: this.apiServer + 'api/school/schooldetail',
							header: {
								'token': res.data,
							},
							data:{
								sid : option.sid
							},
							method: 'POST',
							success(res) {
								console.log('学校详情')
								console.log(res.data)
								isCode(res.data.code)
				
								_this.title = '预约成功'
								_this.name = res.data.data.name
							}
						})
						hideToast()
						
					},
				})
			}
			
		}
	}
</script>

<style>
@import url("./style/appointSucceed.css");
</style>
