<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue'
defineProps({
  currentNum: {
    type: Number
  }
})

onBeforeUnmount(() => alert('on before unmount (NumUpdate component)'))
onUnmounted(() => () => alert('on unmounted (NumUpdate component)'))
</script>

<template>current num: {{ currentNum }}</template>

<style></style>
