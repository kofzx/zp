<template>
	<div class="pd-box city-item clearfix">
		<p class="city-item__title" :id='id'>{{title}}</p>
		<p class="city-item__item" 
			v-for="(item, index) in cityList" 
			:key="index" 
			@click="onCity(item)">{{item[cityField]}}</p>
	</div>
</template>

<script>
export default {
	props: {
		id: String,
		title: String,
		cityList: Array,
		cityField: String
	},
	methods: {
		onCity: function (city) {
			this.$emit('changeCity', city);
		}
	}
}
</script>

<style lang="less">
@import '~@/components/common/com.less';
@import '~@/components/common/mixin.less';

.city-item {
	background: white;
	margin: 15px 0;
	.city-item__title {
		height: 40px;
	    line-height: 40px;
	    color: #333;
	    border-bottom: 1px #d2d2d2 solid;
	}
	.city-item__item {
		width: 33.333333%;
	    float: left;
	    text-align: center;
	    margin: 0;
	    height: 38px;
	    line-height: 38px;
	    color: #666;
	    .text-overflow();
	}
}
</style>