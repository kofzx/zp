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
					<button type="button" class="layui-btn btn-clear main-bkc">多图片上传</button>
				</div>
			</div>
		</div>
		<!--表单-->
		<div class="l-r-tf-box">
			<form>
				<div class="layui-form">
					<div class="layui-form-item">
						<label class="layui-form-label">标题</label>
						<div class="layui-input-block">
							<input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">行业</label>
						<div class="layui-input-block clearfix">
							<picker 
				            	class='layui-input layui-input--picker fl' 
				            	mode="multiSelector" 
				            	:range='tradeArray'
				            	range-key='title'
				            	name='trade'>
				                  <div>请选择</div>
				            </picker>
				            <i class="iconfont icon-arrow-right icon--fix fr g6 mr-10"></i>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">区域</label>
						<div class="layui-input-block clearfix">
							<picker 
				            	class='layui-input layui-input--picker fl' 
				            	mode="selector" 
				            	:range='regionArray'
				            	range-key='title'
				            	name='region'>
				                  <div>请选择</div>
				            </picker>
				            <i class="iconfont icon-arrow-right icon--fix fr g6 mr-10"></i>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">详细地址</label>
						<div class="layui-input-block clearfix">
							<input type="text" name="title" placeholder="请填写" class="layui-input fl">
							<div class="l-rel-sapan fr"><i class="iconfont icon-ding-normal main-color"></i></div>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">具体面积</label>
						<div class="layui-input-block clearfix">
							<input type="text" name="title" maxlength='20' placeholder="请填写" class="layui-input fl">
							<span class="l-rel-sapan fr">平方米</span>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">租金</label>
						<div class="layui-input-block clearfix">
							<input type="text" name="title" maxlength='20' placeholder="请填写" class="layui-input fl">
							<span class="l-rel-sapan fr">元/月</span>
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label clearfix">转让费</label>
						<div class="layui-input-block">
							<input type="text" name="title" maxlength='20' placeholder="请填写"class="layui-input fl">
							<span class="l-rel-sapan fr">元</span>
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
							<input type="text" name="title" placeholder="请填写" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">手机号码</label>
						<div class="layui-input-block">
							<input type="number" name="phone" maxlength='11' placeholder="请填写"class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<div class="layui-input-block">
							<button class="layui-btn btn-clear main-bkc">立即提交</button>
							<button class="layui-btn layui-btn-primary btn-clear">重置</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import mock from '@/pages/mock'

let { tradeArray, regionArray, areaArray, orderArray } = mock;

export default {
	data() {
		return {
			tradeArray,
			regionArray,
		}
	},
	methods: {

	}
}
</script>

<style lang="less">
@import '~@/style/min/layui.less';
@import '~@/style/common/components/form.less';

.iconfont {
	font-size: 16px !important;
}

// .l-release-box{
// 	background: url("https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png") no-repeat center;
// 	background-size: 100%;
// 	border-radius: 6px;
// 	color: #fff;
// 	position: relative;
// }
// .l-release-box p {
// 	padding: 5px 25px;
// 	font-size: 16px;
// }
// .l-release-box a {
// 	border: 1px solid #fff;
// 	padding: 5px 25px;
// 	display: inline-block;
// 	margin: 20px 0 20px 25px;
// 	border-radius: 20px;
// 	color: #fff;
// 	font-size: 16px;
// }
// .l-ico-release {
// 	position: absolute;
// 	right: 34px;
// 	font-size: 90px;
// 	top: 27px;
// }

</style>