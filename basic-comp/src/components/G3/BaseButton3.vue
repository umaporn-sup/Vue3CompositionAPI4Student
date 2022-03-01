<script setup>
// custom event
defineEmits(['updateMe'])
const prop = defineProps({
  buttonName: {
    type: String,
    require: true
    // default: 'OK'
  },
  props2: {}
})
// console.log(prop.buttonName)
</script>

<template>
  <!-- <button class="button-color" @click="$emit('updateMe', 'UPDATE_ME')">
    {{ buttonName }}
  </button> -->

  <button
    class="button-color"
    @click="
      $emit('updateMe', { type: 'UPDATE_ME', statusCode: 200, bubble: true })
    "
  >
    {{ buttonName }}
  </button>
</template>

<style scoped>
.button-color {
  background-color: pink;
}
</style>
