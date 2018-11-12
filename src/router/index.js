import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/h5/index'
import ding from '@/pages/h5/ding'
import news from '@/pages/h5/news'
import newsDetail from '@/pages/h5/news-detail'
import publish from '@/pages/h5/publish'
import user from '@/pages/h5/user'
import quick from '@/pages/h5/quick'
import assign from '@/pages/h5/assign'
import assignDetail from '@/pages/h5/assign-detail'
import assignForm from '@/pages/h5/assign-form'
import seek from '@/pages/h5/seek'
import seekDetail from '@/pages/h5/seek-detail'
import seekForm from '@/pages/h5/seek-form'
import cases from '@/pages/h5/case'
import caseDetail from '@/pages/h5/case-detail'
import join from '@/pages/h5/join'
import about from '@/pages/h5/about'
import settings from '@/pages/h5/settings'
import suggest from '@/pages/h5/suggest'
import login from '@/pages/h5/login'
import reset from '@/pages/h5/reset'
import register from '@/pages/h5/register'
import alter from '@/pages/h5/alter'
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
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
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
      path: '/quick',
      name: 'quick',
      component: quick
    },
    {
      path: '/assign',
      name: 'assign',
      component: assign
    },
    {
      path: '/assignDetail',
      name: 'assignDetail',
      component: assignDetail
    },
    {
      path: '/assignForm',
      name: 'assignForm',
      component: assignForm
    },
    {
      path: '/seek',
      name: 'seek',
      component: seek
    },
    {
      path: '/seekDetail',
      name: 'seekDetail',
      component: seekDetail
    },
    {
      path: '/seekForm',
      name: 'seekForm',
      component: seekForm
    },
    {
      path: '/case',
      name: 'cases',
      component: cases
    },
    {
      path: '/caseDetail',
      name: 'caseDetail',
      component: caseDetail
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: suggest
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/alter',
      name: 'alter',
      component: alter
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    }
  ]
})
