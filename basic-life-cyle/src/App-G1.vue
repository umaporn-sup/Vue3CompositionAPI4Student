<script setup>
//onCreated lifecycle
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import NumUpdate from './components/NumUpdate-G1.vue'
onMounted(() => alert(`on mounted,${num.value}`))
onBeforeMount(() => alert(`on before mount,${num.value}`))

onBeforeUpdate(() => {
  num.value = num.value > 2 ? 1 : num.value
  alert(`on before update,${num.value}, ${hasUpdate.value}`)
})
onUpdated(() => alert(`on updated,${num.value}, ${hasUpdate.value}`))

const num = ref(1)
const hasUpdate = ref(true)
const closeUpdate = () => (hasUpdate.value = false)
</script>

<template>
  <div>
    <div>Num: {{ num }}</div>

    <div>
      <button @click="num = num + 1">+</button>
    </div>
    <div>
      <NumUpdate :currentNum="num" v-if="hasUpdate" />
      <button @click="closeUpdate">Not Allow to Update</button>
    </div>
  </div>
</template>

<style></style>
