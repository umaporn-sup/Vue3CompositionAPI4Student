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
  <input type="number" v-model="base" />
  <p>Height: {{ height }}</p>
  <input type="number" v-model="height" />
  <p>Area Result: {{ result }}</p>
</template>

<style></style>
