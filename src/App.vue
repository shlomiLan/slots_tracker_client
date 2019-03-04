<template>
  <div id="app" class="container">
    <v-app>
      <drawer></drawer>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  // import Navigation from './components/Navigation';
  import drawer from './components/drawer.vue'


  export default {
    name: 'App',
    components: {
      // Navigation,
      drawer
    },
  };
</script>

<style>
  /*#app {*/
    /*margin-top: 60px;*/
  /*}*/

  a, .text-decoration-line{
    text-decoration: none !important;
  }
</style>
