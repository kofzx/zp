<template>
	<div>
		<ko-header
			title='找铺' />
		<div class="l-set-pagebox">
		    <form class="layui-form login-form">
		        <div class="layui-form-item">
		            <i class="iconfont icon-lock ico-1"></i>
		            <input type="password" required lay-verify="required" lay-verType="tips" placeholder="请输入原始密码：" autocomplete="off" class="password layui-input login-inp">
		            <i class="iconfont icon-eye eye"></i>
		        </div>
		        <div class="layui-form-item">
		            <i class="iconfont icon-lock ico-1"></i>
		            <input type="password" required lay-verify="required" lay-verType="tips" placeholder="请输入原始密码：" autocomplete="off" class="password layui-input login-inp">
		            <i class="iconfont icon-eye eye"></i>
		        </div>
		        <div class="layui-form-item">
		            <i class="iconfont icon-lock ico-1"></i>
		            <input type="password" required lay-verify="required" lay-verType="tips" placeholder="请输入新的密码：" autocomplete="off" class="password layui-input login-inp">
		            <i class="iconfont icon-eye eye"></i>
		        </div>
		        <div class="layui-form-item" style="margin-top: 15px;">
		            <button class="layui-btn btn-clear main-bkc">确定</button>
		        </div>
		    </form>
		</div>
		<tabbar 
	      :color='tabBar.color'
	      :selectedColor='tabBar.selectedColor'
	      :tabList='tabBar.list'
	      />
	</div>
</template>

<script>
import tabBar from '@/_start/h5/tabBar'

import koHeader from '@/components/layouts/ko-header/index'
import tabbar from '@/components/core/h5/tabbar/index'

export default {
	data() {
	    return {
	      tabBar
	    }
	},
	components: {
		'ko-header': koHeader,
		tabbar
	}
}
</script>

<style lang="less">
	@import '~@/style/common/components/login.less';
</style>