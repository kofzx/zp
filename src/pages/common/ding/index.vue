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
			this.$loading('更新地址中', true, 500)
				.then(() => {
					this.$unLoading();
					wx.navigateBack({
						delta: 1
					});
				});
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

	@cur_location_height: 50px;

	.cur-location {
		height: @cur_location_height;
		line-height: @cur_location_height;
		color: #333;
		background: white;
		position: fixed;
		top: 46px;
		left: 0;
		right: 0;
	}
	.cur-location--fix {
		height: @cur_location_height;
	}
	.cur-location__light {
		color: @main;
	}
</style>