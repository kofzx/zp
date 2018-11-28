<template>
	<div class="pd-box">
		<call-item
			v-for='(item, index) in list'
			:key='index'
			:src="img_url + item.headimg"
			:title='item.name'
			:phone='item.phone' />
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import { pgjApi, fullApi } from '@/service/api'

import callItem from '@/components/core/common/call-item/index'

export default {
	mixins: [share],
	data() {
		return {
			img_url: pgjApi,
			list: []
		}
	},
	components: {
		'call-item': callItem
	},
	methods: {
		getKefu () {
			this.$flyio.get(fullApi.KEFU_INIT)
				.then(res => {
					this.list = res.data;
				});
		}
	},
	created () {
		this.getKefu();
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