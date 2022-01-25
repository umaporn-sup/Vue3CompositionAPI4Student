<script setup>
const subjects = ['INT201', 'INT202', 'INT203', 'INT204']
const product = {
  productId: 111,
  productName: 'Computer',
  productPrice: 50000
}
</script>

<template>
  <ul>
    <li v-for="(subject, index) in subjects" :key="index">
      index {{ index }}-{{ subject }}
    </li>
  </ul>

  <ul>
    <li v-for="(value, name, index) in product" :key="product.productId">
      product id (key) {{ product.productId }} index {{ index }}-{{ name }}:
      {{ value }}
    </li>
  </ul>
</template>

<style></style>
