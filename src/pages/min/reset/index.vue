<template>
	<div>
		<!--个人中心顶部-->
		<!-- <div class="l-login-top">
		    <a 
		    	href="/pages/min/login/main"
		    	hover-class='none'>登录</a>
		</div> -->
		<!--登录-->
		<div class="l-login-box">
		    <div class="l-center l-login-border layui-anim layui-anim-up">
		        <div class="l-login-head">
		            <img src="../../../../static/images/logo.png">
		            <p class="l-login-tit">忘记密码</p>
		        </div>
		        <form @submit='resetSubmit'>
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
			                	:type="newEyeType" 
			                	name="new_pwd" 
			                	maxlength="12" 
			                	placeholder="请输入新的密码：" 
			                	class="password layui-input login-inp">
			                <i class="iconfont icon-eye eye" @click='switchNewEye'></i>
			            </div>
			            <div class="layui-form-item">
			                <i class="iconfont icon-lock ico-1"></i>
			                <input 
			                	:type="confirmEyeType" 
			                	name="confirm_pwd" 
			                	maxlength="12" 
			                	placeholder="请再次输入密码：" 
			                	class="password layui-input login-inp">
			                <i class="iconfont icon-eye eye" @click='switchConfirmEye'></i>
			            </div>
						<div class="layui-form-item rel">
			                <i class="iconfont icon-lock ico-1"></i>
			                <input 
			                	type="text" 
			                	name="code"
			                	placeholder="请输入短信验证码：" 
			                	maxlength="6" 
			                	class="password layui-input login-inp">
			                <button 
			                	class="l-register-code btn-clear f14 line-normal"
			                	:disabled='!isCode'
			                	@click="sendCode">{{!isInit && !isCode ? time + 's' : '免费获取验证码'}}
			                </button>
			            </div>
			            <div class="layui-form-item mt-box">
			                <button formType="submit" class="layui-btn btn-clear main-bkc">立即重置</button>
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
			newEyeType: 'password',
			confirmEyeType: 'password',
			phone: '',
		}
	},
	methods: {
		_switchEye (eyeType) {
			return new Promise((resolve, reject) => {
				if (eyeType === 'password') {
					resolve();
				} else if (eyeType === 'text') {
					reject();
				}
			});
		},
		switchNewEye () {
			this._switchEye(this.newEyeType)
				.then(() => {
					this.newEyeType = 'text';
				})
				.catch(() => {
					this.newEyeType = 'password';
				});
		},
		switchConfirmEye () {
			this._switchEye(this.confirmEyeType)
				.then(() => {
					this.confirmEyeType = 'text';
				})
				.catch(() => {
					this.confirmEyeType = 'password';
				});
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
						type: '3'
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
		resetPwd (formObj) {
			return new Promise(resolve => {
				this.$flyio.post(fullApi.RESET_PWD, qs.stringify({
						phone: formObj.phone,
						password: formObj.new_pwd,
						repassword: formObj.confirm_pwd,
						code: formObj.code
					}))
					.then(res => {
						resolve(res);
					});
			});
		},
		resetSubmit (e) {
			let value = e.mp.detail.value;
			// 前端验证
			let validator = new Validator();
			validator.add(value.phone, [
				{ strategy: 'isNonEmpty', errMsg: '手机号码不为空' },
				{ strategy: 'isPhoneNumber', errMsg: '手机号格式不正确' }
			]);
			validator.add(value.new_pwd, [
				{ strategy: 'isNonEmpty', errMsg: '新密码不为空' },
				{ strategy: 'minLength:6', errMsg: '密码必须6到12位' }
			]);
			validator.add(value.confirm_pwd, [
				{ strategy: 'isNonEmpty', errMsg: '确认密码不为空' },
				{ strategy: 'minLength:6', errMsg: '密码必须6到12位' }
			]);
			validator.add(value.code, [
				{ strategy: 'isNonEmpty', errMsg: '验证码不为空' }
			]);
			let errMsg = validator.start();
			if (errMsg) {
				this.$toast(errMsg, false);
		    } else {	// 验证通过
		    	this.resetPwd(value)
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
		},
		resetReset () {
			this.phone = '';
		}
	},
	onShow () {
		this.resetReset();
	}
}
</script>

<style lang="less">
	@import '~@/style/min/layui.less';
	@import '~@/style/common/components/login.less';

	page {
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