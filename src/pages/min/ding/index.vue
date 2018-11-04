<template>
	<div>
		<p class="cur-location pd-box" id="test">定位城市：<span class="cur-location__light">{{location}}</span></p>
		<city-item 
			v-for="item in cityList" 
			:key="item.id" 
			:id = 'item.title === "热门城市" ? "remen" : item.title'
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
import wx from 'wx'
import mock from '@/pages/mock'
import util from '@/utils/index'

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
		// 更换城市
		changeCity (detail) {
			this.location = detail.name;
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
		}
	},
	components: {
		cityItem,
		cityFixed
	}
}
</script>

<style lang="less">
	@import '~@/pages/common/ding/index.less';

	page {
		height: 100%;
		background: #efeff4;
	}
</style>