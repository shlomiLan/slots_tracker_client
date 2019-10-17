<template>
  <v-app id="app">
    <v-snackbar v-model="snackbar" top multi-line color="info" >
      {{ text }}
    </v-snackbar>
    <drawer></drawer>
    <router-view/>
  </v-app>
</template>

<script>
import drawer from './components/Drawer.vue';
import firebase from './configFirebase';

const { db } = firebase;
const { messaging } = firebase;

export default {
  name: 'App',
  components: {
    drawer,
  },
  data() {
    return {
      snackbar: false,
      text: '',
    };
  },
  methods: {
    getMessagingToken() {
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
    saveToken(token) {
      const devicesRef = db.collection('devices');

      const docData = {
        token,
        env: process.env.VUE_APP_ENV,
      };

      return devicesRef.doc(token).set(docData);
    },
  },
  created() {
    this.getMessagingToken();
    messaging.onMessage((payload) => {
      this.snackbar = true;
      this.text = payload.notification.body;
      console.log('Message received. ', payload);
    });
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
