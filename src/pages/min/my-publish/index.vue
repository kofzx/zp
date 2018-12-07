<template>
	<div>
		<!-- 发布 -->
		<div class="l-center mt-10">
		    <navigator 
		    	url="/pages/min/my-assign/main" 
		    	class="l-release-box">
		        <p class="title">我的转让店铺信息</p>
		        <a>我的转让</a>
		        <i class="iconfont icon-assign l-ico-release"></i>
		    </navigator>
		    <navigator 
		    	url="/pages/min/my-seek/main" 
		    	class="l-release-box mt-10">
		        <p class="title">我的找店选址信息</p>
		        <a>我的找店</a>
		        <i class="iconfont icon-ding-sp l-ico-release"></i>
		    </navigator>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'

export default {
	mixins: [share],
	data() {
		return {
			login: ''
		}
	},
	onShow () {
		try {
		  let login = wx.getStorageSync('login');
		  if (login) {
		    this.login = login;
		  }
		} catch (e) {}
	}
}
</script>

<style lang="less">
	.l-release-box {
	    background: url('https://www.puguanjiacn.com/Public/Mobile/images/bg.jpg') no-repeat center;
	    background-size: 100%;
	    border-radius: 6px;
	    color: #fff;
	    height: 120px;
	    position: relative;
	    p {
	    	padding: 5px 25px;
    		font-size: 16px;
	    }
	    .title {
	    	padding-top: 25px;
	    }
	    a {
	    	border: 1px solid #fff;
		    padding: 5px 25px;
		    display: inline-block;
		    margin: 11px 0 20px 25px;
		    border-radius: 20px;
		    color: #fff;
		    font-size: 16px;
	    }
	}
	.l-ico-release {
	    position: absolute;
	    right: 34px;
	    font-size: 90px !important;
	    top: 11px;
	}
</style>