export default {
	data() {
	    return {
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
		getStoreList () {},
	    modifyStoreList (storeList, bool = false) {
	      storeList.forEach(value => {
	        this.$set(value, 'show', bool);
	      });
	      return storeList;
	    },
	    loadingShow () {
	      this.isLoading = true;
	    },
	    loadingHide () {
	      this.isLoading = false;
	    },
	    // 开/关懒加载
	    onLazyLoad (data) {
	    	return this.modifyStoreList(data);
	    },
	    offLazyLoad (data) {
	    	return this.modifyStoreList(data, true);
	    }
	}
}