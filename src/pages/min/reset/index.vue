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
		            <img src="../../../../static/images/logo.png">
		            <p class="l-login-tit">重置密码</p>
		        </div>
		        <form>
					<div class="layui-form login-form">
			            <div class="layui-form-item">
			                <i class="iconfont icon-user ico-1"></i>
			                <input type="text" placeholder="请输入手机号：" class="layui-input login-inp">
			            </div>
			            <div class="layui-form-item">
			                <i class="iconfont icon-lock ico-1"></i>
			                <input type="password" placeholder="请输入新的密码：" class="password layui-input login-inp">
			                <i class="iconfont icon-eye eye"></i>
			            </div>
			            <div class="code-box layui-form-item">
			            <input class="code layui-input" type="text" placeholder="验证码" >
			            <img src="../../../../static/images/code.jpg" class="img">
			            </div>
			            <div class="layui-form-item mt-box">
			                <button class="layui-btn btn-clear main-bkc">确定</button>
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