<script setup>
// local registration
import BaseButton from './components/G1/BaseButton.vue'
import BaseButton2 from './components/G1/BaseButton2.vue'
import BaseButton3 from './components/G1/BaseButton3.vue'

console.clear()
const testMe1 = () => console.log('test me 1')
const testMe2 = (e) => console.log('test me 2', e)

const testMe3 = (e) => console.log('test me 3', e)
const testMe4 = (e) => console.log('test me 4', e)
const testMe5 = (e, n) => console.log('test me 5', e, n)
const testMe6 = (e, n) => console.log('test me 6', e, n)

const updateMe1 = () => console.log('update me 1')
const updateMe2 = (e) => console.log('update me 2', e)
const updateMe3 = (e) => console.log('update me 3', e)
const updateMe4 = (e) => console.log('update me 4', e)
const updateMe5 = (e, n) => console.log('update me 5', e, n)
const updateMe6 = (e, n) => console.log('update me 6', e, n)

const updateMe7 = (e) => console.log('update me 7', e) //e=?"UPDATE_ME"
const updateMe8 = (a, b) => console.log('update me 8', a, b)
const updateMe9 = (a, b) => console.log('update me 9', a, b)
const updateMe10 = (a) => console.log('update me 10', a) //a=?
const updateMe11 = (a, b) => console.log('update me 10', a, b)
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
      <BaseButton button-name="Click Me2" @clickMe="testMe2" />
      <BaseButton button-name="Click Me3" @clickMe="testMe3()" />
      <BaseButton button-name="Click Me4" @clickMe="testMe4($event)" />
      <BaseButton button-name="Click Me5" @clickMe="testMe5($event, 999)" />
      <BaseButton button-name="Click Me6" @clickMe="testMe6(999, $event)" />
    </div>
    <div>
      <BaseButton2 button-name="Like Me1" @likeMe="testMe1" />
      <BaseButton2 button-name="Like Me2" @likeMe="testMe2" />
      <BaseButton2 button-name="Like Me3" @likeMe="testMe3()" />
      <BaseButton2 button-name="Like Me4" @likeMe="testMe4($event)" />
      <BaseButton2 button-name="Like Me5" @likeMe="testMe5($event, 999)" />
      <BaseButton2 button-name="Like Me6" @likeMe="testMe5(999, $event)" />
    </div>
    <div>
      <BaseButton3 button-name="Update Me1" @updateMe="updateMe1" />
      <BaseButton3 button-name="Update Me2" @updateMe="updateMe2" />
      <BaseButton3 button-name="Update Me3" @updateMe="updateMe3()" />
      <BaseButton3 button-name="Update Me4" @updateMe="updateMe4($event)" />
      <BaseButton3
        button-name="Update Me5"
        @updateMe="updateMe5($event, 999)"
      />
      <BaseButton3
        button-name="Update Me6"
        @updateMe="updateMe6(999, $event)"
      />
      <BaseButton3 button-name="Update Me7" @updateMe="updateMe7" />
      <BaseButton3 button-name="Update Me8" @updateMe="updateMe8" />
      <BaseButton3 button-name="Update Me9" @updateMe="updateMe9()" />
      <BaseButton3 button-name="Update Me10" @updateMe="updateMe10($event)" />
      <BaseButton3
        button-name="Update Me11"
        @updateMe="updateMe11($event, 200)"
      />
    </div>
  </div>
</template>

<style scoped></style>
