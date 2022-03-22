<script setup>
import { useRoute, useRouter } from 'vue-router'
let { params } = useRoute()
console.log(params.productId)

const appRouter = useRouter()
const goBack = () => appRouter.go(-1)
const goMyProfile = () => appRouter.push({ name: 'Profile' })
</script>

<template>
  <div>
    <h1>Product Item</h1>
    <p>Your selected product id is {{ this.$route.params.productId }}</p>
    <button @click="goBack">Back</button>
    <button @click="goMyProfile">My Profile</button>
  </div>
</template>

<style></style>
