import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contai from './components/Contai.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },
    {
      path: '/contai',
      name: 'Contai',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Contai.vue')
    }, {
      path: '/add',
      name: 'Add',
      component: () => import(/* webpackChunkName: "about" */ './components/Add.vue')
    }, {
      path: '/contai/details/:id',
      name: 'details',
      component: () => import(/* webpackChunkName: "about" */ './components/Details.vue')
    }
    , {
      path: '/contai/edit/:id',
      name: 'edit',
      component: () => import(/* webpackChunkName: "about" */ './components/Edit.vue')
    }
  ]
})
