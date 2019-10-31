import Vue from 'vue'
import VueRouter from 'vue-router'
import Nintendo from "@/views/Nintendo/Home/Nintendo";

Vue.use(VueRouter)

const routes = [{
  name: 'home',
  path: '/',
  redirect:'Select'
},
  {
    name: 'Select',
    path: '/select',
    component: () => import('../views/Select')
  },
  {
    name: 'Nintendo',
    path: '/nintendo',
    component: () => import('../views/Nintendo/Home/Nintendo')
  },
  {
    path: '/nintendo/shop',
    component: () => import('../views/Nintendo/Shop/Shop')
  },
  {
    name: 'Tencent',
    path: '/tencent',
    component: () => import('../views/Tencent/Home/Tencent'),
  },
  {
    path: '/tencent/company',
    component: () => import('../views/Tencent/Introduce/Company'),
  },
  {
    name: 'Microsoft',
    path: '/microsoft',
    component: () => import('../views/Microsoft/Microsoft')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
