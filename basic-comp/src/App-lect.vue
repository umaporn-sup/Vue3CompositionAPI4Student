<script setup>
import { ref } from 'vue'
import BaseButton from './components/BaseButton.vue'
const bText = ref('Hello')
const bColor = ref('#000000')
</script>

<template>
  <div>
    <div>Your Text: {{ bText }}<input type="text" v-model="bText" /></div>

    <div>Your Color: {{ bColor }} <input type="color" v-model="bColor" /></div>
    <BaseButton :yourText="bText" :yourColor="bColor" />
  </div>
</template>

<style></style>
