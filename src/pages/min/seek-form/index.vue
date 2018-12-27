<template>
	<div>
		<!--表单-->
		<div class="l-r-tf-box" v-if="!isLoad">
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
							<!-- <picker 
				            	class='layui-input layui-input--picker fl' 
				            	mode="multiSelector" 
				            	:range='tradeArray'
				            	range-key='cname'
				            	name='trade'
				            	@change='changeTrade'
				            	@columnchange='changeColTrade'>
				                  <div v-if='firstCat'>请选择</div>
				                  <div v-else>{{tradeArray[0][multiCatIndex[0]].cname}}{{tradeArray[1].length != 0 ? '-'+tradeArray[1][multiCatIndex[1]].cname : ''}}</div>
				            </picker> -->
				            <div 
				            	class="layui-input layui-input--picker fl"
				            	@click='openTradePicker'>
								<div v-if='firstCat'>请选择</div>
								<div v-else>{{tradeArray[0][trade_value[0]].cname}}{{tradeArray[1].length != 0 ? '-'+tradeArray[1][trade_value[1]].cname : ''}}</div>
				            </div>
			            	<custom-picker
				            	:picker-show='trade_picker_show'
								:value='trade_value'
								:data='tradeArray'
								field-name='cname'
								@pickerChange='tradeChange'
								@setPickerStorage='setTradePickerStorage'
								@close='closeTradePicker' />
				            <i class="iconfont icon-arrow-right icon--fix fr g6 mr-10"></i>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">期望区域</label>
						<div class="layui-input-block clearfix">
							<!-- <picker 
				            	class='layui-input layui-input--picker fl' 
				            	mode="multiSelector" 
				            	:range='regionArray'
				            	range-key='area_name'
				            	name='region'
				            	@change='changeRegion'
				            	@columnchange='changeColRegion'>
				            	  <div v-if='firstRegion'>请选择</div>
				                  <div v-else>{{regionArray[0][multiIndex[0]].area_name}}{{regionArray[1].length != 0 ? '-'+regionArray[1][multiIndex[1]].area_name : ''}}{{regionArray[2].length != 0 ? '-'+regionArray[2][multiIndex[2]].area_name : ''}}</div>
				            </picker> -->
				            <div 
				            	class="layui-input layui-input--picker fl"
				            	@click='openRegionPicker'>
								<div v-if='firstRegion'>请选择</div>
								<div v-else>{{regionArray[0][region_value[0]].area_name}}{{regionArray[1].length != 0 ? '-'+regionArray[1][region_value[1]].area_name : ''}}{{regionArray[2].length != 0 ? '-'+regionArray[2][region_value[2]].area_name : ''}}</div>
				            </div>
			            	<custom-picker
				            	:picker-show='region_picker_show'
								:value='region_value'
								:data='regionArray'
								field-name='area_name'
								@pickerChange='regionChange'
								@setPickerStorage='setRegionPickerStorage'
								@close='closeRegionPicker' />
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
							<div
								v-show='!show_textarea'
								class="layui-textarea">{{textarea_value ? textarea_value : '请填写店铺信息'}}</div>
							<textarea 
								v-show="show_textarea"
								name="desc" 
								placeholder="请填写店铺信息" 
								class="layui-textarea"
								@input='textareaInput'></textarea>
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
		<ko-loading :is-load='isLoad'></ko-loading>
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import nextLevel from '@/mixins/next-level/index'

import Validator from '@/utils/strategy/controller/Validator'

import util from '@/utils/index'

