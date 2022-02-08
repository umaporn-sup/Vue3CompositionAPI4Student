<script setup>
const isError = false
const decorText = true
const a = 'errorMsg'
const b = 'textUnderline'
</script>

<template>
  <p :class="[a, decorText ? b : '']">this is example text</p>
  <p :class="isError ? [a, b] : a">XXXXX</p>
  <p :class="isError ? [a, b] : ''">YYYY</p>
</template>

<style>
.errorMsg {
  color: red;
}
.normalMsg {
  color: green;
}
.textUnderline {
  text-decoration: underline;
}
</style>
