<script setup>
const absent = 2
const score = 85
//>=85 very good
// >=75 Good
// >=65 Fair
// <65 Need Improvement
</script>

<template>
  <h1>Your score: {{ score }}</h1>
  <p v-if="score >= 80">Very Good</p>
  <p v-else-if="score >= 75">Good</p>
  <p v-else-if="score >= 65">Fair</p>
  <p v-else>Need Improment</p>
</template>

<style></style>
