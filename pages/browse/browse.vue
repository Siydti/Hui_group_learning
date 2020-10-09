<template>
	<view class="browse">
		
		<view v-if="!UserFoot.length" style="padding-top: 50rpx;text-align: center;">
			暂无记录
		</view>
		
		<view class="ul" v-else>
			<view class="li" v-for="(item,index) in UserFoot" :key="index">
				<image :src="item.cover" ></image>
				<view class="r">
					<view class="name">{{item.name}}</view>
					<view class="info">{{item.desc}}</view>
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
				UserFoot: []
			}
		},
		methods: {
			//用户足迹
			getUserFoot() {
				let _this = this
				
				showToast('加载中...')
				uni.getStorage({
					key:'token',
					success:res => {
						uni.request({
							url: _this.apiServer + 'api/user/UserFoot',
							header: {
								"token": res.data,
							},
							data:{
								page:1
							},
							method:'POST',
							success: (res) => {
								console.log( '用户足迹' )
								console.log( res.data )
								
								isCode( res.data.code )
								
								_this.UserFoot = res.data.data.list
							}
						})
					}
				})
				hideToast()
				
			},
		},
		onLoad() {
			//收藏
			this.getUserFoot()
		}
	}
</script>


<style lang="scss">
	page{
		width: 100%;
		min-height: 100%;
		background: #F2F2F2;
	}
	.browse{
		.ul{
			.li{
				background: #FFFFFF;
				padding: 30rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				font-size: 0;
				margin-top: 4rpx;
				image{
					width: 700rpx;
					height: 220rpx;
				}
				.r{
					margin-left: 20rpx;
					.name{
						font-size: 30rpx;
						color: #333333;
						font-weight: bold;
					}
					.info{
						font-size: 26rpx;
						color: #999999;
						padding-top: 30rpx;
					}
				}
			}
		}
	}
</style>
