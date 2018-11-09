<template>
	<div>
		<!--多图片上传-->
		<div class="l-r-tf-box" style="margin-top: 0">
		    <div class="l-center">
		        <div class="layui-upload">
		            <blockquote class="layui-elem-quote layui-quote-nm">
		                预览图：
		                <div class="layui-upload-list" id="img-show"></div>
		            </blockquote>
		            <p>请选择小于800KB的图片上传，请选择PNG/JPG格式文件</p>
		            <button type="button" class="layui-btn btn-clear bgc-ffae1a">多图片上传</button>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>

</script>

<style lang="less">
	@import '~@/style/min/layui.less';

	.l-set-box, .l-r-tf-box {
	    background-color: #fff;
	    margin-top: 10px;
	}
	.l-release-box{
	    background: url("https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png") no-repeat center;
	    background-size: 100%;
	    border-radius: 6px;
	    color: #fff;
	    position: relative;
	}
	.l-release-box p {
	    padding: 5px 25px;
	    font-size: 16px;
	}
	.l-release-box a {
	    border: 1px solid #fff;
	    padding: 5px 25px;
	    display: inline-block;
	    margin: 20px 0 20px 25px;
	    border-radius: 20px;
	    color: #fff;
	    font-size: 16px;
	}
	.l-ico-release {
	    position: absolute;
	    right: 34px;
	    font-size: 90px;
	    top: 27px;
	}
	.l-r-tf-box .layui-upload{
	    padding: 10px 0;
	}
	.l-r-tf-box .layui-upload p{
	    font-size: 13px;
	    color: #999;
	    margin: 10px 0;

	}
	.l-r-tf-box .layui-form-label{
	    text-align: left;
	}
	.l-r-tf-box .layui-input-block{
	    position: relative;
	}
	.l-r-tf-box .layui-input-block input{
	    border: 0;
	}
	.l-r-tf-box .layui-input-block textarea{
	    border: 0;
	}
	.l-r-tf-box .layui-form-item{
	    border-bottom: 1px solid #e6e6e6;
	}
	.l-r-tf-box .layui-form-select .layui-edge{
	    right: 20px;
	}
	.l-rel-sapan {
	    position: absolute;
	    right: 15px;
	    top: 4px;
	    color: #999;
	    .iconfont {
	    	font-size: 25px;
	    }
	}
	.l-rel-sapan i{
	    color: #ffae1a;
	}
	.l-r-tf-box .layui-form-item button{
	    margin-top: 10px;
	    margin-bottom: 25px;
	}
	.l-r-tf-box .layui-form-item:nth-last-child(1){
	    margin-bottom: 0;
	}
</style>