<template>
	<div>
		<div class="l-st-dtl-tit-box">
		    <p class="l-st-dtl-tit">{{detail.title}}</p>
		    <div class="l-st-dtl-time">
		        <p>{{detail.addtime}}</p>
		        <p>编号:{{detail.number}}</p>
		    </div>
		</div>
		<div class="l-st-dtl-abox">
		    <div>
		        <p>期望区域</p>
		        <p>{{detail.rname}}</p>
		    </div>
		    <!-- <div>
		        <p>经营类型</p>
		        <p>个人</p>
		    </div> -->
		    <div>
		        <p>求租行业</p>
		        <p>{{detail.cat_name}}</p>
		    </div>
		</div>
		<!--物业类型-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li>期望租金 : {{detail.rent}}元</li>
		        <li>具体面积 : {{detail.area}}平米</li>
		    </ul>
		</div>
		<!-- 在线咨询 -->
		<call-card 
			:avatar="detail.headimg ? detail.headimg : '../../../../static/images/header.png'"
			:person='detail.linkman'
			:phone='detail.phone' />
		<!--租约信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-help"></i> 租约信息</li>
		        <li>租金 : {{detail.rent}}元</li>
		    </ul>
		</div>
		<!-- 信息描述-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-news"></i> 信息描述</li>
		        <li>
		            <p 
		            	class="l-st-dtl-list-word" 
		            	v-html='detail.description'></p>
		        </li>
		    </ul>
		</div>
		<call-bottom
			color='ffae1a'
			:person='detail.linkman'
			:phone='detail.phone' />
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import callCard from '@/components/core/common/call-card'
import callBottom from '@/components/core/common/call-bottom'

export default {
	mixins: [share],
	data() {
		return {
			detail: {}
		}
	},
	components: {
		'call-card': callCard,
		'call-bottom': callBottom
	},
	mounted () {
		let data_decodeURI = decodeURIComponent(this.$mp.query.data);
		let data_json = JSON.parse(data_decodeURI);
		this.detail = data_json;
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