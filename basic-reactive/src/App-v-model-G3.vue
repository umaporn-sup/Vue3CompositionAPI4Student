<script setup>
import { ref, computed } from 'vue'
console.clear()
const base = ref(2)
const height = ref(2)
const area = computed(() => {
  return (1 / 2) * base.value * height.value
})
</script>

<template>
  Base: <input type="number" v-model="base" />
  <p>Current Base: {{ base }}</p>
  Height: <input type="number" v-model="height" />
  <p>Current Height: {{ height }}</p>
  <p>Result Area: {{ area }}</p>
</template>

<style></style>
