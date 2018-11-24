<template>
	<div>
		<!-- 发布 -->
		<div class="l-center mt-10">
		    <navigator 
		    	:url="login ? '/pages/min/assign-form/main' : '/pages/min/login/main'" 
		    	class="l-release-box">
		        <p class="title">帮您快速转让店铺</p>
		        <p>正在转铺6666家</p>
		        <a>店铺转让</a>
		        <i class="iconfont icon-assign l-ico-release"></i>
		    </navigator>
		    <navigator 
		    	:url="login ? '/pages/min/seek-form/main' : '/pages/min/login/main'" 
		    	class="l-release-box mt-10">
		        <p class="title">快速帮您找到店铺</p>
		        <p>在线找店4567人</p>
		        <a>选店找址</a>
		        <i class="iconfont icon-ding-sp l-ico-release"></i>
		    </navigator>
		</div>
	</div>
</template>

<script>
export default {
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
	    background: url('http://www.pgj.com/Mobile/images/bg.jpg') no-repeat center;
	    background-size: 100%;
	    border-radius: 6px;
	    color: #fff;
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
		    margin: 20px 0 20px 25px;
		    border-radius: 20px;
		    color: #fff;
		    font-size: 16px;
	    }
	}
	.l-ico-release {
	    position: absolute;
	    right: 34px;
	    font-size: 90px !important;
	    top: 27px;
	}
</style>