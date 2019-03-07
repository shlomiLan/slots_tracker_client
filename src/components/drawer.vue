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
          // eslint-disable-next-line
          { id: 1, title: 'Expenses',    icon: 'question_answer', link: 'expenses' },
          // eslint-disable-next-line
          { id: 2, title: 'Categories',  icon: 'dashboard',       link: 'categories' },
          // eslint-disable-next-line
          { id: 3, title: 'Pay methods', icon: 'dashboard',       link: 'pay_methods' },
          // eslint-disable-next-line
          { id: 4, title: 'charts',      icon: 'dashboard',       link: 'charts' },
        ],
        right: null,
      };
    },
  };
</script>
