<script setup>
import { ref, computed } from 'vue'
const prop = defineProps({
  yourText: {
    type: String,
    require: true
  },
  yourColor: {
    type: String,
    require: true
  }
})
console.log(prop.yourColor)
console.log(prop.yourText)
// when BaseButton want to change yourText or yourColor, you need to create local variable like this:
// 1. using ref function
// const buttonText = ref(prop.yourText)
// 2. using computed function
// const buttonText = computed(() => prop.yourText)
</script>

<template>
  <!-- <button class="button-color">{{ buttonText }}</button> -->
  <button class="button-color">{{ yourText }}</button>
</template>

<style>
.button-color {
  background-color: v-bind(yourColor);
}
</style>
