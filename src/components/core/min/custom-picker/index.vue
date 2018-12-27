<template>
	<div>
		<view 
		  class="ko-selector ko-transition"
		  :class="pickerShow ? 'ko--slide-in-up' : 'ko--slide-out-down'"
		  >
		  <picker-view
		    class='picker-view' 
		    indicator-class='ko--selected'
		    :value='value' 
		    @change='pickerChange'>
		    <block
		      v-for='(parent, index) in data'
		      :key="index">
		      <picker-view-column class='picker-view-column'>
		        <view 
		          v-for='(child, idx) in parent'
		          :key="idx"
		          class='item'>{{child[fieldName]}}</view>
		      </picker-view-column>
		    </block>
		  </picker-view>
		  <text class='confirm' @click='closePicker'>确定</text>
		</view>  
		<layer
		  :show='pickerShow'
		  @close="closePicker" />
	</div>
</template>

<script>
import layer from '../layer/index'

export default {
	props: {
		pickerShow: {
	      type: Boolean,
	      default: false
	    },
	    default: Array,
	    data: Array,
	    fieldName: String,
	},
	created () {
      	this.setPickerStorage();
    },
    methods: {
	    closePicker () {
	    	this.$emit('close');
	    },
	    pickerChange (e) {
	      this.$emit('pickerChange', e);
	    },
	    // 需要实现的方法 (将value设入缓存)
	    setPickerStorage () {
	      this.$emit('setPickerStorage');
	    }
	},
	components: {
		layer
	}
}
</script>

<style lang="less">
	@import '~@/components/common/transition.less';

	.ko-selector {
	  position: fixed;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  box-shadow: 0px -12px 75px 0px #e0dddd, 0px -30px 75px 0px #f1f2f3;
	  z-index: 100;
	  opacity: 0;
	}
	.ko-selector .picker-view {
	  height: 200px;
	  background: white;
	  padding-bottom: 50px;
	}
	.ko-selector .picker-view .picker-view-column {
		top: -40px;
	}
	.ko-selector .item {
	  font-size: 16px;
	  height: 38px;
	  line-height: 38px;
	  padding-left: 10px;
	  color: #FF9C00;
	}
	.ko-selector .confirm {
	  position: absolute;
	  top: 0;
	  right: 0;
	  font-size: 16px;
	  letter-spacing: 1px;
	  padding-top: 5px;
	  padding-right: 9px;
	  z-index: 3;
	}
	.ko--selected {
	  border-top: 1px solid #F8F8F8;
	  border-bottom: 1px solid #F8F8F8;
	}
</style>