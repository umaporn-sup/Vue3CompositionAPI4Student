<script setup>
import { reactive } from 'vue'
const product = reactive({})
const courses = reactive(['INT201', 'INT202', 'INT203'])
console.log(courses)
console.log(courses[0])
product.name = 'computer'
product.price = 1500
console.log(product)
console.log(product.name)
</script>

<template>
  <p>{{ product }}</p>
  <p>{{ product.price }}</p>
</template>

<style></style>
