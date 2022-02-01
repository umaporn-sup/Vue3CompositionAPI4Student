<script setup>
//1.function declaration
function printMessage() {
  console.log('Hello, function')
}
//call/execute function
printMessage()

// 2. function expression
const showMessage = function (msg) {
  console.log(`Hello,${msg}`)
}
showMessage('this is a function expression')

//3. arrow function
// arrow function expression
const showMessage2 = (msg) => console.log(`Hello ,${msg}`)
showMessage2('Show Message 2')
</script>

<template></template>

<style></style>
