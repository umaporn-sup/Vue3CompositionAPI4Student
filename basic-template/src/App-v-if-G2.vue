<script setup>
const depositAmt = 50000
// const interest = 0.1

// < 10000 = no interest
// 10000-49999 =10%
// 50000-99999 =20%
// >=100000 =25%
</script>

<template>
  <p>Deposit Amount: {{ depositAmt }}</p>
  <p v-if="depositAmt < 10000">Interest: 0</p>
  <p v-else-if="depositAmt <= 49999">Interest: {{ depositAmt * 0.1 }}</p>
  <p v-else-if="depositAmt <= 99999">Interest: {{ depositAmt * 0.2 }}</p>
  <p v-else>Interest: {{ depositAmt * 0.25 }}</p>
</template>

<style></style>
