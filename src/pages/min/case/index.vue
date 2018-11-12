<template>
	<div>
		<!-- 条件筛选 -->
		<form>
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
		</form>
		<!-- 商铺列表 -->
		<section class="zp-container card-box">
			<case-item v-for='(item, index) in storeList' :key='index'
		        color='189ccd'
		        :url="'/pages/min/case-detail/main?id=' + item.id"
		        :title='item.title'
		        status='转让成功'
		        region='东莞'
		        cate='小吃'
		        :time='item.addtime'>
		    </case-item>
		</section>
	</div>
</template>

<script>
import reachBottom from '@/mixins/reach-bottom/index.min'

import mock from '@/pages/mock'
import { fullApi } from '@/service/api'

import caseItem from '@/components/core/common/case-item/index'

let { tradeArray, regionArray, areaArray, orderArray } = mock;

export default {
	mixins: [reachBottom],
	data() {
		return {
			selectorName: '',
			selectorNames: ['trade', 'region', 'area', 'order'],
			tradeArray,
			regionArray,
			areaArray,
			orderArray
		}
	},
	components: {
		'case-item': caseItem,
	},
	methods: {
		getStoreList (cat_id = this.catActive, page = 1) {
			return new Promise((resolve) => {
				this.$flyio.request(fullApi.STROE_LIST, {
			          cid: cat_id,
			          p: page
			        })
			        .then(res => {
			        	console.log(res);
			          let storeList = res.data.news;

			          if (storeList == null || storeList == 'undefined') {
			            this.isReachLastPage = true;
			            this.loadingHide();
			            this.showNoMore = true;
			            return;
			          }

			          this.isReachBottom = false;
			          
			          this.storeList = this.storeList.concat(storeList);

			          resolve(storeList);
			        });
			});
	    },
		onSelector (name) {
	    	this.selectorName = name;
	    }
	},
	created () {
	    this.getStoreList();
	}
}
</script>

<style lang="less">
	@import '~@/style/min/selector.less';
</style>