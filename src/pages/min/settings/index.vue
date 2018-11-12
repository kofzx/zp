<template>
	<div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a hover-class='none' href=""><p>头像</p><img src="../../../../static/images/header.png" alt="head" title="head"><i class="iconfont icon-arrow-right"></i></a>
		            <a hover-class='none'><p>用户</p><p>123456789</p></a>
		            <a hover-class='none'><p>手机号码</p><p>987654321</p></a>
		        </div>
		    </div>
		</div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a hover-class='none' href='/pages/min/suggest/main'><p>意见反馈</p><i class="iconfont icon-arrow-right"></i></a>
		            <a hover-class='none' href="set-pwd.html"><p>修改密码</p><i class="iconfont icon-arrow-right"></i></a>
		        </div>
		    </div>
		</div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a hover-class='none' href="about.html"><p>关于我们</p><i class="iconfont icon-arrow-right"></i></a>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
	.l-set-box , .l-r-tf-box{
	    background-color: #fff;
	    margin-top: 10px;
	}
	.l-set-list a{
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    padding: 15px 30px 15px 10px;
	    border-bottom: 1px solid #eaeaea;
	}
	.l-set-list a img {
	    width: 40px;
	    height: 40px;
	}
	.l-set-list .iconfont{
	    position: absolute;
	    font-size: 20px;
	    color: #999;
	    right: 10px;
	}
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