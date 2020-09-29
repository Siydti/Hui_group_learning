<template>
	<view class="payment">
		<view class="payment_courseName">
			<image src="/static/images/payment_course.png" style="width: 220rpx;height: 160rpx;border-radius: 10rpx;margin: 20rpx 20rpx 20rpx 30rpx ;"></image>
			<view class="courseName">
				少儿流利英语口语
			</view>
		</view>

		<view class="payment_schollName">
			<text>学校名称</text>
			<text>新东方培训学校</text>
		</view>

		<view class="payment_number payment_list">
			<view class="left">
				数量
			</view>
			<view class="right">
				<van-stepper value="1" integer button-size="50rpx" input-width="70rpx" />
			</view>
		</view>

		<view class="payment_unitPrice payment_list">
			<view class="left">
				小计
			</view>
			<view class="right">
				￥666.6
			</view>
		</view>

		<view class="payment_allPrice payment_list">
			<view class="left">
				总价
			</view>
			<view class="right">
				<text>￥366.6</text>
				<text>（已优惠:￥300)</text>
			</view>
		</view>

		<view class="payment_groupNumber payment_list">
			<view class="left">
				选择拼图人数
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
				156****2089
			</view>
		</view>

		<van-checkbox class="payment_check" :value="check" checked-color="#0BBF63" @change="checkChange" icon-size="25rpx">
			7天无理由
		</van-checkbox>

		<view class="payment_payBtn">
			总计：666.6元 去支付
		</view>

		<view class="payment_inviteBtn" @click="go_groupPurchase">
			不支付，邀请好友
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				check: true, //7天无理由
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
			}
		}
	}
</script>

<style>
	@import url("./style/payment.css");
</style>
