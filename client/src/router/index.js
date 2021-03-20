import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import('../views/Words')
  },
  {
    path: '/new-word',
    name: 'NewWord',
    component: () => import('../views/NewWord')
  },
  {
    path: '/words/:id',
    name: 'SingleWord',
    component: () => import('../views/SingleWord')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
