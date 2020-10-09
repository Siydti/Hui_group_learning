<template>
	<view class="course">
		<view class="course_main">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<!-- <swiper class="swiper" autoplay="true" interval="2000" duration="300" style="height: 400rpx;">
							<swiper-item>
								<view class="swiper-item uni-bg-red">
									<image :src="goodsdetail.goods.cover" style="width: 100%;height: 400rpx;"></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">
									<image src="/static/images/-e-banner.png" style="width: 100%;height: 400rpx;"></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">
									<image src="/static/images/-e-banner.png" style="width: 100%;height: 400rpx;"></image>
								</view>
							</swiper-item>
						</swiper> -->
						
						<image :src="goods.cover" style="width: 100%;height: 400rpx;"></image>
					</view>
				</view>
			</view>


			<view class="course_title">
				<view class="main">
					<view class="title">
						{{ goods.title }}
					</view>
					<view class="price">
						<text>￥</text> {{ goods.newPrice }} <text style="text-decoration: line-through;margin-left: 8rpx;">￥{{ goods.price }}</text>
					</view>
				</view>

				<view class="share" @click="shareFriend">
					<image src="/static/images/groupPurchase_share.png" style="width: 31rpx;height: 34rpx;margin-bottom: 10rpx;"></image>
					<text>分享</text>
					
					<view class="hit_box">
						<image src="/static/images/share_hit.png" style="width: 200rpx;height: 55rpx;"></image>
						<view>点击这里分享给朋友</view>
					</view>
				</view>
			</view>


			<view class="course_type">
				<view>
					<image src="/static/images/crowd.png" style="width: 36rpx;height: 36rpx;"></image>
					<view class="top">适合人群</view>
					<view class="bottom">{{ goods.crowd }}</view>
				</view>
				
				<view>
					<image src="/static/images/blackboard.png" style="width: 36rpx;height: 36rpx;"></image>
					<view class="top">适合基础</view>
					<view class="bottom">{{ goods.basics }}</view>
				</view>
				
				<view>
					<image src="/static/images/lookbook.png" style="width: 36rpx;height: 36rpx;"></image>
					<view class="top">上课人数</view>
					<view class="bottom">{{ goods.person }}</view>
				</view>
			</view>


			<view class="classMsg">
				
				<view class="title">
					班级信息 <text>(1)</text>
				</view>
				
				<view class="main">
					
					<view class="title">
						<text style="color: #000;font-size: 26rpx;font-weight: bold;">{{ goods.title }}</text>
						<text style="color: #999999;font-size: 20rpx;font-weight: normal;">{{ goods.allTime }}小时</text>
					</view>
					
					<view class="msgTitle">
						班级详情
					</view>
					
					<view class="listBox">
						
						<view class="list" v-for="(item,index) in goods.information" :key="index">
							<view class="left">
								{{item.name}}
							</view>
							<view class="mid">
								{{item.time}}
							</view>
							<view class="right">
								￥{{item.price}}
							</view>
						</view>
						
					</view>
					
					<view class="allPrice_old">
						<view class="left">
							总价：
						</view>
						<view class="right">
							￥{{ goods.price }}
						</view>
					</view>
					
					<view class="allPrice_now">
						<view class="left">
							售价：
						</view>
						<view class="right">
							￥{{ goods.newPrice }}
						</view>
					</view>
					
					<view class="classTime">
						上课时间：{{ goods.term }}
					</view>
					
					<view class="hit_top">
						{{ goods.subscribe }}
					</view>
					
					<view class="hit_top">
						{{ goods.course }}
					</view>
					
					<view class="hit_bottom">
						{{ goods.remark }}
					</view>
					
				</view>
				
			</view>


			<view class="fitMerchant">
				
				<view class="title">
					适用商户
				</view>
				
				<view class="main">
					
					<view class="left">
						<text>{{ shops.name }}</text>
					<!-- <van-rate v-model="3.5" size="30rpx" allow-half void-icon="star" readonly color="#ff6634" void-color="#dddddd" /> -->
					</view>
										
					<view class="right" @click="callPhone">
						<image src="/static/images/store_phone.png" style="width: 30rpx;height: 36rpx;"></image>
					</view>
					
				</view>
				
				<view class="site" @click="siteShowTrue">
					<van-icon name="location" size="27rpx" color="#bbbbbb" />
					<text style="margin-left: 20rpx;">{{ shops.addr }}</text>
				</view>
				
			</view>


			<van-tabs :active="active" color="#ec6b3d" >
			  <van-tab title="课程详情">
				  </van-tab>
				    <van-tab title="购买说明"></van-tab>
				    <van-tab title="网友点评"></van-tab>
				  </van-tabs>
				<view class="classDetails">
				  	<view class="top_title">
				  		适用对象
				  	</view>
				  	<view class="top_main" >
				  		<view class="left"></view>
				  						<view class="mid">
				  							{{ goods.apply }}
				  						</view>
				  	</view>
				
					<view class="bottom_title">
						学习目标
					</view>
					
					<view class="bottom_main">
						{{ goods.target }}
					</view>
					
				</view>

			
			
			<view class="trait">
				
				<view class="title">
					课程特色
				</view>
				
				<view class="main">
					{{ goods.characteristic }}
				</view>
				
			</view>
			
			
			<view class="explain">
				<view class="title">
					购买说明： 
				</view>
				
				<view class="time">
					<view class="left">
						有效期： 
					</view>
					<view class="right">
						{{ goods.term }}
					</view>
				</view>
				
				<view class="main" >
					<view class="left">
						预约说明
					</view>
					<view class="right">
						{{ goods.subscribe }}
					</view>
				</view>
				
				<view class="main" >
					<view class="left">
						调课说明
					</view>
					<view class="right">
						{{ goods.course }}
					</view>
				</view>
				
				<view class="main" >
					<view class="left">
						其他说明
					</view>
					<view class="right">
						{{ goods.remark }}
					</view>
				</view>
				
				
			</view>
			
			<view class="comment" v-if="GoodsComment.length">
				
				<view class="title">
					网友点评 ({{ GoodsComment.length }})
				</view>
				
				<view class="list" v-for="(item,index) in GoodsComment" :key="index">
					
					<view class="head">
						<image :src="item.img" style="width: 96rpx;height: 96rpx;border-radius: 50%;"></image>
					</view>
					
					<view class="content">
						
						<view class="name">
							{{ item.name }}
						</view>
						
						<!-- <view class="score">
							<text>打分</text>
							<van-rate v-model="3.5" size="22rpx" allow-half void-icon="star" readonly color="#d81e06" void-color="#dddddd" />
						</view> -->
						
						<view class="main">
							{{ item.content }}
						</view>
						
					</view>
					
				</view>
				
			</view>
			 
			
			
		</view>
 
		<!-- 地图弹框 -->
				<van-popup :show="siteShow" @close="siteShowFalse" round closeable close-icon="close">
					
					<view class="mapBox" style="padding: 50rpx;">
					<map style="width: 500rpx; height: 500rpx;" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
					</view>
					
				</van-popup>
				

		<view class="course_bottom">
			<view class="course_bottom_left">
				<image src="/static/images/ICON/phone.png" style="width: 32rpx;height: 32rpx;"></image><text>电话</text>
			</view>
			<view class="course_bottom_main" style="background-color: #FF6634;font-size: 35rpx;" @click="go_appoint">
				预约试听
			</view>
			<view class="course_bottom_main" style="background-color: #48B4B8;" @click="pay(1)">
				<text style="font-size: 24rpx;margin-bottom: 5rpx;">￥{{ goods.newPrice }}</text>
				<text style="font-size: 26rpx;">立即购买</text>
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
				classList:[
					{title:'正课',num:'40',price:'40000'},
					{title:'辅导',num:'40',price:'16000'},
					{title:'全真模考',num:'2',price:'3000'},
					{title:'晨读',num:'27',price:'0'},
					{title:'自习',num:'46',price:'0'}
				],
				 active: 0,
				 tabTopList:[
					 {content:'托福50分到80分段的学生'},
					 {content:'申请国际高中需要托福成绩的学员'},
					 {content:'有一定英语基础，无针对考试系统学习的学员'}
				 ],
				 explainList:[
					{left:'预约信息',right:'无需预约'}, 
					{left:'调课说明',right:'非特殊情况不可调课'}, 
					{left:'其它说明',right:'更多详情请联系客服，获得学管老师一对一咨询服务。'} 
				 ],
				 commentList:[1,2,3],
				 gid : 0,
				 goods : [],//商品详情—接口数据
				 shops : [],//团购详情-接口数据
				 GoodsComment : [],//评论
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
			//关闭地图弹框
			siteShowFalse() {
				this.siteShow = false
			},
			//开启地图弹框
			siteShowTrue() {
				console.log( 111 )
				this.siteShow = true
				
				showToast()
				this.latitude = this.shops.lat
				this.longitude = this.shops.lng
				this.markers[0].latitude = this.shops.lat
				this.markers[0].longitude = this.shops.lng
				hideToast()
			},
			//拨打电话
			callPhone() {
				uni.makePhoneCall({
				    phoneNumber: this.shops.phone 
				});
			},
			go_appoint() {
				uni.navigateTo({
					url: '/pagesA/appoint/appoint'
				})
			},
			go_payment() {
				uni.navigateTo({
					url: '/pagesA/payment/payment'
				})
			},
			//商品详情/团购详情
			getSchoolTeamBuy () {
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
								console.log( '商品详情/团购详情' )
								console.log( res.data)
								isCode( res.data.code)								
								
								res.data.data.goods.newPrice = (Number( res.data.data.goods.price ) - (Number( res.data.data.goods.reduction ) / 10)).toFixed(2)
								
								let num = 0
								res.data.data.goods.information.forEach( item => {
									
									console.log( Number( item.time ) + num )
									num = Number( item.time ) + num
								
								} )
								res.data.data.goods.allTime = num
								
								_this.shops = res.data.data.shop
								_this.goods = res.data.data.goods
								
								console.log( _this.shops )
								console.log( _this.goods )
							}
						})
					}
				})
			},
			//获取评论
			getGoodsComment() {
				let _this = this
				
				uni.getStorage({
					key:'token',
					success: res => {
						uni.request({
							url: this.apiServer + 'api/goods/GoodsComment',
							data: {
								gid: _this.gid
							},
							header: {
								'token': res.data,
							},
							method: 'POST',
							success: res => {
								console.log( '获取评论' )
								console.log( res.data )
								
								isCode( res.data.code )
								
								_this.GoodsComment = res.data.data.list
							}
						})
					}
				})
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
			
		},
		onLoad( option ) {
			this.gid = option.gid
			
			showToast()
			//商品详情/团购详情
			this.getSchoolTeamBuy()
			
			//获取评论
			this.getGoodsComment()
			
			hideToast()
		} 
	}
</script>

<style>
	@import url("./style/course.css");
</style>
