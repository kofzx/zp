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
		<section 
			class="zp-container card-box" 
			v-if='storeList && storeList.length != 0'>
			<store-item v-for='(item, index) in storeList' :key='index'
		        color='ffae1a'
		        url='../case-detail/main'
		        :query='item'
		        :show='item.show'
		        :src="ep_url + item.images_path != 'null' ? item.images_path[0].pic_path : ''"
		        :def="defaultImg"
		        :title='item.title'
		        :area='item.area'
		        :cate='item.rname'
		        :rental='item.rent'
		        :time='item.addtime'
		        :tags="[{name: '成功转出'}]"
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
import reachBottom from '@/mixins/reach-bottom/index.min'
import share from '@/mixins/share/index'

import mock from '@/pages/mock'
import qs from 'qs'
import { pgjImg, pgjApi, fullApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'
import storeItem from '@/components/core/common/store-item/index'
import noData from '@/components/core/common/no-data/index'

let { tradeArray, regionArray, areaArray, orderArray } = mock;

export default {
	mixins: [reachBottom, share],
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
			orderArray
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
				this.$flyio.post(fullApi.CASE_INIT, qs.stringify({
						start: page
		    		}))
			        .then(res => {
			          let storeList = res.data.list;

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
	    resetStoreList () {
	    	this.storeList = [];
	    },
	    resetCurPage () {
	    	this.curPage = 1;
	    },
	    reset () {
	    	this.resetStoreList();
	    	this.resetCurPage();
	    	this.resetReachLastPage();
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
	onLoad () {
	    this.getCase();
	},
	onShow () {
		try {
	      	let case_detail_unload = wx.getStorageSync('case_detail_unload');
	      	// 从详情返回来的话，不重置数据，否则重置
	      	case_detail_unload ? wx.removeStorageSync('case_detail_unload')
	      		: this.reset();
	    } catch (e) {}
	}
}
</script>

<style lang="less">
	@import '~@/style/min/selector.less';
</style>