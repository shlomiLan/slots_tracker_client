import VueSession from 'vue-session';
import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import Chart from 'chart.js';
import VeeValidate from 'vee-validate';
import VueChart from 'vuechart';
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels';
import '@fortawesome/fontawesome-free/css/all.css';
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
  VMenu, VFooter,
  VDialog,
  VIcon,
  VAlert, VSnackbar,
} from 'vuetify/lib';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";


Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuetify, {
  components: {
    // eslint-disable-next-line
    VApp, VList, VListTile, VListTileTitle, VListTileContent, VListTileAction, VListTileActionText, VListTileSubTitle,
    // eslint-disable-next-line
    VTab, VTabs, VTabsSlider, VDivider, VSpacer, VCard, VCardText, VCardActions, VFlex, VLayout, VContainer,
    // eslint-disable-next-line
    VProgressLinear, VForm, VCheckbox, VTextField, VCombobox, VSelect, VBtn, VDatePicker, VMenu, VDialog, VIcon, VAlert, VFooter, VSnackbar
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

Vue.use(vueNumeralFilterInstaller);

let session_options = {
    persist: true
};

Vue.use(VueSession, session_options);

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app');
