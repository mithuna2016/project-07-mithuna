import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import( '../views/About.vue')
  },

 {
    path: '/login',
    name: 'Login',
    
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    
    component: () => import( '../views/Signup.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
