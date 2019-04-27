<template>
    <v-tabs centered color="cyan" dark icons-and-text>
      Version: {{ appVersion}}
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
        // eslint-disable-next-line
        { id: 1, title: 'Expenses',    icon: 'fa-shopping-cart',  link: 'expenses' },
        // eslint-disable-next-line
        { id: 2, title: 'Categories',  icon: 'fa-clipboard-list', link: 'categories' },
        // eslint-disable-next-line
        { id: 3, title: 'Pay methods', icon: 'fa-yen-sign',       link: 'pay_methods' },
        // eslint-disable-next-line
        { id: 4, title: 'charts',      icon: 'fa-chart-line',     link: 'charts' },
      ],
      right: null,
    };
  },
  computed: {
    appVersion() {
      return `${process.env.PACKAGE_VERSION} - ${process.env.ENV}`;
    },
  },
};
</script>
