<template>
	<div></div>
</template>

<script>
import mock from '@/pages/mock'

let { cityList, cityTitles } = mock;

export default {
	data () {
		return {
			curCity: '',
			cityList: cityList,
			cityTitles: cityTitles
		}
	},
	methods: {
		// 更换城市
		changeCity (detail) {
			this.curCity = detail.area_name;
			wx.setStorageSync('ding', detail.area_name);
		},
		// 右侧字母目录点击
		titleClick (title) {

		}
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	.cur-location {
		height: 50px;
		line-height: 50px;
		color: #333;
		background: white;
	}
	.cur-location__light {
		color: @main;
	}
</style>