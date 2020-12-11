import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')

  },
  {
    path: '/Game',
    name: 'Game',
    component: () => import('../views/Game.vue')

  },
  {
    path: '/Locations',
    name: 'Locations',
    component: () => import('../views/Locations.vue')

  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')

  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')

  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/Chatroom/:id',
    name: 'Chatroom',
    component: () => import('../components/Chatroom.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
