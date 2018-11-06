import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/h5/index'
import ding from '@/pages/h5/ding'
import news from '@/pages/h5/news'
import publish from '@/pages/h5/publish'
import user from '@/pages/h5/user'
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
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    }
  ]
})
