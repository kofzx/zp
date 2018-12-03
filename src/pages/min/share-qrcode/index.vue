<template>
	<img :src="img_url + qrcode">
</template>

<script>
import qs from 'qs'
import { pgjApi, fullApi } from '@/service/api'

export default {
	data() {
		return {
			img_url: pgjApi,
			qrcode: '/Upload/temp/qrcode.png'
		}
	},
	// onLoad () {
	// 	try {
	// 		let access_token = wx.getStorageSync('access_token');
	// 		if (access_token) {
	// 			this.$flyio.get(fullApi.QRCODE)
	// 				.then(res => {
	// 					let { code, qrcode } = res.data;
	// 					if (code == 1) {
	// 						this.qrcode = qrcode;
	// 					}
	// 				});
	// 		}
	// 	} catch (e) {}
	// }
}
</script>

<style lang="less">

</style>