<script setup>
const depositAmt = 1000
// <=100 , interest 5%
// <=500, interest 10%
// >500, interest 15%
</script>

<template>
  <p>Deposit Amount: {{ depositAmt }}</p>
  <p v-if="depositAmt <= 100">Interest: {{ depositAmt * 0.05 }}</p>
  <p v-else-if="depositAmt <= 500">Interest: {{ depositAmt * 0.1 }}</p>
  <p v-else>Interest: {{ depositAmt * 0.15 }}</p>
</template>

<style></style>
