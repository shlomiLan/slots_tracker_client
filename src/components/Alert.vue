<template>
  <div>
    <v-alert
      v-model="message.display"
      :color="message.type"
      dismissible
    >
      {{ message.text }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>
