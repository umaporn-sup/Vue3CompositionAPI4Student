<script setup>
// local registration
import BaseButton from './components/G3/BaseButton.vue'

console.clear()
const testMe1 = () => console.log('test me 1')
const testMe2 = (e) => console.log('test me 2', e)

const testMe3 = (e) => console.log('test me 3', e)
const testMe4 = (e) => console.log('test me 4', e)
const testMe5 = (e, n) => console.log('test me 5', e, n)
const testMe6 = (e, n) => console.log('test me 6', e, n)
</script>

<template>
  <div>
    <div>
      <button @click="testMe1">Test Me1</button>
      <button @click="testMe2">Test Me2</button>

      <button @click="testMe3()">Test Me3</button>
      <button @click="testMe4($event)">Test Me4</button>

      <button @click="testMe5($event, 999)">Test Me5</button>
      <button @click="testMe6(999, $event)">Test Me6</button>
    </div>
    <div>
      <BaseButton button-name="Click Me1" @clickMe="testMe1" />
    </div>
  </div>
</template>

<style scoped></style>
