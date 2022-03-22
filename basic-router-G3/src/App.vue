<script setup></script>

<template>
  <div>
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'Profile' }">My Profile</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
a {
  color: gray;
}
.router-link-active {
  color: orange;
}
</style>
