<template>
	<view class="course">
		<view class="course_main">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" autoplay="true" interval="2000" duration="300" style="height: 400rpx;">
							<swiper-item>
								<view class="swiper-item uni-bg-red">
									<image src="/static/images/-e-banner.png" style="width: 100%;height: 400rpx;"></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">
									<image src="/static/images/-e-banner.png" style="width: 100%;height: 400rpx;"></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">
									<image src="/static/images/-e-banner.png" style="width: 100%;height: 400rpx;"></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>


			<view class="course_title">
				<view class="main">
					<view class="title">
						托福暑假提高型四人班
					</view>
					<view class="price">
						<text>￥</text>34800 <text style="text-decoration: line-through;margin-left: 8rpx;">￥34800</text>
					</view>
				</view>

				<view class="share">
					<image src="/static/images/groupPurchase_share.png" style="width: 31rpx;height: 34rpx;margin-bottom: 10rpx;"></image>
					<text>分享</text>
					
					<view class="hit_box">
						<image src="/static/images/share_hit.png" style="width: 200rpx;height: 55rpx;"></image>
						<view>点击这里分享给朋友</view>
					</view>
				</view>
			</view>


			<view class="course_type">
				<view>
					<image src="/static/images/crowd.png" style="width: 36rpx;height: 36rpx;"></image>
					<view class="top">适合人群</view>
					<view class="bottom">青少年</view>
				</view>
				
				<view>
					<image src="/static/images/blackboard.png" style="width: 36rpx;height: 36rpx;"></image>
					<view class="top">适合基础</view>
					<view class="bottom">初级</view>
				</view>
				
				<view>
					<image src="/static/images/lookbook.png" style="width: 36rpx;height: 36rpx;"></image>
					<view class="top">上课人数</view>
					<view class="bottom">4人以下</view>
				</view>
			</view>


			<view class="classMsg">
				
				<view class="title">
					班级信息 <text>(1)</text>
				</view>
				
				<view class="main">
					
					<view class="title">
						<text style="color: #000;font-size: 26rpx;font-weight: bold;">托福暑假提高型四人班</text>
						<text style="color: #999999;font-size: 20rpx;font-weight: normal;">169小时</text>
					</view>
					
					<view class="msgTitle">
						班级详情
					</view>
					
					<view class="listBox">
						
						<view class="list" v-for="(item,index) in classList" :key="index">
							<view class="left">
								{{item.title}}
							</view>
							<view class="mid">
								{{item.num}}
							</view>
							<view class="right">
								￥{{item.price}}
							</view>
						</view>
						
					</view>
					
					<view class="allPrice_old">
						<view class="left">
							总价：
						</view>
						<view class="right">
							￥56000
						</view>
					</view>
					
					<view class="allPrice_now">
						<view class="left">
							售价：
						</view>
						<view class="right">
							￥40000
						</view>
					</view>
					
					<view class="classTime">
						上课时间
					</view>
					
					<view class="hit_top">
						报名满3人后7个工作日內开班
					</view>
					
					<view class="hit_bottom">
						人满即开班
					</view>
					
				</view>
				
			</view>


			<view class="fitMerchant">
				
				<view class="title">
					适用商户
				</view>
				
				<view class="main">
					
					<view class="left">
						<text>红果托福雅思SAT国际课程培训机构(顺义校区)</text>
					<van-rate v-model="3.5" size="30rpx" allow-half void-icon="star" readonly color="#ff6634" void-color="#dddddd" />
					</view>
										
					<view class="right">
						<image src="/static/images/store_phone.png" style="width: 30rpx;height: 36rpx;"></image>
					</view>
					
				</view>
				
				<view class="site">
					<van-icon name="location" size="27rpx" color="#bbbbbb" />
					<text style="margin-left: 20rpx;">顺义祥云小镇北区10号楼506室</text>
				</view>
				
			</view>


			<van-tabs :active="active" color="#ec6b3d" >
			  <van-tab title="课程详情">
				<view class="classDetails">
				  	<view class="top_title">
				  		适用对象
				  	</view>
				  	<view class="top_main" v-for="(item,index) in tabTopList" :key="index">
				  		<view class="left"></view>
				  						<view class="mid">
				  							{{item.content}}
				  						</view>
				  	</view>
				
					<view class="bottom_title">
						学习目标
					</view>
					
					<view class="bottom_main">
						80分以下学员，一期课提高10分。
					</view>
					
				</view>
			  </van-tab>
			  <van-tab title="购买说明">内容 2</van-tab>
			  <van-tab title="网友点评">内容 3</van-tab>
			</van-tabs>
			
			
			<view class="trait">
				
				<view class="title">
					课程特色
				</view>
				
				<view class="main">
					1.精英教师全程陪同; 2.考神助教辅导陪练; 3.全职教师团队，随时答疑;  4.三次模考查疑补漏，定向突破; 5.高强度脱产学习，脱胎换骨; 6.早读+自 习均有值班老师为学员布置学习任务，答疑解惑; 7.所有教师当日授课不超三节，课堂反馈当日完成不隔夜;全职教师不跑校区，课后学员找得到;   8.教学团队对班课每周一次教研讨论,老师和助教一起沟通问题,  针对性定制教学方向； 9.学管老师每周与家长沟通，家校协力创造学习环境。10.四人小班,竞争与关注并存，高效与质量同在。
				</view>
				
			</view>
			
			
			<view class="explain">
				<view class="title">
					购买说明
				</view>
				
				<view class="time">
					<view class="left">
						有效期
					</view>
					<view class="right">
						2020.05.02至2020.09.01
					</view>
				</view>
				
				<view class="main" v-for="(item,index) in explainList" :key="index">
					<view class="left">
						{{item.left}}
					</view>
					<view class="right">
						{{item.right}}
					</view>
				</view>
			</view>
			
			<view class="comment">
				
				<view class="title">
					网友点评 (7)
				</view>
				
				<view class="list" v-for="(item,index) in commentList" :key="index">
					
					<view class="head">
						<image src="../../static/images/head.png" style="width: 96rpx;height: 96rpx;border-radius: 50%;"></image>
					</view>
					
					<view class="content">
						
						<view class="name">
							我是大悦悦
						</view>
						
						<view class="score">
							<text>打分</text>
							<van-rate v-model="3.5" size="22rpx" allow-half void-icon="star" readonly color="#d81e06" void-color="#dddddd" />
						</view>
						
						<view class="main">
							这也快放暑假了，疫情原因在家呆着也荒废了许多时间，想着借着放假不能再放纵自己了 无意中发现这家可以有体验课课，就报名体验课，校区...
						</view>
						
					</view>
					
				</view>
				
			</view>
			
		</view>



		<view class="course_bottom">
			<view class="course_bottom_left">
				<image src="/static/images/ICON/phone.png" style="width: 32rpx;height: 32rpx;"></image><text>电话</text>
			</view>
			<view class="course_bottom_main" style="background-color: #FF6634;font-size: 35rpx;" @click="go_appoint">
				预约试听
			</view>
			<view class="course_bottom_main" style="background-color: #48B4B8;" @click="go_payment">
				<text style="font-size: 24rpx;margin-bottom: 5rpx;">￥888.8</text>
				<text style="font-size: 26rpx;">立即购买</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classList:[
					{title:'正课',num:'40',price:'40000'},
					{title:'辅导',num:'40',price:'16000'},
					{title:'全真模考',num:'2',price:'3000'},
					{title:'晨读',num:'27',price:'0'},
					{title:'自习',num:'46',price:'0'}
				],
				 active: 0,
				 tabTopList:[
					 {content:'托福50分到80分段的学生'},
					 {content:'申请国际高中需要托福成绩的学员'},
					 {content:'有一定英语基础，无针对考试系统学习的学员'}
				 ],
				 explainList:[
					{left:'预约信息',right:'无需预约'}, 
					{left:'调课说明',right:'非特殊情况不可调课'}, 
					{left:'其它说明',right:'更多详情请联系客服，获得学管老师一对一咨询服务。'} 
				 ],
				 commentList:[1,2,3],
			}
		},
		methods: {
			go_appoint() {
				uni.navigateTo({
					url: '/pagesA/appoint/appoint'
				})
			},
			go_payment() {
				uni.navigateTo({
					url: '/pagesA/payment/payment'
				})
			},

		}
	}
</script>

<style>
	@import url("./style/course.css");
</style>
