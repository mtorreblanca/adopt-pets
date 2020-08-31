import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    component: () => import('../views/Cats.vue')
  },
  {
    path: '/pets',
    name: 'pets',
    component: () => import('../views/Pets.vue')
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: () => import('../views/Dogs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
