<script setup>
import { ref, computed } from 'vue'
const base = ref(4)
const height = ref(2)

// computed property
const area = computed(() => (1 / 2) * base.value * height.value)
</script>

<template>
  <div>
    <p>Base: {{ base }}</p>
    <button @click="base++">Add 1 to base</button>
    <p>Height: {{ height }}</p>
    <button @click="height++">Add 1 to height</button>
    <p>Result: {{ area }}</p>
  </div>
</template>

<style></style>
