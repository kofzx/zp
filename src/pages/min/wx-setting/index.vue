<template>
	<div>
		<div>
		  <div class='auth-header'>
		    <img src='./xcx.png'>
		  </div>
		  <div class='auth-content'>
		    <div>申请获取以下权限</div>
		    <span>获取你的相关权限(定位，相机等)</span> 
		  </div>
		  <button class='auth-bottom' type='primary' lang="zh_CN" @click="opensetting">打开设置</button>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'
import wx from 'wx'

export default {
	mixins: [share],
	methods: {
		opensetting () {
			wx.openSetting();
		}
	}
}
</script>

<style lang="less">
	.auth-header {
	  margin: 90rpx 0 90rpx 50rpx;
	  border-bottom: 1px solid #ccc;
	  text-align: center;
	  width: 650rpx;
	  height: 300rpx;
	  line-height: 450rpx;
	}

	.auth-header {
		img {
			width: 200rpx;
	  		height: 200rpx;
		}
	}

	.auth-content {
	  margin-left: 50rpx;
	  margin-bottom: 90rpx;
	}

	.auth-content text {
	  display: block;
	  color: #9d9d9d;
	  margin-top: 40rpx;
	}

	.auth-bottom {
	  border-radius: 80rpx;
	  margin: 70rpx 50rpx;
	  font-size: 35rpx;
	}

</style>