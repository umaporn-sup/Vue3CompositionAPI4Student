<script setup>
defineEmits(['clickMe'])
const prop = defineProps({
  buttonName: {
    type: String,
    require: true
  }
})
console.log(prop.buttonName)
</script>

<template>
  <button class="button-color" @click="$emit('clickMe')">
    {{ buttonName }}
  </button>
</template>

<style scoped>
.button-color {
  background-color: aqua;
}
</style>
