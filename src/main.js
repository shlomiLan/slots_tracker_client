import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import Chart from 'chart.js';
import VeeValidate from 'vee-validate';
import VueChart from 'vuechart';
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels';
import Vuetify, {
  VApp,
  // eslint-disable-next-line
  VList, VListTile, VListTileTitle, VListTileContent, VListTileAction, VListTileActionText, VListTileSubTitle,
  VTab, VTabs, VTabsSlider,
  VDivider, VSpacer,
  VCard, VCardText, VCardActions,
  VFlex, VLayout, VContainer, VProgressLinear,
  VForm, VCheckbox, VTextField, VCombobox, VSelect, VBtn,
  VDatePicker,
  VMenu,
  VDialog,
  VIcon,
  VAlert,
} from 'vuetify/lib';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(Vuetify, {
  components: {
    // eslint-disable-next-line
    VApp, VList, VListTile, VListTileTitle, VListTileContent, VListTileAction, VListTileActionText, VListTileSubTitle,
    // eslint-disable-next-line
    VTab, VTabs, VTabsSlider, VDivider, VSpacer, VCard, VCardText, VCardActions, VFlex, VLayout, VContainer,
    // eslint-disable-next-line
    VProgressLinear, VForm, VCheckbox, VTextField, VCombobox, VSelect, VBtn, VDatePicker, VMenu, VDialog, VIcon, VAlert,
  },
  iconfont: 'fa', // 'md' || 'mdi' || 'fa' || 'fa4'
});

Vue.config.productionTip = false;

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
