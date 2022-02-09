<script setup>
import { resolveDirective } from 'vue'

const warningColor = 'orange'
const successText = 'color:green'
const warningText = 'color:orange'
const italicText = 'italic'
const decorText = 'text-decoration:underline'
const isError = false
const isDecor = false

const dangerText = { color: 'red', 'font-style': 'italic' }
const dangerText2 = ['color: red', 'text-decoration:underline']
console.log([...dangerText2])
const msg = 'hello, world'
console.log([...msg])
</script>

<template>
  <!-- style attribute with object syntax -->
  <p :style="{ color: warningColor, 'font-style': italicText }">
    this is style with object syntax
  </p>
  <p :style="isError ? 'color:red' : 'color:green'">this is error message</p>
  <p :style="isError ? successText : warningText">this is binding on varible</p>

  <!-- style attribute with array syntax -->
  <p :style="[successText, decorText]">this is style with array syntax</p>
  <p :style="[successText, isDecor ? decorText : '']">
    this is style on array syntax with condition
  </p>
  <p :style="dangerText">danger text</p>
  <p :style="[...dangerText2]">danger text2</p>
  <!-- ... means ['color:red','text-decoration:underline'] -->
</template>

<style></style>
