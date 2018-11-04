import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/h5/index'
import ding from '@/pages/h5/ding'
import counter from '@/pages/h5/counter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/ding',
      name: 'ding',
      component: ding
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    }
  ]
})
