<script setup>
import { reactive } from 'vue'
console.clear()
console.log('Hello, console')
const student = reactive({ studentId: 1234, studentName: 'Thiti' })
console.log(student)
console.log(student.studentId)
const products = reactive(['pepsi', 'coke', 'wall'])
console.log(products)
console.log(products[1])
</script>

<template>
  <p>student: {{ student }}</p>
  <p>student id: {{ student.studentId }}</p>
</template>

<style></style>
