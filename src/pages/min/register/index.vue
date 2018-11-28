<template>
	<div>
		<!--个人中心顶部-->
<!-- 		<div class="l-login-top">
		    <a href="login.html">登录</a>
		</div> -->
		<!--登录-->
		<div class="l-login-box">
		    <div class="l-center l-login-border layui-anim layui-anim-up">
		        <div class="l-login-head">
		            <img src="../../../../static/images/logo.png" />
		            <p class="l-login-tit">注册</p>
		        </div>
		        <form @submit='registerSubmit'>
					<div class="layui-form login-form">
			            <div class="layui-form-item">
			                <i class="iconfont icon-user ico-1"></i>
			                <input 
			                	type="number" 
			                	name="phone" 
			                	maxlength="11" 
			                	placeholder="请输入手机号：" 
			                	class="layui-input login-inp"
			                	@input='telInput'>
			            </div>
			            <div class="layui-form-item">
			                <i class="iconfont icon-lock ico-1"></i>
			                <input 
			                	:type="eyeType" 
			                	name="password" 
			                	maxlength="12" 
			                	placeholder="请输入密码：" 
			                	class="password layui-input login-inp">
			                <i class="iconfont icon-eye eye" @click='switchEye'></i>
			            </div>
			            <div class="layui-form-item">
			                <i class="iconfont icon-lock ico-1"></i>
			                <input 
			                	type="text" 
			                	name="code"
			                	maxlength="6" 
			                	placeholder="请输入短信验证码：" 
			                	class="password layui-input login-inp">
			                <button 
			                	class="l-register-code btn-clear f14 line-normal"
			                	:disabled='!isCode'
			                	@click="sendCode">{{!isInit && !isCode ? time + 's' : '免费获取验证码'}}
			                </button>
			            </div>
			            <div class="layui-form-item mt-box">
			                <button formType="submit" class="layui-btn btn-clear main-bkc">立即注册</button>
			            </div>
			            <div class="l-register-word">
			                <p>点击注册代表你同意<span class="l-register-word__a"> [ 服务协议 ] </span></p>
			            </div>
					</div>
		        </form>
		    </div>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import Validator from '@/utils/strategy/controller/Validator'

import sendCode from '@/mixins/send-code/index.min'

import qs from 'qs'
import { fullApi } from '@/service/api'

export default {
	mixins: [share, sendCode],
	data() {
		return {
			eyeType: 'password',
		}
	},
	methods: {
		switchEye () {
			let eyeType = this.eyeType;
			if (eyeType === 'password') {
				this.eyeType = 'text';
			} else if (eyeType === 'text') {
				this.eyeType = 'password';
			}
		},
		// 手机输入事件
		telInput (e) {
			let value = e.mp.detail.value;
		    let validator = new Validator();
		    validator.add(value, [{ strategy: 'isPhoneNumber', errMsg: '手机号格式不正确'}]);
		    let errMsg = validator.start();
		    // 验证通过
		    if (!errMsg) {
		      	this.phone = value;
		    } else {
		    	this.phone = '';
		    }
		},
		sendCode () {
			let phone = this.phone;
			if (/(^1[3|5|8][0-9]{9}$)/.test(phone)) {
				this._timer(120);
				this.$flyio.get(fullApi.SEND_CODE, {
						phone: phone,
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
			} else {
				this.$toast('请先输入手机号', false);
			} 
		},
		register (formObj) {
			return new Promise(resolve => {
				this.$flyio.post(fullApi.REGISTER, qs.stringify({
						phone: formObj.phone,
						password: formObj.password,
						code: formObj.code
					}))
					.then(res => {
						resolve(res);
					});
			});
		},
		registerSubmit (e) {
			let value = e.mp.detail.value;
			// 前端验证
			let validator = new Validator();
			validator.add(value.phone, [
				{ strategy: 'isNonEmpty', errMsg: '手机号码不为空' },
				{ strategy: 'isPhoneNumber', errMsg: '手机号格式不正确' }
			]);
			validator.add(value.password, [
				{ strategy: 'isNonEmpty', errMsg: '新密码不为空' },
				{ strategy: 'minLength:6', errMsg: '密码必须6到12位' }
			]);
			validator.add(value.code, [
				{ strategy: 'isNonEmpty', errMsg: '验证码不为空' }
			]);
			let errMsg = validator.start();
			if (errMsg) {
				this.$toast(errMsg, false);
		    } else {	// 验证通过
		    	this.register(value)
		    		.then(res => {
		    			let { code, msg } = res.data;
		    			if (code == 1) {
		    				this.$toast(msg);
		    				wx.switchTab({
						    	url: '../user/main'
						    });
		    			} else {
		    				this.$toast(msg, false);
		    			}
		    		});
		    }
		}
	}
}
</script>

<style lang="less">
	@import '~@/style/min/layui.less';
	@import '~@/style/common/components/login.less';
	
	page {
		padding-bottom: 100px;
		background: white;
	}
	.l-login-top {
		justify-content: flex-end !important;
	}
	.l-register-code {
		width: 120px !important;
		background: transparent !important;
	}
</style>