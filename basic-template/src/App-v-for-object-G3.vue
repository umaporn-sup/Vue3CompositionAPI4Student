<script setup>
const foods = ['steak', 'salad', 'tomyum', 'fried rice']
const students = [
  { stdId: 1234, stdName: 'Hataiwan Mekvee' },
  { stdId: 1235, stdName: 'Sarin Weerakun' },
  { stdId: 1236, stdName: 'Supichaya Muennuch' }
]
const course = {
  title: 'INT203 Client II',
  credit: 3,
  class: 'lecture & lab'
}
</script>

<template>
  <h1>Food List</h1>
  <!-- v-for (array) -->
  <ul>
    <li v-for="(food, index) in foods" :key="index">{{ food }}</li>
  </ul>
  <!-- v-for (array of objects) -->
  <ul>
    <li v-for="student in students" :key="students.stdId">
      {{ student.stdId }}:
      {{ student.stdName }}
    </li>
  </ul>
  <!-- v-for (object) -->
  <ul>
    <li v-for="(propValue, propKey, index) in course" :key="index">
      #{{ index }} -{{ propKey }}:
      {{ propValue }}
    </li>
  </ul>
</template>

<style></style>
