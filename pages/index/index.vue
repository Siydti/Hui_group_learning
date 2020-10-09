<template>
	<view class="index">

		<view style="flex: 1;overflow-y: scroll;">
			<view class="index_title">
				<view class="index_titleLeft" @click=" loginShow = true ">
					<image :src="titleImg" style="width: 100%;height: 100%;border-radius: 50%;"></image>
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
						<swiper-item v-for="(item,index) in bannerImg" :key="index">
							<view class="swiper-item uni-bg-red">
								<image :src="item.content" style="width: 630rpx;height: 300rpx;border-radius: 20rpx;"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			
				<view style="background-color: #F2F2F2;height: 20rpx;width: 750rpx;"></view>
			
			
				<view class="index_mainType">
					<text class="index_type" v-for="(item,index) in typeList" :key="index">{{ item.type }}</text>
				</view>
			
				<view class="index_listBox" v-for="(item,index) in schoollist" :key="index">
			
					<!-- 上 -->
					<view class="index_list_top">
						<view class="index_list_top_left">
							<image :src=" item.cover ? item.cover : '../../static/images/21cfb8c7a77e4b0c0852894ac1f7293f%20拷贝%202.png'" style="width: 100%;height: 100%;"></image>
							<!-- <view class="index_list_top_leftActive">
								暑期大促
							</view>
							<view class="index_list_top_leftPlay">
								<image src="../../static/images/ICON/videoplay.png" style="width: 100%;height: 100%;"></image>
							</view> -->
						</view>
			
						<view class="index_list_top_mid" >
							<view class="index_list_top_midTitle" @click="go_store( item.sid )">
								{{ item.name ? item.name : '外言社日韩语培训学校' }} 
							</view>
							<view class="index_list_top_midNumBox">
								<!-- <van-rate :value="item.fracation" size="10" allow-half color="#d73427" void-color="#ddd" void-icon="star" readonly /> -->
								<text>{{item.comment}}条</text> <text>{{ item.subscribe }}人预约</text>
							</view>
							<view class="index_list_top_midType">
								<text class="sate" @click=" siteShowTrue(index) ">{{ item.addr }}</text>
								<text>日语</text>
								<image src="../../static/images/-e-hongbao%20(1).png" style="width: 22rpx;height: 28rpx;" v-show=" (item.money !== '0.00') && ( userType !== 'ordinary' ) " ></image>
								<text style="color: #000;" v-show=" (item.money !== '0.00') && ( userType !== 'ordinary' ) ">{{ item.money }}</text>
							</view>
							<view class="index_list_top_midRanking">
								<text>
									{{item.desc}}
								</text>
							</view>
						</view>
			
						<view class="index_list_top_right">
							<view class="index_list_top_rightTop"></view>
							<view class="index_list_top_rightBottom"> {{ item.distance }}km </view>
						</view>
					</view>
			
					<!-- 下 -->
					<view class="index_list_bottom">
			
						<view class="index_list_bottomLeft"></view>
						<view class="index_list_bottomRight">
							<view class="index_list_bottomRight_top">
								您最近偷偷「打探」过这家店哦~
							</view>
							<view class="index_list_bottomRight_mid" v-show=" item.teambuy ">
								<text class="index_list_bottomRight_active">团</text>
								<text>{{ item.teambuy }}</text>
							</view>
							<view class="index_list_bottomRight_bottom" v-show=" item.goods ">
								<text class="index_list_bottomRight_active">课</text>
								<text>{{ item.goods }}</text>
							</view>
						</view>
			
					</view>
			
				</view>
			
				
			</view>
			
		</view>

		<view class="tabbar">
			<view @click="changeTabbar(index)" v-for="( item,index ) in tabbar" :key="index" :class="{ 'changeTabbar' : index == activeTabbar }">
				<image :src="item.iconPath" v-show=" index !== activeTabbar "></image>
				<image :src="item.selectedIconPath" v-show=" index == activeTabbar "></image>
				<text>{{ item.text }}</text>
			</view>
		</view>
		
		<!-- 登录弹框 -->
		<van-popup :show="loginShow" position="bottom" @close="loginShowFlase" custom-style="height: 40%">

			<view>
				<view>
					<view class="content">
						<view>申请获取以下权限</view>
						<text>获得你的公开信息(昵称，头像、地区、该微信绑定的手机号等)</text>
					</view>
					<button class="bottom" type="primary" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo" >授权登录</button>
				</view>
			</view>

		</van-popup>

		<!-- 地图弹框 -->
		<van-popup :show="siteShow" @close="siteShowFalse" round closeable close-icon="close">
			
			<view class="mapBox">
			<map style="width: 500rpx; height: 500rpx;" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
			</view>
			
		</van-popup>

	</view>
