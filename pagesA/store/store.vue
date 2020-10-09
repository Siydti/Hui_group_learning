<template>
	<view class="store">

		<view class="store_main" style="flex: 1;overflow-y: scroll;">



			<view class="store_banner">
				<!-- <swiper class="swiper" autoplay="ture" :interval="interval" :duration="duration" style="height: 100%;">
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
			 -->
			
				<image :src="schooldetail.cover" style="width: 680rpx;height: 400rpx;border-radius: 20rpx;position: relative;left: 50%;transform: translateX(-50%);"></image>
			</view>

			<view class="store_title">
				<view class="store_titleLeft">
					<view class="store_titleLeft_top">
						{{ schooldetail.name ? schooldetail.name : '同城美少儿流利英语口语（回 龙观校区）' }}
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

					<view @click="collect" :class="{ 'isCollect' : isCollect }">
						<image src="/static/images/store_start.png" style="width: 25rpx;height: 27rpx;" v-if="!isCollect"></image>
						<image src="/static/images/store_start01.png" style="width: 25rpx;height: 27rpx;" v-else></image>
						<text>{{ isCollect ? '已收藏' : '收藏' }}</text>
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

				<view class="store_siteBox" @click="siteShowTrue">
					<view class="store_siteTop">
						{{ schooldetail.addr }}
					</view>
					<view class="store_siteBottom">
						位于{{ schooldetail.addr }}
					</view>
				</view>

				<view class="store_sitePhone" @click="callPhone">
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
						全部 {{ SchoolVideo.length }} 个视频
					</view>
				</view>

				<view class="store_videoBox">

					<view class="store_video_list" v-for="(item,index) in SchoolVideo" :key="index">
						<view class="store_video_listTop">
							<!-- <image src="/static/images/store_videoList_bac.png" style="width: 300rpx;height: 220rpx;border-radius: 10rpx;"></image>
							<image src="/static/images/store_videoList_play.png" class="playbtn"></image>
							<view class="times">
								00.33
							</view> -->
							
							<video :src="item.url" controls show-center-play-btn style="width: 300rpx;height: 220rpx;border-radius: 10rpx;"></video>
						</view>
						<view class="store_video_listBottm" style="padding-top: 30rpx;">
							{{ item.title }}
						</view>
					</view>

				</view>

			</view>

			<view class="segmentation" style="height: 30rpx;"></view>

			<view class="store_groupBuy" v-if="SchoolTeamBuy.length">

				<view class="store_groupBuy_title">
					团购
				</view>

				<view class="store_groupBuy_list" v-for="(item,index) in SchoolTeamBuy" :key="index">
					<view class="store_groupBuy_listLeft">
						<image :src="item.cover" style="width: 100%;height: 100%;border-radius: 15rpx;"></image>
						<view class="store_groupBuy_listLeft_hint">
							商家推荐
						</view>
					</view>

					<view class="store_groupBuy_listRight" @click="go_groupPurchase(item.gid)">
						<view class="top">
							{{ item.title }}
						</view>

						<view class="bottom">
							<view class="bottom_left">
								<view class="bottom_left_top">
									{{ item.target }} <text>|</text> {{ item.person }}
								</view>
								<view class="bottom_left_bottom">
									<text style="font-size: 32rpx;color: #ec6b3d;margin-right: 14rpx;">￥{{ item.newPrice }}</text>
									<text style="color:#4d4d4d;font-size:20rpx;">￥</text>
									<text style="color:#4d4d4d;font-size:20rpx;text-decoration: line-through;margin-right: 6rpx;">{{ item.price }}</text>
									<text style="color: #ec6b3d;border: 1rpx solid #ec6b3d;border-radius: 5rpx;padding: 4rpx 9rpx;font-size: 18rpx;">已减{{ item.deratePri }}</text>
								</view>
							</view>
							<view class="bottom_right" @click="TeamBuyIsCollect( item.gid )">
								<van-icon name="star" v-show="item.collection" color="#FF6634"/>
								<van-icon name="star-o" v-show="!item.collection" />
								<text style="margin: 0px 10rpx;">{{ item.user }}</text>
								<van-icon name="arrow" />
							</view>
						</view>
					</view>
				</view>

				<view class="wire" v-show=" SchoolTeamBuy.length > 1 "></view>

				<view class="store_groupBuy_more" v-if=" SchoolTeamBuy.length >= 2 ">
					<text>更多{{SchoolTeamBuy.length}}个团购</text>
					<van-icon name="arrow" />
				</view>

			</view>

			<view class="store_course" v-if="SchoolGoods.length">
				<view class="store_course_title">
					列表
				</view>

				<view style="display: flex;flex-wrap: wrap;">

					<view :class="{'store_course_list' : 'store_course_list' , 'mrr20' : (index%2 == 0), }" v-for="(item,index) in SchoolGoods" :key="index" >
						<view class="store_course_top" @click="go_course(item.gid)">
							<image :src="item.cover" style="width: 100%;height: 100%;border-radius: 10rpx;"></image>
							<view class="active_type">
								商家推荐
							</view>
						</view>


						<view class="store_course_bottom">
							<view class="title">
								{{ item.title }}
							</view>

							<view class="type">
								<text>类型{{ item.person }}</text>
								<view @click="goodsIsCollect(item.gid)">
									<van-icon name="star" v-show="item.user" color="#FF6634"/>
									<van-icon name="star-o" v-show="!item.user" />
									<text>{{ item.collection }}</text>
								</view>
							</view>

							<view class="price">
								<text>￥</text> {{ item.price }}
							</view>
						</view>

					</view>

				</view>



				<view class="wire" v-if="SchoolGoods.length >1"></view>

				<view class="store_course_more" v-if="SchoolGoods.length >1">
					<text>更多6个列表</text>
					<van-icon name="arrow" />
				</view>

			</view>

			<view class="segmentation" style="height: 20rpx;"></view>

			<view class="store_teachers" v-if="SchoolTeacher.length">

				<view class="title" @click="go_teachers">
					<view class="left">
						组织成员<text>（{{ SchoolTeacher.length }}）</text>
					</view>
					<view class="right">
						<van-icon name="arrow" />
					</view>
				</view>

				<view class="listBox">

					<view class="list" v-for="(item,index) in SchoolTeacher " :key="index">
						<image :src="item.img" style="width: 160rpx;height: 160rpx;border-radius: 50%;"></image>
						<view class="name">
							{{ item.name }}
						</view>
						<view class="type" v-show="item.major">
							{{ item.major }}
						</view>
						<view class="years" v-show="item.year">
							{{ item.year }}年资质
						</view>
					</view>

				</view>

			</view>

			<view class="segmentation" style="height: 20rpx;position: relative;" v-if=" userType != 'ordinary' ">
				<view class="customerInput">
					客户录入
				</view>
			</view>

			<view class="store_evaluate">

				<view class="title" >
					<view class="left">
						<view v-if="schoolComment.list.length">
							精选评论 <text>( {{ schoolComment.list.length }} 条)</text> 
						</view>
						<view v-else>
							暂无评论
						</view>
					</view>

					<view class="right" v-show="schoolComment.length">
						<van-icon name="arrow" />
					</view>
				</view>

				<!-- <view class="typeBox" v-show="schoolComment.list.length">
					<view class="type" v-for="(item,index) in evaluateList" :key="index">
						{{item.content}}
					</view>
				</view> -->

				<view class="listBox" v-for="(item,index) in schoolComment.list" :key="index">

					<view class="head">
						<image :src="item.icon" style="width: 74rpx;height: 74rpx;border-radius: 50%;"></image>
						<!-- <image src="/static/images/vip_logo.png" class="vip_logo"></image> -->
					</view>

					<view class="content">
						<view class="title">
							<text>{{ item.name }}</text>
							<!-- <text>Lv4</text> -->
						</view>

						<view class="time">
							{{ item.create }}
						</view>

						<!-- <view class="remarkBox">
							<view class="remark">
								消费后评分
							</view>
						</view> -->

						<!-- <view class="grade">
							<text>打分</text>
							<van-rate void-icon="smile" value="4.5" size="12" allow-half="true" color="#D81E06" void-color="#eee" />
						</view> -->

						<view class="describe">
							{{ item.content }}
						</view>

						<view class="imgListBox">
							<view class="imgList" v-for="(items,indexs) in item.img" :key="indexs">
								<image :src="items" style="width: 200rpx;height: 200rpx;border-radius: 4rpx;"></image>
							</view>

							<view class="imgNumberBox">
								<image src="../../static/images/imglogo_fff.png" style="width: 21rpx;height: 17rpx;"></image>
								<text>{{ item.img.length }}</text>
							</view>
						</view>
					</view>

				</view>

				<view class="lookMore" @click="go_comment">
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
					<view class="share_boxTop_left"  style="position: relative;">
						<button open-type="share" @click="shareFriend" style="width: 100%;height: 60rpx;position: absolute;top: 110rpx;left: 0;z-index: 300;user-select: none;background-color: transparent;border: none;"></button>
						<image src="/static/images/friends.png" style="width: 100rpx;height: 100rpx;margin-bottom: 20rpx;position: relative;left: 50%;transform: translateX(-50%);"></image>
						<text style="padding: 0rpx 10rpx ;">分享给好友</text>
					</view>
					<view class="share_boxTop_right" style="position: relative;">
						<button @click="posterShow_true" style="width: 100%;height: 60rpx;position: absolute;top: 110rpx;left: 0;z-index: 300;user-select: none;background-color: transparent;border: none;"></button>
						<image src="/static/images/poster.png" style="width: 100rpx;height: 100rpx;margin-bottom: 20rpx;position: relative;left: 50%;transform: translateX(-50%);"></image>
						<text style="padding: 0rpx 10rpx ;">生成海报</text>
					</view>
				</view>
				<view class="share_boxBottom" @click=" shareShow = false ">
					取消
				</view>
			</view>
		</van-popup>


		<!-- 生成海报弹框 -->
		<van-popup :show="posterShow" closeable close-icon="close" position="bottom" duration="300" custom-style="height: 726rpx" bind:close="posterShowfalse">
			<view class="poster_box">

				<view class="poster_box_title" @click="posterShow_false">
					生成海报
				</view>

				<view class="poster_box_img">
					<image :src="schooldetail.cover" style="width: 100%;height: 100%;"></image>
				</view>

				<view class="poster_box_main">
					<view class="poster_box_mainLeft">
						<view class="poster_box_mainLeft_top">
							{{ schooldetail.name }}
						</view>
						<!-- <view class="poster_box_mainLeft_mid">
							<van-rate value="4" size="16" allow-half color="#FF6634" void-color="#999999" void-icon="star" readonly />
							<text style="font-size: 24rpx;color: #FF6634;margin-left: 5rpx;">4分</text>
						</view> -->
						<view class="poster_box_mainLeft_bottom">
							{{ schooldetail.addr }}
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


		<!-- 地图弹框 -->
		<van-popup :show="siteShow" @close="siteShowFalse" round closeable close-icon="close">
			
			<view class="mapBox">
			<map style="width: 500rpx; height: 500rpx;" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
			</view>
			
		</van-popup>


		<view class="segmentation" style="height: 4rpx;"></view>

		<view class="store_bottom">
			<view class="store_bottom_left" @click="callPhone">
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
	import isCode from '../../verify/isCode.js'
	import Collection from '../../verify/Collection.js'
	import { showToast , hideToast } from '../../verify/loading.js'

	export default {
		data() {
			return {
				interval: 2000, //自动切换时间间隔
				duration: 500, //滑动动画时长
				videoList: [1, 2, 3, 4, 5, 6, 7],
				groupBuyList: [1, 2, 3],
				courseList: [1, 2, 3, 4],
				teacherList: [1, 2, 3, 4],
				evaluateList: [{
						id: 1,
						content: '体验课 (4)'
					},
					{
						id: 1,
						content: '老师超赞 (5)'
					},
					{
						id: 1,
						content: '环境很好 (6)'
					}
				],
				imgList: [1, 2, 3],
				shareShow: false,
				posterShow: false,
				schooldetail: [], //学校详情-接口数据
				SchoolVideo: [], //公开视屏-接口数据
				SchoolTeamBuy: [], //公开视屏-接口数据
				SchoolGoods: [], //商品列表-接口数据
				SchoolTeacher: [], //名师风采-接口数据
				schoolComment : [], //学校评论-接口数据
				sid: 0 , //商家id
				isCollect: false,//学校是否收藏
				userType: '',
				latitude: 0,
				longitude:0,
				markers:[{
					 latitude: 0,
					 longitude: 0,
					 iconPath: '/static/images/ICON/location.png'
				}],
				siteShow: false ,
			}
		},
		methods: {
			//关闭地图弹框
			siteShowFalse() {
				this.siteShow = false
			},
			//开启地图弹框
			siteShowTrue() {
				this.siteShow = true
				
				showToast('加载中...')
				this.latitude = this.schooldetail.lat
				this.longitude = this.schooldetail.lng
				this.markers[0].latitude = this.schooldetail.lat
				this.markers[0].longitude = this.schooldetail.lng
				hideToast()
			},
			shareFriend() {
				let _this = this
				
				console.log( '触发分享' )
				
				uni.share({
				    provider: 'weixin',
				    scene: "WXSceneSession",
				    type: 5,
				    imageUrl: _this.schooldetail.cover,
				    title: _this.schooldetail.name,
				    miniProgram: {
				        id: 'gh_abcdefg',
				        path: 'pages/index/index',
				        type: 0,
				        webUrl: ''
				    },
				    success: ret => {
				        console.log(JSON.stringify(ret));
				    }
				});
			},
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
					url: '/pagesA/complaint/complaint?sid=' + this.sid
				})
			},
			go_course(gid) {//去课程详情
				uni.navigateTo({
					url: '/pagesA/course/course?gid=' + gid
				})
			},
			go_groupPurchase(gid) {//去团购详情
				uni.navigateTo({
					url: '/pagesA/groupPurchase/groupPurchase?gid=' + gid
				})
			},
			go_appoint() {//去预约
				uni.navigateTo({
					url: '/pagesA/appoint/appoint?sid=' + this.sid
				})
			},
			go_teachers() {
				uni.navigateTo({
					url: '/pagesA/teachers/teachers?sid=' + this.sid
				})
			},
			go_comment() {
				uni.navigateTo({
					url: '/pagesA/comment/comment?sid=' + this.sid
				})
			},
			//拨打电话
			callPhone() {
				uni.makePhoneCall({
				    phoneNumber: this.schooldetail.phone 
				});
			},
			//学校收藏
			collect() {
				let _this = this
				
				if( !this.isCollect ){
					uni.getStorage({
						key:'token',
						success:res => {
							Collection( this.sid , 'school' , res.data )
							
							_this.isCollect = true
						}
					})
				}else{
					uni.getStorage({
						key:'token',
						success:res => {
							Collection( this.sid , 'school' , res.data )
							
							_this.isCollect = false
						}
					})
				}
				
			},
			//团购收藏
			TeamBuyIsCollect(id) {
				let _this = this
				
					uni.getStorage({
						key:'token',
						success:res => {
							Collection( id , 'goods ' , res.data )
							
							_this.getSchoolTeamBuy()
						}
					})

			},
			//课程收藏
			goodsIsCollect(id) {
				let _this = this
				
					uni.getStorage({
						key:'token',
						success:res => {
							Collection( id , 'goods ' , res.data )
							
							_this.getSchoolGoods()
						}
					})
			},
			//团购列表
			getSchoolTeamBuy () {
				let _this = this
				
				uni.getStorage({
					key: 'token',
					success: res => {
						uni.request({
							url: this.apiServer + 'api/school/SchoolTeamBuy',
							data: {
								sid: this.sid
							},
							header: {
								'token': res.data,
							},
							method: 'POST',
							success(res) {
								console.log( '团购' )
								console.log( res.data)
								isCode( res.data.code)
								
								
								_this.SchoolTeamBuy =  res.data.data.goods.map( (item,index) => {
									
									item.newPrice = (Number(item.price) * Number(item.reduction)).toFixed(2)
									item.deratePri = (Number(item.price) * ((10 - Number(item.reduction))/10) ).toFixed(2)
									
									return item
								} )
								
								console.log( _this.SchoolTeamBuy )
								console.log( _this.SchoolTeamBuy.length )
							}
						})
					}
				})
			},
			//商品列表(课程)
			getSchoolGoods() {
				let _this = this
				
				uni.getStorage({
					key: 'token',
					success: res => {
						uni.request({
							url: this.apiServer + 'api/school/SchoolGoods',
							data: {
								sid: this.sid
							},
							header: {
								'token': res.data,
							},
							method: 'POST',
							success(res) {
								console.log( '商品列表(课程)' )
								console.log( res.data)
								isCode( res.data.code)
				
								_this.SchoolGoods = res.data.data.goods
								console.log(  _this.SchoolGoods )
								console.log(  _this.SchoolGoods.length )
							}
						})
					}
				})
						
			},
			//名师风采
			getSchoolTeacher () {
				let _this = this
				
				uni.getStorage({
					key: 'token',
					success: res => {
						uni.request({
							url: this.apiServer + 'api/school/SchoolTeacher',
							data: {
								sid: this.sid
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
					}
				})
			},
			//
			
		},
		onLoad: function(option) {
			this.sid = option.sid
			console.log(option.sid)
			let _this = this
			
			showToast('加载中...')
			
			//学校详情
			uni.getStorage({
				key: 'token',
				success: res => {
					uni.request({
						url: this.apiServer + 'api/school/schooldetail',
						data: {
							sid: option.sid
						},
						header: {
							'token': res.data,
						},
						method: 'POST',
						success(res) {
							console.log(res.data)
							isCode(res.data.code)

							_this.schooldetail = res.data.data
							console.log(  _this.schooldetail )
						}
					})
				}
			})

			//公开视频
			uni.getStorage({
				key: 'token',
				success: res => {
					uni.request({
						url: this.apiServer + 'api/school/SchoolVideo',
						data: {
							sid: option.sid
						},
						header: {
							'token': res.data,
						},
						method: 'POST',
						success(res) {
							console.log(res.data)
							isCode(res.data.code)
			
							_this.SchoolVideo = res.data.data
							console.log( _this.SchoolVideo )
						}
					})
				}
			})
			
			//团购
			this.getSchoolTeamBuy()
			
			//商品列表(课程)
			this.getSchoolGoods()
			
			//名师风采
			this.getSchoolTeacher()
			
			//学校评论
			uni.getStorage({
				key: 'token',
				success: res => {
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
			
							_this.schoolComment  = res.data.data
							console.log(  _this.schoolComment  )
						}
					})
				}
			})
			
			//用户类型
			uni.getStorage({
				key:'userType',
				success:res => {
					_this.userType = res.data
				}
			})
			
			hideToast()
		}
	}
</script>

<style lang="less">
	@import url("./style/store.less");
</style>
