<template>
	<div class="headline-wrapper container row">
		<img class="headline-wrapper__logo" src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
	    <div class="swiper-container headline-swiper flex-1">
	        <div class="swiper-wrapper headline-wrapper__carousel rel">
	            <div class="swiper-slide headline-wrapper__slide container row" v-for='(item, index) in newsList' :key='index'>
	              <p class="container row flex-1">
		        	<span class="headline-wrapper__title f12">{{item[newsTitleField]}}</span>
		        	<span class="f10" :style="{color: lightColor}">{{item[newsTimeField]}}</span>
		        	</p>
		        	<img class="headline-wrapper__img" src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
	props: {
		newsList: Array,	// 新闻列表
		newsTitleField: String,		// 新闻标题字段
		newsTimeField: String,		// 新闻时间字段
		lightColor: {		// 时间高亮颜色
			type: String,
			default: 'red'
		}
	},
	mounted () {
	    new Swiper ('.headline-swiper', {
	      loop: true,
	      autoplay:true,
	      direction : 'vertical'
	    })        
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
	.headline-swiper {
		&::before {
			content: '';
			border-left: 3px solid #929191;
			height: 50%;
			position: absolute;
			left: 0; top: 50%;
			transform: translate3d(0, -50%, 0);
		}
	}
	.headline-wrapper__carousel {
		height: 40px;
		line-height: 40px;
		padding-left: 5px;
	}
	.headline-wrapper__title {
		width: 148px;
		.text-overflow();
	}
</style>