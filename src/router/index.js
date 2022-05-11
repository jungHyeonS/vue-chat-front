import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/loginView.vue'
import join from "@/views/join.vue";
import roomList from "@/views/roomList.vue";

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
  {
    path: '/roomList',
    name: 'roomList',
    component: roomList
  },
 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
