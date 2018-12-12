<template>
	<div>
		<!-- <header class="ko-header container row">
			<a class="link f12">安全退出</a>
			<a class="link f12">设置</a>
		</header>
		<div class="ko-header--fix"></div> -->
		<!-- 用户信息 -->
		<div class="l-user-login">
		    <div class="l-user-header">
		        <a class="l-user-head">
		        	<img :src="login.headimg ? img_url + login.headimg : '/static/images/header.png'">
		        </a>
		        <div>
		        	<p>TEL：
		        		<span v-if="login">{{login.phone}}</span>
		        		<span v-else @click="goLogin">请登录</span>
		        	</p>
		        	<p class="l-user-header__id">名称：
		        		<span v-if="login">{{login.name}}</span>
		        		<span v-else @click="goLogin">请登录</span>
		        	</p>
		            <p v-if="login" @click='logout'>安全登出</p>
		        </div>
		    </div>
		    <a 
		    	href='/pages/min/settings/main'
		    	hover-class='none'
		    	class="settings iconfont icon-setting"
		    	v-if="login"></a>
		</div>
		<!-- 横条 -->
		<div class="l-center">
		    <div class="icon-box">
		        <ul class="l-icon-list">
		            <li class="l-user-icon">
		                <a 
		                	:href="login ? '/pages/min/assign-form/main' : '/pages/min/login/main'" 
		                	hover-class='none'>
		                    <img src="/static/images/navs/quick.png">
		                    <p>快速转店</p>
		                </a>
		            </li>
		            <li class="l-user-icon">
		                <a 
		                	:href="login ? '/pages/min/seek-form/main' : '/pages/min/login/main'" 
		                	hover-class='none'>
		                    <img src="/static/images/navs/seek.png">
		                    <p>快速找店</p>
		                </a>
		            </li>
		            <li class="l-user-icon">
		                <a 
		                	:href="auth ? '/pages/min/join/main' : '/pages/min/join/main'"
		                	hover-class='none'>
		                    <img src="/static/images/navs/hezuo.png">
		                    <p>项目加盟</p>
		                </a>
		            </li>
		        </ul>
		    </div>
		</div>
		<!-- 个人中心 -->
		<div class="l-center l-user-box">
		    <ul class="l-user-list">
		        <li>
		        	<a 
		        		:href="login ? '/pages/min/my-publish/main' : '/pages/min/login/main'"
		        		hover-class='none'>
		        		<i class="iconfont icon-publish color-03A9F4"></i>
		        		<p>我的发布</p>
		        	</a>
		        	<!-- <a @click='proding'>
		        		<i class="iconfont icon-publish color-03A9F4"></i>
		        		<p>我的发布</p>
		        	</a> -->
		        </li>
		        <li>
		        	<a 
		        		:href="login ? '/pages/min/collect/main' : '/pages/min/login/main'"
		        		hover-class='none'>
		        		<i class="iconfont icon-love color-f00"></i>
			        	<p>我的收藏</p>
		        	</a>
	        		<!-- <a @click='proding'>
		        		<i class="iconfont icon-love color-f00"></i>
			        	<p>我的收藏</p>
		        	</a> -->
		    	</li>
		        <li>
		        	<a 
		        		:href="login ? '/pages/min/suggest/main' : '/pages/min/login/main'"
		        		hover-class='none'>
		        		<i class="iconfont icon-suggest color-03A9F4"></i>
			        	<p>意见板块</p>
		        	</a>
		        	<!-- <a @click='proding'>
			        	<i class="iconfont icon-suggest color-03A9F4"></i>
			        	<p>意见板块</p>
		        	</a> -->
		        </li>
		        <li>
		        	<a @click="makeCall('400-0889-003')">
		        		<i class="iconfont icon-tel color-FF5722"></i>
		        		<p>免费热线</p>
		        	</a>
		        </li>
		        <li>
		        	<button
		        		class='kefu-online btn-clear'
		        		open-type="contact">
			        	<i class="iconfont icon-kefu color-ffae1a"></i>
			        	<p>在线客服</p>
			    	</button>
		    	</li>
		        <li>
		        	<a 
						href="/pages/min/share-qrcode/main"
		        		hover-class='none'>
		        		<i class="iconfont icon-yq color-ffae1a"></i>
		        		<p>我要邀请</p>
			    	</a>
		        	<!-- <a @click='proding'>
		        		<i class="iconfont icon-yq color-ffae1a"></i>
		        		<p>我要邀请</p>
			    	</a> -->
		    	</li>
		    </ul>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import makePhone from '@/mixins/make-phone/index'
import wx from 'wx'

import { pgjOss, fullApi } from '@/service/api'

export default {
	mixins: [share, makePhone],
	data() {
		return {
			img_url: pgjOss,
			login: '',
			auth: false
		}
	},
	methods: {
		proding () {
			this.$loading('产品开发中', true, 1000)
				.then(() => {
					this.$unLoading();
				});
		},
		goLogin () {
			wx.navigateTo({
				url: '../login/main'
			});
		},
		logout () {
			this.$flyio.get(fullApi.LOGOUT)
				.then(res => {
					let { code, msg } = res.data;
					if (code == 1) {
						this.$toast(msg);
					    // 清缓存
					    try {
						  wx.removeStorageSync('login');
						} catch (e) {};
						this.login = '';	// 初始化
					} else {
						this.$toast(msg, false);
					}
				});
		}
	},
	onShow () {
		try {
		  let login = wx.getStorageSync('login'),
		  	  openid = wx.getStorageSync('openid');
		  if (login) {
		    this.login = login;
		  }
		  if (openid) {
		  	this.auth = true;
		  }
		} catch (e) {}
	},
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	@header_h: 46px;

	.ko-header {
		height: @header_h !important;
		line-height: @header_h;
		background: @main;
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
		background: url('https://www.puguanjiacn.com/Public/Mobile/images/user-top.png') no-repeat;
    	background-size: 380px 184px;
		background-position: -2px -2px;
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
	    	height: 80px;
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
		    	height: 40px;
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
	.kefu-online {
		box-sizing: border-box;
		font-size: 14px;
		line-height: normal;
		background: #fff;
	}
	.settings {
		position: absolute;
		top: 15px;
		right: 15px;
		color: white;
		font-size: 40px !improtant;
	}
</style>