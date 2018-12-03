<template>
	<div>
		<!-- 商铺列表 -->
		<section 
			class="zp-container card-box" 
			v-if='storeList'>
			<store-item v-for='(item, index) in storeList' :key='index'
		        color='ffae1a'
		        url="/pages/min/assign-detail/main"
		        :query='item'
		        :show='item.show'
		        :src="ep_url + item.images_path != 'null' ? item.images_path[0].pic_path : ''"
		        def='http://www.pgj.com/pgj.jpg'
		        :title='item.title'
		        :area='item.area'
		        :cate='item.rname'
		        :rental='item.rent'
		        :time='item.addtime'>
		    </store-item>
		</section>
		<no-data 
	      :show='!storeList'
	      text='暂无数据'></no-data>
		<ko-loading 
	      :is-load='isLoading'
	      :no-more='showNoMore'></ko-loading>
	</div>
</template>

<script>
import share from '@/mixins/share/index'
import reachBottom from '@/mixins/reach-bottom/index.min'

import qs from 'qs'
import { pgjApi, fullApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'

import storeItem from '@/components/core/common/store-item/index'
import noData from '@/components/core/common/no-data/index'

export default {
	mixins: [share, reachBottom],
	data() {
		return {
			img_url: pgjApi,
			ep_url: ''
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
				this.$flyio.post(fullApi.MY_ASSIGN, qs.stringify({
						start: page
		    		}))
			        .then(res => {
			          let storeList = res.data.transfer;

			          if (storeList == null || storeList == 'undefined') {
			            this.isReachLastPage = true;
			            this.loadingHide();
			            this.showNoMore = true;
			            return;
			          }

			          this.isReachBottom = false;
			          
			          this.storeList = this.storeList.concat(this.offLazyLoad(storeList));

			          resolve(storeList);
			        });
			});
	    }
	},
	onLoad () {
		this.getStoreList()
			.then(res => {
				this.storeList = res;
			});
	},
	onPageScroll () {
	  this.lazyLoad(".store-item__left");
	},
}
</script>

<style lang="less">

</style>