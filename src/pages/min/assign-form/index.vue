<template>
	<div>
		<!--多图片上传-->
		<div class="l-r-tf-box" style="margin-top: 0" v-if="!isLoad">
			<div class="l-center">
				<div class="layui-upload">
					<blockquote class="layui-elem-quote layui-quote-nm">
						预览图：
						<div class="layui-upload-list">
							<div 
								v-for='(item, index) in uploadPics'
								:key='index'
								class="layui-upload-img">
								<img class="upload-img" :src="item">
								<img 
									class='close' src='/static/images/close.png'
									@click='delImg(index)'>
							</div>
						</div>
					</blockquote>
					<p>请选择小于800KB的图片上传，请选择PNG/JPG格式文件</p>
					<button class="layui-btn btn-clear main-bkc" @click='uploadMult'>多图片上传</button>
				</div>
			</div>
		</div>
		<!--表单-->
		<div class="l-r-tf-box" v-if="!isLoad">
			<form 
				@submit='assignSubmit'
				@reset='assignReset'>
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
				            	:init-complete='trade_picker_show'
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
						<label class="layui-form-label">区域</label>
						<div class="layui-input-block clearfix">
							<!-- <picker 
				            	class='layui-input layui-input--picker fl' 
				            	mode="multiSelector" 
				            	:range='regionArray'
				            	range-key='area_name'
				            	name='region'
				            	@change='changeRegion'
				            	@columnchange='changeColRegion'>
				            	  <div v-show='firstRegion'>请选择</div>
				                  <div v-show='!firstRegion'>{{regionArray[0][multiIndex[0]].area_name}}{{regionArray[1].length != 0 ? '-'+regionArray[1][multiIndex[1]].area_name : ''}}{{regionArray[2].length != 0 ? '-'+regionArray[2][multiIndex[2]].area_name : ''}}</div>
				            </picker> -->
				            <div 
				            	class="layui-input layui-input--picker fl"
				            	@click='openRegionPicker'>
								<div v-if='firstRegion'>请选择</div>
								<div v-else>{{regionArray[0][region_value[0]].area_name}}{{regionArray[1].length != 0 ? '-'+regionArray[1][region_value[1]].area_name : ''}}{{regionArray[2].length != 0 ? '-'+regionArray[2][region_value[2]].area_name : ''}}</div>
				            </div>
			            	<custom-picker
				            	:picker-show='region_picker_show'
				            	:init-complete='region_picker_show'
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
						<label class="layui-form-label">详细地址</label>
						<div class="layui-input-block clearfix">
							<input 
								type="text" 
								name="addr" 
								placeholder="请填写" 
								:value='curLocation'
								class="layui-input fl">
							<div 
								class="l-rel-sapan fr"
								@click='fetchDing'><i class="iconfont icon-ding-normal main-color"></i></div>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">具体面积</label>
						<div class="layui-input-block clearfix">
							<input 
								type="number" 
								name="area" 
								maxlength='20' 
								placeholder="请填写" 
								class="layui-input fl">
							<span class="l-rel-sapan fr">平方米</span>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">租金</label>
						<div class="layui-input-block clearfix">
							<input 
								type="number" 
								name="rent" 
								maxlength='20' 
								placeholder="请填写" 
								class="layui-input fl">
							<span class="l-rel-sapan fr">元/月</span>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label clearfix">转让费</label>
						<div class="layui-input-block">
							<input 
								type="number" 
								name="assign_fee" 
								maxlength='20' 
								placeholder="请填写"
								class="layui-input fl">
							<span class="l-rel-sapan fr">元</span>
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
					<div class="layui-form-item">
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
import getLocation from '@/mixins/get-location/index.min'

import Validator from '@/utils/strategy/controller/Validator'

import util from '@/utils/index'

import mock from '@/pages/mock'
import qs from 'qs'
import { fullApi, pgjOss } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'
import customPicker from '@/components/core/min/custom-picker/index'

let { tradeArray, regionArray, areaArray, orderArray } = mock;

