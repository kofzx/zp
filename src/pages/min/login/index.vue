<template>
	<div>
		<!--个人中心顶部-->
		<div class="l-login-top">
		    <a href="register.html">注册</a>
		</div>
		<!--登录-->
		<div class="l-login-box">
		    <div class="l-center l-login-border layui-anim layui-anim-up">
		        <div class="l-login-head">
		            <img src="../../../../static/images/logo.png" alt="logo" title="logo">
		            <p class="l-login-tit">登录</p>
		        </div>
		        <form>
		        	<div class="layui-form login-form">
			            <div class="layui-form-item">
			                <i class="iconfont icon-user ico-1"></i>
			                <input type="text" placeholder="请输入手机号：" class="layui-input login-inp">
			            </div>
			            <div class="layui-form-item">
			                <i class="iconfont icon-lock ico-1"></i>
			                <input type="password" placeholder="请输入密码：" class="password layui-input login-inp">
			                <i class="iconfont icon-eye eye"></i>
			            </div>
			            <div class="l-login-pw"><a>忘记密码</a></div>
			            <div class="layui-form-item">
			                <button class="layui-btn main-bkc btn-clear">立即登录</button>
			            </div>
					</div>
		        </form>
		    </div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
	@import '~@/style/min/layui.less';
	@import '~@/style/common/components/login.less';

	page {
		background: white;
	}
	.l-login-top {
		justify-content: flex-end !important;
	}
</style>