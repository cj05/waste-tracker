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
    {
      path: '/map2',
      name: 'map2',
      component: () => import('../views/Map2View.vue'),
    },
    {
      path: '/map3',
      name: 'map3',
      component: () => import('../views/Map3View.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryView.vue'),
    },
  ],
})

export default router
