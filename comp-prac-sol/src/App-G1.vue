<script setup>
import { ref } from 'vue'
import ListItems from './components/ListItems-G1.vue'
const currentStatus = ref('NONE')
const students = [
  { id: '101', name: 'Tisanai' },
  { id: '102', name: 'Adam' },
  { id: '103', name: 'Bob' },
  { id: '104', name: 'John' }
]
const projects = [
  { group: 1, title: 'Bingo Game' },
  { group: 2, title: 'Tic Tac Toe' }
]
const changeStatus = (updateStatus) => (currentStatus.value = updateStatus)
</script>

<template>
  <div>
    <div>
      <ListItems :items="students" @confirm="changeStatus" />
      Current Status: {{ currentStatus }}
    </div>
    <hr />
  </div>
</template>

<style></style>
