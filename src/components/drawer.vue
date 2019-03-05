<template>
    <v-tabs centered color="cyan" dark icons-and-text>
    <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :to="item.link">
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
          { title: 'Expenses', icon: 'question_answer', link: 'expenses' },
          { title: 'Categories', icon: 'dashboard', link: 'categories' },
          { title: 'Pay methods', icon: 'dashboard', link: 'pay_methods' },
          { title: 'charts', icon: 'dashboard', link: 'charts' },
        ],
        right: null,
      };
    },
  };
</script>
