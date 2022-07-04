import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import Table from '../views/Table.vue'
import Notification from '../views/Notification.vue'
import Icon from '../views/Icon.vue'
import Dropdown from '../views/Dropdown.vue'
import List from '../views/List.vue'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/table', name: 'Table', component: Table },
  { path: '/notification', name: 'Notification', component: Notification },
  { path: '/icon', name: 'Icon', component: Icon },
  { path: '/dropdown', name: 'Dropdown', component: Dropdown },
  { path: '/list', name: 'List', component: List }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
