<script setup>
defineEmits(['confirm'])
defineProps({
  items: {
    type: [Array, Object],
    require: true
  }
})
</script>

<template>
  <div>
    <h2>Item List</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
    <div>
      <button @click="$emit('confirm', 'USER_CONFIRM')">Confirm</button>
    </div>
  </div>
</template>

<style></style>
