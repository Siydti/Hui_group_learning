<template>
	<view class="teachers">
		<view class="segmentation"></view>
		<view class="teachers_title">
			授课老师（27）
		</view>
		
		<view class="teachers_listBox">
			<view class="teachers_list" v-for="(item,index) in teacherList" :key="index">
				<image src="/static/images/teacher.png" style="width: 200rpx;height: 200rpx;margin-bottom: 10rpx;"></image>
				<text>Angell</text>
				<text style="color: #47B4B7;">7年教龄</text>
				<text>英语</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				teacherList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("./style/teachers.css");
</style>
