<script setup>
import { ref } from 'vue'
const unknowImg = ref('../images/gitrepo-project1.jpg')
</script>

<template>
  <div>
    <img src="../assets/logo.png" />
    <img :src="unknowImg" alt="" />
    <h1>Profile</h1>
    <p>Lect.Umaporn Supasitthimethee</p>
    <p>INT203 Client-Side Web Programming II</p>
  </div>
</template>

<style></style>
