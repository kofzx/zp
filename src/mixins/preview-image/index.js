import wx from 'wx'

export default {
	methods: {
		previewImage (src) {
			wx.previewImage({
				urls: [src]
			});
		}
	}
}