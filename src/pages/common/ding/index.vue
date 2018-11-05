<template>
	<div></div>
</template>

<script>
import mock from '@/pages/mock'

let { cityList, cityTitles } = mock;

export default {
	data () {
		return {
			location: '东莞',
			cityList: cityList,
			cityTitles: cityTitles
		}
	},
	methods: {
		// 更换城市
		changeCity (detail) {
			this.location = detail.name;
		},
		// 右侧字母目录点击
		titleClick (title) {

		}
	}
}
</script>

<style lang="less">
	@import './index.less';
</style>