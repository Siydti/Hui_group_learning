<template>
	<view class="customerManagement">
		<view class="top">
			<view class="demo" :style="'height:' +  demo.height + 'px;' + 'padding-top:' + demo.top + 'px;padding-bottom:10rpx'">
			      <view class="left" :style="'top:' + demo.top + 'px'">
			            <view class="iconfont iconjiantouarrowhead7"></view>
			     </view>
			      客户管理
			 </view>
			<view class="bg">
				<view class="ul">
					<view :class="navsIndex==index?'li active':'li'" v-for="(item,index) in navs" :key="index" @click="navsClick(index)">
						<text>{{item}}</text>
						<view class="line"></view>
					</view>
				</view>
				<view class="white">
					<image src="../../static/imgs/logo.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="item">
				<view class="left">
					<view class="name">逸彩升学辅导（新校区）</view>
					<view class="info">尹晓峰      17631183265</view>
				</view>
				<view class="right" @click="clickMode">确认缴费</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="name">逸彩升学辅导（新校区）</view>
					<view class="info">尹晓峰      17631183265</view>
				</view>
				<view class="right active">已缴费：2000</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<view class="mode" v-if="showMode">
			<view class="box">
				<view class="close">
					<view class="iconfont iconguanbi" @click="closeMode"></view>
				</view>
				<view class="li">
					<view class="left">学校名称</view>
					<view class="right">测试学校1029</view>
				</view>
				<view class="li active">
					<view class="left">真实姓名</view>
					<view class="right">小仙女</view>
				</view>
				<view class="list">
					<view class="title">
						<view class="name">缴费金额</view>
						<view class="text">20000</view>
					</view>
				</view>
				<textarea value="" placeholder="请输入信息" />
				<view class="imgs">
					<image src="../../static/imgs/222.png"></image>
					<image src="../../static/imgs/222.png"></image>
					<view class="iconfont iconjia" @click="upData"></view>
				</view>
				<view class="info">可以上传证据照片</view>
				<view class="btn">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	        data () {
	            return {
	                demo: {
	                    top: 0,
	                    height: 0
	                },
					navs:['代理录入','预约试听','拨打电话','线上缴费'],
					navsIndex:0,
					showMode:false
	            }
	        },
			methods:{
				navsClick(index){
					this.navsIndex=index;
				},
				clickMode(){
					this.showMode=true
				},
				closeMode(){
					this.showMode=false
				},
				upData(){
					uni.chooseImage({
					    success: (chooseImageRes) => {
					        const tempFilePaths = chooseImageRes.tempFilePaths;
					        uni.uploadFile({
					            url: 'https://www.example.com/upload',
					            filePath: tempFilePaths[0],
					            name: 'file',
					            formData: {
					                'user': 'test'
					            },
					            success: (uploadFileRes) => {
					                console.log(uploadFileRes.data);
					            }
					        });
					    }
					});
				}
			},
	        created () {
	            const demo = uni.getMenuButtonBoundingClientRect()
	            this.demo.top = demo.top
	            this.demo.height = demo.height
	        }
	    }
</script>