</template>

<script>
	import codeVerify from '../../verify/codeVerify.js'
	import getUserType from '../../verify/getUserType.js'
	import { showToast , hideToast } from '../../verify/loading.js'

	export default {
		data() {
			return {
				titleImg: '',
				interval: 2000, //自动切换时间间隔
				duration: 500, //滑动动画时长
				typeList: [{
						type: '全部'
					},
					{
						type: '分类11'
					},
					{
						type: '分类22'
					},
					{
						type: '分类33'
					}
				],
				loginShow: false,
				userInfo: {},
				bannerImg:[
					{content: "../../static/images/index_banner.png"},
					{content: "../../static/images/index_banner.png"},
					{content: "../../static/images/index_banner.png"},
					{content: "../../static/images/index_banner.png"},
					{content: "../../static/images/index_banner.png"}
				],
				schoollist: [  ],//学校列表
				siteShow: false ,
				latitude: 0,
				longitude: 0, 
				markers:[{
					 latitude: 0,
					 longitude: 0,
					 iconPath: '/static/images/ICON/location.png'
				}],
				userType:'',//用户类型-接口数据
				tabbar:[
					{
						"iconPath": "/static/images/ICON/home_empty.png",
						"selectedIconPath": "/static/images/ICON/home_fill.png",
						"text": "首页"
					}, {
						"iconPath": "/static/images/ICON/order_empty.png",
						"selectedIconPath": "/static/images/ICON/order_fill.png",
						"text": "订单"
					}, {
						"iconPath": "/static/images/ICON/play_empty.png",
						"selectedIconPath": "/static/images/ICON/play_fill.png",
						"text": "视频"
					}, {
						"iconPath": "/static/images/ICON/me_empty.png",
						"selectedIconPath": "/static/images/ICON/me_fill.png",
						"text": "我的"
					}
				],
				activeTabbar: 0,
			}
		},
	 	onLoad() {
			let _this = this
			console.log( 1 )
			uni.getStorage({
				key:'loginState',
				success:res => {
					if( res.data != '已登录' ) {
						_this.loginShow = true
					}else{
						showToast('加载中...')
						
						//获取banner
						uni.getStorage({
							key:'token',
							success:res => {
								_this.getbanner( res.data )
							}
						})
						
						//默认页面
						uni.getStorage({
							key:'token',
							success:res => {
								_this.getIndex( res.data )
							}
						})
						
						uni.getStorage({
							key:'userType',
							success: res => {
								_this.userType = res.data
							}
						})
						
						hideToast()
					}
				},
				fail: () => {
					_this.loginShow = true
				}
			})
			
			
		}, 
		onShow() {
			uni.getStorage({
				key:'loginState',
				success:res => {
					if( res.data != '已登录' ) {
						this.loginShow = true
					}
				}
			})
			uni.getStorage({
				key:'user_fa',
				success:res => {
					this.titleImg = res.data
				}
			})
		},
		methods: {
			loginShowFlase() {
				this.loginShow = false
			},
			changeTabbar( index ) {
				console.log( index )
				
				if( index == 1 ) {
					uni.reLaunch({
						url:'/pages/orderForm/orderForm'
					})
				}else if( index == 2 ) {
					uni.reLaunch({
						url:'/pages/recordedVideo/recordedVideo'
					})
				}else if( index == 3 ) {
					
					uni.getStorage({
						key:'userType',
						success:res => {
							if( res.data == 'ordinary' ) { //普通用户
								uni.reLaunch({
									url:'/pages/myOrdinary/myOrdinary'
								})
							}else if( res.data == 'agent' ) { //代理
								uni.reLaunch({
									url:'/pages/myUser/myUser'
								})
							}else if( res.data == 'shop' ) { //商家
								uni.reLaunch({
									url:'/pages/mybusiness/mybusiness'
								})
							}
						}
					})
					
				}
			},
			go_store(sid) {
				uni.navigateTo({
					url: '/pagesA/store/store?sid=' + sid,
				})
			},
			wxGetUserInfo() {
				// 1.获取用户的信息
				uni.getUserInfo({
					provider: 'weixin',
					success: (infoRes) => {
						console.log(infoRes)
						this.userInfo = infoRes

						uni.setStorage({
							key: 'user_id',
							data: infoRes.userInfo.gender,
							success: function() {
								infoRes.userInfo.gender;
							}
						})
						uni.setStorage({
							key: 'user_nm',
							data: infoRes.userInfo.nickName,
							success: function() {
								infoRes.userInfo.nickName;
							}
						})
						uni.setStorage({
							key: 'user_fa',
							data: infoRes.userInfo.avatarUrl,
							success: function() {
								infoRes.userInfo.avatarUrl;
							}
						})

						//加载
						this.login();
					},
					fail: () => {
						uni.showToast({
							title: '获取用户信息失败',
							icon: 'none'
						});
					}
				});
				return false
			},
			
			// 登录
			login() {
				let _this = this
				
				// 0. 显示加载的效果
				uni.showLoading({
					title: '登录中...'
				});

				uni.login({
					provider: 'weixin',
					success: loginRes => {
						console.log(loginRes);

						console.log(loginRes.code)
						console.log(this.userInfo.encryptedData)
						console.log(this.userInfo.iv)
						console.log(this.apiServer + 'api/login/login')
						uni.request({
							url: 'https:://htx.cdwhzl.com/index.php/api/login/login',
							data: {
								code: loginRes.code,
								encryptedData: this.userInfo.encryptedData,
								iv: this.userInfo.iv
							},
							method: 'POST',
							success: openIdRes => {
								console.log(1) //测试
								console.log(openIdRes);
								// 隐藏loading
								uni.hideLoading();

								//调用公共
								codeVerify(openIdRes)

								uni.getStorage({
									key: 'loginState',
									success: res => {
										console.log(res.data)
										if (res.data == '已登录') {
											this.loginShow = false

											//设置头像
											uni.getStorage({
												key: 'user_fa',
												success: res => {
													this.titleImg = res.data
												}
											})
											
											//获取banner
											uni.getStorage({
												key:'token',
												success:res => {
													this.getbanner( res.data )
												}
											})
											
											//默认页面
											uni.getStorage({
												key:'token',
												success:res => {
													this.getIndex( res.data )
												}
											})
											
											//获取用户类型
											uni.getStorage({
												key:'token',
												success:res => {	
													getUserType( res.data )
													
													uni.getStorage({
														key:'userType',
														success:res => {
															_this.userType = res.data
														}
													})
														
															
												}
											})
														

										}
									}
								})
								

							},
							fail: () => {
								uni.showToast({
									title: '获取授权信息失败',
									icon: 'none'
								});
								return false;
							}
						});

					}, 
					fail: () => {
						uni.showToast({
							title: '获取 code 失败',
							icon: 'none'
						});
						return false;
					}
				});
				return false;
			},
			
			//获取banner
			getbanner(token) {
				uni.request({
					url: this.apiServer + 'api/home/Banner',
					header: {
						"token": token,
					},
					method:'POST',
					success: (res) => {
						console.log( res )
						this.bannerImg = res.data.data
					}
				})
			},
			//默认页面( 学校列表 )
			getIndex(token) {
				
				let _server = this
				
				//当前位置
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {						
						uni.request({
							url: _server.apiServer + 'api/home/schoollist',
							data:{
								lng:res.longitude,
								lat:res.latitude
							},
							header: {
								"token": token,
							},
							method:'POST',
							success: (res) => {
								console.log( res )
								_server.schoollist = res.data.data.list
							}
						})
				    }
				})
				
				
			},
			//关闭地图弹框
			siteShowFalse() {
				this.siteShow = false
			},
			//开启地图弹框
			siteShowTrue(index) {
				this.siteShow = true
				
				showToast('加载中...')
				this.latitude = this.schoollist[index].lat
				this.longitude = this.schoollist[index].lng
				this.markers[0].latitude = this.schoollist[index].lat
				this.markers[0].longitude = this.schoollist[index].lng
				hideToast()
			}
		}
	}
</script>

<style>
	@import url("./style/index.css");

	.header {
		margin: 90rpx 0 90rpx 50rpx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650rpx;
		height: 300rpx;
		line-height: 450rpx;
	}

	.header image {
		width: 200rpx;
		height: 200rpx;
	}

	.content {
		margin-left: 50rpx;
		margin-bottom: 90rpx;
		padding-top: 50rpx;
	}

	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40rpx;
	}

	.bottom {
		border-radius: 80rpx;
		margin: 70rpx 50rpx;
		font-size: 35rpx;
	}
</style>
