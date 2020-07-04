<template>
  <v-tabs centered color="cyan" dark icons-and-text>
    <v-tabs-slider color="yellow"></v-tabs-slider>
    <v-tab
      :to="item.link"
      v-for="item in items"
      :key="item.id">
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-tab>
  </v-tabs>
</template>
<script>

export default {
  data() {
    return {
      items: [
        { id: 1, title: 'Expenses',    icon: 'fa-shopping-cart',  link: 'expenses' },
        { id: 2, title: 'games',       icon: 'fa-gamepad',        link: 'games' },
        { id: 3, title: 'Categories',  icon: 'fa-clipboard-list', link: 'categories' },
        { id: 4, title: 'Pay methods', icon: 'fa-yen-sign',       link: 'pay_methods' },
        { id: 5, title: 'charts',      icon: 'fa-chart-line',     link: 'charts' },
      ],
      right: null,
    };
  },
};
</script>
