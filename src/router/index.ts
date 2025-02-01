import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/status',
      name: 'status',
      component: () => import('../views/StatusView.vue'),
    },

    {
      path: '/map1',
      name: 'map1',
      component: () => import('../views/MapView.vue'),
    },
  ],
})

export default router
