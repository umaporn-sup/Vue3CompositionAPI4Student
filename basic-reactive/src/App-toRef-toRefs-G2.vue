<script setup>
import { reactive, toRef, toRefs } from 'vue'
console.clear()
const product = reactive({
  productId: 1001,
  productName: 'Pepsi',
  productPrice: 20,
  productDesc: 'fresh drink'
})
const price = toRef(product, 'productPrice')
console.log(price.value)
price.value += 10
console.log(product)

const { productId, productDesc } = toRefs(product)
console.log(productId.value)
console.log(productDesc.value)
</script>

<template></template>

<style></style>
