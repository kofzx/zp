<template>
	<div>
		<div class="l-set-pagebox">
		    <form class="layui-form" action="">
		        <div class="layui-form-item">
		            <div class="layui-input-block">
		                <!-- <input type="radio" name="sex" value="意见建议" title="意见建议" checked>
		                <input type="radio" name="sex" value="投诉" title="投诉">
		                <input type="radio" name="sex" value="其他" title="其他"> -->
		                <radio-group>
		                	<label class="label-radio"><radio value='意见建议' checked />意见建议</label>
		                	<label class="label-radio"><radio value='投诉' />投诉</label>
		                	<label class="label-radio"><radio value='其他' />其他</label>
		                </radio-group>
		            </div>
		        </div>
		        <div class="layui-form-item layui-form-text">
		            <div class="layui-input-inline">
		                <textarea name="desc" placeholder="请输入您的建议" class="layui-textarea"></textarea>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <div class="layui-input-block">
		                <button class="layui-btn btn-clear bgc-ffae1a" lay-submit lay-filter="formsuggest">立即提交</button>
		                <button type="reset" class="layui-btn btn-clear layui-btn-primary">重置</button>
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

	.l-set-pagebox{
	    background-color: #fff;
	    padding-bottom: 1px;
	}
	.l-set-pagebox .layui-input-block{
	    margin-left: 10px;
	}
	.l-set-pagebox .layui-form-item .layui-input-inline{
		width: 95%;
	    margin: 0 auto;
	}
	.l-set-pagebox .layui-textarea{
	    height: 250px;
	}
	.l-set-pagebox .login-form{
	    margin-top: 0;
	}
	radio {
		position: relative;
		left: 2px;
	}
	.label-radio {
		margin: 6px 10px 0 0;
	}
</style>