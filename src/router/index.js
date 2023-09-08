import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroEmpresa.vue')
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/LoginAlumnos',
    name: 'LoginAlumnos',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginAlumnos.vue')
  },
  {
    path: '/PanelEmpresa',
    name: 'PanelEmpresa',
    component: () => import('../views/PanelEmpresa.vue')
  },
  {
    path: '/PanelEstudiante',
    name: 'PanelEstudiante',
    component: () => import('../views/PanelEstudiante.vue')
  },
  {
    path: '/LoginEmpresas',
    name: 'LoginEmpresas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginEmpresas.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
