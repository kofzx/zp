<template>
	<div>
		<!-- 转店承诺 -->
		<div class="l-qk-tf-bgbox" v-if="quickType === 'assign'">
		    <div class="l-qk-tf-bgword">
		        <p>快速转店承诺服务</p>
		        <p>为您成功转让为止</p>
		        <p>用户平均<span>7</span>天转店成功</p>
		    </div>
		</div>
		<!-- 找店承诺 -->
		<div class="l-qk-tf-bgbox" v-else-if="quickType === 'seek'">
		    <div class="l-qk-tf-bgword">
		        <p>近30天有 <span>4821</span> 位开店人在</p>
		        <p>铺莞家找到满意店铺</p>
		        <p>用户平均<span>15</span>天找店成功</p>
		    </div>
		</div>
		
		<!-- 表单 -->
		<div class="l-qk-tf-form">
		    <form action="">
		        <p class="l-qk-tf-word">留下手机号5分钟内有工作人员联系你！</p>
		        <div class="l-qk-tf-put">
		            <input class="inb tl bgc-fff" type="text" name="phone" placeholder="请输入手机号">
		            <button class="mui-btn inb btn-clear f14" type="submit">提交</button>
		        </div>
		    </form>
		</div>
		<!-- 优势 -->
		<div class="l-qk-tf-ys">
		    <p class="l-qk-tf-ys-tit">铺先生的  <span> 5 </span> 大优势</p>
		    <ul class="l-qk-tf-ys-list">
		        <li>
		            <p><i class="iconfont icon-gupiao"></i></p>
		            <p>专业高效</p>
		            <p>01</p>
		        </li>
		        <li>
		            <p><i class="iconfont icon-jingzhun"></i></p>
		            <p>真实精准</p>
		            <p>02</p>
		        </li>
		        <li>
		            <p><i class="iconfont icon-ziyuan"></i></p>
		            <p>资源丰富</p>
		            <p>03</p>
		        </li>
		        <li>
		            <p><i class="iconfont icon-youzhi"></i></p>
		            <p>服务优质</p>
		            <p>04</p>
		        </li>
		        <li>
		            <p><i class="iconfont icon-falv2"></i></p>
		            <p>法律担保</p>
		            <p>05</p>
		        </li>
		    </ul>
		</div>
		<!-- 服务流程 -->
		<div class="l-qk-tf-swrv">
		    <p class="l-qk-tf-swrv-tit">铺先生服务流程</p>
		    <ul class="l-qk-tf-swrv-list">
		        <li>
		            <i class="iconfont icon-phone"></i>
		            <div>
		                <p class="l-qk-tf-swrv-list-tit">联系预约</p>
		                <p class="l-qk-tf-swrv-list-w">联系客服预约上门</p>
		            </div>
		        </li>
		        <li>
		            <i class="iconfont icon-assign"></i>
		            <div>
		                <p class="l-qk-tf-swrv-list-tit">上门核验</p>
		                <p class="l-qk-tf-swrv-list-w">业务员上门核验店铺</p>
		            </div>
		        </li>
		        <li>
		            <i class="iconfont icon-suggest"></i>
		            <div>
		                <p class="l-qk-tf-swrv-list-tit">签订合同</p>
		                <p class="l-qk-tf-swrv-list-w">业务员上门确认并签订合同</p>
		            </div>
		        </li>
		        <li>
		            <i class="iconfont icon-kefu"></i>
		            <div>
		                <p class="l-qk-tf-swrv-list-tit">客服服务</p>
		                <p class="l-qk-tf-swrv-list-w">专业转店客服跟踪店铺转让过程</p>
		            </div>
		        </li>
		        <li>
		            <i class="iconfont icon-safe"></i>
		            <div>
		                <p class="l-qk-tf-swrv-list-tit">确认转出</p>
		                <p class="l-qk-tf-swrv-list-w">直到店铺转出为止</p>
		            </div>
		        </li>
		    </ul>
		</div>
	</div>
</template>

<script>
import Quick from '@/pages/common/quick/index'

export default {
	extends: Quick,
	data() {
		return {
			quickType: ''
		}
	},
	mounted () {
		this.quickType = this.$root.$mp.query.type;
	}
}
</script>

<style lang="less">
	.l-qk-tf-bgbox,
	.l-qk-tf-swrv {
		background-image: url('https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png') !important;
	}
	.l-qk-tf-put {
		input {
			width: 71% !important;
		}
		button {
			line-height: 2.8;
		}
	}
</style>