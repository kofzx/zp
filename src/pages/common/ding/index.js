import Vue from 'vue'

import wx from 'wx'
import mock from '@/pages/mock'
import util from '@/utils/index'

import cityItem from '@/components/core/common/city-item/index'
import cityFixed from '@/components/core/common/city-fixed/index'

let { cityList, cityTitles } = mock;

const ding = {
	template: `
		<div>
			${this.tempHeader}
			<p class="cur-location pd-box">定位城市：<span class="cur-location__light">{{location}}</span></p>
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
	`,
	data() {
		return {
			tempHeader: ''
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
	},
	components: {
		cityItem,
		cityFixed
	}
};

Vue.component('ding', ding);