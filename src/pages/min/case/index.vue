<template>
	<div>
		<!-- 条件筛选 -->
		<!-- <form>
			<div class="top-filter container row bgc-fff">
				<picker 
					class='top-filter__item flex-1' 
					:class='{"active" : selectorName === "trade"}'
					mode="multiSelector" 
					:range='tradeArray'
					range-key='title'
					name='trade'>
	                  <div @click='onSelector(selectorNames[0])'>行业</div>
	            </picker>
	            <picker 
	            	class='top-filter__item flex-1' 
	            	:class='{"active" : selectorName === "region"}'
	            	mode="selector" 
	            	:range='regionArray'
	            	range-key='title'
	            	name='region'>
	                  <div @click='onSelector(selectorNames[1])'>区域</div>
	            </picker>
	            <picker 
	            	class='top-filter__item flex-1' 
	            	:class='{"active" : selectorName === "area"}'
	            	mode="selector" 
	            	:range='areaArray'
	            	range-key='title'
	            	name='area'>
	                  <div @click='onSelector(selectorNames[2])'>面积</div>
	            </picker>
	            <picker 
	            	class='top-filter__item flex-1' 
	            	:class='{"active" : selectorName === "order"}'
	            	mode="selector" 
	            	:range='orderArray'
	            	range-key='title'
	            	name='order'>
	                  <div @click='onSelector(selectorNames[3])'>排序</div>
	            </picker>
			</div>
			<div class="top-filter--fix"></div>
		</form> -->
		<!-- 商铺列表 -->
		<section class="zp-container card-box">
			<store-item v-for='(item, index) in storeList' :key='index'
		        color='189ccd'
		        url='../case-detail/main'
		        :query='item'
		        :show='item.show'
		        :src='img_url + item.images_path'
		        def='https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png'
		        :title='item.title'
		        :area='item.area'
		        :cate='item.rname'
		        :rental='item.rent'
		        :time='item.addtime'
		        :tags="[{name: '成功转出'}]"
		        tag-field='name'>
		    </store-item>
		</section>
		<ko-loading 
	      :is-load='isLoading'
	      :no-more='showNoMore'></ko-loading>
	</div>
</template>

<script>
import reachBottom from '@/mixins/reach-bottom/index.min'

import mock from '@/pages/mock'
import qs from 'qs'
import { pgjApi, fullApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'
import storeItem from '@/components/core/common/store-item/index'

let { tradeArray, regionArray, areaArray, orderArray } = mock;

export default {
	mixins: [reachBottom],
	data() {
		return {
			img_url: pgjApi,
			selectorName: '',
			selectorNames: ['trade', 'region', 'area', 'order'],
			tradeArray,
			regionArray,
			areaArray,
			orderArray
		}
	},
	components: {
		'store-item': storeItem,
		'ko-loading': loading
	},
	methods: {
		getStoreList (cat_id = this.catActive, page = 1) {
			return new Promise((resolve) => {
				this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
						start: page
		    		}))
			        .then(res => {
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
	    getCase () {
	    	this.$flyio.get(fullApi.CASE_INIT)
		    	.then(res => {
		    		this.storeList = res.data.list;
		    	});
	    },
		onSelector (name) {
	    	this.selectorName = name;
	    }
	},
	created () {
	    this.getCase();
	},
	onPageScroll () {
	  this.lazyLoad(".store-item__left");
	}
}
</script>

<style lang="less">
	@import '~@/style/min/selector.less';
</style>