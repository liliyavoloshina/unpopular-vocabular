import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import('../views/WordsView.vue')
  },
  {
    path: '/create',
    name: 'NewWord',
    component: () => import('../views/NewWord.vue')
  },
  {
    path: '/words/:id',
    name: 'SingleWord',
    component: () => import('../views/SingleWord.vue')
  },
  {
    path: '/words/:id/edit',
    name: 'EditWord',
    component: () => import('../views/EditWord.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/TestView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
})

export default router
