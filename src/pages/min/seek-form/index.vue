<template>
	<div>
		<!--表单-->
		<div class="l-r-tf-box">
			<form
				@submit='seekSubmit'
				@reset='seekReset'>
				<div class="layui-form">
					<div class="layui-form-item">
						<label class="layui-form-label">标题</label>
						<div class="layui-input-block">
							<input 
								type="text" 
								name="title" 
								placeholder="请输入标题" 
								class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">行业</label>
						<div class="layui-input-block clearfix">
							<picker 
				            	class='layui-input layui-input--picker fl' 
				            	mode="selector" 
				            	:range='tradeArray'
				            	range-key='cname'
				            	name='trade'
				            	@change='changeTrade'>
				                  <div>{{tradeName != '' ? tradeName : '请选择'}}</div>
				            </picker>
				            <i class="iconfont icon-arrow-right icon--fix fr g6 mr-10"></i>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">期望区域</label>
						<div class="layui-input-block clearfix">
							<picker 
				            	class='layui-input layui-input--picker fl' 
				            	mode="selector" 
				            	:range='regionArray'
				            	range-key='area_name'
				            	name='region'
				            	@change='changeRegion'>
				                  <div>{{regionName != '' ? regionName : '请选择'}}</div>
				            </picker>
				            <i class="iconfont icon-arrow-right icon--fix fr g6 mr-10"></i>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">具体面积</label>
						<div class="layui-input-block clearfix">
							<input 
								type="text" 
								name="area" 
								maxlength='20' 
								placeholder="请填写" 
								class="layui-input fl">
							<span class="l-rel-sapan fr">平方米</span>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">期望租金</label>
						<div class="layui-input-block clearfix">
							<input 
								type="text" 
								name="rent" 
								maxlength='20' 
								placeholder="请填写" 
								class="layui-input fl">
							<span class="l-rel-sapan fr">元/月</span>
						</div>
					</div>
					<div class="layui-form-item layui-form-text">
						<label class="layui-form-label">详细信息</label>
						<div class="layui-input-block">
							<textarea 
								name="desc" 
								placeholder="请填写店铺信息" 
								class="layui-textarea"></textarea>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">联系人</label>
						<div class="layui-input-block">
							<input 
								type="text" 
								name="person" 
								placeholder="请填写" 
								class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">手机号码</label>
						<div class="layui-input-block">
							<input 
								type="number" 
								name="phone" 
								maxlength='11' 
								placeholder="请填写"
								class="layui-input">
						</div>
					</div>
					<div class="layui-form-item" style="border: 0;">
						<div class="layui-input-block">
							<button formType='submit' class="layui-btn btn-clear main-bkc">立即提交</button>
							<button formType='reset' class="layui-btn layui-btn-primary btn-clear">重置</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import Validator from '@/utils/strategy/controller/Validator'

import mock from '@/pages/mock'
import qs from 'qs'
import { fullApi, pgjApi } from '@/service/api'

let { tradeArray, regionArray, orderArray } = mock;

export default {
	data() {
		return {
			tradeArray,
			regionArray,
			tradeName: '',
			regionName: '',
		}
	},
	methods: {
		init () {
			this.$flyio.get(fullApi.ASSIGN_INIT)
		    	.then(res => {
		    		let { cat, region } = res.data;
		    		this.tradeArray = cat;
		    		this.regionArray = region;
		    	});
		},
		changeTrade (e) {
	    	let value = e.mp.detail.value,
	    		_name = this.tradeArray[value].cname;

	    	this.tradeName = _name;
	    },
	    changeRegion (e) {
	    	let value = e.mp.detail.value,
	    		_name = this.regionArray[value].area_name;

	    	this.regionName = _name;
	    },
	    _submit (formObj) {
	    	return new Promise(resolve => {
	    		this.$flyio.post(fullApi.SEEK_ADD, qs.stringify({
					title: formObj.title,
					linkman: formObj.person,
					phone: formObj.phone,
					rent: formObj.rent,
					description: formObj.desc,
					area: formObj.area,
					cid: formObj.cid,
					town_id: formObj.town_id
				}))
					.then(res => {
						resolve(res);
					});
	    	});
	    },
	    seekSubmit (e) {
			let value = e.mp.detail.value;
			// 前端验证
			let validator = new Validator();
			validator.add(value.title, [{ strategy: 'isNonEmpty', errMsg: '标题不为空' }]);
			validator.add(value.trade, [{ strategy: 'isNonEmpty', errMsg: '请选择行业' }]);
			validator.add(value.region, [{ strategy: 'isNonEmpty', errMsg: '请选择区域' }]);
			validator.add(value.area, [{ strategy: 'isNonEmpty', errMsg: '面积不为空' }]);
			validator.add(value.rent, [{ strategy: 'isNonEmpty', errMsg: '租金不为空' }]);
			validator.add(value.desc, [{ strategy: 'isNonEmpty', errMsg: '详细信息不为空' }]);
			validator.add(value.person, [{ strategy: 'isNonEmpty', errMsg: '联系人不为空' }]);
			validator.add(value.phone, [{ strategy: 'isNonEmpty', errMsg: '手机号不为空' }]);
			let errMsg = validator.start();
			if (errMsg) {
				this.$toast(errMsg, false);
			} else {
				value.cid = this.tradeArray[value.trade].cid;
				value.town_id = this.regionArray[value.region].id;
				this._submit(value)
					.then(res => {
						let { code, msg } = res.data;
						if (code == 1) {
							this.$toast(msg);
							wx.setStorageSync('seek_add_success', true);	// 添加成功
							wx.navigateBack({
							    delta: 1
							});
						}
					});
			}
		},
		seekReset () {
			this.tradeName = '';
			this.regionName = '';
		}
	},
	created () {
		this.init();
	},
	onShow () {
		try {
			let seek_add_success = wx.getStorageSync('seek_add_success');
			if (seek_add_success) {
				this.seekReset();
			}
		} catch (e) {}
	}
}
</script>

<style lang="less">
	@import '~@/style/min/layui.less';
	@import '~@/style/common/components/form.less';

	page {
		background: white;
	}
	.iconfont {
		font-size: 16px !important;
	}

	.l-r-tf-box {
		margin-top: 10px !important;
	}

</style>