import Vue from 'vue';
import Router from 'vue-router';
import Charts from './views/Charts.vue';
import Expenses from './views/Expenses.vue';
import Categories from './views/Categories.vue';
import PayMethods from './views/PayMethods.vue';

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
  ],
  mode: 'history',
});
