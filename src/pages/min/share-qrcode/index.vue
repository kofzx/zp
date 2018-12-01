<template>
	<img src="">
</template>

<script>
import qs from 'qs'
import { fullApi } from '@/service/api'

export default {
	onLoad () {
		try {
			let access_token = wx.getStorageSync('access_token');
			if (access_token) {
				this.$flyio.get(fullApi.QRCODE)
					.then(res => {
						console.log(res);
					});
			}
		} catch (e) {}
	}
}
</script>

<style lang="less">

</style>