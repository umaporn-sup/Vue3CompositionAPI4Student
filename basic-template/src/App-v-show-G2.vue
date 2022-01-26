<script setup>
const isSearch = true
const yourName = ''
</script>

<template>
  <div v-show="isSearch">
    <label for="search">Search</label>
    <input type="text" id="search" class="border" />
  </div>
  <p v-show="yourName">Hello,{{ yourName }}</p>
</template>
<style></style>
