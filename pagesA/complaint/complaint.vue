<template>
	<view class="complaint">
		
		<view class="complaint_main">
			<view class="complaint_main_title">
				请选择投诉类型
			</view>
			
			<view class="complaint_main_type">
				
				<view class="complaint_main_typeList" v-for="(item,index) in typeList" :key="index">
					{{item.type}}
				</view>
				
			</view>
			
			<view class="complaint_main_title">
				详情
			</view>
			
			<view class="complaint_main_textarea">
				<textarea />
			</view>
			
		</view>
		
		<view class="complaint_btn">
			提交
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList:[
					{ type:'内容不符合' },
					{ type:'存在欺诈行为' },
					{ type:'冒充他人' },
					{ type:'冒充他人' },
					{ type:'冒充他人' }
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("./style/complaint.css");
</style>
