<template>
	<div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a
		            	href=""
		            	hover-class='none'
		             	class="alink"   
		             	style="padding-right: 35px"
		             	@click='openTap'>
		             	<p>头像</p>
		             	<img :src="headimg ? img_url + headimg : '/static/images/header.png'">
		             	<i class="iconfont icon-arrow-right"></i>
		            </a>
		            <a hover-class='none' class="alink">
		            	<p>用户名</p>
		            	<!-- <p class="input-mask" v-show='user_input' @click="showInput('user_input')">{{username == null ? '' : username}}</p> -->
		            	<input 
		            		v-show='true'
		            		type="text"
		            		:value='username'
		            		class="input-real"
		            		@confirm='userBlur'>
		            </a>
		            <a hover-class='none' class="alink">
		            	<p>手机号码</p>
		            	<!-- <p class="input-mask" v-show='phone_input' @click="showInput('phone_input')">{{phone}}</p> -->
		            	<input 
							v-show='true'
		            		type="number"
		            		:value='phone'
		            		maxlength="11" 
		            		class="input-real"
		            		@blur='phoneBlur'>
		            </a>
		        </div>
		    </div>
		</div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a
		            	href="/pages/min/alter/main"
		            	hover-class='none'
		             	class='alink'>
		             	<p>修改密码</p>
		             	<i class="iconfont icon-arrow-right icon-arrow-right--fix"></i>
		             </a>
		            <a
		            	href='/pages/min/suggest/main'
		            	hover-class='none'
		             	class='alink'>
		             	<p>意见反馈</p>
		             	<i class="iconfont icon-arrow-right icon-arrow-right--fix"></i>
		             </a>
		        </div>
		    </div>
		</div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a 
		            	href="/pages/min/about/main" 
		            	hover-class='none'
		            	class='alink'>
		            	<p>关于我们</p>
		            	<i class="iconfont icon-arrow-right icon-arrow-right--fix"></i>
		            </a>
		        </div>
		    </div>
		</div>
		<!-- 选择拍照/相册 -->
		<ko-mask
			:is-mask='is_photo_mask'
			:is-close='isClose'
			@onMask='onMask' />
		<div 
			class="select-photo"
			v-show='is_photo_mask'>
			<div class="select-photo__shot" @click='onShot'>拍照</div>
			<div class="select-photo__album" @click='onAlbum'>选择相册</div>
		</div>
		<!-- 验证码 -->
		<ko-mask
			:is-mask='is_code_mask' />
		<form @submit='codeSubmit'>
			<div class='scope container' v-show='is_code_mask'>
			      <div class='full tips'>请输入验证码:</div>
			      <div class='check-pwd-box'>
			        <input 
			        	class='check-pwd-input'
			        	type="number" 
			        	name='code' 
			        	maxlength='6' />
			      </div>
			      <div class="container row no-stretch" style="width: 86%;">
			      	<button 
			      		class='login-btn btn-clear' 
			      		formType='submit'
			      		style="padding: 0 2em;">确认</button>
			      	<button 
			      		class='login-btn btn-clear' 
			      		style="width: 136.5px;" 
			      		:disabled='!isCode'
			      		@click='sendCode'>{{!isInit && !isCode ? time + 's' : '重新发送'}}</button>
			      </div>
			</div>
		</form>
	</div>
</template>

<script>
import share from '@/mixins/share/index'

import Validator from '@/utils/strategy/controller/Validator'
import sendCode from '@/mixins/send-code/index.min'

import util from '@/utils/index'

import qs from 'qs'
import { pgjOss, fullApi } from '@/service/api'

import mask from '@/components/layouts/ko-mask/index'

