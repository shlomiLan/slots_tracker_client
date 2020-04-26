import store from './store';
import Vue from 'vue';

export default {
  isAuthenticatedUser() {
    return !!this.getAccessToken();
  },

  getAccessToken(){
    if (Vue.prototype.$session.exists() && Vue.prototype.$session.get('jwt')){
      return Vue.prototype.$session.get('jwt');
    }
  },

  logoutUser(){
    if (this.getAccessToken()) {
      Vue.prototype.$session.remove('jwt');
      store.state.is_authenticated_user = false;
    }
  }
}
