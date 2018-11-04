<template>
	<div class="ko-tag">{{content}}</div>
</template>

<script>
	export default {
		props: ['content']
	}
</script>

<style lang="less">
	@color-tag: #1face0;
	.ko-tag {
		color: @color-tag;
	    border: 1px solid @color-tag;
	    background-color: transparent;
	    padding: 0 2px;
	    margin-right: 5px;
	    font-size: 12px;
	}
</style>