<template>
	<div>
		<div class="l-set-pagebox">
		    <form>
				<div class="layui-form login-form">
			        <div class="layui-form-item">
			            <i class="iconfont icon-lock ico-1"></i>
			            <input type="password" placeholder="请输入原始密码：" class="password layui-input login-inp">
			            <i class="iconfont icon-eye eye"></i>
			        </div>
			        <div class="layui-form-item">
			            <i class="iconfont icon-lock ico-1"></i>
			            <input type="password" placeholder="请输入原始密码：" class="password layui-input login-inp">
			            <i class="iconfont icon-eye eye"></i>
			        </div>
			        <div class="layui-form-item">
			            <i class="iconfont icon-lock ico-1"></i>
			            <input type="password" placeholder="请输入新的密码：" class="password layui-input login-inp">
			            <i class="iconfont icon-eye eye"></i>
			        </div>
			        <div class="layui-form-item mt-box">
			            <button class="layui-btn btn-clear main-bkc">确定</button>
			        </div>
				</div>
		    </form>
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

	.l-set-pagebox{
	    background-color: #fff;
	    padding-bottom: 1px;
	}
	.l-set-pagebox .layui-input-block{
	    margin-left: 10px;
	}
	.l-set-pagebox .layui-form-item .layui-input-inline{
	    margin: 0 0 0 6px;
	}
	.l-set-pagebox .layui-textarea{
	    height: 250px;
	}
	.l-set-pagebox .login-form{
	    margin-top: 0;
	}
</style>