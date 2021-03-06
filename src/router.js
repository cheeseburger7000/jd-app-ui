import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/bottomTabBar',
      name: 'bottomTabBar',
      component: () => import('./views/BottomTabBar.vue'),
      children: [
        {
          // 嵌套路由无需添加/
          path: 'index',
          name: 'index',
          component: () => import('./views/Index.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          meta: {
            requireAuth: true, // true表示这个路由页面需要登录权限
          },
          component: () => import('./views/Cart.vue')
        },
        {
          path: 'me',
          name: 'me',
          meta: {
            requireAuth: true, // true表示这个路由页面需要登录权限
          },
          component: () => import('./views/Me.vue')
        },
      ],
      redirect: '/bottomTabBar/index'
    }
  ]
})
