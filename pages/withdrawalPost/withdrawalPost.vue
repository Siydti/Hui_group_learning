<template>
	<view class="withdrawalPost">
		<view class="title">请输入您的身份信息</view>
		<view class="ul">
			<view class="li">
				<view class="left">真实姓名</view>
				<input type="text" value="" placeholder="请输入真实姓名"/>
			</view>
			<view class="li">
				<view class="left">身份证号码</view>
				<input type="text" value="" placeholder="请输入身份证号码"/>
			</view>
			<view class="li">
				<view class="left">手机号</view>
				<input type="text" value="" placeholder="请输入手机号"/>
			</view>
		</view>
		<view class="title">请输入您的银行卡信息</view>
		<view class="ul">
			<view class="li">
				<view class="left">开户行</view>
				<input type="text" value="" placeholder="请输入开户行"/>
			</view>
			<view class="li">
				<view class="left">银行卡号</view>
				<input type="text" value="" placeholder="请输入银行卡号"/>
			</view>
		</view>
		<view class="infos">
			<view class="text">上传证件材料</view>
			<view class="items">
				<view class="item" @click="upData">
					<image src="../../static/imgs/zheng.png" mode=""></image>
					<text>请上传身份证正面</text>
				</view>
				<view class="item" @click="upData">
					<image src="../../static/imgs/fan.png" mode=""></image>
					<text>请上传身份证反面</text>
				</view>
			</view>
			<view class="btns">
				<view class="btn">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			upData:function(){
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
		}
	}
</script>

<style lang="scss">
	.withdrawalPost{
		.infos{
			padding: 0 30rpx;
			box-sizing: border-box;
			border-top: 20rpx solid #F2F2F2;
			.text{
				font-size: 30rpx;
				color: #333333;
				padding: 30rpx 0;
				box-sizing: border-box;
				border-bottom: 1px solid #F2F2F2;
			}
			.btns{
				padding: 150rpx 0 100rpx 0;
				.btn{
					width: 100%;
					height: 80rpx;
					background: #0CBF63;
					border-radius: 10rpx;
					font-size: 30rpx;
					color: #FFFFFF;
					text-align: center;
					line-height: 80rpx;
				}
			}
			.items{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-top: 60rpx;
				.item{
					font-size: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					image{
						width: 307rpx;
						height: 194rpx;
					}
					text{
						font-size: 26rpx;
						color: #333333;
						padding-top: 20rpx;
					}
				}
			}
		}
		.title{
			width: 100%;
			height: 90rpx;
			font-size: 28rpx;
			color: #666666;
			line-height: 90rpx;
			padding-left: 30rpx;
			box-sizing: border-box;
			background-color: #F2F2F2;
		}
		.ul{
			background: #FFFFFF;
			padding: 0 30rpx;
			box-sizing: border-box;
			.li{
				display: flex;
				align-items: center;
				padding: 30rpx 0;
				box-sizing: border-box;
				border-bottom: 1px solid #F2F2F2;
				.left{
					font-size: 30rpx;
					color: #333333;
					width: 250rpx;
				}
				input{
					flex: 1;
					font-size: 26rpx;
					color: #666666;
				}
			}
		}
	}
</style>
