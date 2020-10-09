<template>
	<view class="appoint">
		<view class="appoint_title">
			预约后我们将通过电话联系您
		</view>

		<input type="number" :value="getPhoneNumber" class="appoint_input" disabled="true" />

		<button class="appoint_btn" @click="go_appointSucceed" v-show="isShow">
			立即预约
		</button>

		<button class="appoint_btn" @getPhoneNumber="onGetPhoneNumber" open-type="getPhoneNumber" v-show="!isShow"> 点击获取您的手机号
		</button>

	</view>
</template>

<script>
	import isCode from '../../verify/isCode.js'
	import { showToast , hideToast } from '../../verify/loading.js'

	export default {
		data() {
			return {
				sid: 0,
				isShow: false,
				userPhone: '',
				getPhoneNumber: '',

			}
		},
		methods: {
			go_appointSucceed() {
				let _this = this
				//预约
				uni.getStorage({
					key: 'token',
					success: res => {

						uni.request({
							url: this.apiServer + 'api/school/Subscribe',
							header: {
								'token': res.data,
							},
							data:{
								sid : this.sid
							},
							method: 'POST',
							success(res) {
								console.log('预约')
								console.log(res.data)
								isCode(res.data.code)
				
								uni.redirectTo({
									url: '/pagesA/appointSucceed/appointSucceed?type=预约&sid=' + _this.sid
								})
							}
						})
						
					}
				})

				
			},
			//获取手机号
			onGetPhoneNumber(e) {
				console.log('-----')
				console.log(e)

				if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
					console.log('用户拒绝提供手机号');
				} else {
					console.log('用户同意提供手机号');

					console.log(JSON.stringify(e.detail.encryptedData));
					console.log(JSON.stringify(e.detail.iv));
					
					this.decryptPhone( this , e.detail.encryptedData , e.detail.iv )
					
					this.isShow = true
				}

				},

				//解密手机号
				decryptPhone(_this, encryptedData, iv) {
					uni.getStorage({
						key: 'token',
						success: res => {
							uni.request({
								url: this.apiServer + 'api/common/decryptPhone',
								header: {
									'token': res.data,
								},
								data: {
									encryptedData: encryptedData,
									iv: iv,
								},
								method: 'POST',
								success(res) {
									console.log('解密手机号')
									console.log(res.data)
									isCode(res.data.code)

									_this.userPhone = res.data.data
								}
							})
						}
					})

				}

			},
			onLoad(option) {
				this.sid = option.sid
				console.log(this.sid)
				let _this = this

				//查询用户手机号
				uni.getStorage({
					key: 'token',
					success: res => {
							
							showToast('查询中...')
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
									_this.getPhoneNumber = '点击下方按钮自动获取您的手机号码'
									_this.isShow = false
								} else {
									_this.getPhoneNumber = res.data.data
									_this.isShow = true
								}
							}
						})
						hideToast()
					}
				})

			}
		}
</script>

<style>
	@import url("./style/appoint.css");
</style>
