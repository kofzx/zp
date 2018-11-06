<template>
	<div>
		<div class="nav-tabbar container row center">
			<router-link class='nav-tabbar__list flex-1'
				:to='{ path: item.pagePath }' 
				v-for='(item, index) in tabList'
				:key='index'
				>
				<img class="nav-tabbar__img" 
					:src="path == item.pagePath ? item.selectedIconPath : item.iconPath" alt="">
				<p class="nav-tabbar__text" 
					:style='{ color: path == item.pagePath ? selectedColor : color }'>{{item.text}}</p>
			</router-link>
	    </div>
	    <div class="nav-tabbar--fix"></div>
	</div>
</template>

<script>
// tabList 格式同小程序配置：
// tabList: [
// 		{
//			pagePath: "",
//			text: "",
//			iconPath: "",
//			selectedIconPath: "",
//		}
// ]
export default {
	props: {
		color: String,
		selectedColor: String,
		tabList: Array,		
	},
	created () {
		this.path = this.$route.path;
	}
}
</script>

<style lang="less">
	@import '~@/components/common/com.less';
	
	@nav-height: 50px;
	.nav-tabbar {
		box-sizing: border-box;
		position: fixed;
	    bottom: 0;
	    width: 100%;
	    height: @nav-height;
	    background-color: #fff;
	    border-top: 1px solid #efeff4;
	    z-index: 10;
	}
	.nav-tabbar--fix {
		height: @nav-height;
	}
	.nav-tabbar__list {
		color: #333;
		p {
		    text-align: center;
		    font-size: 12px;
		}
	}
	.nav-tabbar__img {
		display: block;
		margin: 0 auto;
 		width: 22px;
		height: 22px;
	}
	.nav-tabbar__text {
		margin-top: 4px;
		font-size: 12px;
	}
</style>