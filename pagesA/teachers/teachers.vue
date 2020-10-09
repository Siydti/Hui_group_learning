<template>
	<view class="teachers">
		<view class="segmentation"></view>
		<view class="teachers_title">
			成员列表（{{ SchoolTeacher.length }}）
		</view>
		
		<view class="teachers_listBox">
			<view class="teachers_list" v-for="(item,index) in SchoolTeacher" :key="index">
				<image :src="item.img" style="width: 200rpx;height: 200rpx;margin-bottom: 10rpx;border-radius: 50%;"></image>
				<text>{{ item.name }}</text>
				<text style="color: #47B4B7;">{{ item.year }}年教龄</text>
				<text>{{ item.major }}</text>
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
				SchoolTeacher : [],
			}
		},
		methods: {
			
		},
		onLoad( option ) {
			let _this = this
			
			uni.getStorage({
				key: 'token',
				success: res => {
					
					showToast()
					uni.request({
						url: this.apiServer + 'api/school/SchoolTeacher',
						data: {
							sid: option.sid
						},
						header: {
							'token': res.data,
						},
						method: 'POST',
						success(res) {
							console.log( '名师风采' )
							console.log( res.data)
							isCode( res.data.code)
			
							_this.SchoolTeacher = res.data.data.list
							console.log(  _this.SchoolTeacher )
						}
					})
					hideToast()
					
				}
			})
			
		}
	}
</script>

<style>
@import url("./style/teachers.css");
</style>
