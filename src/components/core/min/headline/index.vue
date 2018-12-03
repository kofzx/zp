<template>
	<div class="headline-wrapper container row">
		<!-- <img class="headline-wrapper__logo" :src="logo"> -->
	    <swiper class='headline-wrapper__carousel rel flex-1' autoplay circular vertical='true'>
	      <swiper-item 
	      	class='container row' 
	      	v-for='(item, index) in newsList' 
	      	:key='index'>
	        <p 
	        	class="container row flex-1"
	        	@click='routeTo(url, item)'>
	        	<span class="headline-wrapper__title f12">{{item[newsTitleField]}}</span>
	        	<span class="f10" :style="{color: lightColor}">{{item[newsTimeField]}}</span>
	        </p>
	        <img 
	        	class="headline-wrapper__img" 
	        	:src="ep_url + item[newsSrcField] ? item[newsSrcField][0].pic_path : ''"
	        	@click='routeTo(url, item)'>
	      </swiper-item>
	    </swiper>
	</div>
</template>

<script>
import { pgjApi } from '@/service/api'

export default {
	props: {
		url: String,
		query: [Object, String, Array, Number, Boolean],
		newsList: Array,	// 新闻列表
		newsTitleField: String,		// 新闻标题字段
		newsTimeField: String,		// 新闻时间字段
		newsSrcField: String,		// 新闻图片字段
		lightColor: {		// 时间高亮颜色
			type: String,
			default: 'red'
		}
	},
	data() {
		return {
			img_url: pgjApi,
			ep_url: '',
	 	}
	},
	methods: {
		routeTo (url, query) {
			let queryStr = JSON.stringify(query);
			queryStr = encodeURIComponent(queryStr);
			wx.navigateTo({
				url: `${url}?data=${queryStr}`
			});
		}
	},
}
</script>

<style lang="less">
	@import '~@/components/common/com.less';
	@import '~@/components/common/mixin.less';
	.headline-wrapper {
		height: 40px;
		padding-bottom: 8px;
	}
	.headline-wrapper__logo {
		width: 47px;
		height: 18px;
		margin-right: 10px;
	}
	.headline-wrapper__img {
		width: 48px;
		height: 34px;
		margin-left: 20px;
	}
	.headline-wrapper__carousel {
		height: 40px;
		line-height: 40px;
		padding-left: 5px;
		&::before {
			content: '';
			border-left: 3px solid #929191;
			height: 50%;
			position: absolute;
			left: 0; top: 50%;
			transform: translate3d(0, -50%, 0);
		}
	}
	.headline-wrapper__title {
		width: 148px;
		.text-overflow();
	}
</style>