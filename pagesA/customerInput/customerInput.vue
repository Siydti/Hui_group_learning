<template>
	<view class="customerInput">
		<view class="customerInput_name">
			<text>真实姓名：</text>
			<input type="text" placeholder="请输入您的姓名" />
		</view>
		
		<view class="customerInput_phone">
			<text>手机号码：</text>
			<input type="number" placeholder="请输入您的手机号码" />
		</view>
		
		<view class="customerInput_title">
			情况说明：
		</view>
		
		<view class="customerInput_typeBox">
			
			<view class="customerInput_type" v-for="(item,index) in typeList" :key="index">
			有意向	
			</view>
			
		</view>
		
		<view class="customerInput_btn">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList:[1,2,3,4]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("./style/customerInput.css");
</style>
