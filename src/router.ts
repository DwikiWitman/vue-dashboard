import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Blank from './views/Blank.vue'
import Reservations from './views/Reservations.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations,
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Blank,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Blank,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Blank,
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: Blank,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Blank,
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
