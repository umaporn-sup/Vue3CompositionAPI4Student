<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue'
defineProps({
  currentNum: {
    type: Number
  }
})
onBeforeUnmount(() => alert('before unmount'))
onUnmounted(() => alert('unmounted'))
</script>

<template>current num: {{ currentNum }}</template>

<style></style>
