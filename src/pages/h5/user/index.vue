<template>
	<div>
		<header class="ko-header container row">
			<a class="link">安全退出</a>
			<h1>找铺</h1>
			<a class="link">设置</a>
		</header>
		<div class="ko-header--fix"></div>

		<!-- 用户信息 -->
		<div class="l-user-login">
		    <div class="l-user-header">
		        <a class="l-user-head">
		        	<img src="/static/images/header.png">
		        </a>
		        <div>
		            <p>TEL：<a href="login.html">请登录</a></p>
		            <p class="l-user-header__id">ID：<a href="login.html">请登录</a></p>
		        </div>
		    </div>
		</div>
		<!-- 横条 -->
		<div class="l-center">
		    <div class="icon-box">
		        <ul class="l-icon-list">
		            <li class="l-user-icon">
		                <a href="">
		                    <img src="../../../images/navs/quick.png">
		                    <p>快速转店</p>
		                </a>
		            </li>
		            <li class="l-user-icon">
		                <a href="">
		                    <img src="../../../images/navs/seek.png">
		                    <p>快速找店</p>
		                </a>
		            </li>
		            <li class="l-user-icon">
		                <a href="join.html">
		                    <img src="../../../images/navs/hezuo.png">
		                    <p>项目加盟</p>
		                </a>
		            </li>
		        </ul>
		    </div>
		</div>
		<!-- 个人中心 -->
		<div class="l-center l-user-box">
		    <ul class="l-user-list">
		        <li><a href=""><i class="iconfont icon-publish color-03A9F4"></i><p>我的发布</p></a></li>
		        <li><a href="building.html"><i class="iconfont icon-card color-FF5722"></i><p>积分卡券</p></a></li>
		        <li><a href="building.html"><i class="iconfont icon-feet color-009688"></i><p>浏览记录</p></a></li>
		        <li><a href="building.html"><i class="iconfont icon-love color-f00"></i><p>我的关注</p></a></li>
		        <li><a href="building.html"><i class="iconfont icon-eval color-E91E63"></i><p>我的评估</p></a></li>
		        <li><a href="building.html"><i class="iconfont icon-comment color-88d430"></i><p>我的留言</p></a></li>
		        <li><a href="building.html"><i class="iconfont icon-circle color-9C27B0"></i><p>我的圈子</p></a></li>
		        <li><a href="set-suggest.html"><i class="iconfont icon-suggest color-03A9F4"></i><p>意见板块</p></a></li>
		        <li><a href=""><i class="iconfont icon-kefu color-ffae1a"></i><p>在线客服</p></a></li>
		        <li><a href=""><i class="iconfont icon-tel color-FF5722"></i><p>免费热线</p></a></li>
		        <li><a href="building.html"><i class="iconfont icon-yq color-ffae1a"></i><p>我要邀请</p></a></li>
		        <li><a href="building.html"><i class="iconfont icon-record color-f00"></i><p>我的邀请</p></a></li>
		    </ul>
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
	}
}
</script>

<style lang="less">
	@header_h: 46px;

	.ko-header {
		height: @header_h !important;
		line-height: @header_h;
		background: orange;
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 10;
	    padding: 0 20px;
		h1 {
		    font-size: 16px;
		    color: white;
		    position: absolute;
		    top: 0;
		    left: 50%;
		    transform: translate3d(-50%, 0, 0);
		}
	}
	.ko-header--fix {
		height: @header_h;
	}
	.link {
		font-size: 13px;
    	color: white;
	    display: block;
	}
	.l-user-login {
		background: url('../../../../static/images/user-top.png') no-repeat center center;
    	background-size: cover;
	}
	.l-user-header {
	    display: flex;
	    align-items: center;
	    padding: 70px 0 30px 15px;
	    color: #fff;
	    a {
	    	color: #fff;
	    	height: 80px;
	    }
	}
	.l-user-head {
	    border-radius: 40px;
	    overflow: hidden;
	    max-width: 80px;
	    margin-right: 15px;
	    img {
	    	width: 80px;
	    }
	}
	.l-user-header__id {
		margin-top: 4px;
	}
	.icon-box {
	    background-color: #fff;
	    border-radius: 10px;
	    padding: 5px 0;
	    margin: 10px 0;
	}
	.l-icon-list {
	    display: flex;
	    flex-wrap: wrap;
	    margin-bottom: 5px;
	}
	.l-user-icon {
	    width: 33.33333%;
	    text-align: center;
	    a {
	    	display: flex;
		    flex-direction: column;
		    align-items: center;
		    justify-content: center;
		    color: #666;
		    img {
		    	width: 40px;
    			margin: 5px 0 7px;
		    }
	    }
	}
	.l-user-list {
	    display: flex;
	    flex-wrap: wrap;
	    li {
	    	box-sizing: border-box;
		    width: 32%;
		    text-align: center;
		    background-color: #fff;
		    margin-right: 2%;
		    margin-bottom: 2%;
		    padding: 20px 0;
		    .iconfont {
				font-size: 25px;
		    }
		    p {
		    	margin-top: 7px;
    			color: #666;
    			line-height: normal;
		    }
		    &:nth-child(3n) {
		    	margin-right: 0;
		    }
	    }
	}
</style>