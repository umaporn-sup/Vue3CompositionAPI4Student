<script setup>
const foods = ['steak', 'salad', 'tomyum', 'fried rice']
const students = [
  { stdId: 1234, stdName: 'Hataiwan Mekvee' },
  { stdId: 1235, stdName: 'Sarin Weerakun' },
  { stdId: 1236, stdName: 'Supichaya Muennuch' }
]
</script>

<template>
  <h1>Food List</h1>
  <ul>
    <li v-for="(food, index) in foods" :key="index">{{ food }}</li>
  </ul>

  <ul>
    <li v-for="student in students">{{ student.stdId }}</li>
  </ul>
</template>

<style></style>
