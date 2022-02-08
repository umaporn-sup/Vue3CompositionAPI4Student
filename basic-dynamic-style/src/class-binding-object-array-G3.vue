<script setup>
const isEmpty = false
const hasDecor = true
const isSucceed = false
const errorStyle = 'error-text'
const decorStyle = 'decor-text'
</script>

<template>
  <div>
    <!-- class attribute with object syntax -->
    <p :class="{ 'success-text': isSucceed }">
      this applied success-text class
    </p>
    <p :class="{ 'success-text': isSucceed, 'decor-text': hasDecor }">
      this applied success-text and class
    </p>
    <!-- class attribute with array syntax -->
    <p :class="[errorStyle, decorStyle]">
      This applied style stored in variable
    </p>
    <p :class="isSucceed ? 'success-text' : 'error-text'">
      This applied style under condition
    </p>
    <p :class="['decor-text', isSucceed ? 'success-text' : 'error-text']">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia amet
      aspernatur, quo inventore autem consequatur incidunt. Laudantium minus
      ipsam obcaecati dolorum deleniti reiciendis quibusdam architecto totam
      voluptatem incidunt! Voluptas!
    </p>
  </div>
</template>

<style>
.success-text {
  color: green;
}
.error-text {
  color: red;
  font-style: italic;
}
.warning-text {
  color: orange;
}
.decor-text {
  text-decoration: overline;
}
</style>
