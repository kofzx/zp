<template>
	<div>
		<ko-header
			title='找铺'
			:hasBack='false' />
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
}
</script>

<style lang="less">
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
</style>