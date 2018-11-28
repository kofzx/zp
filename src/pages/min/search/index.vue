<template>
	<div>
		<search-box 
            ss-color='ffae1a' 
            placeholder='找店铺/找项目'
            @searchSubmit='searchSubmit'>
        </search-box>
        <section 
        	class="zp-container card-box" 
        	style="width: auto; margin-top: 0; padding-top: 0;"
        	v-if='storeList.length > 0'>
        	<store-item v-for='(item, index) in storeList' :key='index'
		        color='ffae1a'
		        url="../assign-detail/main"
		        :query='item'
		        :src='item.images_path[0].pic_path'
		        :title='item.title'
		        :area='item.area'
		        :cate='item.cat_name'
		        :rental='item.rent'
		        :time='item.addtime'
		        :tags="[{name: '认证成功'}]"
		        tag-field='name'>
		    </store-item>
        </section>
	    <no-data 
	      :show='storeList.length === 0'
	      text='暂无更多数据'></no-data>
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import reachBottom from '@/mixins/reach-bottom/index.min'

import searchBox from '@/components/core/min/search-box/index'
import storeItem from '@/components/core/common/store-item/index'
import noData from '@/components/core/common/no-data/index'

import qs from 'qs'
import { fullApi } from '@/service/api'

export default {
	mixins: [share, reachBottom],
	components: {
	    'search-box': searchBox,
	    'store-item': storeItem,
	    'no-data': noData
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
		searchSubmit (e) {
			// let searchText = e.mp.detail.value.search;
			this.$flyio.post(fullApi.ASSIGN_LOAD, qs.stringify({
				start: 1
			}))
				.then(res => {
					this.storeList = res.data.data;
				});

		}
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	.search-wrapper {
		background: @main !important;
	}
	.store-item {
		&:first-child {
			border-top-width: 0;
		}
	}
</style>