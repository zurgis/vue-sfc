import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import Table from '../views/Table.vue'
import Notification from '../views/Notification.vue'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/table', name: 'Table', component: Table },
  { path: '/notification', name: 'Notification', component: Notification }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
