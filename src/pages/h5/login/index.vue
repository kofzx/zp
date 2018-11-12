<template>
	<div>
		<!--个人中心顶部-->
		<div class="l-login-top">
		    <a href="javascript:history.back(-1)">
		        <i class="iconfont icon-left-arrow color-fff"></i>
		    </a>
		    <a href="register.html">注册</a>
		</div>
		<!--登录-->
		<div class="l-login-box">
		    <div class="l-center l-login-border layui-anim layui-anim-up">
		        <div class="l-login-head">
		            <img src="../../../../static/images/logo.png" alt="logo" title="logo">
		            <p class="l-login-tit">登录</p>
		        </div>
		        <form class="layui-form login-form">
		            <div class="layui-form-item">
		                <i class="iconfont icon-user ico-1"></i>
		                <input type="text" required  lay-verify="required" lay-verType="tips" placeholder="请输入手机号：" autocomplete="off" class="layui-input login-inp">
		            </div>
		            <div class="layui-form-item">
		                <i class="iconfont icon-lock ico-1"></i>
		                <input type="password" required lay-verify="required" lay-verType="tips" placeholder="请输入密码：" autocomplete="off" class="password layui-input login-inp">
		                <i class="iconfont icon-eye eye"></i>
		            </div>
		            <div class="l-login-pw"><a href="password.html">忘记密码</a></div>
		            <div class="layui-form-item">
		                <button class="layui-btn" lay-submit lay-filter="formlogin" style="background-color:#fb8017 ">立即登录</button>
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
	@import '~@/style/common/components/login.less';
</style>