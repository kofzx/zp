<template>
	<div></div>
</template>

<script>
import mock from '@/pages/mock'

import { ytApi, api, fullApi } from '@/service/api'

let { pic, newsList, storeList } = mock;

export default {
	data () {
	    return {
	      pics: pic,
	      newsList: newsList,
	      storeList: [],
	      isReachLastPage: false,
      	  isReachBottom: false,
	      curPage: 0,
	      catActive: 40,
	      isLoading: false,
	      showNoMore: false
	    }
	},
	methods: {
	    async getStoreList (cat_id = this.catActive, page = 1) {
	      this.$flyio.request(fullApi.STROE_LIST, {
	          cid: cat_id,
	          p: page
	        })
	        .then(res => {
	          let storeList = res.data.news;

	          if (storeList == null || storeList == 'undefined') {
	            this.isReachLastPage = true;
	            this.loadingHide();
	            this.showNoMore = true;
	            return;
	          }

	          this.storeList = this.storeList.concat(storeList);
	          this.modifyStoreList();

	          console.log(this.storeList);
	          this.isReachBottom = false;
	        });
	    },
	    async modifyStoreList () {
	      this.storeList.forEach(value => {
	        this.$set(value, 'show', false);
	        this.$set(value, 'def', 'https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png');
	      });
	    },
	    loadingShow () {
	      this.isLoading = true;
	    },
	    loadingHide () {
	      this.isLoading = false;
	    }
	},
	async created () {
	    await this.getStoreList();
	    await this.modifyStoreList();
	}
}
</script>

<style lang="less">
	@import './index.less';
</style>