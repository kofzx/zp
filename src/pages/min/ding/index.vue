<template>
	<div>
		<p class="cur-location pd-box">定位城市：<span class="cur-location__light">{{curCity}}</span></p>
		<city-item 
			v-for="(val, key, index) in cityList" 
			:key="index" 
			:title='key' 
			:city-list='val'
			city-field='area_name'
			@changeCity='changeCity' />
		<city-fixed
			:city-titles='cityTitles'
			hot-id='remen'
			@titleClick='titleClick' />
	</div>
</template>

<script>
import Ding from '@/pages/common/ding/index.vue'
import share from '@/mixins/share/index'

import wx from 'wx'
import util from '@/utils/index'
import { fullApi } from '@/service/api'

import cityItem from '@/components/core/common/city-item/index'
import cityFixed from '@/components/core/common/city-fixed/index'

export default {
	mixins: [share],
	extends: Ding,
	data () {
		return {
			cityList: {},
			cityTitles: []
		}
	},
	methods: {
		// 获取视口以外的scrollTop
		_getScrollTop () {
			return new Promise((resolve, reject) => {
		      	wx.createSelectorQuery().selectViewport().scrollOffset(ret => {
			      let scrollTop = ret.scrollTop;  // 节点的竖直滚动位置
			      if (scrollTop != 'undefined') {	// 只要scrollTop有值
			      	resolve(scrollTop);
			      } else {
			      	reject();
			      }
			    }).exec();
		    });
		},
		// 右侧字母目录点击
		titleClick (title) {
			util.queryAll(`#${title}`)
				.boundingClientRect(ret => {
					this._getScrollTop()
						.then(scrollTop => {
							util.scrollTo(ret[0].top + scrollTop);
						});
				}).exec();
		},
		getCityTitles (list) {
			let array = [];
			for (let key in list) {
				array.push(key);
			}
			return array;
		},
		fetchCityList () {
			this.$flyio.get(fullApi.CITY_LIST)
				.then(res => {
					let cityList = res.data;
					this.cityList = cityList;

					this.cityTitles = this.getCityTitles(cityList);
				});
		}
	},
	components: {
		cityItem,
		cityFixed
	},
	created () {
		this.fetchCityList();
	},
	onShow () {
		try {
			let ding = wx.getStorageSync('ding');
			if (ding) {
				this.curCity = ding;
			}
		} catch (e) {}
	}
}
</script>

<style lang="less">
	page {
		height: 100%;
		background: #efeff4;
	}
</style>