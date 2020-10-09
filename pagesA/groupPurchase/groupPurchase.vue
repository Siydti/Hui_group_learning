<template>
	<view class="groupPurchase">

		<scroll-view scroll-y='true' :scroll-top="scrollTop" :scroll-into-view="SkipSite" class="groupPurchase_main" style="flex: 1;overflow-y: scroll;">


			<view class="groupPurchase_banner">
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
				</swiper> -->

				<image :src="goods.cover" style="width: 700rpx;height: 400rpx;border-radius: 20rpx;margin-left: 25rpx;"></image>
			</view>

			<view class="groupPurchase_title">
				<view class="groupPurchase_title_left">
					<view class="groupPurchase_title_leftTop">
						{{ goods.title }}
					</view>
					<view class="groupPurchase_title_leftBottom">
						<text style="color: #EC7044;font-size: 20rpx;">￥</text>
						<text style="color: #EC7044;font-size: 30rpx;margin-right: 20rpx;">{{ goods.newPrice }}</text>
						<text style="font-size: 18rpx;color:#969696;">￥</text>
						<text style="font-size: 18rpx;color:#969696;text-decoration: line-through;">{{ goods.price }}</text>
					</view>
				</view>
				<view class="groupPurchase_title_right" @click="shareFriend">
					<image src="/static/images/groupPurchase_share.png" style="width: 31rpx;height: 34rpx;margin-bottom: 10rpx;"></image><text>分享</text>
				</view>
			</view>

			<view class="groupPurchase_state">

				<view class="groupPurchase_state_title">
					{{ teambuy.length }}人在拼团，{{ teambuy.length ? '可直接参与' : '等你开团' }}
				</view>

				<view class="groupPurchase_state_main" v-for="(item,index) in teambuy" :key="index">
					<view class="groupPurchase_state_mainLeft">
						<image :src="item.icon" style="width: 60rpx;height: 60rpx;border-radius: 50%;margin-right: 10rpx;"></image>
						<text>{{item.nickname}}</text>
					</view>
					<view class="groupPurchase_state_mainMid">
						<view class="groupPurchase_state_mainMid_top">
							还差 <text>1人</text> 拼成
						</view>
						<view class="groupPurchase_state_mainMid_bottom">
							<text> {{ item.expire }} 结束</text>
						</view>
					</view>
					<view class="groupPurchase_state_mainRight" @click="joinShow_true( item.tid , index )">
						去拼团
					</view>
				</view>

			</view>


			<van-tabs color="#ec6b3d">
				<view @click="go_skip(Skipgroup)"><van-tab title="团购详情"></van-tab></view>
				<view @click="go_skip(Skippurchase)"><van-tab title="购买须知"></van-tab></view>
				<view @click="go_skip(Skipremark)"><van-tab title="网友点评"></van-tab></view>
			</van-tabs>
			
				
			<!-- <scroll-view scroll-y="false" :scroll-into-view="SkipSite" style="height: 100%;" >
			</scroll-view> -->
			
			<view class="particulars" id="Skipgroup">

				<view class="title">
						<view class="left">
							{{ goods.title }}
						</view>
						<!-- <view class="right">
							1份 <text>丨</text> 1998 元
						</view> -->
					</view>

				<view class="main">

					<view v-for="(item,index) in goods.information" :key="index">

						<view class="subjects">
							<view class="title">
								科目
							</view>
							<view class="content">
								{{ item.name }}
							</view>
						</view>

						<view class="period">
							<view class="title">
								课时
							</view>
							<view class="content">
								{{ item.time }}
							</view>
						</view>

					</view>

					<view class="oldPrice">
						<view class="title">
							总价
						</view>
						<view class="content" style="color: #595959;font-size: 26rpx;">
							{{ goods.price }}元
						</view>
					</view>

					<view class="activePrice">
						<view class="title">
							团购价
						</view>
						<view class="content" style="color: #ec6b3d;font-size: 34rpx;">
							{{ goods.newPrice }}元
						</view>
					</view>
				</view>

			</view>

			<view class="inform_top">

				<view class="list">
					<view class="title">
						目标学历
					</view>
					<view class="content">
						{{ goods.target }}
					</view>
				</view>

				<view class="list">
					<view class="title">
						适合阶段
					</view>
					<view class="content">
						{{ goods.basics }}
					</view>
				</view>

				<view class="list">
					<view class="title">
						班型
					</view>
					<view class="content">
						{{goods.person}}
					</view>
				</view>

			</view>

			<view class="inform_title" id="Skippurchase">
				<view class="content">
					<text>购买须知</text>
					<van-icon name="volume-o" />
				</view>
			</view>

			<view :class="{ 'inform_bottom' : 'inform_bottom' , 'isLook' : isLook }">

				<view class="list">
					<view class="title">
						适用人群
					</view>
					<view class="content">
						·{{ goods.crowd }}
					</view>
				</view>



				<view class="list">
					<view class="title">
						上课人数
					</view>
					<view class="content">
						·{{ goods.person }}
					</view>
				</view>

				<view class="list">
					<view class="title">
						适用对象
					</view>
					<view class="content">
						·{{ goods.apply }}
					</view>
				</view>



				<view class="list">
					<view class="title">
						课程特色
					</view>
					<view class="content">
						·{{ goods.characteristic }}
					</view>
				</view>

				<view class="list">
					<view class="title">
						有效期

					</view>
					<view class="content">
						·{{ goods.term }}
					</view>
				</view>

				<view class="list">
					<view class="title">
						预约
					</view>
					<view class="content">
						·{{ goods.subscribe }}
					</view>
				</view>

				<view class="list">
					<view class="title">
						调课说明
					</view>
					<view class="content">
						·{{ goods.course }}
					</view>
				</view>

				<view class="list">
					<view class="title">
						其他说明
					</view>
					<view class="content">
						·{{ goods.remark }}
					</view>
				</view>

			</view>

			<view class="lookMore">

				<view class="content" @click="changeIsLook">
					<text>{{ isOpen }}</text>
					<van-icon name="arrow-down" v-show="isOpen == '展开'"></van-icon>
					<van-icon name="arrow-up" v-show="isOpen != '展开'" ></van-icon>
				</view>

			</view>

			<view class="shop">

				<view class="title">
					适用门店
				</view>

				<view class="main">
					<view class="left">
						{{ shops.name }}
					</view>
					<view class="right">
						<image src="/static/images/message.png" style="width: 35rpx;height: 30rpx;margin-right: 45rpx;" @click="callPhone"></image>
						<image src="/static/images/store_phone.png" style="width: 27rpx;height: 33rpx;margin-right: 17rpx;" @click="callPhone"></image>
					</view>
				</view>

				<!-- <view class="rate">评分
					<van-rate value="4.5" void-icon="star" color="#ff6634" void-color="#dddddd" readonly allow-half size="26rpx" />
				</view> -->

				<view class="site" @click="siteShowTrue">
					<van-icon name="location-o" />
					<text>{{ shops.addr }}</text>
				</view>

			</view>


			<view class="store_evaluate" v-if="GoodsComment.length" id="Skipremark">

				<view class="title" >
					<view class="left">
						精选点评 <text>({{GoodsComment.length}})</text>
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

				<view class="listBox" v-for="(item,index) in GoodsComment" :key="index">

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
						</view> -->

						<view class="describe">
							{{item.content}}
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

				<view class="lookMore">
					<text>查看全部精选点评</text>
					<van-icon name="arrow" />
				</view>

			</view>

			

			<!-- 拼团弹框 -->
			<van-popup :show="joinShow" @close="joinShow_flase">

				<view class="groupPurchase_joinBox">

					<view class="join_cross">
						<van-icon name="cross" @click="joinShow_flase" />
					</view>

					<view class="join_title">
						参与{{ nowteambuy.nickname }}的拼团
					</view>

					<view class="join_hint">
						仅剩1个名额，{{ nowteambuy.expire }}结束
					</view>

					<view class="join_listBox">

						<view class="join_list" v-for="(item,index) in TeamBuyView.list" :key="index">
							<image :src="item.icon" style="width: 80rpx;height: 80rpx;border-radius: 50%;" :class="{ 'join_listLeader' : item.id == 1  }"></image>
						</view>

					</view>

					<view class="join_btn" @click="go_groupSuccess">
						参与拼团
					</view>

				</view>

			</van-popup>


			<!-- 下单弹框 -->
			<van-popup :show="orderShow" position="bottom" custom-style="height: 765rpx;" @close="orderShow_false">

				<view class="order_box">

					<view class="order_head">
						<view class="head_left">
							<image src="/static/images/order_head.png" style="width: 200rpx;height: 200rpx;border-radius: 5rpx;"></image>
						</view>

						<view class="head_right">
							<view class="top">
								<text>￥</text> {{ (checkPrice * checkNum) ? (checkPrice * checkNum) : '请选择商品' }}
							</view>
							<view class="bottom">
								请选择：组合
							</view>
						</view>
					</view>

					<view class="order_type">
						<view class="order_type_title">
							组合
						</view>
						<view class="order_type_listBox" >
							<text :class="{'order_type_list' : 'order_type_list' , 'colorFF6634' : index == activeCheck}" @click="checkPri(index)" v-for="(item,index) in goods.information" :key="index">
								{{ item.name }}
							</text>

						</view>
					</view>

					<view class="order_number">
						<view class="number_left">
							节数
						</view>
						<view class="number_right">
							<van-stepper :value="checkNum" @plus="checkNumFun(1)"  @minus="checkNumFun(-1)" integer button-size="50rpx" input-width="75rpx" />
						</view>
					</view>

					<view class="order_btn" @click="alonePay">
						确定
					</view>

				</view>

			</van-popup>

			<!-- 地图弹框 -->
					<van-popup :show="siteShow" @close="siteShowFalse" round closeable close-icon="close">
						
						<view class="mapBox" style="padding: 50rpx;">
						<map style="width: 500rpx; height: 500rpx;" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
						</view>
						
					</van-popup>

			</scroll-view>

		<view class="groupPurchase_bottom">
			<view class="groupPurchase_bottom_phone">
				<image src="/static/images/ICON/phone.png" style="width: 30rpx;height: 32rpx;margin-bottom: 10rpx;"></image>
				<text>电话</text>
			</view>
			<view class="groupPurchase_bottom_try">
				预约试听
			</view>
			<view class="groupPurchase_bottom_alonePay" @click="orderShow_true">
				<view class="top">
					￥888.8
				</view>
				<view class="bottom">
					单独购买
				</view>
			</view>
			<view class="groupPurchase_bottom_togetherPay" @click="go_payment">
				<view class="top">
					￥88.8
				</view>
				<view class="bottom">
					发起拼团
				</view>
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
				interval: 2000, //自动切换时间间隔
				duration: 500, //滑动动画时长
				joinShow: false, //参加拼团弹框
				joinList: [{
						id: 1,
						imgurl: '/static/images/join_heard.png'
					},
					{
						id: 2,
						imgurl: '/static/images/join_heard.png'
					},
					{
						id: 3,
						imgurl: '/static/images/join_heard.png'
					},
					{
						id: 4,
						imgurl: '/static/images/join_heard.png'
					},
					{
						id: 5,
						imgurl: ''
					}
				],
				orderShow: false, //下单弹框
				courseList: [1, 2, 3, 4],
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
				goods: [], //详情-接口数据
				shops: [], //详情-接口数据
				teambuy: [], //详情-接口数据
				gid: 0,
				isLook: true, //是否关闭展开
				GoodsComment: [], //评论-接口数据
				TeamBuyView: [], //团购人员-接口数据
				latitude: 0,
				longitude:0,
				markers:[{
					 latitude: 0,
					 longitude: 0,
					 iconPath: '/static/images/ICON/location.png'
				}],
				siteShow: false ,
				SkipSite: '',
				nowteambuy:{},
				checkNum: 1,
				checkPrice: 0,
				activeCheck: -1,
				isOpen: '展开',
			}
		},
		methods: {
			shareFriend() {
				let _this = this
				
				console.log( '触发分享' )
				
				uni.share({
				    provider: 'weixin',
				    scene: "WXSceneSession",
				    type: 5,
				    imageUrl: _this.shops.cover,
				    title: _this.shops.title,
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
			//单独购买
			alonePay() {
				//调用支付
				this.pay( this.checkNum )
			},
			//改变选中商品数量
			checkNumFun(num) {
				this.checkNum += num
			},
			//改变选中商品价格
			checkPri( index ) {
				this.activeCheck = index
				this.checkPrice = Number(this.goods.information[index].price)
			},
			//锚点跳
			go_skip( e ) {
				console.log( '进入跳锚点' )
				console.log( e )
				this.SkipSite = e.target.dataset.hash

			},
			//关闭地图弹框
			siteShowFalse() {
				this.siteShow = false
			},
			//开启地图弹框
			siteShowTrue() {
				this.siteShow = true
				
				showToast()
				this.latitude = this.shops.lat
				this.longitude = this.shops.lng
				this.markers[0].latitude = this.shops.lat
				this.markers[0].longitude = this.shops.lng
				hideToast()
			},
			//支付
			pay( num ) {
				let _this = this

				if( this.activeCheck == -1 ) return false

				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log('支付功能')

						console.log(loginRes);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(infoRes);

								//商品下单
								uni.getStorage({
									key: 'token',
									success: res => {
										uni.request({
											url: _this.apiServer + 'api/goods/GoodsPay',
											data: {
												gid: _this.gid,
												num: num,
											},
											header: {
												'token': res.data,
											},
											method: 'POST',
											success: res => {
												console.log('调用下单')
												console.log(res.data)

												isCode(res.data.code)
												
												//发起支付
												uni.requestPayment({
												    provider: 'wxpay',
												    timeStamp: res.data.data.timeStamp,
												    nonceStr: res.data.data.nonceStr,
												    package: res.data.data.package,
												    signType: res.data.data.signType,
												    paySign: res.data.data.paySign,
												    success: function (res) {
												        console.log('success:' + JSON.stringify(res));
												    },
												    fail: function (err) {
												        console.log('fail:' + JSON.stringify(err));
												    }
												});
											}
										})
									}
								});
							}
						});
					},
				});
			},
			//拨打电话
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: this.shops.phone
				});
			},
			changeIsLook() {
				this.isLook = !this.isLook
				
				if( this.isOpen == '展开' ) {
					this.isOpen = '关闭'
				}else {
					this.isOpen = '展开'
				}
			},
			go_payment() {
				console.log(11)
				uni.redirectTo({
					url: '/pagesA/payment/payment?gid='+this.gid
				});
			},
			joinShow_flase() {
				this.joinShow = false
			},
			joinShow_true(tid,index) {
				this.joinShow = true

				//商品详情/团购详情
				this.getTeamBuyView(tid)
				
				//设置弹框内容
				this.nowteambuy = this.teambuy[index]
			},
			orderShow_false() {
				this.orderShow = false
			},
			orderShow_true() {
				this.orderShow = true
			},
			go_customerInput() {
				uni.redirectTo({
					url: '/pagesA/customerInput/customerInput'
				});
			},
			//商品详情/团购详情
			getSchoolTeamBuy() {
				let _this = this

				uni.getStorage({
					key: 'token',
					success: res => {
						uni.request({
							url: this.apiServer + 'api/goods/goodsdetail',
							data: {
								gid: _this.gid
							},
							header: {
								'token': res.data,
							},
							method: 'POST',
							success(res) {
								console.log('商品详情/团购详情')
								console.log(res.data)
								isCode(res.data.code)

								res.data.data.goods.newPrice = (Number(res.data.data.goods.price) - (Number(res.data.data.goods.reduction) /
									10)).toFixed(2)


								_this.shops = res.data.data.shop
								_this.goods = res.data.data.goods
								_this.teambuy = res.data.data.teambuy

								console.log(_this.shops)
								console.log(_this.goods)
							}
						})
					}
				})
			},
			//团购人员详情
			getTeamBuyView(tid) {
				let _this = this

				uni.getStorage({
					key: 'token',
					success: res => {
						uni.request({
							url: this.apiServer + 'api/goods/TeamBuyView',
							data: {
								tid: tid,
								gid: _this.gid
							},
							header: {
								'token': res.data,
							},
							method: 'POST',
							success(res) {
								console.log('团购人员详情')
								console.log(res.data)
								isCode(res.data.code)

								_this.TeamBuyView = res.data.data
								console.log(_this.TeamBuyView)
							}
						})
					}
				})
			}
		},
		onLoad(option) {
			let _this = this
			this.gid = option.gid

			showToast()
			//商品详情/团购详情
			this.getSchoolTeamBuy()

			//获取评论
			uni.getStorage({
				key: 'token',
				success: res => {
					uni.request({
						url: this.apiServer + 'api/goods/GoodsComment ',
						data: {
							gid: _this.gid
						},
						header: {
							'token': res.data,
						},
						method: 'POST',
						success(res) {
							console.log('获取评论')
							console.log(res.data)
							isCode(res.data.code)

							_this.GoodsComment = res.data.data
							console.log(_this.GoodsComment)
						}
					})
				}
			})
			
			hideToast()
		}
	}
</script>

<style lang="less">
	@import url("./style/groupPurchase.css");
	
	.join_listBox{
		display: flex;
		justify-content: flex-start;
		width: 550rpx;
		
		.join_list{
			margin-right: 28rpx;
		}
		
	}	
	
	.colorFF6634{
		color: #ff6634;
	}
</style>
