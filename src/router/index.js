import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/LoginAlumnos',
    name: 'LoginAlumnos',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginAlumnos.vue')
  },
  {
    path: '/LoginEmpresas',
    name: 'LoginEmpresas',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginEmpresas.vue')
  },
  {
    path: '/LoginAdmin',
    name: 'LoginAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginAdministrador.vue')
  },
  {
    path: '/RegistroEstudiante',
    name: 'RegistroEstudiante',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroAlumno.vue')
  },
  {
    path: '/RegistroEmpresa',
    name: 'RegistroEmpresa',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroEmpresa.vue')
  },
  
  {
    path: '/PanelEmpresa',
    name: 'PanelEmpresa',
    component: () => import('../views/Empresa/PanelEmpresa.vue')
  },
  {
    path: '/PanelEstudiante',
    name: 'PanelEstudiante',
    component: () => import('../views/Estudiante/PanelEstudiante.vue')
  },
  {
    path: '/PanelAdmin',
    name: 'PanelAdmin',
    component: () => import('../views/Administrador/PanelAdministrador.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
