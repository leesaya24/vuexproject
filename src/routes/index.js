import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/User.vue')
    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('@/views/Resource.vue')
    },
    {
      path: '/sum',
      name: 'sum',
      component: () => import('@/views/Sum.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test.vue')
    }
    
  ]
})
