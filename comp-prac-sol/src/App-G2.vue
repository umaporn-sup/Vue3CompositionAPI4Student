<script setup>
import IconGalaAirplay from './components/Icons/IconGalaAirplay.vue'
import ListItems from './components/ListItems-G2.vue'
import { ref } from 'vue'
const projects = [
  { section: 1, group: 1, title: 'Bingo' },
  { section: 2, group: 1, title: 'Tic Tac Toe' },
  { section: 3, group: 1, title: 'Matching Game' }
]
// const numbers = [1, 3, 20, 49, 100, 1]
const currentStatus = ref('NONE')
const updateStatus = (status) => (currentStatus.value = status)
</script>

<template>
  <div>
    <IconGalaAirplay />Home
    <ListItems :items="projects" @confirm="updateStatus" />
    <!-- <ListItems :items="numbers" /> -->
    current status: {{ currentStatus }}
  </div>
</template>

<style></style>
