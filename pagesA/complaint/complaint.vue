<template>
	<view class="complaint">
		
		<view class="complaint_main">
			<view class="complaint_main_title">
				请选择投诉类型
			</view>
			
			<view class="complaint_main_type">
				
				<view :class="{ 'complaint_main_typeList' : 'complaint_main_typeList' , 'active' : active == index }" @click="checkType(index)" v-for="(item,index) in typeList" :key="index">
					{{item.type}}
				</view>
				
			</view>
			
			<view class="complaint_main_title">
				详情
			</view>
			
			<view class="complaint_main_textarea">
				<textarea :value="content" @input="bindTextAreaBlur"/>
			</view>
			
		</view>
		
		<view :class="{ 'complaint_btn' : 'complaint_btn' , 'isOk' : !isOk }" @click="submit">
			提交
		</view>
		
	</view>
</template>

<script>
	import isCode from'../../verify/isCode.js'
	import { showToast , hideToast } from '../../verify/loading.js'
	
	export default {
		data() {
			return {
				typeList:[
					{ type:'内容不符合' },
					{ type:'存在欺诈行为' },
					{ type:'冒充他人' },
					{ type:'冒充他人' },
					{ type:'冒充他人' }
				],
				sid : 0 , //商家序号
				content: '' ,//投诉内容
				type:'',//投诉类型
				active: -1,
				isOk : false,
			}
		},
		methods: {
			checkType(index) {
				this.type = this.typeList[index].type
				this.active = index
				
				if( this.content ) {
					this.isOk = true
				}
			},
			bindTextAreaBlur(e) {
				// console.log( e.detail.value   )
			    this.content = e.detail.value        
				
				if( this.type ) {
					this.isOk = true
				}
			},
			submit() {
				console.log( this.content +'---'+ this.type )
				let _this = this
				
				if( !this.isOk ) return false
				//投诉建议
				 uni.getStorage({
					key: 'token',
					success: res => {
						
						showToast()
						uni.request({
							url: this.apiServer + 'api/school/Complaint',
							data: {
								sid: _this.sid,
								type:  _this.type,
								content: _this.content,
							},
							header: {
								'token': res.data,
							},
							method: 'POST',
							success(res) {
								console.log(res.data)
								isCode(res.data.code)
				
								uni.showToast({
									title: '提交成功',
									icon: 'none'
								});
								
								_this.type = ''
								_this.active = -1
								_this.content = ''
								_this.isOk = false
							}
						})
						hideToast()
						
					}
				})
			 
			}
		},
		onLoad( option ) {
			console.log( option.sid )
			this.sid = option.sid
			
			
		}
	}
</script>

<style>
@import url("./style/complaint.css");
</style>