<style lang="scss">
	page{
		width: 100%;
		min-height: 100%;
		background-color: #F2F2F2;
	}
	.customerManagement{
		.demo{
		        position: fixed;
				width: 100%;
				left: 0;
				top: 0;
		        display: flex;
		        align-items: center;
		        justify-content: center;
		        font-size: 32rpx;
				color: #FFFFFF;
				z-index: 100;
		        .left{
		            float: left;
		            position: absolute;
		            width: max-content;
		            height: max-content;
		            top: 0;
		            bottom: 0;
		            left: 20rpx;
		            margin: auto;
		            .iconfont{
		                color: #FFFFFF;
						font-size: 32rpx;
		            }
		        }
		    }
		.top{
			font-size: 0;
			width: 100%;
			height: 400rpx;
			overflow: hidden;
			.bg{
				width: 100%;
				height: 400rpx;
				background-color: #47B4B7;
				position: relative;
				.ul{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 60rpx;
					box-sizing: border-box;
					position: absolute;
					width: 100%;
					bottom: 0;
					left: 0;
					z-index: 100;
					.li{
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						text{
							padding-bottom: 20rpx;
							font-size: 28rpx;
							color: #333333;
						}
						.line{
							width: 0rpx;
							height: 4rpx;
							background: #47B4B7;
							transition: width .2s linear; 
						}
					}
					.active{
						text{
							color: #47B4B7;
						}
						.line{
							width: 100rpx;
						}
					}
				}
				.white{
					width: 120%;
					background: #FFFFFF;
					height: 300rpx;
					border-radius: 50%;
					position: absolute;
					left: -10%;
					bottom: -150rpx;
					font-size: 0;
					image{
						width: 120rpx;
						height: 120rpx;
						border-radius: 60rpx;
						position: absolute;
						left: 50%;
						transform: translate(-60rpx);
						top: -60rpx;
					}
					
				}
			}
		}
		.items{
			.item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #FFFFFF;
				padding: 30rpx;
				box-sizing: border-box;
				margin-top: 1px;
				.left{
					.name{
						font-size: 30rpx;
						color: #333333;
					}
					.info{
						font-size: 26rpx;
						color: #666666;
						padding-top: 10rpx;
					}
				}
				.right{
					font-size: 24rpx;
					color: #FF6634;
					padding: 13rpx 14rpx;
					border: 1px solid #FF6634;
					border-radius: 5px;
				}
				.active{
					border: none;
					background-color:#FF6634 ;
					color: #FFFFFF;
				}
			}
		}
		.mode{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1000;
			background: rgba(0,0,0,.6);
			display: flex;
			align-items: center;
			justify-content: center;
			.box{
				background: #FFFFFF;
				width: 710rpx;
				border-radius: 20rpx;
				padding: 20rpx 0 40rpx;
				box-sizing: border-box;
				.close{
					display: flex;
					align-items: center;
					justify-content: flex-end;
					.iconfont{
						font-size: 32rpx;
						color: #999999;
						margin-right: 20rpx;
					}
				}
				.li{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 30rpx 40rpx 40rpx 40rpx;
					box-sizing: border-box;
					.left{
						font-size: 28rpx;
						color: #999999;
					}
					.right{
						font-size: 26rpx;
						color: #999999;
					}
				}
				.active{
					padding: 0 40rpx 40rpx 30rpx;
				}
				.list{
					.title{
						display: flex;
						align-items: center;
						padding: 40rpx 35rpx;
						box-sizing: border-box;
						border-top: 10rpx solid #F2F2F2;
						border-bottom: 10rpx solid #F2F2F2;
						.name{
							font-size: 30rpx;
							color: #333333;
							padding-right: 50rpx;
						}
						.text{
							font-size: 26rpx;
							color: #333333;
						}
					}
				}
				textarea{
					display: inline-block;
					width: 670rpx;
					height: 200rpx;
					margin:20rpx 20rpx 20rpx;
					font-size: 26rpx;
					color: #999999;
					padding: 20rpx 10rpx;
					box-sizing: border-box;
					border-radius: 10rpx;
					border:1px solid rgba(153, 153, 153, .5);
				}
				.imgs{
					font-size: 0;
					display: flex;
					align-items: center;
					image{
						width: 160rpx;
						height: 160rpx;
						margin-left: 40rpx;
					}
					.iconfont{
						font-size: 80rpx;
						color: #999999;
						margin-left: 60rpx;
					}
				}
				.info{
					font-size: 26rpx;
					color: #999999;
					padding: 30rpx 20rpx 40rpx;
					box-sizing: border-box;
				}
				.btn{
					width: 670rpx;
					height: 80rpx;
					background: #0CBF63;
					border-radius: 10rpx;
					font-size: 30rpx;
					color: #FFFFFF;
					text-align: center;
					line-height: 80rpx;
					margin-left: 20rpx;
				}
			}
		}
	}
</style>
