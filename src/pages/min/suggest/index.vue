<template>
	<div>
		<div class="l-set-pagebox">
		    <form 
		    	class="layui-form"
		    	@submit='suggestSubmit'
		    	@reset='suggestReset'>
		        <div class="layui-form-item">
		            <div class="layui-input-block">
		                <radio-group name='sugType'>
		                	<label class="label-radio"><radio value='1' />意见建议</label>
		                	<label class="label-radio"><radio value='2' />投诉</label>
		                	<label class="label-radio"><radio value='3' />其他</label>
		                </radio-group>
		            </div>
		        </div>
		        <div class="layui-form-item layui-form-text">
		            <div class="layui-input-inline">
		                <textarea name="desc" placeholder="请输入您的建议" class="layui-textarea"></textarea>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <div class="layui-input-block">
		                <button 
		                	class="layui-btn btn-clear bgc-ffae1a"
		                	form-type="submit">立即提交</button>
		                <button
		                	class="layui-btn btn-clear layui-btn-primary"
		                	form-type="reset">重置</button>
		            </div>
		        </div>
		    </form>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'

import Validator from '@/utils/strategy/controller/Validator'

import qs from 'qs'
import { fullApi, pgjApi } from '@/service/api'

export default {
	mixins: [share],
	data() {
		return {
			isReset: true
		}
	},
	methods: {
		_submit (formObj) {
			return new Promise(resolve => {
	    		this.$flyio.post(fullApi.SUGGEST, qs.stringify({
					suggest_type: formObj.sugType,
					desc: formObj.desc
				}))
					.then(res => {
						resolve(res);
					});
	    	});
		},
		suggestSubmit (e) {
			let value = e.mp.detail.value;
			let validator = new Validator();
			validator.add(value.sugType, [{ strategy: 'isNonEmpty', errMsg: '请选择意见类型' }]);
			validator.add(value.desc, [{ strategy: 'isNonEmpty', errMsg: '请填写您的建议' }]);
			let errMsg = validator.start();
			if (errMsg) {
				this.$toast(errMsg, false);
			} else {
				this._submit(value)
					.then(res => {
						let { code, msg } = res.data;
						if (code == 1) {
							wx.setStorageSync('assign_add_success', true);	// 添加成功
							this.$toast(msg)
								.then(() => {
									wx.navigateBack({
									    delta: 1
									});
								});
						}
					});
			}
		},
		suggestReset () {

		}
	},
	onShow () {
		try {
			let suggest_add_success = wx.getStorageSync('suggest_add_success');
			if (suggest_add_success) {
				this.suggestReset();
			}
		} catch (e) {}
	}
}
</script>

<style lang="less">
	@import '~@/style/min/layui.less';

	.l-set-pagebox{
	    background-color: #fff;
	    padding-bottom: 1px;
	    padding-top: 5px;
	}
	.l-set-pagebox .layui-input-block{
	    margin-left: 10px;
	}
	.l-set-pagebox .layui-form-item .layui-input-inline{
		width: 95%;
	    margin: 0 auto;
	}
	.l-set-pagebox .layui-textarea{
	    height: 250px;
	}
	.l-set-pagebox .login-form{
	    margin-top: 0;
	}
	radio {
		position: relative;
		left: 2px;
	}
	.label-radio {
		margin: 6px 10px 0 0;
	}
</style>