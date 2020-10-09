<template>
	<view class="payment">
		<view class="payment_courseName">
			<image src="/static/images/payment_course.png" style="width: 220rpx;height: 160rpx;border-radius: 10rpx;margin: 20rpx 20rpx 20rpx 30rpx ;"></image>
			<view class="courseName">
				{{ goods.title }}
			</view>
		</view>

		<view class="payment_schollName">
			<text>学校名称</text>
			<text>{{ shops.name }}</text>
		</view>

		<!-- <view class="payment_number payment_list">
			<view class="left">
				数量
			</view>
			<view class="right">
				<van-stepper value="1" integer button-size="50rpx" input-width="70rpx" />
			</view>
		</view> -->

		<view class="payment_unitPrice payment_list">
			<view class="left">
				小计
			</view>
			<view class="right">
				￥{{ goods.newPrice }}
			</view>
		</view>

		<view class="payment_allPrice payment_list">
			<view class="left">
				总价
			</view>
			<view class="right">
				<text>￥{{ goods.price }}</text>
				<text>（已优惠:￥{{ goods.reductionPrice }})</text>
			</view>
		</view>

		<view class="payment_groupNumber payment_list">
			<view class="left">
				选择拼团人数
			</view>
			<view class="right">
				<van-stepper value="1" integer button-size="50rpx" input-width="70rpx" />
			</view>
		</view>

		<view class="payment_hintText">
			课程购买后，商户可能会和您联系，约定到店时间
		</view>

		<view class="payment_phone">
			<view class="left">
				手机号码
			</view>
			<view class="right">
				<input type="text" :placeholder="getPhoneNumber" />
			</view>
		</view>

		<van-checkbox class="payment_check" :value="check" checked-color="#0BBF63" @change="checkChange" icon-size="25rpx">
			7天无理由
		</van-checkbox>

		<view class="payment_payBtn" @click="pay">
			总计：{{ goods.newPrice }}元 去支付
		</view>

		<view class="payment_inviteBtn" @click="go_groupPurchase">
			不支付，邀请好友
		</view>

	</view>
</template>

<script>
	import isCode from '../../verify/isCode.js'
	import { showToast , hideToast } from '../../verify/loading.js'
	
	export default {
		data() {
			return {
				check: true, //7天无理由
				gid:0,
				shops : [],
				goods : [],
				getPhoneNumber : 0,
			}
		},
		methods: {
			checkChange() {
				this.check = !this.check
			},
			go_groupPurchase() {
				uni.navigateTo({
					url:'../groupPurchase/groupPurchase'
				})
			},
			//支付
			pay() {
				let _this = this
			
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
											url: _this.apiServer + 'api/goods/TeamBuy',
											data: {
												gid: _this.gid,
												pid: 0
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
			let _this = this
			console.log(option)
			
			this.gid = option.gid
			
			showToast()
			
			
				//拿团购详情
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
			
								res.data.data.goods.newPrice = (Number(res.data.data.goods.price) - (Number(res.data.data.goods.reduction) / 10)).toFixed(2)
			
								res.data.data.goods.reductionPrice = (Number( res.data.data.goods.price ) - Number( res.data.data.goods.newPrice )).toFixed(2)
			
								_this.shops = res.data.data.shop
								_this.goods = res.data.data.goods
			
								console.log(_this.shops)
								console.log(_this.goods)
							}
						})
					}
				})

				//查询用户手机号
				uni.getStorage({
					key: 'token',
					success: res => {
						uni.request({
							url: this.apiServer + 'api/common/GetUserPhone',
							header: {
								'token': res.data,
							},
							method: 'POST',
							success(res) {
								console.log('查询用户手机号')
								console.log(res.data)
								isCode(res.data.code)
				
								if (!res.data.data) {
									_this.getPhoneNumber = '获取您的电话失败，请手动输入'
									
								} else {
									_this.getPhoneNumber = res.data.data
									
								}
							}
						})
					}
				})
				
				hideToast()
		}
	}
</script>

<style>
	@import url("./style/payment.css");
</style>
