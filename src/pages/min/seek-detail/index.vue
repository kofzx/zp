<template>
	<div>
		<div class="l-st-dtl-tit-box">
		    <p class="l-st-dtl-tit">求租万江附近镇区工厂附近店铺！！急急急！</p>
		    <div class="l-st-dtl-time">
		        <p>2018-11-05</p>
		        <p>编号:24561</p>
		    </div>
		</div>
		<div class="l-st-dtl-abox">
		    <div>
		        <p>期望区域</p>
		        <p>万江镇</p>
		    </div>
		    <div>
		        <p>经营类型</p>
		        <p>个人</p>
		    </div>
		    <div>
		        <p>求租行业</p>
		        <p>餐馆</p>
		    </div>
		</div>
		<!--物业类型-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li>期望租金 : 面议</li>
		        <li>首选类型 : 一手</li>
		        <li>具体面积 : 200-500平米</li>
		    </ul>
		</div>
		<!-- 在线咨询 -->
		<call-card 
			avatar='../../../../static/images/header.png'
			phone='133333' />
		<!--租约信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-help"></i> 租约信息</li>
		        <li>租金 : 面议</li>
		    </ul>
		</div>
		<!-- 信息描述-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-news"></i> 信息描述</li>
		        <li>
		            <p class="l-st-dtl-list-word">
		                在万江附近，工业区，工厂门口或者市场附近，面积300平左右，有合适的请联系我</p>
		        </li>
		    </ul>
		</div>
		<call-bottom
			color='189ccd'
			phone='133333' />
	</div>
</template>

<script>
import callCard from '@/components/core/common/call-card'
import callBottom from '@/components/core/common/call-bottom'

export default {
	components: {
		'call-card': callCard,
		'call-bottom': callBottom
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	@import '~@/style/common/components/top-card.less';
	@import '~@/style/common/components/cell-list.less';

	// 重写组件样式
	.online-call__text--tel {
		color: @main !important;
	}
	.online-call__now {
		background-color: @main !important;
	}
	.call-bottom__tel {
		color: @main !important;
	}
</style>