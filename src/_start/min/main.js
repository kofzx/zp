import Vue from 'vue'
import App from './App'
import flyio from 'flyio'

Vue.config.productionTip = false
Vue.prototype.$flyio = new flyio()
App.mpType = 'app'

Vue.prototype.$toast = (title, flag = true) => {
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
}

const app = new Vue(App)
app.$mount()
