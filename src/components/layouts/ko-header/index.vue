<template>
	<div>
		<header class="ko-header">
			<a href="javascript:;" class="link" :style="{'background-image': svg}" @click="goBack"></a>
			<h1 :style="{'color': '#' + color}">{{title}}</h1>
		</header>
		<div class="ko-header--fix"></div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			require: true
		},
		color: {
			type: String,
			default: 'ffffff'
		}
	},
	computed: {
		svg: function() {
			return `url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M295.933 512.031c-.872 11.807 2.82 23.669 11.724 32.629L656.28 893.145c16.514 16.429 43.029 16.458 59.65.03 16.484-16.514 16.23-43.029-.055-59.507L394.1 512.06l321.748-321.717c16.256-16.399 16.368-43.166-.086-59.568-16.57-16.398-43.166-16.398-59.594-.026L307.658 479.516c-8.849 9.046-12.597 20.907-11.725 32.515z' fill='%23${this.color}'/%3E%3C/svg%3E")`;
		}
	},
	methods: {
		goBack: function () {
			this.$router.go(-1);
		}
	}
}
</script>

<style lang="less">
@header_h: 46px;

.ko-header {
	height: @header_h;
	line-height: @header_h;
	background: orange;
	position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
	h1 {
	    text-align: center;
	    width: 50%;
	    margin: 0 auto;
	    font-size: 16px;
	    color: white;
	}
}
.ko-header--fix {
	height: @header_h;
}
.link {
	background-size: 100% 100%;
	width: 20px;
	height: 20px;
    display: block;
    position: absolute;
    padding: 0 10px;
    margin-top: -10px;
	top: 50%;
	left: 0;
}
</style>