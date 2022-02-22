<script setup>
const italicStyle = 'font-style: italic'
const dangerText = { color: 'red', 'font-style': 'italic' }
const dangerText2 = ['color: red', 'text-decoration:underline']
</script>

<template>
  <div>
    <p :style="dangerText">danger text 1</p>
    <p :style="[dangerText2]">danger text 2</p>
    <p :style="[dangerText2, italicStyle]">danger text 3</p>
  </div>
</template>

<style></style>
