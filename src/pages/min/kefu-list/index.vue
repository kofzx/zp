<template>
	<div class="pd-box">
		<call-item
			url=''
			src='../../../../static/images/header.png'
			title='网络客服客服徐小姐'
			phone='13424446056'
			count1='524'
			count2='638' />
	</div>
</template>

<script>
import callItem from '@/components/core/common/call-item/index'

export default {
	components: {
		'call-item': callItem
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	page {
		background: white;
	}
	.call-item {
		.iconfont {
			background-color: @main !important;
		}
	}
	.call-item__info {
		span {
	    	color: @main !important;
	    }
	}
</style>