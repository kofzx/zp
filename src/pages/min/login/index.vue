<template>
	<div>
		<!--个人中心顶部-->
		<div class="l-login-top">
		    <a 
		    	href="/pages/min/register/main"
		    	hover-class='none'>注册</a>
		</div>
		<!--登录-->
		<div class="l-login-box">
		    <div class="l-center l-login-border layui-anim layui-anim-up">
		        <div class="l-login-head">
		            <img src="../../../../static/images/logo.png" alt="logo" title="logo">
		            <p class="l-login-tit">登录</p>
		        </div>
		        <form @submit='loginSubmit'>
		        	<div class="layui-form login-form">
			            <div class="layui-form-item">
			                <i class="iconfont icon-user ico-1"></i>
			                <input type="number" name="phone" maxlength="11" placeholder="请输入手机号：" class="layui-input login-inp">
			            </div>
			            <div class="layui-form-item">
			                <i class="iconfont icon-lock ico-1"></i>
			                <input :type="eyeType" name="password" maxlength="12" placeholder="请输入密码：" class="password layui-input login-inp">
			                <i 
			                	class="iconfont icon-eye eye"
			                	@click='switchEye'></i>
			            </div>
			            <div class="l-login-pw">
			            	<a 
			            		href="/pages/min/reset/main"
			            		hover-class='none'>忘记密码</a>
			            </div>
			            <div class="layui-form-item">
			                <button formType="submit" class="layui-btn main-bkc btn-clear">立即登录</button>
			            </div>
					</div>
		        </form>
		    </div>
		</div>
	</div>
</template>

<script>
import Validator from '@/utils/strategy/controller/Validator'

import qs from 'qs'
import { fullApi } from '@/service/api'

export default {
	data() {
		return {
			eyeType: 'password'
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
		login (formObj) {
			return new Promise(resolve => {
				this.$flyio.post(fullApi.LOGIN, qs.stringify({
						phone: formObj.phone,
						password: formObj.password
					}))
					.then(res => {
						resolve(res);
					});
			});
		},
		loginSubmit (e) {
			let value = e.mp.detail.value;
			// 前端验证
			let validator = new Validator();
			validator.add(value.phone, [
				{ strategy: 'isNonEmpty', errMsg: '手机号码不为空' },
				{ strategy: 'isPhoneNumber', errMsg: '手机号格式不正确' }
			]);
			validator.add(value.password, [
				{ strategy: 'isNonEmpty', errMsg: '密码不为空' },
				{ strategy: 'minLength:6', errMsg: '密码必须6到12位' }
			]);
			let errMsg = validator.start();
			if (errMsg) {
				this.$toast(errMsg, false);
		    } else {	// 验证通过
		    	this.login(value)
		    		.then(res => {
		    			let { code, msg, data } = res.data;
		    			if (code == 1) {
		    				this.$toast(msg);
						    wx.switchTab({
						    	url: '../user/main'
						    });
						    // 已登录
						    data.phone = value.phone;	// 后端没返回phone，自行加上
						    wx.setStorageSync('login', data);
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
		background: white;
	}
	.l-login-top {
		justify-content: flex-end !important;
	}
</style>