<template>
  <div id="app" class="container">
    <v-app>
      <drawer></drawer>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  import drawer from './components/drawer.vue';


  export default {
    name: 'App',
    components: {
      drawer
    },
  };
</script>

<style>
  a, .text-decoration-line{
    text-decoration: none !important;
  }

  hr {
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .v-tabs__item{
    padding: 5px;
  }
</style>
