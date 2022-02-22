<script setup>
import { ref } from 'vue'
const isError = ref(false)
const randNumbers = ref([])
const bingoSheet = ref([0, 0, 0, 0, 0, 0, 0, 0, 0])
// generates random number in range (1-99)
const generateNumber = () => {
  isError.value = false
  let duplicate = false
  const rand = Math.floor(Math.random() * 99 + 1) //1-99
  duplicate = randNumbers.value.some((randNumber) => randNumber === rand)
  duplicate ? generateNumber() : randNumbers.value.push(rand)
}
const showNumber = (pos) => {
  bingoSheet.value[pos] = randNumbers.value[randNumbers.value.length - 1]
}
const useNumberInBingo = (randNumber) => {
  if (bingoSheet.value.some((cell) => cell === randNumber)) isError.value = true
  else isError.value = false
}
</script>

<template>
  <div class="top-container">
    <div class="action-button">
      <button @click="generateNumber">Generate New Number</button>
      <button>Reset</button>
    </div>
    <div class="error-message">
      <!-- show error message when a user adding the same number in the bingo sheet -->
      <p v-show="isError">Sorry, your number has already used in bingo sheet</p>
    </div>
    <div class="grid-container">
      <div class="grid-item" v-for="(cell, index) in bingoSheet" :key="index">
        <!-- show bingo 3 rows x 3 cols here -->
        <button
          v-if="cell === 0"
          :disabled="randNumbers.length === 0"
          @click="showNumber(index)"
        >
          Add Number
        </button>
        <span v-else>{{ cell }}</span>
      </div>
    </div>
    <div class="generate-number">
      <!-- show the list of generated number here -->
      <ul>
        <li v-for="(randNumber, index) in randNumbers" :key="index">
          <span
            :style="
              useNumberInBingo(randNumber)
                ? { color: 'red', 'text-decoration': 'line-through' }
                : ''
            "
          >
            Generate Number# {{ index + 1 }}: {{ randNumber }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.top-container {
  width: 330px;
}
.action-button {
  padding: 10px;
  display: flex;
  gap: 5px;
}
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 80px 80px 80px;
  column-gap: 5px;
  row-gap: 5px;
  background-color: green;
  padding: 10px;
}
.grid-item {
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.generate-number {
  font-size: 20px;
}
.error-message {
  height: 40px;
  color: red;
}
</style>
