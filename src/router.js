import Vue from 'vue';
import Router from 'vue-router';
import auth from "./auth";

const Login = () => import('./views/Login.vue');
const Charts = () => import('./views/Charts.vue');
const Expenses = () => import('./views/Expenses.vue');
const Categories = () => import('./views/Categories.vue');
const PayMethods = () => import('./views/PayMethods.vue');

Vue.use(Router);

function requireAuth (to, from, next) {
  if (!auth.isAuthenticatedUser()) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/expenses',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter (to, from, next) {
        auth.logoutUser();
        next('/login')
      }
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses,
      beforeEnter: requireAuth
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
      beforeEnter: requireAuth
    },
    {
      path: '/pay_methods',
      name: 'Pay methods',
      component: PayMethods,
      beforeEnter: requireAuth
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts,
      beforeEnter: requireAuth
    },
  ],
  mode: 'history',
});
