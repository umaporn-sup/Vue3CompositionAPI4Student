<script setup>
import { ref } from 'vue'
console.clear()
const counter = ref(1)
const msg = ref('Hello, reactive')
const isEmpty = ref(false)
const course = ref({ courseId: 'INT203', credit: 3 })
console.log(course.value)
console.log(course.value.credit)
console.log(course.credit) //undefinded

const productNames = ref(['Pepsi', 'Coke', 'Fanta'])
console.log(productNames.value)
console.log(productNames.value[0])
</script>

<template>
  <p>Counter: {{ counter }}</p>
  <p>Msg: {{ msg }}</p>
  <p>Empty: {{ isEmpty }}</p>
  <p>Course :{{ course }}</p>
  <p>Course credit:{{ course.credit }}</p>
  <ul>
    <li v-for="(productName, index) in productNames" :key="index">
      # {{ index }} {{ productName }}
    </li>
  </ul>
  <p>Product Name: {{ productNames[0] }}</p>
</template>

<style></style>
