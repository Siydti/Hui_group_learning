<template>
	<view class="settlementPost">
		<view class="infos">
			<view class="li">
				<view class="left">
					<text>机构名称：</text>
					<input type="text" :value="title" @input="inputtitle" placeholder="请输入机构名称" />
				</view>
			</view>
			<view class="li">
				<view class="left">
					<text>真实姓名：</text>
					<input type="text" :value="name" @input="inputname" placeholder="请输入真实姓名" />
				</view>
			</view>
			<view class="li">
				<view class="left">
					<text>联系电话：</text>
					<input type="number" maxlength="11" :value="phone" @input="inputphone" placeholder="请输入您的联系电话" />
				</view>
			</view>
			<!-- <view class="li" style="border:none;">
				<view class="left">
					<text>验证码：</text>
					<input type="text" value="" placeholder="请填写验证码"/>
				</view>
				<view class="right">
					获取验证码
				</view>
			</view> -->
		</view>
		<view class="btn" @click="submit">提交</view>
	</view>
</template>

<script>
	import isCode from '../../verify/isCode.js'
	import { showToast , hideToast } from '../../verify/loading.js'

	export default {
		data() {
			return {
				title: '',
				name: '',
				phone: '',
			}
		},
		methods: {
			inputtitle(e) {
				this.title = e.detail.value
			},
			inputname(e) {
				this.name = e.detail.value
			},
			inputphone(e) {
				this.phone = e.detail.value
			},
			submit() {
				let _this = this

				uni.getStorage({
					key: 'token',
					success: res => {
						
						showToast()
						uni.request({
							url: _this.apiServer + 'api/user/Settlement',
							header: {
								token: res.data
							},
							data: {
								name: _this.name,
								title: _this.title,
								phone: _this.phone
							},
							success: res => {
								console.log(res.data)

								isCode(res.data.code)

								uni.showToast({
									title: '提交成功，等待审核',
								});

								setTimeout(() => {
									uni.navigateBack({
										delta: 1
									})
								}, 1000)
							}
						})
						hideToast()
						
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		min-height: 100%;
		background: #f2f2f2;
	}

	.settlementPost {
		padding: 30rpx;
		box-sizing: border-box;

		.infos {
			background-color: #FFFFFF;
			border-radius: 20rpx;
			padding: 30rpx 30rpx 10rpx;
			box-sizing: border-box;

			.li {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx 0;
				border-bottom: 1px solid rgba(154, 154, 154, .3);

				.left {
					flex: 1;
					display: flex;
					align-items: center;

					text {
						font-size: 28rpx;
						color: #666666;
						padding-right: 30rpx;
					}

					input {
						flex: 1;
						font-size: 26rpx;
						color: #9A9A9A;
					}

					.iconfont {
						font-size: 100rpx;
						color: #9A9A9A;
					}
				}

				.right {
					width: 160rpx;
					height: 50rpx;
					border: 1px solid #9A9A9A;
					border-radius: 25rpx;
					font-size: 24rpx;
					color: #9A9A9A;
					text-align: center;
					line-height: 50rpx;
				}
			}

			.active {
				border: none;

				.left {
					align-items: flex-start;
				}
			}
		}

		.btn {
			width: 100%;
			height: 80rpx;
			border-radius: 10rpx;
			background: rgba(12, 192, 100, .7);
			font-size: 30rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
			margin-top: 80rpx;
		}
	}
</style>
