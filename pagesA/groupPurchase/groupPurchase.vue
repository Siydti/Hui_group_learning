<template>
	<view class="groupPurchase">

		<view class="groupPurchase_main" style="flex: 1;">


			<view class="groupPurchase_banner">
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


			</view>

			<view class="groupPurchase_title">
				<view class="groupPurchase_title_left">
					<view class="groupPurchase_title_leftTop">
						托福暑假提高四人班
					</view>
					<view class="groupPurchase_title_leftBottom">
						<text style="color: #EC7044;font-size: 20rpx;">￥</text>
						<text style="color: #EC7044;font-size: 30rpx;margin-right: 20rpx;">34800</text>
						<text style="font-size: 18rpx;color:#969696;">￥</text>
						<text style="font-size: 18rpx;color:#969696;text-decoration: line-through;">59000</text>
					</view>
				</view>
				<view class="groupPurchase_title_right">
					<image src="/static/images/groupPurchase_share.png" style="width: 31rpx;height: 34rpx;margin-bottom: 10rpx;"></image><text>分享</text>
				</view>
			</view>

			<view class="groupPurchase_state">

				<view class="groupPurchase_state_title">
					1人在拼团，可直接参与
				</view>

				<view class="groupPurchase_state_main">
					<view class="groupPurchase_state_mainLeft">
						<image src="/static/images/groupPurchase_profile.png" style="width: 60rpx;height: 60rpx;border-radius: 50%;margin-right: 10rpx;"></image>
						<text>小仙女</text>
					</view>
					<view class="groupPurchase_state_mainMid">
						<view class="groupPurchase_state_mainMid_top">
							还差 <text>1人</text> 拼成
						</view>
						<view class="groupPurchase_state_mainMid_bottom">
							<text>剩余08:48:38.2</text>
						</view>
					</view>
					<view class="groupPurchase_state_mainRight">
						去拼团
					</view>
				</view>

			</view>

			<!-- 拼团弹框 -->
			<van-popup :show="joinShow" @close="joinShow_flase">

				<view class="groupPurchase_joinBox">

					<view class="join_cross">
						<van-icon name="cross" @click="joinShow_flase" />
					</view>

					<view class="join_title">
						参与小仙女的拼团
					</view>

					<view class="join_hint">
						仅剩1个名额，23:48:14.3后结束
					</view>

					<view class="join_listBox">

						<view class="join_list" v-for="(item,index) in joinList" :key="index">
							<image :src="(item.imgurl == '' ? '/static/images/join_heard_default.png' : item.imgurl)" style="width: 80rpx;height: 80rpx;border-radius: 50%;"
							 :class="{ 'join_listLeader' : item.id == 1  }"></image>
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
								<text>￥</text> 66.8-88.6
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
						<view class="order_type_listBox">
							<text class="order_type_list">
								英语（三节课）
							</text>
							<text class="order_type_list">
								英语（三节课）
							</text>
							<text class="order_type_list">
								英语（三节课）
							</text>
						</view>
					</view>

					<view class="order_number">
						<view class="number_left">
							节数
						</view>
						<view class="number_right">
							<van-stepper value="1" integer button-size="50rpx" input-width="75rpx" />
						</view>
					</view>

					<view class="order_btn">
						确定
					</view>

				</view>

			</van-popup>



		</view>

		<view class="groupPurchase_bottom">
			<view class="groupPurchase_bottom_phone">
				<image src="/static/images/ICON/phone.png" style="width: 30rpx;height: 32rpx;margin-bottom: 10rpx;"></image>
				<text>电话</text>
			</view>
			<view class="groupPurchase_bottom_try" @click="go_customerInput">
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
			<view class="groupPurchase_bottom_togetherPay" @click="joinShow_true">
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
			}
		},
		methods: {
			go_groupSuccess() {
				console.log(11)
				uni.redirectTo({
					url: '/pagesA/groupSuccess/groupSuccess'
				});
			},
			joinShow_flase() {
				this.joinShow = false
			},
			joinShow_true() {
				this.joinShow = true
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
			}
		}
	}
</script>

<style>
	@import url("./style/groupPurchase.css");
</style>
