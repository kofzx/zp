<template>
	<div>
		<!-- 浮层导航 -->
		<div class="nav-fixed l-center">
		    <div class="icon-box l-news-ibox">
		        <ul class="l-icon-list">
		            <li 
		            	class="l-news-icon"
		            	:class="{ 'l-news-active': item.key == catActive }"
		            	v-for='(item, index) in cate'
		            	:key='index'
		            	@click='switchTabbar(item.key)'>
		            	<a>
		            		<i 
		            			class="iconfont" 
		            			:class="[{
		            				'icon-help': index === 0, 
		            				'icon-ding-normal': index === 1, 
		            				'icon-assign': index === 2
		            			}]"></i>
		            		<p>{{item.value.cname}}</p>
		            	</a>
		            </li>
		        </ul>
		    </div>
		</div>
		<div class="nav-fixed--bkc"></div>
		<div class="nav-fixed--fix"></div>
		<!-- 新闻列表 -->
		<div class="l-center">
	        <ul class="l-news-list">
	            <li 
	            	v-for='(item, index) in storeList' 
	            	:key='index'>
	                <a 
	                	class="l-news-bor"
	                	hover-class='none'
	                	@click="routeTo('../news-detail/main', item)">
	                    <div class="l-news-bor-w">
	                        <p class="l-news-tit">{{item.title}}</p>
	                        <p class="l-news-time">发布时间：{{item.addtime}} <span>{{item.click}}浏览</span></p>
	                    </div>
	                    <div class="l-news-bor-img">
	                        <img :src="ep_url + item.pic_path" alt="">
	                    </div>
	                </a>
	            </li>
	        </ul>
	    </div>
	    <ko-loading 
	      :is-load='isLoading'
	      :no-more='showNoMore'></ko-loading>
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import reachBottom from '@/mixins/reach-bottom/index.min'

import qs from 'qs'
import util from '@/utils/index'
import { pgjApi, fullApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'

export default {
	mixins: [share, reachBottom],
	data() {
		return {
			img_url: pgjApi,
			ep_url: '',
			cate: [],
		}
	},
	methods: {
		init () {
			this.$flyio.get(fullApi.NEWS_INIT)
				.then(res => {
					let { cat, list } = res.data;
					this.cate = util.objectToArray(cat);
					this.catActive = this.cate[0].key;
					// 新闻列表
					this.storeList = list;
				});
		},
		// 新闻列表（懒得改名）
		getStoreList (cat_id = this.catActive, page = 1) {
			return new Promise((resolve) => {
				this.$flyio.post(fullApi.NEWS_LOAD, qs.stringify({
						cid: cat_id,
						start: page
		    		}))
			        .then(res => {
			        	console.log(res);
			          let storeList = res.data.data;

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
	    resetStatus () {
	    	this.curPage = 1;
	    	this.isReachLastPage = false;
            this.showNoMore = false;
	    },
		switchTabbar (cur_cat) {
			this.catActive = cur_cat;
			this.$flyio.post(fullApi.NEWS_LOAD, qs.stringify({
						cid: cur_cat
		    		}))
			        .then(res => {
			        	console.log(res);
			          this.storeList = res.data.data;
			          // 重置状态
			          this.resetStatus();
			        });
		},
		routeTo (url, query) {
			wx.navigateTo({
				url: url + '?data=' + JSON.stringify(query) 
			});
		}
	},
	components: {
		'ko-loading': loading,
	},
	created () {
		this.init();
	}
}
</script>

<style lang="less">
	@import '~@/pages/common/news/index.less';
</style>