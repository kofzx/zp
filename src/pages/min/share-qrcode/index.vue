<template>
	<div>
		<canvas 
			canvas-id="qrcode"
			class="qrcode-canvas"
			:style="{ height: canvasH + 'px' }"></canvas>
		<img 
			:src='qrcodeImage'
			class="qrcode-image"
			:style="{ height: canvasH + 'px' }"
			@click='previewImage(qrcodeImage)'>
		<cover-view 
			class="btn-groups"
			v-show='qrcodeFinish'>
			<button 
				class="btn-download inb btn-clear"
				hover-class='none'
				@click='download'>保存至本地</button>
			<button 
				class="btn-share inb btn-clear"
				hover-class='none'
				open-type='share'>转发</button>
		</cover-view>
		
	</div>
</template>

<script>
import previewImage from '@/mixins/preview-image/index'
import share from '@/mixins/share/index'

import qs from 'qs'
import { pgjApi, fullApi } from '@/service/api'

const white_scale = 0.44;
const text_w = 227;
const text_mg_top = 332;
const text_offset_x = 15;
const text_offset_y = 36;
let texts = [
	'通过铺莞家平台快速商铺转让、轻松商铺投资、',
	'快速选址创业,铺莞家您身边的生活管家',
	'圆你创业梦想。'
];

export default {
	mixins: [share, previewImage],
	data() {
		return {
			img_url: pgjApi,
			qrcode: '/Upload/temp/qrcode.png',
			qrcodeImage: '',
			canvasW: 375,
			canvasH: 550,
			ctx: '',
			qrcodeFinish: false,
		}
	},
	methods: {
		getSystemInfo () {
			wx.getSystemInfo({
				success: res => {
					this.canvasW = res.screenWidth;
					this.canvasH = res.screenHeight - 60;
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
		getQrcodeIamge () {
			wx.canvasToTempFilePath({
				canvasId: 'qrcode',
				quality: 1,
				success: res => {
					this.qrcodeImage = res.tempFilePath;
				}
			});
		},
		download () {
			wx.saveImageToPhotosAlbum({
				filePath: this.qrcodeImage,
				success: res => {
					this.$toast('保存成功');
				},
				fail: res => {
					this.$toast('保存失败');
					wx.navigateTo({
						url: '../wx-setting/main'
					});
				}
			});
		},
		_drawWhiteBackground () {
			return new Promise(resolve => {
				this.ctx.setFillStyle('white');
				this.ctx.fillRect(0, 0, this.canvasW, this.canvasH * white_scale);
				this.ctx.draw(true, () => {
					resolve('drawWhiteBackground');
				});
			});
		},
		_drawGreyBackground () {
			return new Promise(resolve => {
				this.ctx.setFillStyle('#f9f9f9');
				this.ctx.fillRect(0, this.canvasH * white_scale, this.canvasW, this.canvasH);
				this.ctx.draw(true, () => {
					resolve('drawGreyBackground');
				});
			});
		},
		_drawBackground () {
			return new Promise(resolve => {
				let bg = '/static/images/bg.png';

				this.ctx.drawImage(bg, 0, 0, this.canvasW, this.canvasH);
				this.ctx.draw(true, () => {
					resolve('drawBackground');
				});
			});
		},
		_drawQrcode () {
			return new Promise(async resolve => {
				let qrcode = this.img_url + this.qrcode;
				// let qrcode = 'https://www.puguanjiacn.com/pgj.jpg';
				let RES = await this.getImageInfo(qrcode);
				let qrcodeW = RES.width / 2,
					qrcodeH = RES.height / 2;

				this.ctx.drawImage(RES.path, this.canvasW / 2 - qrcodeW / 2, 20, qrcodeW, qrcodeH);
				this.ctx.draw(true, () => {
					resolve('drawQrcode');
				});
			});
		},
		_drawIntro () {
			return new Promise(async resolve => {
				let intro = '/static/images/intro.png';
				let RES = await this.getImageInfo(intro);
				let introW = RES.width / 2,
					introH = RES.height / 2;

				this.ctx.drawImage(intro, this.canvasW / 2 - introW / 2, this.canvasH * white_scale - 22, introW, introH);
				this.ctx.draw(true, () => {
					resolve('drawIntro');
				});
			});
		},
		_fillText () {
			return new Promise(resolve => {
				this.ctx.setFontSize(13);
				this.ctx.setFillStyle('#666');
				for (let i = 0; i < texts.length; i++) {
					this.ctx.fillText(texts[i], this.canvasW / 2 - text_w / 2 - text_offset_x, text_mg_top + text_offset_y * i);
				}
				this.ctx.draw(true, () => {
					resolve('fillText');
				});
			});
		},
		/*
		 * 接近同步的异步绘制
		 * 前组绘制完成才执行下一组绘制，保证绘制的顺序执行
		*/
		async drawIt () {
			let drawFunc = [
				this._drawWhiteBackground,
				this._drawGreyBackground,
				this._drawBackground,
				this._drawIntro,
				this._fillText,
				this._drawQrcode
			];
			let ret = null;
			try {
				for (let func of drawFunc) {
					ret = await func();
				}
			} catch (e) {}
			return ret;
		},
	},
	onReady () {
		this.$loading('图像加载中');
		this.getSystemInfo();
		let ctx = wx.createCanvasContext('qrcode');
		this.ctx = ctx;	

		this.drawIt()
			.then(ret => {
				if (ret) {	// 最后一步绘制完成
					this.qrcodeFinish = true;
					this.getQrcodeIamge();
					this.$unLoading();
				}
			});
	},
	onShareAppMessage: function (res) {
		if (res.from === 'button') {
		    return {
			    path: '/pages/min/index/main'
			}
	    }
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	page {
		background: #f9f9f9;
	}
	.qrcode-canvas {
		width: 100%;
		position: absolute;
		top: -9999px;
	}
	.qrcode-image {
		width: 100%;
	}
	.btn-groups {
		font-size: 0;
		position: absolute;
		top: 455px;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		.btn-download,
		.btn-share {
			width: 96px;
			font-size: 13px;
			border-radius: 4px;
			box-sizing: border-box;
			border-width: 1px;
			border-style: solid;
			border-color: transparent;
			margin: 0;
		}
		.btn-download {
			background: @main;
			color: white;
		}
		.btn-share {
			border-color: @main;
			color: @main;
		}
	}
</style>