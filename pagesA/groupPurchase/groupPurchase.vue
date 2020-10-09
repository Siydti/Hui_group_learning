<template>
	<view class="groupPurchase">

		<view class="groupPurchase_main" style="flex: 1;overflow-y: scroll;">


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

			
			<van-tabs  color="#ec6b3d">
			  <van-tab title="团购详情">
				  <view class="particulars">
				  	
					<view class="title">
						<view class="left">
							托福VIP体验课
						</view>
						<view class="right">
							1份 <text>丨</text> 1998 元
						</view>
					</view>
					
					<view class="main">
						
						<view class="subjects">
							<view class="title">
								科目
							</view>
							<view class="content">
								托福
							</view>
						</view>
						
						<view class="period">
							<view class="title">
								课时
							</view>
							<view class="content">
								1节
							</view>	
						</view>
						
						<view class="oldPrice">
							<view class="title">
								总价
							</view>
							<view class="content" style="color: #595959;font-size: 26rpx;">
								1998元
							</view>
						</view>
						
						<view class="activePrice">
							<view class="title">
								团购价
							</view>
							<view class="content" style="color: #ec6b3d;font-size: 34rpx;">
								9.9元
							</view>
						</view>
					</view>
					
				  </view>
			  </van-tab>
			  <van-tab title="购买须知">内容 2</van-tab>
			  <van-tab title="网友点评">内容 3</van-tab>
			</van-tabs>


			<view class="inform_top">
				
				<view class="list" v-for="(item,index) in informTopList" :key="index">
					<view class="title">
						{{item.title}}
					</view>
					<view class="content">
						{{item.content}}
					</view>
				</view>
				
			</view>
			
			<view class="inform_title">
				<view class="content">	
				<text>购买须知</text>
				<van-icon name="volume-o" />
				</view>
			</view>
			
			<view class="inform_bottom">
				
				<view class="list" v-for="(item,index) in informBottomList" :key="index">
					<view class="title">
						{{item.title}}
					</view>
					<view class="content" v-for="(items,indexs) in item.content" :key="indexs">
						·{{items}}
					</view>
				</view>
				
			</view>

			<view class="lookMore">
				
				<view class="content">
					<text>展开</text>
					<van-icon name="arrow-down" />
				</view>
				
			</view>

			<view class="shop">
				
				<view class="title">
					适用门店
				</view>
				
				<view class="main">
					<view class="left">
						红果托福雅思SAT国际课程培训机构 顺义校区
					</view>
					<view class="right">
						<image src="/static/images/message.png" style="width: 35rpx;height: 30rpx;margin-right: 45rpx;"></image>
						<image src="/static/images/store_phone.png" style="width: 27rpx;height: 33rpx;margin-right: 17rpx;"></image>
					</view>
				</view>
				
				<view class="rate">
					<van-rate value="4.5" void-icon="star" color="#ff6634" void-color="#dddddd" readonly allow-half size="26rpx" />
				</view>
				
				<view class="site">
					<van-icon name="location-o" />
					<text>顺义祥云小镇北区10号楼506室</text>
				</view>
				
			</view>

				
				<view class="title">
					<view class="left">
						精选点评 <text>(7)</text>
					</view>
					
					<view class="right">
						<van-icon name="arrow" />
					</view>
				</view>
			
<view class="store_evaluate">
				
				<view class="title">
					<view class="left">
						精选点评 <text>(7)</text>
					</view>
					
					<view class="right">
						<van-icon name="arrow" />
					</view>
				</view>
				
				<view class="typeBox">
					<view class="type" v-for="(item,index) in evaluateList" :key="index">
						{{item.content}}
					</view>
				</view>
				
				<view class="listBox" v-for="(item,index) in courseList" :key="index">
					
					<view class="head">
						<image src="../../static/images/head.png" style="width: 74rpx;height: 74rpx;border-radius: 50%;"></image>
						<image src="/static/images/vip_logo.png" class="vip_logo"></image>
					</view>
					
					<view class="content">
						<view class="title">
							<text>我是大悦悦</text>
							<text>Lv4</text>
						</view>
						
						<view class="time">
							7月8日
						</view>
						
						<view class="remarkBox">
							<view class="remark">
								消费后评分
							</view>
						</view>
						
						<view class="grade">
							<text>打分</text>
							<van-rate
							void-icon="smile"
							  value="4.5"
							  size="12"
							  allow-half="true"
							  color="#D81E06"
							  void-color="#eee"
							/>
						</view>
						
						<view class="describe">
							这也快放暑假了，疫情原因在家呆着也荒废了许多时间，想着借着放假不能再放纵自己了
						</view>
						
						<view class="imgListBox">
							<view class="imgList" v-for="(item,index) in imgList" :key="index">
								<image src="/static/images/evaluate_img.png" style="width: 200rpx;height: 200rpx;border-radius: 4rpx;"></image>
							</view>
							
							<view class="imgNumberBox">
								<image src="../../static/images/imglogo_fff.png" style="width: 21rpx;height: 17rpx;"></image>
								<text>6</text>
							</view>
						</view>
					</view>
					
				</view>
				
				<view class="lookMore">
					<text>查看全部精选点评</text>
					<van-icon name="arrow" />
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
				informTopList:[
					{title: '目标学习' , content: '本科' },
					{title: '适用阶段' , content: '冲刺阶段' },
					{title: '班型' , content: '1对1' }
				],
				informBottomList:[
					{ title : '有效期 ' , content : ['购买后90天内有效'] },
					{ title : '预约信息' , content : ['请您提亲1天预约，请您提前1天改约','预约时请您提供：人数、姓名、电话'] },
					{ title : '适用人数' , content : ['每张团购券不限使用人数'] },
					{ title : '规则提醒' , content : ['可与其他优惠同享'] },
					{ title : '温馨提示' , content : ['商户可能致电您，预约到店时间，请保持手机畅通。'] }
				],
				courseList: [1, 2, 3, 4],
				evaluateList:[
					{ id: 1 , content: '体验课 (4)' },
					{ id: 1 , content: '老师超赞 (5)' },
					{ id: 1 , content: '环境很好 (6)' }
				],
				imgList:[1,2,3],
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
