<template>
	<div>
		<!--个人中心顶部-->
		<div class="l-login-top">
		    <a href="javascript:history.back(-1)">
		        <i class="iconfont icon-left-arrow color-fff"></i>
		    </a>
		    <a href="login.html">登录</a>
		</div>
		<!--登录-->
		<div class="l-login-box">
		    <div class="l-center l-login-border layui-anim layui-anim-up">
		        <div class="l-login-head">
		            <img src="../../../../static/images/logo.png" />
		            <p class="l-login-tit">注册</p>
		        </div>
		        <form class="layui-form login-form" action="">
		            <div class="layui-form-item">
		                <i class="iconfont icon-user ico-1"></i>
		                <input type="text" required  lay-verify="required" lay-verType="tips" placeholder="请输入手机号：" autocomplete="off" class="layui-input login-inp">
		            </div>
		            <div class="layui-form-item">
		                <i class="iconfont icon-lock ico-1"></i>
		                <input type="password" required lay-verify="required" lay-verType="tips" placeholder="请输入密码：" autocomplete="off" class="password layui-input login-inp">
		                <i class="iconfont icon-eye eye"></i>
		            </div>
		            <div class="layui-form-item" style="position: relative">
		                <i class="iconfont icon-lock ico-1"></i>
		                <input type="text" required lay-verify="required" lay-verType="tips" placeholder="请输入短信验证码：" autocomplete="off" class="password layui-input login-inp">
		                <button type="button" class="l-register-code">获取验证码</button>
		            </div>
		            <div class="code-box layui-form-item">
		                <input class="code layui-input" required lay-verify="required" lay-verType="tips" type="text" placeholder="验证码" >
		                <img src="../../../../static/images/code.jpg" class="img">
		            </div>
		            <div class="layui-form-item" style="margin-top: 15px;">
		                <button class="layui-btn" lay-submit lay-filter="formregister" style="background-color:#fb8017 ">立即注册</button>
		            </div>
		            <div class="l-register-word">
		                <p>点击注册代表你同意<a href="" class="l-register-word__a"> [ 服务协议 ] </a></p>
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