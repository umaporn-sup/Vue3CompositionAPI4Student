<script setup>
//on created
import IconFavorite from './components/Icons/IconFavorite.vue'
import ListItems from './components/ListItems-G3.vue'
import { ref } from 'vue'
const products = [
  { id: '001', name: 'books' },
  { id: '002', name: 'pen' },
  { id: '003', name: 'mouse' },
  { id: '004', name: 'keyboard' }
]
const fruits = ['orange', 'apple', 'mango', 'cherry']
const currentStatus = ref('NONE')
const updateStatus = (status) => (currentStatus.value = status)
</script>

<template>
  <div>
    <IconFavorite />My Favorite
    <div>
      <ListItems
        :items="products"
        itemTopic="PRODUCTS"
        @confirm="updateStatus"
      />
      current status:{{ currentStatus }}
      <!-- <ListItems :items="fruits" /> -->
    </div>
  </div>
</template>

<style></style>
