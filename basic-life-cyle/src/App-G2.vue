<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import NumUpdate from './components/NumUpdate.vue'
onMounted(() => {
  alert(`on mounted: ${num.value}`) //5
  num.value = 10
})
onBeforeMount(() => {
  alert(`on before mount: ${num.value}`)
  num.value = 5
})
onBeforeUpdate(() => {
  num.value = num.value > 5 ? 1 : num.value
  alert(`on before update: ${num.value}, ${isShow.value}`)
})
onUpdated(() => {
  alert(`on updated: ${num.value}, ${isShow.value}`)
})
const num = ref(1)
alert(`on created: ${num.value}`)
const isShow = ref(true)
const unShow = () => (isShow.value = false)
</script>

<template>
  <div>
    num: {{ num }}
    <button @click="num = num + 1">+</button>
    <div>
      <NumUpdate :currentNum="num" v-if="isShow" />
      <button @click="unShow">Not Show Current Num</button>
    </div>
  </div>
</template>

<style></style>
