<script setup>
import { ref } from 'vue'
const unKnownImg = ref('images/gitrepo-project1.jpg')
</script>

<template>
  <div>
    <h2>My dynamic image</h2>
    <img :src="unKnownImg" />
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'MyPortfolio' }">My Portfolio</router-link>
    </div>
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<style>
a {
  color: aqua;
}
.router-link-active {
  color: orange;
}
</style>
