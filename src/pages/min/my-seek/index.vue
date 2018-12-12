<template>
	<div>
		<!-- 商铺列表 -->
		<section 
			class="zp-container card-box"
			v-if='storeList.length != 0'>
			<seek-item v-for='(item, index) in storeList' :key='index'
		        color='ffae1a'
		        url="/pages/min/seek-detail/main"
		        :query='item'
		        :title='item.title'
		        :area='item.area'
		        :region='item.rname'
		        :cate='item.cat_name'
		        :rental='item.rent'
		        :time='item.addtime'>
		    </seek-item>
		</section>
		<no-data 
	      :show='storeList.length == 0'
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
import { pgjApi, fullApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'
import seekItem from '@/components/core/common/seek-item/index'
import noData from '@/components/core/common/no-data/index'

export default {
	mixins: [share, reachBottom],
	data() {
		return {
			
		}
	},
	components: {
		'seek-item': seekItem,
		'ko-loading': loading,
		'no-data': noData,
	},
	methods: {
		getStoreList (cat_id = this.catActive, page = 1) {
			return new Promise((resolve) => {
				this.$flyio.post(fullApi.MY_SEEK, qs.stringify({
						start: page
		    		}))
			        .then(res => {
			          let storeList = res.data.seek;

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
	    }
	},
	onShow () {
		this.reach_bottom_init();
		this.getStoreList()
			.then(res => {
				this.storeList = res;
			});
	}
}
</script>

<style lang="less">

</style>