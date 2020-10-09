<template>
	<view class="cooperativeManagement">
		
		<view class="main">
			
			<view class="inputList" v-for="(item,index) in inputList" :key="index">
				<view class="left">
					{{item.title}}
				</view>
				<input type="text" :placeholder="item.placeholder"/>
			</view>
			
			<view class="typeTitle">
				学校类型：
			</view>
			
			<view class="typeBox">
				<text>语言课</text>
				<text>计算机</text>
				<text>语言培训</text>
				<text>美术培训</text>
				<van-icon name="arrow" />
			</view>
			
			<view class="ratioList" v-for="(item,index) in ratioList" :key="index">
				<view class="left">
					{{item.title}}
				</view>
				<view class="right">
					<text>{{item.ratio}}</text>%
				</view>
			</view>
			
		</view>
		
		<view class="btn">
			确认
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputList:[
					{title: '机构名称：' , placeholder: '请输入机构名称'},
					{title: '联系人：' , placeholder: '请输入您的名字'},
					{title: '手机号码：' , placeholder: '1566849519'},
					{title: '登录名：' , placeholder: '12345678'},
					{title: '登录密码：' , placeholder: '12345678'}
				],
				ratioList:[
					{ 'title' : '总返点比例：' , 'ratio' : 20 },
					{ 'title' : '一级推客佣金比例：' , 'ratio' : 10 },
					{ 'title' : '二级推客佣金比例：' , 'ratio' : 10 },
					{ 'title' : '区域代理佣金比例：' , 'ratio' : 6 }
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("./style/cooperativeManagement.css");
</style>
