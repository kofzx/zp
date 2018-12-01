<template>
	<div class='simple-image-text-card'>
	    <img class='simple-image-text-card__img' 
	         :src='src'>
	    <p class='simple-image-text-card__text'>{{text}}</p>
	</div>
</template>

<script>
export default {
	props: {
		src: String,
		text: String
	}
}
</script>

<style lang="less">
	.simple-image-text-card {
	  border-bottom: 1px solid #d3d3d3;
	  padding-bottom: 10px;
	  margin-top: 15px;
	}
	.simple-image-text-card__img {
	  display: inline-block;
	  vertical-align: middle;
	  width: 75px;
	  height: 75px;
	  margin-left: 8px;
	  margin-right: 10px;
	}
	.simple-image-text-card__text {
	  display: inline-block;
	  vertical-align: middle;
	  width: 260px;
	  overflow: hidden;
	  white-space: nowrap;
	  text-overflow: ellipsis;
	}
</style>