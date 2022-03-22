<script setup></script>

<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link>|
    <router-link :to="{ name: 'About' }">About Us</router-link>
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<style scoped>
a {
  color: aqua;
}
.router-link-active {
  color: orange;
}
</style>
