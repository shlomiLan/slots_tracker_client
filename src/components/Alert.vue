<template>
  <div>
    <b-alert :show=message.display
             @dismissed="message.display=false"
             dismissible
             :variant=message.type>{{ message.text }}</b-alert>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>
