<script setup>
import { reactive } from 'vue'
const course = reactive({ courseId: 'INT203', credit: 3 })
console.log(course.credit)
const productNames = ['Pepsi', 'Coke', 'Fanta']
console.log(productNames[0])
</script>

<template>
  <!-- using reactive function variable is the same way as ref function -->
</template>

<style></style>
