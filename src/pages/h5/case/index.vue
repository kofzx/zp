<template>
	<div>
		<ko-header
			title='找铺' />

		<!-- 条件筛选 -->
		<div class="l-storel-screen">
		    <form class="layui-form" action="">
		        <div class="layui-form-item">
		            <div class="layui-input-inline">
		                <select name="industry" lay-verify="required">
		                    <option value="">行业</option>
		                    <option value="0">酒楼餐饮1</option>
		                    <option value="1">酒楼餐饮2</option>
		                    <option value="2">酒楼餐饮3</option>
		                    <option value="3">酒楼餐饮4</option>
		                    <option value="4">酒楼餐饮5</option>
		                </select>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <div class="layui-input-inline">
		                <select name="region" lay-verify="required">
		                    <option value="">区域</option>
		                    <option value="0">虎门镇</option>
		                    <option value="1">长安镇</option>
		                    <option value="2">厚街镇</option>
		                    <option value="3">莞城区</option>
		                    <option value="4">寮步镇</option>
		                </select>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <div class="layui-input-inline">
		                <select name="area" lay-verify="required">
		                    <option value="">面积</option>
		                    <option value="0">20平方米以下</option>
		                    <option value="1">20-50平米</option>
		                    <option value="2">50-100平米</option>
		                    <option value="3">100-150平米</option>
		                    <option value="4">150-200平米</option>
		                </select>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <div class="layui-input-inline">
		                <select name="sort" lay-verify="required">
		                    <option value="">排序</option>
		                    <option value="0">租金升序↑</option>
		                    <option value="1">租金降序↓</option>
		                    <option value="2">租金降序↓</option>
		                    <option value="3">面积降序↓</option>
		                    <option value="4">面积升序↑</option>
		                </select>
		            </div>
		        </div>
		    </form>
		</div>
		<!-- 商铺列表 -->
		<section class="zp-container card-box">
			<case-item v-for='(item, index) in storeList' :key='index'
		        color='189ccd'
		        :title='item.title'
		        status='转让成功'
		        region='东莞'
		        cate='小吃'
		        :time='item.addtime'>
		    </case-item>
		</section>
		<div id="page" class="tc"></div>

		<tabbar 
	      :color='tabBar.color'
	      :selectedColor='tabBar.selectedColor'
	      :tabList='tabBar.list'
	      />
	</div>
</template>

<script>
import tabBar from '@/_start/h5/tabBar'

import { apiName, ytApi, api, fullApi } from '@/service/api'

import koHeader from '@/components/layouts/ko-header/index'
import tabbar from '@/components/core/h5/tabbar/index'
import caseItem from '@/components/core/common/case-item/index'

export default {
	data() {
	    return {
	      tabBar,
	      storeList: []
	    }
	},
	components: {
		'ko-header': koHeader,
		'case-item': caseItem,
		tabbar
	},
	methods: {
		getStoreList (cat_id = this.catActive, page = 1) {
	      this.$flyio.request(apiName + api.STROE_LIST, {
	          cid: 40,
	          p: page
	        })
	        .then(res => {
	        	console.log(res);
	          let storeList = JSON.parse(res.data).news;

	          if (storeList == null || storeList == 'undefined') {
	            this.isReachLastPage = true;
	            this.loadingHide();
	            this.showNoMore = true;
	            return;
	          }

	          this.storeList = this.storeList.concat(storeList);

	          console.log(this.storeList);
	          this.isReachBottom = false;
	        });
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
	},
	mounted () {
		layui.use(['form', 'laypage'], () => {
	        let form = layui.form; 
	        let laypage = layui.laypage;

	        form.render();
	        laypage.render({
			    elem: 'page',
			    limit: 5,
			    count: 20
			  });
	    });
	}
}
</script>

<style lang="less">
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