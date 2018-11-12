<template>
	<a 
		class="store-item container row"
		:href='url'
		hover-class='none'>
		<div class="store-item__right flex-1">
			<div class="container row">
				<div>
					<span class="title inb">{{title}}</span>
					<div class="safe--icon inb" :style="{'background-image': safe}"></div>
				</div>
				<span class="time inb f12">{{time}}</span>
			</div>
			<p class="store-item__center container row">
				<span class="area f12">{{region}} :{{cate}}&nbsp;&nbsp;&nbsp;期望租金:{{rental}}</span>
				<span class="rental">{{area}}平米</span>
			</p>
		</div>
	</a>
</template>

<script>
	import tag from '@/components/layouts/ko-tag/index';

	export default {
		props: {
			url: String,
			color: String,
			title: String,
			area: String,
			cate: String,
			rental: String,
			region: String,
			time: String
		},
		computed: {
			safe: function() {
				return `url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M817.347 174.5s-51.435 0-135-32.144c-90-32.143-144.648-67.5-144.648-67.5L511.987 62l-22.5 12.857s-57.857 35.356-144.644 67.5c-86.787 28.93-135 32.143-135 32.143l-41.787 3.213v443.57C168.056 785.217 473.412 962 511.982 962c35.361 0 343.926-176.782 343.926-340.717v-443.57l-38.56-3.213zm-327.86 511.07L328.772 537.716l48.213-61.074 102.857 93.213L672.7 328.782l57.856 54.644-241.07 302.144z' fill='%23${this.color}'/%3E%3C/svg%3E")`;
			}
		},
		components: {
			tag
		}
	}
</script>

<style lang="less">
	@import '~@/components/common/mixin.less';
	.store-item {
		padding: 15px 0;
		border-top: 1px solid #edebeb;
	}
	.store-item__left {
		width: 88px;
		height: 70px;
		margin-right: 12px;
		opacity: 0;
		transition: all .3s ease;
		&.loaded {
			opacity: 1;
		}
	}
	.store-item__right {
		.title {
			max-width: 196px;
			color: #565656;
			.text-overflow();
		}
		.area,
		.time {
			color: #717171;
		}
		.rental {
			color: #f86648;
		}
	}
	.store-item__center {
		margin: 2px 0;
	}
	.safe--icon {
		width: 20px;
		height: 20px;
		background-size: 100% 100%;
	}
</style>