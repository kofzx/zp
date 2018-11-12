<template>
	<div>
		<!--个人中心顶部-->
		<div class="l-login-top">
		    <a href="login.html">登录</a>
		</div>
		<!--登录-->
		<div class="l-login-box">
		    <div class="l-center l-login-border layui-anim layui-anim-up">
		        <div class="l-login-head">
		            <img src="../../../../static/images/logo.png" />
		            <p class="l-login-tit">注册</p>
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
			            <div class="layui-form-item">
			                <i class="iconfont icon-lock ico-1"></i>
			                <input type="text" placeholder="请输入短信验证码：" class="password layui-input login-inp">
			                <p class="l-register-code">获取验证码</p>
			            </div>
			            <div class="code-box layui-form-item">
			                <input class="code layui-input" type="text" placeholder="验证码" >
			                <img src="../../../../static/images/code.jpg" class="img">
			            </div>
			            <div class="layui-form-item mt-box">
			                <button class="layui-btn btn-clear main-bkc">立即注册</button>
			            </div>
			            <div class="l-register-word">
			                <p>点击注册代表你同意<span class="l-register-word__a"> [ 服务协议 ] </span></p>
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
		padding-bottom: 100px;
		background: white;
	}
	.l-login-top {
		justify-content: flex-end !important;
	}
</style>