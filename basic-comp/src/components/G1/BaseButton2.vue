<script setup>
defineEmits(['likeMe'])
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
  <button class="button-color" @click="$emit('likeMe', { type: 'LIKE_ME' })">
    {{ buttonName }}
  </button>
</template>

<style scoped>
.button-color {
  background-color: palevioletred;
}
</style>
