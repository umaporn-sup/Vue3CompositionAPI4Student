<script setup>
const accounts = [
  {
    name: 'salary',
    amount: 10000
  },
  {
    name: 'rent',
    amount: -2500
  },
  {
    name: 'parking fee',
    amount: 0
  },
  {
    name: 'car fuel',
    amount: -600
  },
  {
    name: 'commission',
    amount: 5500
  }
]
</script>

<template>
  <ul>
    <li v-for="account in accounts">
      <p v-if="account.amount !== 0">
        <span> {{ account.name }} </span>:
        <span
          :style="
            account.amount > 0
              ? 'background-color:green'
              : 'background-color:red'
          "
        >
          {{ account.amount }}</span
        >
      </p>
    </li>
  </ul>
  <p>
    Net Total:
    <!-- reduce is higher order function -->
    <!-- (total, account) => total + account.amount (arrow function syntax) -->
    {{ accounts.reduce((total, account) => total + account.amount, 0) }}
  </p>
  <!-- #round 1 (0, account#1) :   0+10000 
      #round 2 (10000, account#2): 10000+(-2500)
      #round 3(7500, account#3):....
  -->
</template>

<style></style>
