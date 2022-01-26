<script setup>
const myAccount = {
  accountId: 12345,
  accountName: 'Rapeepat Klamjeen',
  balance: 10000
}
</script>

<template>
  <ul>
    <!-- <li v-for="(value, propKey) in myAccount" :key="myAccount.accountId"> -->
    <li v-for="(value, propKey, index) in myAccount" :key="index">
      {{ index }}- {{ propKey }}: {{ value }}
    </li>
  </ul>
</template>

<style></style>
