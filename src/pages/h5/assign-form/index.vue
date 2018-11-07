<template>
	<div>
		<ko-header
			title='找铺' />
		<!--多图片上传-->
		<div class="l-r-tf-box" style="margin-top: 0">
		    <div class="l-center">
		        <div class="layui-upload">
		            <blockquote class="layui-elem-quote layui-quote-nm">
		                预览图：
		                <div class="layui-upload-list" id="img-show"></div>
		            </blockquote>
		            <p>请选择小于800KB的图片上传，请选择PNG/JPG格式文件</p>
		            <button type="button" class="layui-btn bgc-ffae1a" id="img-up">多图片上传</button>
		        </div>
		    </div>
		</div>
		<!--表单-->
		<div class="l-r-tf-box">
		    <form class="layui-form" action="">
		        <div class="layui-form-item">
		            <label class="layui-form-label">标题</label>
		            <div class="layui-input-block">
		                <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <label class="layui-form-label">行业</label>
		            <div class="layui-input-block">
		                <select name="city" lay-verify="required">
		                    <option value=""></option>
		                    <option value="0">全部</option>
		                    <option value="1">酒楼餐饮</option>
		                    <option value="2">旅馆宾馆</option>
		                    <option value="3">教育培训</option>
		                    <option value="4">医药保健</option>
		                </select>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <label class="layui-form-label">区域</label>
		            <div class="layui-input-block">
		                <select name="city" lay-verify="required">
		                    <option value=""></option>
		                    <option value="0">全部</option>
		                    <option value="1">虎门镇</option>
		                    <option value="2">虎门镇</option>
		                    <option value="3">虎门镇</option>
		                    <option value="4">虎门镇</option>
		                </select>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <label class="layui-form-label">详细地址</label>
		            <div class="layui-input-block">
		                <input type="text" name="title" required  lay-verify="required" placeholder="请填写" autocomplete="off" class="layui-input">
		                <span class="l-rel-sapan"><i class="iconfont icon-ding-normal"></i></span>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <label class="layui-form-label">具体面积</label>
		            <div class="layui-input-block">
		                <input type="text" name="title" required  lay-verify="required" placeholder="请填写" autocomplete="off" class="layui-input">
		                <span class="l-rel-sapan">平方米</span>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <label class="layui-form-label">租金</label>
		            <div class="layui-input-block">
		                <input type="text" name="title" required  lay-verify="required" placeholder="请填写" autocomplete="off" class="layui-input">
		                <span class="l-rel-sapan">元/月</span>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <label class="layui-form-label">转让费</label>
		            <div class="layui-input-block">
		                <input type="text" name="title" required  lay-verify="required" placeholder="请填写" autocomplete="off" class="layui-input">
		                <span class="l-rel-sapan">元</span>
		            </div>
		        </div>
		        <div class="layui-form-item layui-form-text">
		            <label class="layui-form-label">详细信息</label>
		            <div class="layui-input-block">
		                <textarea name="desc" placeholder="请填写店铺信息" class="layui-textarea"></textarea>
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <label class="layui-form-label">联系人</label>
		            <div class="layui-input-block">
		                <input type="text" name="title" required  lay-verify="required" placeholder="请填写" autocomplete="off" class="layui-input">
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <label class="layui-form-label">手机号码</label>
		            <div class="layui-input-block">
		                <input type="text" name="title" required  lay-verify="required" placeholder="请填写" autocomplete="off" class="layui-input">
		            </div>
		        </div>
		        <div class="layui-form-item">
		            <div class="layui-input-block">
		                <button class="layui-btn bgc-ffae1a" lay-submit lay-filter="formre-tf">立即提交</button>
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
	      tabBar
	    }
	},
	components: {
		'ko-header': koHeader,
		tabbar
	},
	mounted () {
		layui.use(['form', 'upload'], () => {
	        let form = layui.form,
	        	upload = layui.upload;

	        form.render();
		    upload.render({
		        elem: '#img-up'
		        ,url: '/upload/'
		        ,accept: 'file' //普通文件
		        ,exts: 'png|jpg' //只允许PNG/JPG
		        ,size: 800 //限制文件大小，单位 KB
		        ,multiple: true
		        ,before: function(obj){
		            //预读本地文件示例，不支持ie8
		            obj.preview(function(index, file, result){
		                $('#img-show').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">')
		            });
		        }
		        ,done: function(res){
		            //上传完毕
		            layer.msg('上传成功');
		        }
		    });	
	    });
	}
}
</script>

<style lang="less">
	.l-set-box, .l-r-tf-box {
	    background-color: #fff;
	    margin-top: 10px;
	}
	.l-release-box{
	    background: url("../../../../static/images/t2.jpg") no-repeat center;
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
	    margin-bottom: 10px;

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