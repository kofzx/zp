<template>
	<div>
		<ko-header
			title='找铺' />
		<div class="l-news-details bgc-fff">
		    <div class="l-center">
		        <div class="l-news-dtl-titb">
		            <p class="l-news-dtl-t">餐饮后厨管理就应该这样做：这八点节省后厨成本</p>
		            <p class="l-news-dtl-time">发布时间：2018.11.01 <span>20浏览</span></p>
		        </div>
		        <div class="l-news-dtl-word">
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 文章内容文章内容文章内容文章内容
		            文章内容文章内容文章内容文章内容文章内容文章内容
		        </div>
		        <div class="l-news-dtl-page">
		            <a href="">上一篇：餐饮后厨管理就应该这样做</a>
		            <a href="">下一篇：餐饮后厨管理就应该这样做餐饮后厨管理就应该这样做</a>
		        </div>
		    </div>
		</div>
		<tabbar 
	      :color='tabBar.color'
	      :selectedColor='tabBar.selectedColor'
	      :tabList='tabBar.list'
	      />	
	</div>
</template>

<script>
import tabBar from '@/_start/h5/tabBar'
import koHeader from '@/components/layouts/ko-header/index'
import tabbar from '@/components/core/h5/tabbar/index'

export default {
	data() {
	    return {
	      tabBar
	    }
	},
	components: {
		'ko-header': koHeader,
		tabbar
	},
}
</script>

<style lang="less">
	.l-news-dtl-titb {
	    padding: 10px 0;
	    border-bottom: 1px solid #c5c5c5;
	}
	.l-news-dtl-t {
	    font-size: 16px;
	    line-height: 1.5;
	    margin: 5px 0 10px;
	}
	.l-news-dtl-time {
	    display: flex;
	    justify-content: space-between;
	    font-size: 12px;
	    color: #888;
	}
	.l-news-dtl-word{
	    padding: 10px 0;
	    border-bottom: 1px solid #c5c5c5;
	}
	.l-news-dtl-page {
	    display: flex;
	    flex-direction: column;
	    padding: 10px 0;
	}
	.l-news-dtl-page a {
	    margin: 5px 0;
	}
</style>