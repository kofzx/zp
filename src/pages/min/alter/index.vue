<template>
	<div>
		<div class="l-set-pagebox">
		    <form @submit='alterSubmit'>
				<div class="layui-form login-form">
			        <div class="layui-form-item">
			            <i class="iconfont icon-lock ico-1"></i>
			            <input 
			            	:type="oldEyeType" 
			            	name="old_pwd" 
			            	maxlength="12" 
			            	placeholder="请输入原始密码：" 
			            	class="password layui-input login-inp">
			            <i class="iconfont icon-eye eye" @click="switchEye('oldEyeType')"></i>
			        </div>
			        <div class="layui-form-item">
			            <i class="iconfont icon-lock ico-1"></i>
			            <input 
			            	:type="newEyeType" 
			            	name="new_pwd" 
			            	maxlength="12" 
			            	placeholder="请输入新的密码：" 
			            	class="password layui-input login-inp">
			            <i class="iconfont icon-eye eye" @click="switchEye('newEyeType')"></i>
			        </div>
			        <div class="layui-form-item">
			            <i class="iconfont icon-lock ico-1"></i>
			            <input 
			            	:type="confirmEyeType" 
			            	name="confirm_pwd" 
			            	maxlength="12" 
			            	placeholder="请再次输入新密码：" 
			            	class="password layui-input login-inp">
			            <i class="iconfont icon-eye eye" @click="switchEye('confirmEyeType')"></i>
			        </div>
			        <div class="layui-form-item mt-box">
			            <button formType="submit" class="layui-btn btn-clear main-bkc">确定</button>
			        </div>
				</div>
		    </form>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'

import Validator from '@/utils/strategy/controller/Validator'

import util from '@/utils/index'
import qs from 'qs'
import { fullApi } from '@/service/api'

export default {
	mixins: [share],
	data() {
		return {
			oldEyeType: 'password',
			newEyeType: 'password',
			confirmEyeType: 'password',
		}
	},
	methods: {
		switchEye (eyeType) {
			this[eyeType] = util.changeEye(this[eyeType]);
		},
		_submit (formObj) {
			return new Promise(resolve => {
				this.$flyio.post(fullApi.UPDATE_PWD, qs.stringify({
						old_password: formObj.old_pwd,
						new_password: formObj.new_pwd,
						repassword: formObj.confirm_pwd
					}))
					.then(res => {
						resolve(res);
					});
			});
		},
		alterSubmit (e) {
			let value = e.mp.detail.value;
			// 前端验证
			let validator = new Validator();
			validator.add(value.old_pwd, [
				{ strategy: 'isNonEmpty', errMsg: '原密码不为空' },
				{ strategy: 'minLength:6', errMsg: '密码必须6到12位' }
			]);
			validator.add(value.new_pwd, [
				{ strategy: 'isNonEmpty', errMsg: '新密码不为空' },
				{ strategy: 'minLength:6', errMsg: '密码必须6到12位' }
			]);
			validator.add(value.confirm_pwd, [
				{ strategy: 'isNonEmpty', errMsg: '确认密码不为空' },
				{ strategy: 'minLength:6', errMsg: '密码必须6到12位' }
			]);
			let errMsg = validator.start();
			if (errMsg) {
				this.$toast(errMsg, false);
		    } else {	// 验证通过
		    	this._submit(value)
		    		.then(res => {
		    			let { code, msg } = res.data;
		    			if (code == 1) {
		    				this.$toast(msg, true, 1000)
		    					.then(() => {
		    						wx.navigateBack({
								    	delta: 1
								    });
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
</style>