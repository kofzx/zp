<template>
    <form @submit='searchSubmit'>
    	<div class="search-wrapper container row">
    		<!-- 定位 -->
	      <navigator class="search-wrapper__url white" hover-class='none' :url="dingUrl" v-if='hasDing'>东莞</navigator>
	      <div class='search-wrapper__box flex-1 white rel container row'>
	      	<div class="search-wrapper__icon--ss" :style="{'background-image': ssUrl}"></div>
	      	<input class="search-wrapper__input flex-1" type="text" :placeholder="placeholder">
	      	<!-- 遮罩层 -->
	      	<navigator class="search-wrapper__mask abs" hover-class='none' :url="jumpUrl" v-if='isJump'></navigator>
	      </div>
	      <!-- 默认放置搜索按钮 -->
	      <slot>
	      	<button size="mini" form-type='submit' class="search-wrapper__btn btn-clear">搜索</button>
	      </slot>
	    </div>
    </form>
</template>

<script>
	export default {
		props: {
			ssColor: String,		// 搜索图标的颜色
			hasDing: {				// 是否显示定位
				type: Boolean,
				default: false
			},
			dingUrl: String,
			isJump: {				// 是否开启跳转，使input失效
				type: Boolean,
				default: false
			},
			jumpUrl: String,		// 跳转链接，一般为搜索页
			placeholder: String
		},
		computed: {
			ssUrl: function() {
				return `url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath fill='%23${this.ssColor}' d='M760.09 263.551c-17.478-41.32-42.487-78.426-74.343-110.281s-68.96-56.865-110.282-74.343c-42.784-18.092-88.219-27.272-135.056-27.272-46.826 0-92.26 9.18-135.055 27.272-41.311 17.478-78.416 42.487-110.272 74.343s-56.865 68.96-74.343 110.281c-18.092 42.785-27.271 88.22-27.271 135.056 0 46.827 9.179 92.262 27.27 135.056 17.479 41.311 42.489 78.416 74.344 110.272s68.96 56.865 110.272 74.343c42.794 18.092 88.229 27.271 135.055 27.271 46.837 0 92.272-9.179 135.056-27.27 41.322-17.479 78.427-42.489 110.282-74.344s56.865-68.96 74.343-110.272c18.092-42.794 27.271-88.23 27.271-135.056 0-46.836-9.179-92.271-27.27-135.056zM656.798 614.986c-57.797 57.796-134.647 89.63-216.389 89.63s-158.581-31.834-216.378-89.63C166.235 557.199 134.4 480.349 134.4 398.607s31.835-158.592 89.631-216.388S358.668 92.588 440.41 92.588s158.592 31.835 216.389 89.631c57.796 57.796 89.631 134.647 89.631 216.388S714.594 557.2 656.798 614.986zm298.007 318.411c-3.99 4.002-9.23 5.997-14.47 5.997s-10.478-1.995-14.469-5.997L732.011 739.553c-7.982-7.992-7.982-20.947 0-28.94 8.002-7.992 20.957-7.992 28.95 0l193.844 193.845c7.992 7.992 7.992 20.947 0 28.94z'/%3E%3C/svg%3E")`;
			}
		},
		methods: {
			searchSubmit () {
				console.log(111);
			}
		}
	}
</script>

<style lang="less">
	@import '~@/components/common/com.less';
	.search-wrapper {
	    height: 46px !important;
	    background: #ff0000;
	    padding: 0 10px;
	}
	.search-wrapper__box {
		height: 32px !important;
		background: white;
		border-radius: 20px;
		padding: 0 10px;
	}
	.search-wrapper__url {
		margin: 0 15px 0 5px;
	}
	.search-wrapper__mask {
		width: 100%;
		height: 100%;
		z-index: 2;
		top: 0; left: 0;
	}
	.search-wrapper__icon--ss {
		width: 20px;
		height: 20px;
		background-size: 100% 100%;
		margin-right: 4px;
	}
	.search-wrapper__input {
		text-align: center;
		color: #afafaf;
	}
	.search-wrapper__btn {
		background: transparent;
		color: white;
		padding: 0 0 0 10px;
	}
</style>
