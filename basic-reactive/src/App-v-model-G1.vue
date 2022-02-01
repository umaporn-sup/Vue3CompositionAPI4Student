<script setup>
import { ref, computed } from 'vue'
const base = ref(4)
const height = ref(2)

// computed property
const area = computed(() => (1 / 2) * base.value * height.value)
</script>

<template>
  <div>
    Base<input type="number" v-model="base" />
    Height
    <input type="number" v-model="height" />

    <p>Result: {{ area }}</p>
  </div>
</template>

<style></style>
