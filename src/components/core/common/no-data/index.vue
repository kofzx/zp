<template>
	<div 
		class="no-data"
		v-if='show'>
        <p class="show-text">{{text}}</p>
        <p class="show-line"></p>
    </div>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: true
		},
		text: String
	}
}
</script>

<style lang="less">
	.no-data {
	  text-align: center;
	  width: 100%;
	  position: relative;
	  .show-text {
	  	  text-align: center;
	      padding: 20px;
	      display: inline-block;
	      position: relative;
	      background-color: rgb(239, 239, 244);
	      position: relative;
	      z-index: 2;
	      color: #666;
	  }
	  .show-line {
	  	  width: 300px;
	      position: absolute;
	      top: 30px;
	      left: 50%;
	      margin-left: -150px;
	      border-top: 1px solid #ccc;
	  }
	}
</style>