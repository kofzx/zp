<template>
	<div>
		<!--多图片上传-->
		<div class="l-r-tf-box" style="margin-top: 0">
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
									class='close' src='../../../images/close.png'
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
		<div class="l-r-tf-box">
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
						<label class="layui-form-label">区域</label>
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
						<label class="layui-form-label">详细地址</label>
						<div class="layui-input-block clearfix">
							<input 
								type="text" 
								name="addr" 
								placeholder="请填写" 
								class="layui-input fl">
							<div class="l-rel-sapan fr"><i class="iconfont icon-ding-normal main-color"></i></div>
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
					<div class="layui-form-item">
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

import util from '@/utils/index'

import mock from '@/pages/mock'
import qs from 'qs'
import { fullApi, pgjApi } from '@/service/api'

let { tradeArray, regionArray, areaArray, orderArray } = mock;

export default {
	data() {
		return {
			tradeArray,
			regionArray,
			uploadPics: [],
			tradeName: '',
			regionName: '',
			curCity: '东莞市'
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
									let pic_path = pgjApi + JSON.parse(res.data).pic_path;
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
			let curCity = this.curCity;
			this.$flyio.post(fullApi.ASSIGN_INIT, qs.stringify({
				city_name: curCity
			}))
		    	.then(res => {
		    		let { cat, region } = res.data;
		    		this.tradeArray = cat;
		    		this.regionArray = region;
		    	});
		},
		delImg (index) {
			this.uploadPics.splice(index, 1);
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
	    		this.$flyio.post(fullApi.ASSIGN_ADD, qs.stringify({
					title: formObj.title,
					linkman: formObj.person,
					phone: formObj.phone,
					address: formObj.addr,
					rent: formObj.rent,
					description: formObj.desc,
					area: formObj.area,
					cid: formObj.cid,
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
				value.uploadPics = uploadPics;
				value.cid = this.tradeArray[value.trade].cid;
				value.town_id = this.regionArray[value.region].id;
				this._submit(value)
					.then(res => {
						let { code, msg } = res.data;
						if (code == 1) {
							this.$toast(msg);
							wx.setStorageSync('assign_add_success', true);	// 添加成功
							wx.navigateBack({
							    delta: 1
							});
						}
					});
			}
			
		},
		assignReset () {
			this.uploadPics = [];
			this.tradeName = '';
			this.regionName = '';
		}
	},
	created () {
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
</style>