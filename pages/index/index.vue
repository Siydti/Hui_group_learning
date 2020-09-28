<template>
	<view class="index">

		<view class="index_title">
			<view class="index_titleLeft">
				<image src="../../static/images/-e-头像.png" style="width: 100%;height: 100%;"></image>
			</view>

			<view class="index_titleInput">
				<input type="text" placeholder="输入学校名称" />
				<van-icon name="search" class="icon" />
			</view>

			<view class="index_titleRight">
				<text>红包排序</text>
				<van-icon name="arrow-down" />
			</view>

		</view>
		<view class="index_main">
 
		<view class="index_banner">
			<swiper class="swiper" indicator-dots="ture" autoplay="ture" :interval="interval" :duration="duration"
			 indicator-color="#FFFFFF" indicator-active-color="#47B4B7">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="../../static/images/index_banner.png" style="width: 630rpx;height: 300rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<image src="../../static/images/index_banner.png" style="width: 630rpx;height: 300rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						<image src="../../static/images/index_banner.png" style="width: 630rpx;height: 300rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="../../static/images/index_banner.png" style="width: 630rpx;height: 300rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="../../static/images/index_banner.png" style="width: 630rpx;height: 300rpx;border-radius: 20rpx;"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view style="background-color: #F2F2F2;height: 20rpx;width: 750rpx;"></view>


			<view class="index_mainType">
				<text class="index_type" v-for="(item,index) in typeList" :key="index">{{ item.type }}</text>
			</view>

			<view class="index_listBox">

				<!-- 上 -->
				<view class="index_list_top">
					<view class="index_list_top_left">
						<image src="../../static/images/21cfb8c7a77e4b0c0852894ac1f7293f%20拷贝%202.png" style="width: 100%;height: 100%;"></image>
						<view class="index_list_top_leftActive">
							暑期大促
						</view>
						<view class="index_list_top_leftPlay">
							<image src="../../static/images/ICON/videoplay.png" style="width: 100%;height: 100%;"></image>
						</view>
					</view>

					<view class="index_list_top_mid" @click="go_store">
						<view class="index_list_top_midTitle">
							外言社日韩语培训学校(桐梓林校区)
						</view>
						<view class="index_list_top_midNumBox">
							<van-rate value="4" size="10" allow-half color="#d73427" void-color="#ddd" void-icon="star" readonly />
							<text>348条</text> <text>1209人预约</text>
						</view>
						<view class="index_list_top_midType">
							<text>桐梓林</text>
							<text>日语</text>
							<image src="../../static/images/-e-hongbao%20(1).png" style="width: 22rpx;height: 28rpx;"></image>
							<text style="color: #000;">1000.00</text>
						</view>
						<view class="index_list_top_midRanking">
							<text>
							回龙观热门榜第一名
							</text>
						</view>
					</view>

					<view class="index_list_top_right">
						<view class="index_list_top_rightTop"></view>
						<view class="index_list_top_rightBottom"> 3.1km </view>
					</view>
				</view>

				<!-- 下 -->
				<view class="index_list_bottom">
					
					<view class="index_list_bottomLeft"></view>
					<view class="index_list_bottomRight">
						<view class="index_list_bottomRight_top">
							您最近偷偷「打探」过这家店哦~ 
						</view>
						<view class="index_list_bottomRight_mid">
							<text class="index_list_bottomRight_active">团</text>
							<text>1元【线下】0基础入趣味 <text style="color: #EC6F42;">体验课</text> 1课时</text>
						</view>
						<view class="index_list_bottomRight_bottom">
							<text class="index_list_bottomRight_active">课</text>
							<text>5660元韩语高级班TOPIK6级</text>
						</view>
					</view>
					
				</view>

			</view>

			<view class="index_listBox">
			
				<!-- 上 -->
				<view class="index_list_top">
					<view class="index_list_top_left">
						<image src="../../static/images/21cfb8c7a77e4b0c0852894ac1f7293f%20拷贝%202.png" style="width: 100%;height: 100%;"></image>
						<view class="index_list_top_leftActive">
							暑期大促
						</view>
						<view class="index_list_top_leftPlay">
							<image src="../../static/images/ICON/videoplay.png" style="width: 100%;height: 100%;"></image>
						</view>
					</view>
			
					<view class="index_list_top_mid" @click="go_store">
						<view class="index_list_top_midTitle">
							外言社日韩语培训学校(桐梓林校区)
						</view>
						<view class="index_list_top_midNumBox">
							<van-rate value="4" size="10" allow-half color="#d73427" void-color="#ddd" void-icon="star" readonly />
							<text>348条</text> <text>1209人预约</text>
						</view>
						<view class="index_list_top_midType">
							<text>桐梓林</text>
							<text>日语</text>
							<image src="../../static/images/-e-hongbao%20(1).png" style="width: 22rpx;height: 28rpx;"></image>
							<text style="color: #000;">1000.00</text>
						</view>
						<view class="index_list_top_midRanking">
							<text>
							回龙观热门榜第一名
							</text>
						</view>
					</view>
			
					<view class="index_list_top_right">
						<view class="index_list_top_rightTop"></view>
						<view class="index_list_top_rightBottom"> 3.1km </view>
					</view>
				</view>
			
				<!-- 下 -->
				<view class="index_list_bottom">
					
					<view class="index_list_bottomLeft"></view>
					<view class="index_list_bottomRight">
						<view class="index_list_bottomRight_top">
							您最近偷偷「打探」过这家店哦~ 
						</view>
						<view class="index_list_bottomRight_mid">
							<text class="index_list_bottomRight_active">团</text>
							<text>1元【线下】0基础入趣味 <text style="color: #EC6F42;">体验课</text> 1课时</text>
						</view>
						<view class="index_list_bottomRight_bottom">
							<text class="index_list_bottomRight_active">课</text>
							<text>5660元韩语高级班TOPIK6级</text>
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
				interval: 2000, //自动切换时间间隔
				duration: 500, //滑动动画时长
				typeList: [{
						type: '全部'
					},
					{
						type: '计算机'
					},
					{
						type: '语言培训'
					},
					{
						type: '学校类型'
					}
				],
				mainList:[
					{ imgurl: '../../static/images/21cfb8c7a77e4b0c0852894ac1f7293f%20拷贝%202.png' , title: '' }
				]
			}
		},
		onLoad() {

		},
		methods: {
			go_store() {
				uni.navigateTo({
					url:'/pagesA/store/store'
				})
			}
		}
	}
</script>

<style>
	@import url("./style/index.css");
</style>
