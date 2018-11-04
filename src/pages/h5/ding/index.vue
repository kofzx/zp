<template>
	<div>
		<ko-header
			title='找铺' />
		<p class="cur-location pd-box" id="test">定位城市：<span class="cur-location__light">{{location}}</span></p>
		<city-item 
			v-for="item in cityList" 
			:key="item.id" 
			:title='item.title' 
			:city-list='item.city' 
			city-field='name'
			@changeCity='changeCity' />
		<city-fixed
			:city-titles='cityTitles'
			hot-id='remen'
			@titleClick='titleClick' />
	</div>
</template>

<script>
import mock from '@/pages/mock'

import koHeader from '@/components/layouts/ko-header/index'

import cityItem from '@/components/core/common/city-item/index'
import cityFixed from '@/components/core/common/city-fixed/index'

let { cityList, cityTitles } = mock;

export default {
	data() {
		return {
			location: '东莞',
			cityList: cityList,
			cityTitles: cityTitles
		}
	},
	methods: {
		changeCity (detail) {
			this.location = detail.name;
		},
		titleClick (title) {

		}
	},
	components: {
		'ko-header': koHeader,
		cityItem,
		cityFixed
	},
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	html, body {
		height: 100%;
		background: #efeff4;
	}
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