import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/YiWu/index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/Demo/index.vue')
    }
  ]
})

export default router
