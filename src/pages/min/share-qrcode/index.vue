<template>
	<div>
		<canvas 
			canvas-id="qrcode"
			class="qrcode-canvas"
			:style="{ height: canvasH + 'px' }"></canvas>
		<button @click='download'>下载</button>
	</div>
</template>

<script>
import qs from 'qs'
import { pgjApi, fullApi } from '@/service/api'

export default {
	data() {
		return {
			img_url: pgjApi,
			qrcode: '/Upload/temp/qrcode.png',
			canvasW: 375,
			canvasH: 750,
			ctx: '',
		}
	},
	methods: {
		getSystemInfo () {
			wx.getSystemInfo({
				success: res => {
					this.canvasW = res.screenWidth;
				}
			});
		},
		getImageInfo (img_path) {
			return new Promise((resolve) => {
				wx.getImageInfo({
					src: img_path,
					success: res => {
						resolve(res);
					}
				});
			});
		},
		download () {
			this.ctx.fillRect(0, 0, 1, 1);
			this.ctx.draw(true, () => {
				wx.canvasToTempFilePath({
					canvasId: 'qrcode',
					quality: 1,
					success: res => {
						wx.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: res => {
								this.$toast('保存成功');
							},
							fail: res => {
								console.log(res);
							}
						});
					}
				});
			});
		},
		_drawBackground () {
			this.ctx.setFillStyle('white');
			this.ctx.fillRect(0, 0, this.canvasW, this.canvasH);
			this.ctx.draw();
		},
		async _drawQrcode () {
			let qrcode = this.img_url + this.qrcode;
			let RES = await this.getImageInfo(qrcode);
			let qrcodeW = RES.width / 2,
				qrcodeH = RES.height / 2;

			this.ctx.drawImage(qrcode, this.canvasW / 2 - qrcodeW / 2, 20, qrcodeW, qrcodeH);
			this.ctx.draw(true);
		}
	},
	onReady () {
		this.getSystemInfo();
		let ctx = wx.createCanvasContext('qrcode');
		this.ctx = ctx;

		this._drawBackground();
		this._drawQrcode();
	}
}
</script>

<style lang="less">
	.qrcode-canvas {
		width: 100%;
	}
</style>