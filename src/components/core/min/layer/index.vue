<template>
	<view 
	  class="ko-layer" 
	  v-if='show' 
	  @click='clickLayer'></view>
</template>

<script>
export default {
	props: {
		show: Boolean,         // 是否显示遮罩层
	    isClose: {        // 遮罩层是否可主动点击关闭
	      type: Boolean,
	      default: true
	    }
	},
	methods: {
		clickLayer () {
	      if (this.isClose) {
	        this.$emit('close');
	      }
	    }
	}
}
</script>

<style lang="less">
	.ko-layer {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 10;
		background: rgba(0,0,0,0.5);
	}
</style>