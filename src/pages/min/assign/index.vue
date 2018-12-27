<template>
	<div>
		<!-- 条件筛选 -->
		<form>
			<div class="top-filter container row bgc-fff">
				<picker 
					class='top-filter__item flex-1' 
					:class='{"active" : selectorName === "trade"}'
					mode="selector" 
					:range='tradeArray'
					range-key='cname'
					name='trade'
					@change='changeTrade'>
	                  <div @click='onSelector(selectorNames[0])'>{{tradeName != '' ? tradeName : '行业'}}</div>
	            </picker>
	            <picker 
	            	class='top-filter__item flex-1' 
	            	:class='{"active" : selectorName === "region"}'
	            	mode="selector" 
	            	:range='regionArray'
	            	range-key='area_name'
	            	name='region'
	            	@change='changeRegion'>
	                  <div @click='onSelector(selectorNames[1])'>{{regionName != '' ? regionName : '区域'}}</div>
	            </picker>
	            <picker 
	            	class='top-filter__item flex-1' 
	            	:class='{"active" : selectorName === "area"}'
	            	mode="selector" 
	            	:range='areaArray'
	            	range-key='name'
	            	name='area'
	            	@change='changeArea'>
	                  <div @click='onSelector(selectorNames[2])'>{{areaName != '' ? areaName : '面积'}}</div>
	            </picker>
	            <picker 
	            	class='top-filter__item flex-1' 
	            	:class='{"active" : selectorName === "order"}'
	            	mode="selector" 
	            	:range='rentArray'
	            	range-key='name'
	            	name='order'
	            	@change='changeRent'>
	                  <div @click='onSelector(selectorNames[3])'>{{rentName != '' ? rentName : '租金'}}</div>
	            </picker>
			</div>
			<div class="top-filter--fix"></div>
		</form>
		<!-- 商铺列表 -->
		<section 
			class="zp-container card-box" 
			v-if='storeList && storeList.length != 0'>
			<store-item v-for='(item, index) in storeList' :key='index'
		        color='ffae1a'
		        url="/pages/min/assign-detail/main"
		        :query='item'
		        :show='item.show'
		        :src="ep_url + item.images_path != 'null' ? item.images_path[0].pic_path : ''"
		        :def="defaultImg"
		        :title='item.title'
		        :area='item.area'
		        :cate='item.rname'
		        :rental='item.rent'
		        :time='item.addtime'
		        :tags="[{name: '认证成功'}]"
		        tag-field='name'>
		    </store-item>
		</section>
		<no-data 
	      :show='!storeList ? true : false || storeList.length == 0'
	      text='暂无数据'></no-data>
		<ko-loading 
	      :is-load='isLoading'
	      :no-more='showNoMore && storeList.length != 0'></ko-loading>
	</div>
</template>

<script>
import share from '@/mixins/share/index'
import reachBottom from '@/mixins/reach-bottom/index.min'

import qs from 'qs'
import globalData from '@/_start/min/config'
import { pgjImg, pgjApi, fullApi } from '@/service/api'
import mock from '@/pages/mock'

import loading from '@/components/layouts/ko-loading/index'

import storeItem from '@/components/core/common/store-item/index'
import noData from '@/components/core/common/no-data/index'

let { tradeArray, regionArray, areaArray, orderArray } = mock;

