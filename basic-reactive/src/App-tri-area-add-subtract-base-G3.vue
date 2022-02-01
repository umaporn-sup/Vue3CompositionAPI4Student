<script setup>
import { ref } from 'vue'
console.clear()
const base = ref(2)
const height = 2
const area = ref(0)
// function declaration
// function computeArea() {
//   console.log('compute area working')
//   area.value = (1 / 2) * base.value * height
// }
// arrow function expression
const computeArea2 = () => {
  console.log('compute area working')
  area.value = (1 / 2) * base.value * height
}
</script>

<template>
  <p>Base: {{ base }}</p>
  <button @click="++base">Add 1 to Base</button>
  <button @click="--base">Subtract 1 from Base</button>
  <p>Height: {{ height }}</p>
  <button @click="computeArea2">Compute Area</button>
  <p>Result Area: {{ area }}</p>
</template>

<style></style>
