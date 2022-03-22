<script setup>
import { ref } from 'vue'
const products = ref([
  { productId: 1001, productName: 'iPhone' },
  { productId: 5112, productName: 'iPad' },
  { productId: 9898, productName: 'iPod' }
])
</script>

<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.productId">
        <router-link
          :to="{
            name: 'ProductItem',
            params: { productId: product.productId }
          }"
        >
          Product Name: {{ product.productName }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style></style>
