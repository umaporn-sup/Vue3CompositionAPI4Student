<script setup>
//on created
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import NumUpdate from './components/NumUpdate-G3.vue'
onMounted(() => {
  // num.value = 5
  alert(`on mounted: ${num.value}`)
})
onBeforeMount(() => alert(`on before mount: ${num.value}`))
onBeforeUpdate(() => {
  num.value = num.value > 10 ? 0 : num.value
  alert(`on before update: ${num.value}`)
})
onUpdated(() => alert(`on update: ${num.value}`))
const num = ref(1)
alert(`on created: ${num.value} `)
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
