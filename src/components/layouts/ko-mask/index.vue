<template>
	<div class='mask' v-show='isMask' @click="onMask"></div>
</template>

<script>
export default {
	props: {
		isMask: {         // 是否显示遮罩层
	      type: Boolean,
	      default: false
	    },
	    isClose: {        // 遮罩层是否可主动点击关闭
	      type: Boolean,
	      default: false
	    }
	},
	methods: {
		onMask: function () {
			if (this.isClose) {
				this.isMask = false;
				this.$emit('onMask', this.isMask);
			}
	    }
	}
}
</script>

<style lang="less">
	.mask {
	  position: fixed;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  z-index: 1;
	  background: rgba(0,0,0,0.5);
	}
</style>