import mock from '@/pages/mock'
import qs from 'qs'
import { fullApi, pgjApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'
import customPicker from '@/components/core/min/custom-picker/index'

let { tradeArray, regionArray, orderArray } = mock;

function multIdx(newVal) {
	let length = newVal.length;
	for (let i = length - 1; i >= 0; i--) {
		if (newVal[i] == null || newVal[i] == 'undefined') {
			newVal[i] = 0;
		} 
	}
}

export default {
	mixins: [share, nextLevel],
	data() {
		return {
			tradeArray,
			regionArray,
			tradeName: '',
			regionName: '',
			multiIndex: [0,0,0],
			multiCatIndex: [0,0],
			firstRegion: true,
			firstCat: true,
			isLoad: true,
			region_picker_show: false,
			region_value: [0, 0, 0],
			trade_picker_show: false,
			trade_value: [0, 0],
			show_textarea: true,
			textarea_value: '请填写店铺信息',
		}
	},
	watch: {
		multiIndex: multIdx,
		multiCatIndex: multIdx,
		region_picker_show: function(newVal, oldVal) {
			if (newVal) {
				this.show_textarea = false;
			} else {
				setTimeout(() => {
					this.show_textarea = true;
				}, 250);
			}
		},
		trade_picker_show: function(newVal, oldVal) {
			if (newVal) {
				this.show_textarea = false;
			} else {
				setTimeout(() => {
					this.show_textarea = true;
				}, 250);
			}
		}
	},
	methods: {
		init () {
			this.$flyio.get(fullApi.REGION)
		    	.then(res => {
		    		let newRegionArray = [],
		    			newCatArray = [];

		    		let { cat, region } = res.data;
		    		newCatArray.push(cat);
		    		newCatArray.push(cat[0].pid_value);

		    		newRegionArray.push(region);
		    		newRegionArray.push(region[0].child);
		    		newRegionArray.push(region[0].child[0].child);

		    		this.tradeArray = newCatArray;
		    		this.regionArray = newRegionArray;
		    		this.isLoad = false;
		    	});
		},
		textareaInput (e) {
			let value = e.mp.detail.value;
			this.textarea_value = value;
		},
	    // changeTrade (e) {
	    // 	let value = e.mp.detail.value;
	    // 	this.multiCatIndex = value;
	    // 	this.firstCat = false;
	    // },
	    // changeColTrade (e) {
	    // 	let detail = e.mp.detail,
	    // 		{ column, value } = detail;

	    // 	this.nextLevel(this.tradeArray, 'pid_value', detail.column, detail.value);
	    // },
	    // changeRegion (e) {
	    // 	let value = e.mp.detail.value;
	    // 	this.multiIndex = value;
	    // 	this.firstRegion = false;
	    // },
	    // changeColRegion (e) {
	    // 	let detail = e.mp.detail,
	    // 		{ column, value } = detail;

	    // 	this.nextLevel(this.regionArray, 'child', detail.column, detail.value);
	    // },
	    openTradePicker () {
	    	this.trade_picker_show = true;
	    },
	    closeTradePicker () {
	    	this.trade_picker_show = false;
	    },
	    setTradePickerStorage() {
		    wx.setStorageSync('trade_picker_value2', this.trade_value);
		},
		tradeChange(e) {
	    	this.firstCat = false;
		    let value = e.mp.detail.value;
		    this.trade_value = value;
		    // 更新下一级
		    try {
		      let trade_picker_value = wx.getStorageSync('trade_picker_value2');
		      if (trade_picker_value) {
		        // 对比数组，找出变更的列
		        let result = util.compareArray(trade_picker_value, value);
		        if (result) {
		          if (typeof result == 'object') {
		            let { index, value } = result;
		            this.nextLevel(this.tradeArray, 'pid_value', index, value);
		          }
		        }
		      }
		      wx.setStorageSync('trade_picker_value2', value);
		    } catch (e) { }
		},
	    openRegionPicker () {
	    	this.region_picker_show = true;
	    },
	    closeRegionPicker () {
	    	this.region_picker_show = false;
	    },
	    setRegionPickerStorage() {
		    wx.setStorageSync('region_picker_value2', this.region_value);
		},
	    regionChange(e) {
	    	this.firstRegion = false;
		    let value = e.mp.detail.value;
		    this.region_value = value;
		    // 更新下一级
		    try {
		      let region_picker_value = wx.getStorageSync('region_picker_value2');
		      if (region_picker_value) {
		        // 对比数组，找出变更的列
		        let result = util.compareArray(region_picker_value, value);
		        if (result) {
		          if (typeof result == 'object') {
		            let { index, value } = result;
		            this.nextLevel(this.regionArray, 'child', index, value);
		          }
		        }
		      }
		      wx.setStorageSync('region_picker_value2', value);
		    } catch (e) { }
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
				let lastTradeIndex = this.trade_value.length - 1,
					lastRegionIndex = this.region_value.length - 1;

				value.cid = this.tradeArray[lastTradeIndex][this.trade_value[lastTradeIndex]].cid;
				value.town_id = this.regionArray[lastRegionIndex][this.region_value[lastRegionIndex]].id;

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
							wx.setStorageSync('seek_add_success', true);	// 添加成功
						}
					});
			}
		},
		seekReset () {
			this.firstRegion = true;
			this.firstCat = true;
		}
	},
	components: {
		'ko-loading': loading,
		'custom-picker': customPicker
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
	.ko-layer {
	  opacity: 0.1 !important;
	}
</style>