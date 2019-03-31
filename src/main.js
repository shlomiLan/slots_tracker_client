import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import Chart from 'chart.js';
import VeeValidate from 'vee-validate';
import VueChart from 'vuechart';
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels';
import Vuetify from 'vuetify';
import Vue from 'vue';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;
// Vue.use(BootstrapVue);

Vue.use(Vuetify, {
  iconfont: 'fa', // 'md' || 'mdi' || 'fa' || 'fa4'
});

// Vue.component('v-select', VueSelect.VueSelect);
Vue.use(VeeValidate);

Vue.component(VueChart.name, VueChart);
Vue.component(ChartJsPluginDataLabels);
Chart.defaults.global.plugins.datalabels.anchor = 'end';
Chart.defaults.global.plugins.datalabels.align = 'end';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.title.display = true;
Chart.defaults.global.title.padding = 20;
Chart.defaults.global.layout.padding.right = 50;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
