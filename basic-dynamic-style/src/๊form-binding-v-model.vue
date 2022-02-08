<script setup>
console.clear()
import { ref } from 'vue'
const suggestion = ref('')
const favorColor = ref('')
const agree = ref(false)
const jobs = ref([])
const food = ref('')
const activities = ref([])
</script>

<template>
  <div>
    <div>
      suggestion
      <textarea
        v-model="suggestion"
        cols="30"
        rows="10"
        placeholder="type your suggestion here"
      ></textarea>
      <p>{{ suggestion }}</p>
    </div>
    <div>
      <input type="radio" value="RED" v-model="favorColor" />
      <label>Red</label>
      <input type="radio" value="GREEN" v-model="favorColor" />
      <label>Green</label>
      <p>{{ favorColor }}</p>
    </div>
    <div>
      <input type="checkbox" v-model="agree" />
      <label>I agree</label>
      <p>{{ agree }}</p>
    </div>
    <div>
      <input type="checkbox" value="FRONTEND" v-model="jobs" />
      <label>frontend</label>
      <input type="checkbox" value="BACKEND" v-model="jobs" />
      <label>backend</label>
      <input type="checkbox" value="DEVOPS" v-model="jobs" />
      <label>devops</label>
      <p>{{ jobs }}</p>
    </div>
    <div>
      <select v-model="food">
        <option value="PIZZA">Pizza</option>
        <option value="SOUP">Soup</option>
        <option value="PASTA">Pasta</option>
      </select>
      <p>{{ food }}</p>
    </div>

    <div>
      <select v-model="activities" multiple>
        <option value="SLEEP">Sleep</option>
        <option value="READING BOOK">Reading Book</option>
        <option value="WATCH MOVIES">Watch Movies</option>
      </select>
      <p>{{ activities }}</p>
    </div>
  </div>
</template>

<style></style>
