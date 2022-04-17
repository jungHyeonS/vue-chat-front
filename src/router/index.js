import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/loginView.vue'
import join from "@/views/join.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/join',
    name: 'join',
    component: join
  },
 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
