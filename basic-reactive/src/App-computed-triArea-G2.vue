<script setup>
import { ref, computed } from 'vue'
console.clear()
const base = ref(4)
const height = ref(8)
const result = computed(() => {
  return (1 / 2) * base.value * height.value
})
</script>

<template>
  <p>Base: {{ base }}</p>
  <button @click="base++">Add 1 to Base</button>
  <p>Height: {{ height }}</p>
  <button @click="height++">Add 1 to Height</button>

  <p>Area Result: {{ result }}</p>
</template>

<style></style>
