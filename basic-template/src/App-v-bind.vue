<script setup>
const headingStyle = 'color: blue'
const paraStyle = 'text-decoration:underline'
const imagePath = './images/mypic.jfif'
</script>

<template>
  <h1 v-bind:style="headingStyle">INT203 Web Client II</h1>
  <p :style="paraStyle">lect. Umaporn</p>
  <img src="./assets/logo.png" />

  <img :src="imagePath" alt="" srcset="" />
</template>

<style></style>
