<script setup>
import { ref } from 'vue'
const base = 4
const height = 2
const result = ref(0)
//arrow function expression
const computeArea = () => {
  result.value = (1 / 2) * base * height
  console.log(result.value)
}
</script>

<template>
  <div>
    <p>Base: {{ base }}</p>
    <p>Height: {{ height }}</p>
    <button @click="computeArea">Compute Area</button>
    <p>Result:{{ result }}</p>
  </div>
</template>

<style></style>
