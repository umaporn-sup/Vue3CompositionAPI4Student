<script setup>
const warningColor = 'red'
const warningStyle = 'italic'
const successText = 'color:green'
const decorText = 'text-decoration:underline'
const isEmpty = false
const hasDecor = true
</script>

<template>
  <div>
    <!-- binding style (object syntax) -->
    <p :style="{ color: warningColor, 'font-style': warningStyle }">
      This is a warning text.
    </p>
    <p :style="isEmpty ? { color: 'red' } : { color: 'green' }">
      This is a style under condition
    </p>
    <!-- binding style (array syntax) -->
    <p :style="[successText]">This is a success text</p>
    <p :style="[successText, decorText]">This is success and decoration text</p>
    <p :style="[successText, hasDecor ? decorText : '']">
      This is styles under condition
    </p>
  </div>
</template>

<style></style>
