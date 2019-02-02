import Vue from 'vue';
import Router from 'vue-router';

import Expenses from '../components/Expenses';
import Categories from '../components/Categories';
import PayMethods from '../components/PayMethods';
import Charts from '../components/Charts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/Expenses',
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
  ],
  mode: 'history',
});
