<script setup>
// local registration
import BaseButton from './components/G3/BaseButton.vue'
import BaseButton2 from './components/G3/BaseButton2.vue'
import BaseButton3 from './components/G3/BaseButton3.vue'
console.clear()
const testMe1 = () => console.log('test me 1')
const testMe2 = (e) => console.log('test me 2', e)

const testMe3 = (e) => console.log('test me 3', e)
const testMe4 = (a) => console.log('test me 4', a)
const testMe5 = (e, n) => console.log('test me 5', e, n)
const testMe6 = (e, n) => console.log('test me 6', e, n)

const updateMe1 = (e) => console.log('update me 1', e)
const updateMe2 = (e, a, b) => console.log('update me 1', e, a, b)
const updateMe3 = (e) => console.log('update me 1', e)
const updateMe4 = (e, a, b) => console.log('update me 1', e, a, b)
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
      <BaseButton2 button-name="Like Me5" @likeMe="testMe5($event, true)" />
      <BaseButton2 button-name="Like Me6" @likeMe="testMe6(404, $event)" />
    </div>
    <div>
      <!-- @click="$emit('updateMe', 'UPDATE_ME')" -->
      <BaseButton3 button-name="Update Me1" @updateMe="updateMe1" />
      <BaseButton3 button-name="Update Me2" @updateMe="updateMe1()" />
      <BaseButton3 button-name="Update Me3" @updateMe="updateMe1(e)" />
      <BaseButton3 button-name="Update Me4" @updateMe="updateMe1($event)" />

      <!-- @click="$emit('updateMe', 'UPDATE_ME', 200, true)" -->
      <BaseButton3 button-name="Update Me5" @updateMe="updateMe2" />
      <BaseButton3 button-name="Update Me6" @updateMe="updateMe2()" />
      <BaseButton3 button-name="Update Me7" @updateMe="updateMe3($event)" />
      <BaseButton3
        button-name="Update Me8"
        @updateMe="updateMe4($event, 'Done', 500)"
      />
    </div>
  </div>
</template>

<style scoped></style>
