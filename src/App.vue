<template>
  <v-app id="app">
    <v-btn icon @click="getMessagingToken">
      <v-icon>notifications_none</v-icon>
    </v-btn>
    <drawer></drawer>
    <router-view/>
  </v-app>
</template>

<script>
import axios from 'axios';
import drawer from './components/Drawer.vue';
import firebase from '@/configFirebase.js';

const { messaging } = firebase;

export default {
  name: 'App',
  components: {
    drawer,
  },
  methods: {
    getMessagingToken() {
      console.log('*******');
      console.log(messaging);
      console.log('*******');
      messaging.getToken().then(async (token) => {
        if (token) {
          const currentMessageToken = window.localStorage.getItem('messagingToken');
          console.log('token will be updated', currentMessageToken !== token);
          if (currentMessageToken !== token) {
            await this.saveToken(token);
          }
        } else {
          console.log('No Instance ID token available. Request permission to generate one.');
          this.notificationsPermisionRequest();
        }
      });
    },
    notificationsPermisionRequest() {
      messaging.requestPermission()
        .then(() => {
          this.getMessagingToken();
        })
        .catch((err) => {
          console.log('Unable to get permission to notify.', err);
        });
    },
    listenTokenRefresh() {
      const currentMessageToken = window.localStorage.getItem('messagingToken');
      console.log('currentMessageToken', currentMessageToken);
      if (currentMessageToken) {
        messaging.onTokenRefresh(() => {
          messaging.getToken().then(function (token) {
            this.saveToken(token);
          }).catch((err) => {
            console.log('Unable to retrieve refreshed token ', err);
          });
        });
      }
    },
    saveToken(token) {
      console.log('tokens', token);
      axios.post('https://us-central1-cropchien.cloudfunctions.net/GeneralSubscription', { token })
        .then((response) => {
          window.localStorage.setItem('messagingToken', token);
          console.log(response);
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
