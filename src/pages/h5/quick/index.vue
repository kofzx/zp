<template>
	<div>
		<ko-header
			title='找铺' />
		<!-- 转店承诺 -->
		<div class="l-qk-tf-bgbox" v-if='type === "assign"'>
		    <div class="l-qk-tf-bgword">
		        <p>快速转店承诺服务</p>
		        <p>为您成功转让为止</p>
		        <p>用户平均<span>7</span>天转店成功</p>
		    </div>
		</div>
		<!-- 找店承诺 -->
		<div class="l-qk-tf-bgbox" v-else-if='type === "seek"'>
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
		            <input type="text" name="phone" placeholder="请输入手机号">
		            <button type="submit" class="mui-btn">提交</button>
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
import koHeader from '@/components/layouts/ko-header/index'

export default {
	data() {
		return {
			type: 'seek'
		}
	},
	components: {
		'ko-header': koHeader
	}
}
</script>

<style lang="less">
	.l-qk-tf-bgbox {
	    background: url('../../../../static/images/t2.jpg') no-repeat center;
	}
	.l-qk-tf-bgword {
	    padding: 30px 10px;
	    line-height: 2;
	    color: #fff;
	    text-align: center;
	    p {
	    	font-size: 24px;
	    	span {
	    		color: #ffae1a;
    			font-size: 35px;
	    	}
	    }
	}
	.l-qk-tf-form {
	    padding: 25px 10px;
	    text-align: center;
	}
	.l-qk-tf-word {
	    color: #666;
	    margin-bottom: 20px;
	}
	.l-qk-tf-put {
	    border: 2px solid #ffae1a;
	    width: 80%;
	    margin: 0 auto;
	    height: 40px;
	    line-height: 40px;
	    border-radius: 5px;
	    overflow: hidden;
	    background-color: #ffae1a;
	    input {
	    	height: 40px;
		    width: 70%;
		    padding: 0 10px;
		    box-sizing: border-box;
	    }
	    button {
	    	background-color: #ffae1a;
		    height: 40px;
		    width: 28%;
		    box-sizing: border-box;
		    color: #fff;
		    letter-spacing: 2px;
	    }
	}
	.l-qk-tf-ys {
	    background-color: #fff;
	    padding: 20px 0;
	    text-align: center;
	}
	.l-qk-tf-ys-tit {
	    font-size: 20px;
	    span {
	    	font-size: 23px;
    		color: #ffae1a;
	    }
	}
	.l-qk-tf-ys-list {
		li {
			display: flex;
		    border: 2px solid #ffae1a;
		    width: 70%;
		    margin: 25px auto;
		    height: 45px;
		    border-radius: 35px;
		    color: #ffae1a;
		    justify-content: space-between;
		    align-items: center;
		    p {
		    	margin: 0 16px;
    			font-size: 22px;
		    }
		    .iconfont {
		    	font-size: 25px;
		    }
		}
	}
	.l-qk-tf-swrv {
	    background: url('../../../../static/images/t2.jpg') no-repeat center;
	    text-align: center;
	    color: #fff;
	    padding: 30px 0;
	}
	.l-qk-tf-swrv-tit {
	    padding-bottom: 30px;
	    font-size: 23px;
	}
	.l-qk-tf-swrv-list {
		li {
			display: flex;
		    margin-bottom: 25px;
		    align-items: center;
		}
		.iconfont {
			font-size: 40px;
		    margin: 0 15px;
		    color: #ffae1a;
		}
		div {
			text-align: left;
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    line-height: 1.5;
		}
	}
	.l-qk-tf-swrv-list-tit {
	    font-size: 16px;
	}
	.l-qk-tf-swrv-list-w {
	    color: #ffae1a;
	    font-size: 15px;
	}
</style>