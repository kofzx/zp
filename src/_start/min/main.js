import Vue from 'vue'
import App from './App'
import flyio from 'flyio'

Vue.config.productionTip = false
Vue.prototype.$flyio = new flyio()
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