export default {
	mixins: [share, reachBottom],
	data() {
		return {
			img_url: pgjApi,
			ep_url: '',
			defaultImg: pgjImg,
			selectorName: '',
			selectorNames: ['trade', 'region', 'area', 'order'],
			tradeArray,
			regionArray,
			areaArray,
			rentArray: orderArray,
			tradeName: '',
			regionName: '',
			areaName: '',
			rentName: '',
			curCity: '东莞市'
		}
	},
	components: {
		'store-item': storeItem,
		'ko-loading': loading,
		'no-data': noData,
	},
	methods: {
		getStoreList (cat_id = this.catActive, page = 1) {
			return new Promise((resolve) => {
				this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
						start: page,
						city_name: this.curCity
		    		}))
			        .then(res => {
			          let storeList = res.data.data;

			          if (storeList == null || storeList == 'undefined') {
			            this.isReachLastPage = true;
			            this.loadingHide();
			            if (this.isReachBottom) {
			            	this.showNoMore = true;
			            }
			            return;
			          }

			          this.isReachBottom = false;
			          
			          this.storeList = this.storeList.concat(this.offLazyLoad(storeList));

			          resolve(storeList);
			        });
			});
	    },
	    getSelectors () {
	    	this.$flyio.post(fullApi.ASSIGN_INIT, qs.stringify({
	    		city_name: this.curCity
	    	}))
		    	.then(res => {
		    		let { cat, region, area, rent, list } = res.data;
		    		cat.unshift({cid: "all", cname: "全部"});
		    		region.unshift({id: "all", area_name: "全部"});
		    		area.unshift({id: "all", name: "全部"});
		    		rent.unshift({id: "all", name: "全部"});
		    		this.tradeArray = cat;
		    		this.regionArray = region;
		    		this.areaArray = area;
		    		this.rentArray = rent;
		    		if (list != null) {
		    			this.storeList = list;
		    		}
		    	});
	    },
	    resetSelector () {
	    	this.selectorName = '';
	    	this.tradeName = '';
			this.regionName = '';
			this.areaName = '';
			this.rentName = '';
	    },
	    reset () {
	    	this.resetStoreList();
	    	this.resetCurPage();
	    	this.resetReachLastPage();
	    	this.resetSelector();
	    },
	    onSelector (name) {
	    	this.selectorName = name;
	    },
	    changeTrade (e) {
	    	this.resetStoreList();
	    	this.resetCurPage();
	    	let value = e.mp.detail.value,
	    		_selectorId = this.tradeArray[value].cid,
	    		_name = this.tradeArray[value].cname;

	    	this.tradeName = _name;

	    	this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
	    			trade_id: _selectorId,
	    			city_name: this.curCity
	    		}))
	    		.then(res => {
	    			this.storeList = res.data.data;
	    		});
	    },
	    changeRegion (e) {
	    	this.resetStoreList();
	    	this.resetCurPage();
	    	let value = e.mp.detail.value,
	    		_selectorId = this.regionArray[value].id,
	    		_name = this.regionArray[value].area_name;

	    	this.regionName = _name;

	    	this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
	    			town_id: _selectorId,
	    			city_name: this.curCity
	    		}))
	    		.then(res => {
	    			this.storeList = res.data.data;
	    		});
	    },
	    changeArea (e) {
	    	this.resetStoreList();
	    	this.resetCurPage();
	    	let value = e.mp.detail.value,
	    		_selectorId = this.areaArray[value].id,
	    		_name = this.areaArray[value].name;

	    	this.areaName = _name;

	    	this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
	    			area: _selectorId,
	    			city_name: this.curCity
	    		}))
	    		.then(res => {
	    			this.storeList = res.data.data;
	    		});
	    },
	    changeRent (e) {
	    	this.resetStoreList();
	    	this.resetCurPage();
	    	let value = e.mp.detail.value,
	    		_selectorId = this.rentArray[value].id,
	    		_name = this.rentArray[value].name;

	    	this.rentName = _name;

	    	this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
	    			rent: _selectorId,
	    			city_name: this.curCity
	    		}))
	    		.then(res => {
	    			this.storeList = res.data.data;
	    		});
	    }
	},
	onLoad () {
		this.getSelectors();
	},
	onShow () {
		try {
	      let ding = wx.getStorageSync('ding'),
	      	  assign_detail_unload = wx.getStorageSync('assign_detail_unload');
	      if (ding) {
	      	this.curCity = ding;
	      	// 从详情返回来的话，不重置数据，否则重置
	      	assign_detail_unload ? wx.removeStorageSync('assign_detail_unload')
	      		: this.reset();
	      }
	    } catch (e) {}
	}
}
</script>

<style lang="less">
	@import '~@/style/min/selector.less';
</style>