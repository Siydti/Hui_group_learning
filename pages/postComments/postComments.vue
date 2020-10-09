<template>
	<view class="postComments">
		<view class="infos">
			<view class="title">同城美少儿流利英语</view>
			<view class="foot">
				<view class="left">
					<text>总体评价</text>
					<view class="r">
						<view :class="cur>=index?'iconfont iconwuxing active':'iconfont iconwuxing'" v-for="(item,index) in 5" @click="starClick(index)"></view>
					</view>
				</view>
				<view class="right">很满意</view>
			</view>
		</view>
		<view class="from">
			<textarea value="" placeholder="您的评价可以帮助到更多的小伙伴" />
			<view class="imgs">
				<view class="addimg" @click="upImg">
					<view class="iconfont iconshangchuantupian"></view>
					<text>上传图片</text>
				</view>
			</view>
		</view>
		<view class="btns">
			<view class="btn">发布</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				cur:-1
			}
		},
		methods:{
			starClick:function(index){
				this.cur=index;
			},
			upImg:function(){
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
	page{
		width: 100%;
		min-height: 100%;
		background-color: #f2f2f2;
	}
	.postComments{
		.infos{
			padding: 30rpx;
			box-sizing: border-box;
			background: #FFFFFF;
			.title{
				font-size: 30rpx;
				color: #333333;
				padding-bottom: 30rpx;
			}
			.foot{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left{
					display: flex;
					align-items: center;
					text{
						font-size: 28rpx;
						color: #333333;
					}
					.r{
						display: flex;
						align-items: center;
						.iconfont{
							font-size: 34rpx;
							color: rgba(153, 153, 153, .3);
							margin-left: 10rpx;
						}
						.active{
							color: #FF6634;
						}
					}
				}
				.right{
					font-size: 26rpx;
					color: #999999;
				}
			}
		}
		.from{
			background: #FFFFFF;
			padding: 30rpx;
			box-sizing: border-box;
			margin-top: 10rpx;
			textarea{
				font-size: 28rpx;
				color: #999999;
				width: 100%;
				height: 250rpx;
			}
			.imgs{
				.addimg{
					width: 120rpx;
					height: 120rpx;
					background: #F2F2F2;
					border: 1px solid #999999;
					border-radius: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					.iconfont{
						font-size: 56rpx;
						color: #666666;
					}
					text{
						font-size: 20rpx;
						color: #999999;
					}
				}
			}
		}
		.btns{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 120rpx;
			.btn{
				width: 690rpx;
				height: 80rpx;
				background: #0CBF63;
				border-radius: 10rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
			}
		}
	}
</style>
