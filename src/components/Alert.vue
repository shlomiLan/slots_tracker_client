<template>
  <div>
    <b-alert show
             dismissible
             :variant=message.type>{{ message.text }}</b-alert>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>