export default {
	mixins: [share, sendCode],
	data() {
		return {
			img_url: pgjOss,
			user_input: true,
			phone_input: true,
			username: '',
			phone: '',
			tempPhone: '',
			headimg: '',
			is_photo_mask: false,
			is_code_mask: false,
			isClose: true,
		}
	},
	components: {
		'ko-mask': mask
	},
	methods: {
		onMask (isMask) {
			this.is_photo_mask = isMask;
		},
		render () {
			let login = wx.getStorageSync('login') || {};
			this.$flyio.get(fullApi.USERINFO)
				.then(res => {
					console.log(res);
					if (res.data.code == 1) {
						let { headimg, phone, username } = res.data.data;
						this.username = username;
						this.phone = phone;
						this.headimg = headimg;

						login.name = username;
						login.phone = phone;
						login.headimg = headimg;
						wx.setStorageSync('login', login);
	 				}
				});
		},
		showInput (status) {
			setTimeout(() => {
				this[status] = false;
			}, 300);
		},
		sendCode () {
			this._timer(120);
			this.$flyio.get(fullApi.SEND_CODE, {
					phone: this.tempPhone,
					type: '2'
				})
				.then(res => {
					console.log(res);
					if (res.data.code) {
						this.$toast('发送成功');
					} else {
						this.$toast('发送失败', false);
					}
				});
		},
		userBlur (e) {
			this.user_input = true;		// 开启遮罩层
			let value = e.mp.detail.value;
			let validator = new Validator();
		    validator.add(value, [
		    	{ strategy: 'isNonEmpty', errMsg: '用户名不为空'}
		    ]);
		    let errMsg = validator.start();
		    if (errMsg) {
		      	this.$toast(errMsg, false);
		    } else if (this.username != value) {
				this.$flyio.post(fullApi.MODIFY_INFO, qs.stringify({
					username: value
				}))
				.then(res => {
					console.log(res);
					let { code, msg } = res.data;
					if (code == 1) {
						this.$toast(msg);
						this.render();
					}
				});
		    }
		},
		phoneBlur (e) {
			this.phone_input = true;		// 开启遮罩层
			let value = e.mp.detail.value;
			let validator = new Validator();
		    validator.add(value, [
		    	{ strategy: 'isNonEmpty', errMsg: '手机号不为空'},
		    	{ strategy: 'isPhoneNumber', errMsg: '手机号格式不正确'}
		    ]);
		    let errMsg = validator.start();
		    if (errMsg) {
		      	this.$toast(errMsg, false);
		    } else if (this.phone != value) {
		    	// 发送短信验证码
		    	this.tempPhone = value;
				this.sendCode();
				this.is_code_mask = true;
		    }
		},
		openTap () {
			this.is_photo_mask = true;
		},
		chooseImage (sourceType = ['album', 'camera']) {
			wx.chooseImage({
				count: 1,
				sourceType: sourceType,
				success: res => {
					console.log(res);
					this.$loading('更改中');
					util.uploadImg(fullApi.USERIMG, res.tempFilePaths[0], 'aaa')
						.then(res =>{
							console.log(res);
							let pic_path = JSON.parse(res.data).pic_path;

							this.headimg = pic_path;
							this.is_photo_mask = false;
							this.render();

				            this.$unLoading();
						})
						.catch(err => {
							console.log(err);
						});
				}
			});
		},
		onShot () {
			this.chooseImage(['camera']);
		},
		onAlbum () {
			this.chooseImage();
		},
		modifyInfo () {
			this.$flyio.post(fullApi.MODIFY_INFO, qs.stringify({
					phone: this.tempPhone
				}))
				.then(res => {
					console.log(res);

					let { code, msg } = res.data;
					if (code == 1) {
						this.$toast(msg);
						this.render();
						this.is_code_mask = false;
					}
				});
		},
		codeSubmit (e) {
			let code = e.mp.detail.value.code;
			console.log(code);
			if (code != '') {
				this.$flyio.post(fullApi.CHECKPHONE, qs.stringify({
						phone: this.tempPhone,
						code: code
					}))
					.then(res => {
						let { code, msg } = res.data;
		    			if (code == 1) {
		    				this.modifyInfo();
		    			} else {
		    				this.$toast(msg, false);
		    			}
					});
			} else {
				this.$toast('验证码不为空', false);
			}
		}
	},
	onLoad () {
		this.render();
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	.l-set-box , .l-r-tf-box{
	    background-color: #fff;
	    margin-top: 10px;
	}
	.l-set-list .alink{
		position: relative;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    padding: 15px 30px 15px 10px;
	    border-bottom: 1px solid #eaeaea;
	}
	.l-set-list .alink img {
	    width: 40px;
	    height: 40px;
	}
	.l-set-list .iconfont{
	    position: absolute;
	    font-size: 20px !important;
	    color: #999;
	    right: 10px;
	}
	.l-set-list .icon-arrow-right--fix {
		position: absolute;
		top: 11px;
	}
	.l-set-pagebox{
	    background-color: #fff;
	    padding-bottom: 1px;
	}
	.l-set-pagebox .layui-input-block{
	    margin-left: 10px;
	}
	.l-set-pagebox .layui-form-item .layui-input-inline{
	    margin: 0 0 0 6px;
	}
	.l-set-pagebox .layui-textarea{
	    height: 250px;
	}
	.l-set-pagebox .login-form{
	    margin-top: 0;
	}
	.input-mask,
	.input-real {
		flex: 1;
		text-align: right;
		height: 20px;
		line-height: 20px;
		min-height: 0;
		font-size: 14px;
	}
	.input-mask:hover {
		background-color: #f5f7f9;
	}
	.mask {
		opacity: 0.3;
	}
	.select-photo {
		position: fixed;
	    top: 34%;
	    left: 50%;
	    transform: translate3d(-50%,-50%,0);
	    z-index: 2;
	    background: white;
	    width: 110px;
	    border-radius: 4px;
	    padding: 0 10px;
	}
	.select-photo__shot,
	.select-photo__album {
		height: 25px;
		line-height: 25px;
		text-align: center;
		font-size: 14px;
		padding: 4px 0;
		color: #666;
	}
	.select-photo__shot {
		border-bottom: 1px dotted #d1d1d1;
	}
	// 授权
	.scope {
	  position: fixed;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);
	  width: 72%;
	  height: 140px;
	  background: white;
	  justify-content: space-around;
	  z-index: 2;
	  border-radius: 4px;
	}
	.scope .info-box {
	  width: 100%;
	  height: 50px;
	  justify-content: center;
	}
	.scope .info-box .txt {
	  color: @main;
	  font-size: 15px;
	}
	.login-btn {
	  font-size: 14px;
	  padding: 0 2.8em;
	  margin: 0;
	  line-height: 2.4;
	  border: 1px solid @main;
	  border-radius: 30px;
	  background: white;
	  color: @main;
	  margin-bottom: 10px;
	  margin-top: 10px;
	}
	.login-btn[disabled]:not([type]) {
	  background: white;
	}
	.tips {
	  color: @main;
	  position: relative;
	  top: 15px;
	  left: 20px;
	}
	.check-pwd-box {
	  width: 85%;
	  margin-top: 5px;
	  border-bottom: 1px solid @main;
	  color: #666;
	}
	.check-pwd-input {
	  text-align: center;
	}
</style>