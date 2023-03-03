import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/yiwu/index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/demo/index.vue')
    },
    {
      path: '/hz',
      name: 'hz',
      component: () => import('../views/hz/index.vue')
    }
  ]
})

export default router
