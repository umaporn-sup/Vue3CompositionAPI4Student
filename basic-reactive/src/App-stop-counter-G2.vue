<script setup>
import { ref } from 'vue'
console.clear()
const counter = ref(1)
// setTimeout(() => console.log(++counter), 3000)
const intervalId = setInterval(() => console.log(++counter.value), 1000)

// function stopInterval() {
//   clearInterval(intervalId)
// }
const stopInterval = () => clearInterval(intervalId)
</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="stopInterval">Stop Counter</button>
</template>

<style></style>
