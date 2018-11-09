<template>
	<div>
		<!-- 浮层导航 -->
		<div class="nav-fixed l-center">
		    <div class="icon-box l-news-ibox">
		        <ul class="l-icon-list">
		            <li class="l-news-icon l-news-active">
		            	<a href=""><i class="iconfont icon-help"></i><p>开店百科</p></a>
		            </li>
		            <li class="l-news-icon">
		            	<a href=""><i class="iconfont icon-ding-normal"></i><p>选址技巧</p></a>
		            </li>
		            <li class="l-news-icon">
		            	<a href=""><i class="iconfont icon-assign"></i><p>经营攻略</p></a>
		            </li>
		        </ul>
		    </div>
		</div>
		<div class="nav-fixed--bkc"></div>
		<div class="nav-fixed--fix"></div>
		<!-- 新闻列表 -->
		<div class="l-center">
	        <ul class="l-news-list">
	            <li v-for='(item, index) in 15' :key='index'>
	                <a class="l-news-bor">
	                    <div class="l-news-bor-w">
	                        <p class="l-news-tit">餐饮后厨管理就应该这样做：这八点节省后厨成本有这样的早餐店铺转让广告语您还怕转不出？</p>
	                        <p class="l-news-time">发布时间：2018.11.01 <span>20浏览</span></p>
	                    </div>
	                    <div class="l-news-bor-img">
	                        <img src="/static/images/t1.jpg" alt="">
	                    </div>
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
	@import '~@/pages/common/news/index.less';
</style>