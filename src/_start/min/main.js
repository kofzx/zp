import Vue from 'vue'
import App from './App'
import flyio from 'flyio'

Vue.config.productionTip = false
Vue.prototype.$flyio = new flyio()
App.mpType = 'app'

Vue.prototype.$toast = (title, flag = true, duration = 1500) => {
	return new Promise(resolve => {
		let icon;
		if (flag) {
			icon = 'success';
		} else {
			icon = 'none';
		}
		wx.showToast({
	      	title: title,
	      	icon: icon
	    });
	    // 定时器
	    setTimeout(() => {
	    	resolve();
	    }, duration);
	});
}
Vue.prototype.$loading = (title, isMask = true, duration = 1500) => {
	return new Promise(resolve => {
		wx.showLoading({
			title: title,
			mask: isMask
		});
		// 定时器
	    setTimeout(() => {
	    	resolve();
	    }, duration);
	});
}
Vue.prototype.$unLoading = () => {
	wx.hideLoading();
}

const app = new Vue(App)
app.$mount()
