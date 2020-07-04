import Vue from 'vue';
import Router from 'vue-router';

const Charts = () => import('./views/Charts.vue');
const Expenses = () => import('./views/Expenses.vue');
const Categories = () => import('./views/Categories.vue');
const PayMethods = () => import('./views/PayMethods.vue');
const Games = () => import('./views/Games.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/expenses',
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/pay_methods',
      name: 'Pay methods',
      component: PayMethods,
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts,
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
    },
  ],
  mode: 'history',
});
