<script setup>
defineEmits(['confirm'])
defineProps({
  items: {
    type: Array,
    require: true
  },
  itemTopic: {
    type: String,
    default: 'Items'
  }
})
</script>

<template>
  <div>
    <div>
      <h2>{{ itemTopic }}</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div>
      <button @click="$emit('confirm', 'USER_CONFIRM')">Confirm</button>
    </div>
  </div>
</template>

<style></style>
