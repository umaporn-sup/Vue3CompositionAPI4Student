<script setup>
defineEmits(['confirm'])
const props = defineProps({
  items: {
    type: Array,
    require: true
  }
})
console.log(props.items)
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <div>
      <button @click="$emit('confirm', 'USER_CONFIRM')">confirm</button>
    </div>
  </div>
</template>

<style></style>
