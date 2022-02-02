<script setup>
import { ref } from 'vue'
console.clear()
const base = ref(4)
const height = ref(8)
let result = ref(1)
const computeArea = () => {
  console.log('compute area working')
  result.value = (1 / 2) * base.value * height.value
  console.log(result.value)
}
</script>

<template>
  <p>Base: {{ base }}</p>
  <button @click="base++">Add 1 to Base</button>
  <p>Height: {{ height }}</p>
  <button @click="height++">Add 1 to Height</button>

  <p>Area Result: {{ result }}</p>
  <button @click="computeArea">Compute Area</button>
</template>

<style></style>
