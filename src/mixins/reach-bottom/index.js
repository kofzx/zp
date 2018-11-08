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
	    },
	    lazyLoad (selector) {
	    	if (!this.isReachBottom) {  // 函数节流
			    // 图片懒加载
			    const query = wx.createSelectorQuery();
			    query.selectAll(selector).boundingClientRect(ret => {
			      ret.forEach((item, index) => {
			        if (item.top <= this.screenH) {
			          this.$set(this.storeList[index], 'show', true);
			        }
			      });
			    }).exec();
			}
	    }
	},
	mounted () {
	    wx.getSystemInfo({
	      success: res => {
	        this.screenH = res.screenHeight;
	      }
	    });
	},
	/*
     * 上拉触底
    */
	onReachBottom () {
	    this.loadingShow();
	    this.isReachBottom = true;
	    let curPage = this.curPage;

	    if (!this.isReachLastPage) {   // 当前不是最后一页
	      this.curPage = curPage + 1;

	      this.getStoreList(this.catActive, this.curPage);
	    }
	    this.loadingHide();
	}
}