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
		<section class="zp-container card-box">
			<seek-item v-for='(item, index) in storeList' :key='index'
		        color='189ccd'
		        :url="'/pages/min/seek-detail/main?id=' + item.id"
		        :title='item.title'
		        :area='item.area'
		        region='东莞'
		        :cate='item.rname'
		        :rental='item.rent'
		        :time='item.addtime'>
		    </seek-item>
		</section>
		<ko-loading 
	      :is-load='isLoading'
	      :no-more='showNoMore'></ko-loading>
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import reachBottom from '@/mixins/reach-bottom/index.min'

import mock from '@/pages/mock'
import qs from 'qs'
import { pgjApi, fullApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'
import seekItem from '@/components/core/common/seek-item/index'

let { tradeArray, regionArray, areaArray, orderArray } = mock;

export default {
	mixins: [share, reachBottom],
	data() {
		return {
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
		}
	},
	components: {
		'seek-item': seekItem,
		'ko-loading': loading,
	},
	methods: {
		getStoreList (cat_id = this.catActive, page = 1) {
			return new Promise((resolve) => {
				this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
						start: page
		    		}))
			        .then(res => {
			        	console.log(res);
			          let storeList = res.data.data;

			          if (storeList == null || storeList == 'undefined') {
			            this.isReachLastPage = true;
			            this.loadingHide();
			            this.showNoMore = true;
			            return;
			          }

			          this.isReachBottom = false;
			          
			          this.storeList = this.storeList.concat(this.onLazyLoad(storeList));

			          resolve(storeList);
			        });
			});
	    },
	    getSelectors () {
	    	this.$flyio.get(fullApi.ASSIGN_INIT)
		    	.then(res => {
		    		let { cat, region, area, rent, list } = res.data;
		    		this.tradeArray = cat;
		    		this.regionArray = region;
		    		this.areaArray = area;
		    		this.rentArray = rent;
		    		this.storeList = list;
		    	});
	    },
		onSelector (name) {
	    	this.selectorName = name;
	    },
	    changeTrade (e) {
	    	let value = e.mp.detail.value,
	    		_selectorId = this.tradeArray[value].cid,
	    		_name = this.tradeArray[value].cname;

	    	this.tradeName = _name;

	    	this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
	    			trade_id: _selectorId
	    		}))
	    		.then(res => {
	    			console.log(res);
	    			this.storeList = res.data.data;
	    		});
	    },
	    changeRegion (e) {
	    	let value = e.mp.detail.value,
	    		_selectorId = this.regionArray[value].id,
	    		_name = this.regionArray[value].area_name;

	    	this.regionName = _name;

	    	this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
	    			town_id: _selectorId
	    		}))
	    		.then(res => {
	    			console.log(res);
	    			this.storeList = res.data.data;
	    		});
	    },
	    changeArea (e) {
	    	let value = e.mp.detail.value,
	    		_selectorId = this.areaArray[value].id,
	    		_name = this.areaArray[value].name;

	    	this.areaName = _name;

	    	this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
	    			area: _selectorId
	    		}))
	    		.then(res => {
	    			console.log(res);
	    			this.storeList = res.data.data;
	    		});
	    },
	    changeRent (e) {
	    	let value = e.mp.detail.value,
	    		_selectorId = this.rentArray[value].id,
	    		_name = this.rentArray[value].name;

	    	this.rentName = _name;

	    	this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
	    			rent: _selectorId
	    		}))
	    		.then(res => {
	    			console.log(res);
	    			this.storeList = res.data.data;
	    		});
	    }
	},
	created () {
	    this.getSelectors();
	},
	onPageScroll () {
	  this.lazyLoad(".store-item__left");
	}
}
</script>

<style lang="less">
	@import '~@/style/min/selector.less';
</style>