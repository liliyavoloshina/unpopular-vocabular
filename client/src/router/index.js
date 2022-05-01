import Vue from 'vue'
import VueRouter from 'vue-router'
import { getUser } from '../helpers/localStorage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' },
    component: () => import('@/layouts/BaseLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/user/:id',
        name: 'User',
        component: () => import('@/views/UserView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/words',
        name: 'Words',
        component: () => import('@/views/WordsView.vue')
      },
      {
        path: '/create',
        name: 'NewWord',
        component: () => import('@/views/NewWord.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/words/:id',
        name: 'SingleWord',
        component: () => import('@/views/SingleWord.vue')
      },
      {
        path: '/words/:id/edit',
        name: 'EditWord',
        component: () => import('@/views/EditWord.vue')
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/TestView.vue')
      }
    ]
  },
  {
    path: '/auth',
    redirect: { name: 'Signup' },
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/auth/SignupView.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/LoginView.vue')
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('../views/auth/ForgotPassword.vue')
      },
      {
        path: '/reset-password/:token',
        name: 'ResetPassword',
        component: () => import('../views/auth/ResetPassword.vue')
      },
      {
        path: '/confirm-email/:confirmationToken',
        name: 'ConfirmEmail',
        component: () => import('../views/auth/ConfirmEmail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !getUser() && to.name !== 'Signup' && to.name !== 'Login') {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
