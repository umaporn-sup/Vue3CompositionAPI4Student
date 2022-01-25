<script setup>
const count = 1
const username = '' //false
</script>

<template>
  <p v-show="count">Counter: {{ count }}</p>
  <p>UserName:{{ username }}</p>
  <p v-show="!username" style="color: red">Please enter your username!</p>
</template>

<style></style>
