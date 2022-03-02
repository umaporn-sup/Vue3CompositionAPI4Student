<script setup>
defineEmits(['updateMe'])
const prop = defineProps({
  buttonName: {
    type: String,
    // default: 'OK'
    require: true
  }
})
const num = 555
// console.log(prop.buttonName)
</script>

<template>
  <!-- for updateMe1, 2 -->
  <!-- <button class="button-color" @click="$emit('updateMe', false, 404, 'FAIL')">
    {{ buttonName }}
  </button> -->
  <!-- for updateMe 3 -->
  <!-- <button class="button-color" @click="$emit('updateMe', [false, 404, 'FAIL'])">
    {{ buttonName }}
  </button> -->
  <!-- for update 4, 5 -->
  <button
    class="button-color"
    @click="
      $emit('updateMe', { status: false, statusCode: 404, result: 'FAIL' })
    "
  >
    {{ buttonName }}
  </button>
</template>

<style scoped>
.button-color {
  background-color: burlywood;
}
</style>
