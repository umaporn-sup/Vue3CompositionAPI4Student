<script setup>
import { ref } from 'vue'
const unKnownImage = ref('images/gitrepo-project1.jpg')
</script>

<template>
  <div>
    <h1>My Images</h1>
    <h2>static image</h2>
    <img src="./assets/logo.png" />
    <img src="./assets/www-icon.png" />
    <div>
      <h2>image dynamic binding</h2>
      <img :src="unKnownImage" />
    </div>
  </div>
</template>

<style></style>
