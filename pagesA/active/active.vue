<template>
	<view class="active">

		<view class="main">

			<image src="/static/images/active_top.png" style="width: 100%;height: 350rpx;"></image>

			<view class="title">
				<view class="left">
				同城美少儿流利英语口语（回龙观校区啦啦啦啦啦啦啦啦，啦啦啦啦啦啦啦啦啦啦啦                            
				</view>
				<view class="right">
					<image src="/static/images/ICON/store_share.png" style="width: 31rpx;height: 34rpx;margin-bottom: 10rpx;"></image>
					<text>1分享</text>
				</view>
			</view>


			<view class="price">
				<view class="left">
					<text style="color: #FF6634;font-size: 48rpx;font-weight: bold;margin-right: 10rpx;">￥499</text>
					<text style="color: #999999;font-size: 30rpx;text-decoration: line-through;">原价:￥888.8</text>
				</view>
				<view class="right">
					<view class="box">
						<image src="../../static/images/-e-头像.png" :style="{'width':'70rpx','height':'70rpx','borderRadius':'50%','position':'absolute','left':(50*index)+'rpx','top':'-28rpx'}" v-for="(item,index) in groupList" :key="index"></image>
					</view>
					<van-icon name="arrow" />
				</view>
			</view>


			<view class="dataBox">
				
				<view class="left">
					<image src="../../static/images/active_surplus.png" style="width: 30rpx;height: 28rpx;"></image>
					<text>剩余300份</text>
				</view>
				
				<view class="mid">
					<image src="../../static/images/active_browse%20(1).png" style="width: 28rpx;height: 22rpx;"></image>
					<text>浏览23人</text>
				</view>
				
				<view class="right">
					<image src="../../static/images/crowd.png" style="width: 28rpx;height: 30rpx;"></image>
					<text>参与0人</text>
				</view>
				
			</view>


			<view class="table">
				<view class="row">
					<view class="cell">张三</view>
					<view class="cell">李四</view>
					<view class="cell">王五</view>
				</view>
				<view class="row">
					<view class="cell">张三</view>
					<view class="cell">李四</view>
					<!-- <view class="cell">王五</view> -->
				</view>
			</view>


			<view class="catalogue">
				<image src="/static/images/catalogue_bac.png" style="width: 100%;height: 100%;"></image>
				<view class="top">
					机构联盟目录
				</view>
				<view class="bottom">
					回龙观首届教育文化艺术节
				</view>
			</view>


			<view class="main_content">
				<image src="/static/images/active_main_bac.png" style="width: 100%;height: 100%;"></image>
				
				<view class="content">
					
					<view class="course">
						<image src="/static/images/active_mainTitle_bac.png" style="width: 100%;height: 100%;"></image>
						<view class="course-title">
						-课程科目-
						</view>
					</view>
				
				
					<view class="course_content">
						
						<view>感统课+学能课+学习能力测评</view>
						<view>沙盘课+学习能力测评</view>
						<view>竞技叠杯课+学习能力测评</view>
						<view>适合年龄：3-14岁</view>
						
					</view>
					
					<view class="course">
						<image src="/static/images/active_mainTitle_bac.png" style="width: 100%;height: 100%;"></image>
						<view class="course-title">
						-联系方式-
						</view>
					</view>
					
					<view class="course_content">
						
						<view style="margin-bottom: 0rpx;">联系电话：<text>13717879352（韩老师）</text> </view>
						<view><text>010-879352（李老师）</text></view>
						
						<view>上课地址:<text>昌平区回龙观东大街腾讯创客广场B座二层金色雨林</text></view>
						
					</view>
				
				
					<view class="course">
						<image src="/static/images/active_mainTitle_bac.png" style="width: 100%;height: 100%;"></image>
						<view class="course-title">
						-公司简介-
						</view>
					</view>
					
				
					<view class="course_content">
					
						<view><text>北京梦起缘体育发展有限公司成立于2015年5月26日。公司服务北京市延庆区、北京梦起缘体育发展有限公司成立于2015年5月26日。公司服务北京市延庆区、北京梦起缘体育发展有限公司成立于2015年5月26日。公司服务北京市延庆区、北京梦起缘体育发展有限公司成立于2015年5月26日。公司服务北京市延庆区、北京梦起缘体育发展有限公司成立于2015年5月26日。公司服务北京市延庆区、</text></view>
					
					</view>
				</view>
				
				
			</view>


			<view class="active_time">
				<image src="/static/images/activeTime_bac.png" style="width: 100%;height: 100%;"></image>
				<view class="content">
					活动时间：12月20 - 12月1号
				</view>
			</view>
			
			<view class="active_num">
				<image src="/static/images/activeNum_bac.png" style="width: 100%;height: 100%;"></image>
				<view class="content">
					活动仅限300名，先到先得
				</view>
			</view>


		</view>


		<view class="bottom_box">

			<view class="goIndex">
				<image src="/static/images/active_phone (2).png" style="width: 30rpx;height: 32rpx;margin-bottom: 10rpx;"></image>
				<text>首页</text>
			</view>

			<view class="phone">
				<image src="/static/images/active_phone (1).png" style="width: 30rpx;height: 32rpx;margin-bottom: 10rpx;"></image>
				<text>电话</text>
			</view>

			<view class="buy">
				<text style="font-size: 24rpx;">￥888.8</text>
				<text style="font-size: 28rpx;">立即购买</text>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupList:[1,2,3,4]
			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url("./style/active.css");
</style>
