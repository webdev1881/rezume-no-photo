import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ua',
    name: 'ua',
    component: function () {
      return import('../views/UA.vue')
    }
  },
  {
    path: '/ex1',
    name: 'ex1',
    component: function () {
      return import('../views/ex1.vue')
    }
  },
  {
    path: '/ex2',
    name: 'ex2',
    component: function () {
      return import('../views/ex2.vue')
    }
  },
  {
    path: '/ex3',
    name: 'ex3',
    component: function () {
      return import('../views/ex3.vue')
    }
  },
  {
    path: '/exm',
    name: 'exm',
    component: function () {
      return import('../views/exm.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
