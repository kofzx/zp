<template>
	<div>
		<ko-header
			title='找铺'
			:hasBack='false' />
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
	            <li v-for='item in 15'>
	                <a href="news-details.html" class="l-news-bor">
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
	        <!--分页器-->
	        <div id="page" class="tc"></div>
	    </div>

		<tabbar
	      :color='tabBar.color'
	      :selectedColor='tabBar.selectedColor'
	      :tabList='tabBar.list' />
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
	mounted () {
		layui.use('laypage', () => {
		  let laypage = layui.laypage;

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
	@import '~@/style/common/variables.less';
	@import '~@/style/common/mixin.less';

	.nav-fixed {
		position: fixed;
	    left: 0;
	    right: 0;
	    top: 56px;
	    z-index: 2;
	}
	.nav-fixed--bkc {
		height: 74px;
	    position: fixed;
	    left: 0;
	    right: 0;
	    top: 46px;
	    z-index: 1;
	    background: #f1f1f1;
	}
	.nav-fixed--fix {
		height: 84px;
		margin-bottom: 20px;
	}
	.icon-box {
	    background-color: #fff;
	    border-radius: 10px;
	    padding: 5px 0;
	}
	.l-news-ibox {
	    box-shadow: 0 5px 15px #bebebe;
	}
	.l-icon-list {
	    display: flex;
	    flex-wrap: wrap;
	    justify-content: space-around;
	    margin-bottom: 5px;
	}
	.l-news-icon {
	    text-align: center;
	    a {
	    	display: flex;
		    flex-direction: column;
		    align-items: center;
		    justify-content: center;
		    color: #666;
		    i {
		    	margin: 5px;
    			font-size: 35px;
		    }
	    }
	}
	.l-news-active a{
	    color: @main;
	}
	.l-news-list {
		li {
			padding: 10px 5px;
    		border-bottom: 1px solid #d3d3d3;
    		&:nth-last-child(1) {
    			border-bottom: 0;
    		}
		}
	}
	.l-news-bor {
		display: flex;
    	flex-wrap: wrap;
	}
	.l-news-bor-w{
	    width: 69%;
	    margin-right: 2%;
	}
	.l-news-tit {
	    font-size: 14px;
	    line-height: 1.5;
	    max-width: 100%;
	    height: 42px;
		.text-overflow-line(2);
	}
	.l-news-time {
	    font-size: 12px;
	    color: #888;
	    margin-top: 8px;
	    display: flex;
	    justify-content: space-between;
	    span {
	    	font-size: 12px;
	    }
	}
	.l-news-bor-img{
	    width: 100px;
	    overflow: hidden;
	    img {
	    	width: 100px;
    		height: 66px;
	    }
	}
</style>