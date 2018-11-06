<template>
	<div></div>
</template>

<script>
import mock from '@/pages/mock'

import { ytApi, api, fullApi } from '@/service/api'

let { pics, newsList, storeList } = mock;

export default {
	data () {
	    return {
	      pics: pics,
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
	    modifyStoreList (storeList) {
	      storeList.forEach(value => {
	        this.$set(value, 'show', false);
	      });
	      return storeList;
	    },
	    loadingShow () {
	      this.isLoading = true;
	    },
	    loadingHide () {
	      this.isLoading = false;
	    }
	},
	created () {
	    this.getStoreList();
	    this.modifyStoreList(this.storeList);
	}
}
</script>

<style lang="less">
	@import './index.less';
</style>