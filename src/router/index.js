import { createRouter, createWebHistory } from 'vue-router'

/**
 * This router is only used for the example webpage dynamic routing.
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../example-views/Landing.vue')
    }
  ]
})

export default router
