<script setup>
const isError = true
const decorText = false
</script>

<template>
  <p :class="{ errorMsg: isError, textUnderline: decorText }">
    this is example text
  </p>
</template>

<style></style>
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
