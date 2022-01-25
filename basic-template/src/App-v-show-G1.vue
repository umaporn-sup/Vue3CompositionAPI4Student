<script setup>
const isPresent = true
const msg = ''
</script>

<template>
  <div>
    <p v-show="!isPresent">Songglod Petchamras</p>
    <p v-show="isPresent">Chokjaroen Tancharoenrat</p>
  </div>

  <p>Your Message is {{ msg }}</p>
  <p v-show="!msg" style="color: red">Please insert your data!</p>
</template>

<style></style>
