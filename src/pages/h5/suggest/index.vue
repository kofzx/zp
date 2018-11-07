<template>
	<div>
		<ko-header
			title='找铺' />

		<div class="l-set-pagebox">
		    <form class="layui-form" action="">
		        <div class="layui-form-item">
		            <div class="layui-input-block">
		                <input type="radio" name="sex" value="意见建议" title="意见建议" checked>
		                <input type="radio" name="sex" value="投诉" title="投诉">
		                <input type="radio" name="sex" value="其他" title="其他">
		            </div>
		        </div>
		        <div class="layui-form-item layui-form-text">
		            <div class="layui-input-inline">
		                <textarea name="desc" placeholder="请输入您的建议" class="layui-textarea"></textarea>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <div class="layui-input-block">
		                <button class="layui-btn bgc-ffae1a" lay-submit lay-filter="formsuggest">立即提交</button>
		                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
		            </div>
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
	      tabBar,
	      storeList: []
	    }
	},
	components: {
		'ko-header': koHeader,
		tabbar
	},
	mounted () {
		layui.use('form', () => {
	        let form = layui.form;
	        form.render();
	    });
	}
}
</script>

<style lang="less">
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