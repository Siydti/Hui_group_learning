<template>
	<view class="store">

		<view class="store_main" style="flex: 1;overflow-y: scroll;">



			<view class="store_banner">
				<swiper class="swiper" autoplay="ture" :interval="interval" :duration="duration" style="height: 100%;">
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 100%;border-radius: 20rpx;"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">
							<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">
							<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							<image src="../../static/images/index_banner.png" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;"></image>
						</view>
					</swiper-item>
				</swiper>

				<view class="store_bannerBtn_box">
					<view class="store_bannerBtn_video">
						<image src="../../static/images/ICON/store_video.png" style="width: 30rpx;height: 30rpx;margin-right: 10rpx;"></image>
						<text>13</text>
					</view>
					<view class="store_bannerBtn_image">
						<image src="../../static/images/ICON/store_image.png" style="width: 30rpx;height: 30rpx;margin-right: 10rpx;"></image>
						<text>13</text>
					</view>
				</view>
			</view>

			<view class="store_title">
				<view class="store_titleLeft">
					<view class="store_titleLeft_top">
						同城美少儿流利英语口语（回 龙观校区）
					</view>
					<view class="store_titleLeft_borrom">
						<van-rate value="4" size="16" allow-half color="#FF6634" void-color="#999999" void-icon="star" readonly />
						<text style="color: #FF6633;margin: 0px 12rpx;">4分</text> <text>7条</text>
					</view>
				</view>

				<view class="store_titleRight">
					<view @click="shareShow_true">
						<image src="/static/images/ICON/store_share.png" style="width: 25rpx;height: 27rpx;"></image>
						<text>分享</text>
					</view>

					<view class="">
						<image src="/static/images/store_start.png" style="width: 25rpx;height: 27rpx;"></image>
						<text>收藏</text>
					</view>

					<view @click="go_complaint">
						<image src="/static/images/store_complain.png" style="width: 25rpx;height: 27rpx;"></image>
						<text>投诉</text>
					</view>

					<view class="store_titleRight_fixedBox">
						<image src="/static/images/store_dialogue.png" style="width: 100%;height: 100%;"></image>
						<view class="store_titleRight_fixed">
							点击这里分享给朋友
						</view>
					</view>
				</view>
			</view>

			<view class="store_site">

				<view class="store_siteBox">
					<view class="store_siteTop">
						顺义祥云小镇北区10号楼506室
					</view>
					<view class="store_siteBottom">
						位于中粮祥云小镇北区5层
					</view>
				</view>

				<view class="store_sitePhone">
					<image src="/static/images/store_phone.png" style="width: 36rpx;height: 29rpx;margin-bottom: 9rpx;"></image>
					<text>电话</text>
				</view>

			</view>

			<view class="segmentation" style="height: 20rpx;"></view>

			<view class="store_video">

				<view class="store_video_title">
					<view class="store_video_titleLeft">
						看视频涨知识
					</view>
					<view class="store_video_titleRight">
						全部7个视频
					</view>
				</view>

				<view class="store_videoBox">

					<view class="store_video_list" v-for="(index) in videoList" :key="index">
						<view class="store_video_listTop">
							<image src="/static/images/store_videoList_bac.png" style="width: 300rpx;height: 220rpx;border-radius: 10rpx;"></image>
							<image src="/static/images/store_videoList_play.png" class="playbtn"></image>
							<view class="times">
								00.33
							</view>
						</view>
						<view class="store_video_listBottm">
							【公开课】流利英语口 语文1
						</view>
					</view>

				</view>

			</view>

			<view class="segmentation" style="height: 30rpx;"></view>

			<view class="store_groupBuy">

				<view class="store_groupBuy_title">
					团购
				</view>

				<view class="store_groupBuy_list" v-for="(item,index) in groupBuyList" :key="index">
					<view class="store_groupBuy_listLeft">
						<image src="/static/images/temporary13.png" style="width: 100%;height: 100%;border-radius: 15rpx;"></image>
						<view class="store_groupBuy_listLeft_hint">
							商家推荐
						</view>
					</view>

					<view class="store_groupBuy_listRight">
						<view class="top">
							【线上线下任意学】雅思VIP体验课
						</view>

						<view class="bottom">
							<view class="bottom_left">
								<view class="bottom_left_top">
									冲刺阶段 <text>|</text> 1对1
								</view>
								<view class="bottom_left_bottom">
									<text style="font-size: 32rpx;color: #ec6b3d;margin-right: 14rpx;">￥47.95</text>
									<text style="color:#4d4d4d;font-size:20rpx;">￥</text>
									<text style="color:#4d4d4d;font-size:20rpx;text-decoration: line-through;margin-right: 6rpx;">1998</text>
									<text style="color: #ec6b3d;border: 1rpx solid #ec6b3d;border-radius: 5rpx;padding: 4rpx 9rpx;">已减4.95</text>
								</view>
							</view>
							<view class="bottom_right">
								<van-icon name="star-o" />
								<text style="margin: 0px 10rpx;">666</text>
								<van-icon name="arrow" />
							</view>
						</view>
					</view>
				</view>

				<view class="wire"></view>

				<view class="store_groupBuy_more">
					<text>更多4个团购</text>
					<van-icon name="arrow" />
				</view>

			</view>

			<view class="store_course">
				<view class="store_course_title">
					课程
				</view>

				<view style="display: flex;flex-wrap: wrap;">

					<view :class="{'store_course_list' : 'store_course_list' , 'mrr20' : (index%2 == 0), }" v-for="(item,index) in courseList"
					 :key="index" @click="go_course">
						<view class="store_course_top">
							<image src="/static/images/course_top.png" style="width: 100%;height: 100%;border-radius: 10rpx;"></image>
							<view class="active_type">
								商家推荐
							</view>
						</view>


						<view class="store_course_bottom">
							<view class="title">
								精英托福VIP定制课程
							</view>

							<view class="type">
								<text>班型1对1</text>
								<view>
									<van-icon name="star-o" />
									<text>666</text>
								</view>
							</view>

							<view class="price">
								<text>￥</text> 1998
							</view>
						</view>

					</view>

				</view>



				<view class="wire"></view>

				<view class="store_course_more">
					<text>更多6个课程</text>
					<van-icon name="arrow" />
				</view>

			</view>
			
			<view class="segmentation" style="height: 20rpx;"></view>

			<view class="store_teachers">

				<view class="title" @click="go_teachers">
					<view class="left">
						名师风采<text>（15）</text>
					</view>
					<view class="right">
						<van-icon name="arrow" />
					</view>
				</view>

				<view class="listBox">

					<view class="list" v-for="(item,index) in teacherList" :key="index">
						<image src="/static/images/head.png" style="width: 160rpx;height: 160rpx;border-radius: 50%;"></image>
						<view class="name">
							贾晓敏
						</view>
						<view class="type">
							托福雅思听力
						</view>
						<view class="years">
							10年教龄
						</view>
					</view>

				</view>

			</view>

			<view class="segmentation" style="height: 20rpx;position: relative;">
				<view class="customerInput">
					客户录入
				</view>
			</view>
			
			<view class="store_evaluate">
				
				<view class="title" @click="go_comment">
					<view class="left">
						精选点评 <text>(7)</text>
					</view>
					
					<view class="right">
						<van-icon name="arrow" />
					</view>
				</view>
				
				<view class="typeBox">
					<view class="type" v-for="(item,index) in evaluateList" :key="index">
						{{item.content}}
					</view>
				</view>
				
				<view class="listBox" v-for="(item,index) in courseList" :key="index">
					
					<view class="head">
						<image src="../../static/images/head.png" style="width: 74rpx;height: 74rpx;border-radius: 50%;"></image>
						<image src="/static/images/vip_logo.png" class="vip_logo"></image>
					</view>
					
					<view class="content">
						<view class="title">
							<text>我是大悦悦</text>
							<text>Lv4</text>
						</view>
						
						<view class="time">
							7月8日
						</view>
						
						<view class="remarkBox">
							<view class="remark">
								消费后评分
							</view>
						</view>
						
						<view class="grade">
							<text>打分</text>
							<van-rate
							void-icon="smile"
							  value="4.5"
							  size="12"
							  allow-half="true"
							  color="#D81E06"
							  void-color="#eee"
							/>
						</view>
						
						<view class="describe">
							这也快放暑假了，疫情原因在家呆着也荒废了许多时间，想着借着放假不能再放纵自己了
						</view>
						
						<view class="imgListBox">
							<view class="imgList" v-for="(item,index) in imgList" :key="index">
								<image src="/static/images/evaluate_img.png" style="width: 200rpx;height: 200rpx;border-radius: 4rpx;"></image>
							</view>
							
							<view class="imgNumberBox">
								<image src="../../static/images/imglogo_fff.png" style="width: 21rpx;height: 17rpx;"></image>
								<text>6</text>
							</view>
						</view>
					</view>
					
				</view>
				
				<view class="lookMore">
					<text>查看全部精选点评</text>
					<van-icon name="arrow" />
				</view>
				
			</view>

			<view class="segmentation" style="height: 20rpx;"></view>

		
		</view>



		<!-- 分享弹框 -->
		<van-popup :show="shareShow" round duration="300" position="bottom" custom-style="height: 402rpx" @close="shareShow_false">
			<view class="share_box">
				<view class="share_boxTop">
					<view class="share_boxTop_left">
						<image src="/static/images/friends.png" style="width: 100rpx;height: 100rpx;margin-bottom: 20rpx;"></image>
						<text>分享给好友</text>
					</view>
					<view class="share_boxTop_right" @click="posterShow_true">
						<image src="/static/images/poster.png" style="width: 100rpx;height: 100rpx;margin-bottom: 20rpx;"></image>
						<text>生成海报</text>
					</view>
				</view>
				<view class="share_boxBottom">
					取消
				</view>
			</view>
		</van-popup>


		<!-- 生成海报弹框 -->
		<van-popup :show="posterShow" closeable close-icon="close" position="bottom" duration="300" custom-style="height: 726rpx"
		 @close="posterShow_false">
			<view class="poster_box">

				<view class="poster_box_title">
					生成海报
				</view>

				<view class="poster_box_img">
					<image src="/static/images/poster_bac.png" style="width: 100%;height: 100%;"></image>
				</view>

				<view class="poster_box_main">
					<view class="poster_box_mainLeft">
						<view class="poster_box_mainLeft_top">
							同城美少儿流利英语口语（回 龙观校区）
						</view>
						<view class="poster_box_mainLeft_mid">
							<van-rate value="4" size="16" allow-half color="#FF6634" void-color="#999999" void-icon="star" readonly />
							<text style="font-size: 24rpx;color: #FF6634;margin-left: 5rpx;">4分</text>
						</view>
						<view class="poster_box_mainLeft_bottom">
							昌平区回龙观西大街置业大厦11层1120 -1107室
						</view>
					</view>
					<view class="poster_box_mainRight">
						<image src="/static/images/scanCode.png" style="width: 135rpx;height: 135rpx;"></image>
						<text>长按识别小程序</text>
					</view>
				</view>


				<view class="poster_box_bottom">
					保存图片
				</view>

			</view>

		</van-popup>


	

	<view class="segmentation" style="height: 4rpx;"></view>

	<view class="store_bottom">
		<view class="store_bottom_left">
			<image src="/static/images/ICON/phone.png" style="width: 30rpx;height: 32rpx;"></image>
			<text>电话</text>
		</view>
		<view class="store_bottom_right" @click="go_appoint">
			预约试听
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
				videoList: [1, 2, 3, 4, 5, 6, 7],
				groupBuyList: [1, 2, 3],
				courseList: [1, 2, 3, 4],
				teacherList: [1, 2, 3, 4],
				evaluateList:[
					{ id: 1 , content: '体验课 (4)' },
					{ id: 1 , content: '老师超赞 (5)' },
					{ id: 1 , content: '环境很好 (6)' }
				],
				imgList:[1,2,3],
				shareShow: false,
				posterShow: false,
			}
		},
		methods: {
			shareShow_false() {
				this.shareShow = false
			},
			shareShow_true() {
				this.shareShow = true
			},
			posterShow_false() {
				this.posterShow = false
			},
			posterShow_true() {
				this.shareShow = false
				this.posterShow = true
			},
			go_complaint() {
				uni.navigateTo({
					url: '/pagesA/complaint/complaint'
				})
			},
			go_course() {
				uni.navigateTo({
					url: '/pagesA/course/course'
				})
			},
			go_appoint() {
				uni.navigateTo({
					url: '/pagesA/appoint/appoint'
				})
			},
			go_teachers() {
				uni.navigateTo({
					url: '/pagesA/teachers/teachers'
				})
			},
			go_comment() {
				uni.navigateTo({
					url: '/pagesA/comment/comment'
				})
			}
		}
	}
</script>

<style>
	@import url("./style/store.css");
</style>
