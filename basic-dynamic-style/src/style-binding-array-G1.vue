<script setup>
const isItalic = true
const redText = 'color:red'
const italicText = 'font-style:italic'
</script>

<template>
  <p :style="[redText, isItalic ? italicText : '']">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil suscipit
    corrupti neque minima, corporis ducimus explicabo molestias veniam eius,
    soluta laborum. Odio et est repellendus fugiat. Dignissimos at quo
    inventore.
  </p>
</template>

<style></style>
