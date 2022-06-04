import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
