<template>
	<div>
		<!-- 条件筛选 -->
		<form>
			<div class="top-filter container row bgc-fff">
				<picker class='top-filter__item flex-1 active' mode="multiSelector" name='region'>
	                  <div>t</div>
	            </picker>
	            <picker class='top-filter__item flex-1' mode="selector" name='trade'>
	                  <div>t</div>
	            </picker>
	            <picker class='top-filter__item flex-1' mode="selector" name='trade'>
	                  <div>t</div>
	            </picker>
	            <picker class='top-filter__item flex-1' mode="selector" name='trade'>
	                  <div>t</div>
	            </picker>
			</div>
			<div class="top-filter--fix"></div>
		</form>
		<!-- 商铺列表 -->
		<section class="zp-container card-box">
			<store-item v-for='(item, index) in storeList' :key='index'
		        color='189ccd'
		        :show='item.show'
		        :src='item.pic_path'
		        def='https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png'
		        :title='item.title'
		        :area='item.area'
		        :cate='item.rname'
		        :rental='item.rent'
		        :time='item.addtime'
		        :tags='item.tags'
		        tag-field='name'>
		    </store-item>
		</section>
		<ko-loading 
	      :is-load='isLoading'
	      :no-more='showNoMore'></ko-loading>
	</div>
</template>

<script>
import reachBottom from '@/mixins/reach-bottom/index'

import { fullApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'

import storeItem from '@/components/core/common/store-item/index'

export default {
	mixins: [reachBottom],
	components: {
		'store-item': storeItem,
		'ko-loading': loading,
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
			          
			          this.storeList = this.storeList.concat(this.onLazyLoad(storeList));
			          console.log(this.storeList);

			          resolve(storeList);
			        });
			});
	    },
	},
	created () {
	    this.getStoreList()
	    	.then(storeList => {
	    		this.storeList = this.modifyStoreList(storeList, true);
	    	});
	},
	onPageScroll () {
	  this.lazyLoad(".store-item__left");
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';
	
	@top-h: 40px;
	.top-filter {
		position: fixed;
		top: 0;
		left: 0; right: 0;
		height: @top-h;
		z-index: 10;
	}
	.top-filter--fix {
		height: @top-h;
	}
	.top-filter__item {
		line-height: @top-h;
		text-align: center;
		color: #666;
		font-size: 12px;
		border-bottom: 1px solid #e4e8ed;
		&:not(:last-child) {
			border-right: 1px solid #f2f4f6;
		}
		&.active {
			color: @main;
			border-bottom: 2px solid @main;
		}
	}
	.l-storel-screen {
	    margin: 0 auto;
	    text-align: center;
	    .layui-form-item {
	    	position: relative;
	    	width: 24%;
		    display: inline-block;
		    margin-bottom: 0;
	    }
	    .layui-input-inline {
	    	margin-left: 0;
		    left: 0;
		    margin-bottom: 0;
	    }
	}
</style>