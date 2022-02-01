<script setup>
import { reactive } from 'vue'
let myArray = ['value1', 'value2', 'value3', 'value3']

// Use the regular Set constructor to transform an Array into a Set
const mySet = reactive(new Set(myArray))
console.log(mySet)

const map1 = new Map()

map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)
map1.set('d', 4)
const myMap1 = reactive(map1)
setTimeout(() => {
  myMap1.set('z', 100)
  console.log(myMap1)
}, 1000)

const map2 = new Map()
map2.set('good', 10)
map2.set('fair', 5)
setTimeout(() => {
  map2.set('poor', 1)
  console.log(map2)
}, 1000)
</script>

<template>
  <p>My Map: {{ myMap1 }}</p>
  <p>Map2: {{ map2 }}</p>
</template>

<style></style>
