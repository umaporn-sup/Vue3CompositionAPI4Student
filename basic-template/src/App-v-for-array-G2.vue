<script setup>
const courses = [
  'INT203-Web Client II',
  'INT204-Web Server II',
  'INT209-Devops'
]
</script>

<template>
  <ul class="text-green-600">
    <li v-for="(course, index) in courses" :key="index">
      #{{ index }}-{{ course }}
    </li>
  </ul>
</template>

<style></style>
