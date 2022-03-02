<script setup>
defineEmits(['likeMe'])
const prop = defineProps({
  buttonName: {
    type: String,
    // default: 'OK'
    require: true
  }
})
const num = 555
// console.log(prop.buttonName)
</script>

<template>
  <button class="button-color" @click="$emit('likeMe', false, 404, 'FAIL')">
    {{ buttonName }}
  </button>
</template>

<style scoped>
.button-color {
  background-color: yellowgreen;
}
</style>
