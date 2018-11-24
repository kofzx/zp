<template>
	<div>
		<!-- 轮播 -->
	    <swiper class='carousel swiper-box' autoplay circular indicator-dots>
	      <swiper-item 
	      	v-for='(item, index) in detail.images_path' 
	      	:key='index'>
	        <img 
	        	class="carousel-img" 
	        	:src='ep_url + item.pic_path' />
	      </swiper-item>
	    </swiper>

		<div class="l-st-dtl-tit-box">
		    <p class="l-st-dtl-tit">{{detail.title}}</p>
		    <div class="l-st-dtl-time">
		        <p>{{detail.addtime}}</p>
		        <p>编号:{{detail.number}}</p>
		    </div>
		</div>
		<div class="l-st-dtl-abox">
		    <div>
		        <p>面积</p>
		        <p>{{detail.area}}平米</p>
		    </div>
		    <div>
		        <p>租金</p>
		        <p>{{detail.rent}}元/月</p>
		    </div>
		    <div>
		        <p>转让费</p>
		        <p>{{detail.rent_money}}万</p>
		    </div>
		</div>
		<!--物业类型-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li>物业类型 : {{detail.cat_name}}</li>
		        <!-- <li>目前经营 : 湘菜馆</li> -->
		        <!-- <li>适合经营 : 餐馆</li> -->
		    </ul>
		</div>
		<!--租约信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-help"></i> 租约信息</li>
		        <li>租金 : {{detail.rent}} 元/月</li>
		    </ul>
		</div>
		<!-- 信息描述-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-news"></i> 信息描述</li>
		        <li>
		            <p 
		            	class="l-st-dtl-list-word"
		            	v-html='detail.description'></p>
		        </li>
		    </ul>
		</div>
	</div>
</template>

<script>
import { pgjApi } from '@/service/api' 

export default {
	data() {
		return {
			detail: {},
			img_url: pgjApi,
			ep_url: ''
		}
	},
	mounted () {
		let data_decodeURI = decodeURIComponent(this.$mp.query.data);
		let data_json = JSON.parse(data_decodeURI);
		this.detail = data_json;
	},
}
</script>

<style lang="less">
	@import '~@/style/min/swiper.less';
	@import '~@/style/common/components/top-card.less';
	@import '~@/style/common/components/cell-list.less';
</style>