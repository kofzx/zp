<template>
	<div>
		<div v-if="canIUse">
		  <div class='auth-header'>
		    <img src='./wx.png'>
		  </div>
		  <div class='auth-content'>
		    <div>申请获取以下权限</div>
		    <span>获得你的公开信息(昵称，头像等)</span> 
		  </div>
		  <button class='auth-bottom' type='primary' open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo"> 授权登录</button>
		</div>
		<div v-else>请升级微信版本</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'
import wx from 'wx'

export default {
	mixins: [share],
	data() {
		return {
			canIUse: wx.canIUse('button.open-type.getUserInfo')
		}
	},
	methods: {
		bindGetUserInfo (e) {
			console.log(e);
		    // wx.setStorageSync('userInfo', e.detail.userInfo);
		    // let code = wx.getStorageSync('code');
		    // if (code) {
		    //   app.getOpenId(code, () => {
		    //     // 授权成功提示
		    //     wx.showToast({
		    //       title: '授权成功',
		    //       icon: 'success'
		    //     })
		    //     wx.navigateBack({
		    //       delta: 1
		    //     })
		    //   });
		    // }
		},
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