const defaultPlc = '请填写店铺信息';

function multIdx(newVal) {
	let length = newVal.length;
	for (let i = length - 1; i >= 0; i--) {
		if (newVal[i] == null || newVal[i] == 'undefined') {
			newVal[i] = 0;
		} 
	}
}

export default {
	mixins: [share, nextLevel, getLocation],
	data() {
		return {
			tradeArray,
			regionArray,
			uploadPics: [],
			tradeName: '',
			regionName: '',
			multiIndex: [0,0,0],
			multiCatIndex: [0,0],
			firstRegion: true,
			firstCat: true,
			isLoad: true,
			curLocation: '',
			region_picker_show: false,
			region_value: [0, 0, 0],
			trade_picker_show: false,
			trade_value: [0, 0],
			show_textarea: true,
			textarea_value: defaultPlc,
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
		_chooseImg () {
			let length = this.uploadPics.length;
			return new Promise(resolve => {
				wx.chooseImage({
					count: 6 - length,
					success: res => {
						resolve(res);
					}
				});
			});
		},
		// 提取上传图片的非完整路径
		_extractSrc () {
			let uploadPics = this.uploadPics;
			let newArr = uploadPics.map(value => {
				let index = value.indexOf('/Upload');
				let str = value.substring(index);

				return str;
			});
			return newArr;
		},
		uploadMult () {
			let length = this.uploadPics.length;
			if (length >= 6) {	// 最多上传6张图片
				this.$toast('最多上传6张图片', false);
			} else {
				this._chooseImg()
					.then(res => {
						let tempPics = res.tempFilePaths,
							lastUploadPics = this.uploadPics,
							loadCount = 0; 	// 已加载计数器
						let tempLen = tempPics.length;

						this.$loading('上传中');

						while (tempPics.length > 0) {
							let temp_path = tempPics.shift();
							// 上传
							util.uploadImg(fullApi.UPLOAD, temp_path, 'aaa')
								.then(res =>{
									console.log(res);
									let pic_path = pgjOss + JSON.parse(res.data).pic_path;
									if (pic_path) {
										loadCount++;
									}

									lastUploadPics.push(pic_path);

									if (tempLen == loadCount) {
						                this.$unLoading();
						            }
								})
								.catch(err => {
									console.log(err);
								});
						}

						this.uploadPics = lastUploadPics;
					});
			}
		},
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
		delImg (index) {
			this.uploadPics.splice(index, 1);
		},
		fetchDing () {
			this.getLocation()
				.then(res => {
					console.log(res);
					this.curLocation = res.result.address;
				})
				.catch(res => {
					console.log(res);
				});
		},
		textareaInput (e) {
			let value = e.mp.detail.value;
			this.textarea_value = value;
		},
		// changeTrade (e) {
	 //    	let value = e.mp.detail.value;
	 //    	this.multiCatIndex = value;
	 //    	this.firstCat = false;
	 //    },
	 //    changeColTrade (e) {
	 //    	let detail = e.mp.detail,
	 //    		{ column, value } = detail;

	 //    	this.nextLevel(this.tradeArray, 'pid_value', column, value);
	 //    },
	    // changeRegion (e) {
	    // 	let value = e.mp.detail.value;
	    // 	this.multiIndex = value;
	    // 	this.firstRegion = false;
	    // },
	    // changeColRegion (e) {
	    // 	let detail = e.mp.detail,
	    // 		{ column, value } = detail;

	    // 	this.nextLevel(this.regionArray, 'child', column, value);
	    // },
	    openTradePicker () {
	    	this.trade_picker_show = true;
	    },
	    closeTradePicker () {
	    	this.trade_picker_show = false;
	    },
	    setTradePickerStorage() {
		    wx.setStorageSync('trade_picker_value', this.trade_value);
		},
		tradeChange(e) {
	    	this.firstCat = false;
		    let value = e.mp.detail.value;
		    this.trade_value = value;
		    // 更新下一级
		    try {
		      let trade_picker_value = wx.getStorageSync('trade_picker_value');
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
		      wx.setStorageSync('trade_picker_value', value);
		    } catch (e) { }
		},
	    openRegionPicker () {
	    	this.region_picker_show = true;
	    },
	    closeRegionPicker () {
	    	this.region_picker_show = false;
	    },
	    setRegionPickerStorage() {
		    wx.setStorageSync('region_picker_value', this.region_value);
		},
	    regionChange(e) {
	    	this.firstRegion = false;
		    let value = e.mp.detail.value;
		    this.region_value = value;
		    // 更新下一级
		    try {
		      let region_picker_value = wx.getStorageSync('region_picker_value');
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
		      wx.setStorageSync('region_picker_value', value);
		    } catch (e) { }
		},
	    _submit (formObj) {
	    	return new Promise(resolve => {
	    		this.$flyio.post(fullApi.ASSIGN_ADD, qs.stringify({
					title: formObj.title,
					linkman: formObj.person,
					phone: formObj.phone,
					address: formObj.addr,
					rent: formObj.rent,
					description: formObj.desc,
					area: formObj.area,
					cid: formObj.cid,
					rent_money: formObj.assign_fee,
					town_id: formObj.town_id,
					pic_path: formObj.uploadPics
				}))
					.then(res => {
						resolve(res);
					});
	    	});
	    },
		assignSubmit (e) {
			let value = e.mp.detail.value;
			let uploadPics = this._extractSrc();
			// 前端验证
			let validator = new Validator();
			validator.add(uploadPics, [{ strategy: 'minLength:1', errMsg: '至少需上传一张图' }]);
			validator.add(value.title, [{ strategy: 'isNonEmpty', errMsg: '标题不为空' }]);
			validator.add(value.trade, [{ strategy: 'isNonEmpty', errMsg: '请选择行业' }]);
			validator.add(value.region, [{ strategy: 'isNonEmpty', errMsg: '请选择区域' }]);
			validator.add(value.addr, [{ strategy: 'isNonEmpty', errMsg: '详细地址不为空' }]);
			validator.add(value.area, [{ strategy: 'isNonEmpty', errMsg: '面积不为空' }]);
			validator.add(value.rent, [{ strategy: 'isNonEmpty', errMsg: '租金不为空' }]);
			validator.add(value.assign_fee, [{ strategy: 'isNonEmpty', errMsg: '转让费不为空' }]);
			validator.add(value.desc, [{ strategy: 'isNonEmpty', errMsg: '详细信息不为空' }]);
			validator.add(value.person, [{ strategy: 'isNonEmpty', errMsg: '联系人不为空' }]);
			validator.add(value.phone, [{ strategy: 'isNonEmpty', errMsg: '手机号不为空' }]);
			let errMsg = validator.start();
			if (errMsg) {
				this.$toast(errMsg, false);
			} else {
				let lastTradeIndex = this.trade_value.length - 1,
					lastRegionIndex = this.region_value.length - 1;

				value.uploadPics = uploadPics;
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
							wx.setStorageSync('assign_add_success', true);	// 添加成功
						}
					});
			}
			
		},
		assignReset () {
			this.uploadPics = [];
			this.firstRegion = true;
			this.firstCat = true;
			this.textarea_value = defaultPlc;
		}
	},
	components: {
		'ko-loading': loading,
		'custom-picker': customPicker
	},
	onLoad () {
		this.init();
	},
	onShow () {
		try {
			let assign_add_success = wx.getStorageSync('assign_add_success');
			if (assign_add_success) {
				this.assignReset();
			}
		} catch (e) {}
	}
}
</script>

<style lang="less">
	@import '~@/style/min/layui.less';
	@import '~@/style/common/components/form.less';

	.iconfont {
		font-size: 16px !important;
	}
	.layui-upload-img {
		.upload-img {
			width: 100%;
			height: 100%;
		}
		.close {
			width: 20px;
			height: 20px;
			position: absolute;
			margin-left: -14px;
			margin-top: -6px;
		}
	}
	.ko-layer {
	  opacity: 0.1 !important;
	}
</style>