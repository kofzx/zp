<template>
	<div>
		<ko-header
			title='找铺' />
		<p class="cur-location pd-box">定位城市：<span class="cur-location__light">{{location}}</span></p>
		<city-item 
			v-for="(item, index) in cityList" 
			:key="index" 
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
import Ding from '@/pages/common/ding/index.vue'

import util from '@/utils/index'
import Tween from '@/utils/Tween'

import koHeader from '@/components/layouts/ko-header/index'
import cityItem from '@/components/core/common/city-item/index'
import cityFixed from '@/components/core/common/city-fixed/index'

export default {
	extends: Ding,
	methods: {
		titleClick (title) {
			let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			let elementTop = document.getElementById(title).getBoundingClientRect().top;
			let headerH = document.getElementsByClassName('ko-header')[0].offsetHeight;

			let finalTop = scrollTop + elementTop - headerH;

			let t = 0, b = scrollTop, c = finalTop - scrollTop, d = util.formatAnimationFrameTime(1);
			let timer;

			var step = function() {
				let value = Tween.Linear(t, b, c, d);
				document.body.scrollTop = value;
				t++;

				if (t <= d) {
			        // 继续运动
			        timer = requestAnimationFrame(step);
			    } else {
			        // 动画结束
			        cancelAnimationFrame(timer);
			    }
			};
			step();
			

			// document.body.scrollTop = scrollTop + elementTop - headerH;
		}
	},
	components: {
		'ko-header': koHeader,
		cityItem,
		cityFixed
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	html, body {
		height: 100%;
		background: #efeff4;
	}

	.ko-header {
		background: @main !important;
	}

	.city-fixed {
		top: 20px !important;
	}
</style>