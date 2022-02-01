<script setup>
import { ref, computed } from 'vue'
console.clear()
const base = ref(2)
const height = 2
const area = computed(() => {
  return (1 / 2) * base.value * height
})
</script>

<template>
  <p>Base: {{ base }}</p>
  <button @click="++base">Add 1 to Base</button>
  <button @click="--base">Subtract 1 from Base</button>
  <p>Height: {{ height }}</p>

  <p>Result Area: {{ area }}</p>
</template>

<style></style>
