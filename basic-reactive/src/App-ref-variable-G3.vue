<script setup>
import { ref } from 'vue'
console.clear()
const counter = ref(1)
const isEmpty = ref(false)
const msg = ref('Hello, String ref')
const items = ref(['pen', 'book', 'mouse'])
const product = ref({
  productId: 1,
  productName: 'Notebook'
})
console.log(items.value[0])
console.log(product.value)
console.log(product.value.productName)
</script>

<template>
  <p>Counter: {{ counter }}</p>
  <p>Empty: {{ isEmpty }}</p>
  <p>items: {{ items }}</p>
  <p>items[1] {{ items[1] }}</p>
  <p>product:{{ product }}</p>
  <p>product Name: {{ product.productName }}</p>
</template>

<style></style>
