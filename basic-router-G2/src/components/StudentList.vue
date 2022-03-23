<script setup>
import { ref } from 'vue'
const students = ref([
  { studentId: 632000121, studentName: 'Panalee Palasri' },
  { studentId: 632000134, studentName: 'Varitchai Surachaitanawat' },
  { studentId: 632000555, studentName: 'Piyamon Suddee' }
])
</script>

<template>
  <div>
    <ul>
      <li v-for="student in students" :key="student.id">
        Student Name:
        <router-link
          :to="{
            name: 'StudentItem',
            params: { studentId: student.studentId }
          }"
        >
          {{ student.studentName }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style></style>
