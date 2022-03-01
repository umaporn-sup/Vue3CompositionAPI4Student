<script setup>
defineEmits(['updateMe'])
const prop = defineProps({
  buttonName: {
    type: String,
    // require: true
    default: 'OK'
  }
})
// console.log(prop.buttonName)
</script>

<template>
  <button
    class="button-color"
    @click="$emit('updateMe', { type: 'UPDATE_ME', bubbles: true, e: $event })"
  >
    {{ buttonName }}
  </button>
</template>

<style scoped>
.button-color {
  background-color: yellow;
}
</style>
