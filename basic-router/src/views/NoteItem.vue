<script setup>
// useRoute to get params
import { useRoute, useRouter } from 'vue-router'
let { params } = useRoute()
console.log(params.noteId)

// useRouter to get router object
const appRouter = useRouter()
const goBack = () => appRouter.go(-1)

const goAboutUs = () => appRouter.push({ name: 'About' })
</script>

<template>
  <div>
    <h1>NoteItem</h1>
    <p>your selected note is {{ this.$route.params.noteId }}</p>
    <button @click="goBack">Back</button>
    <button @click="goAboutUs">AboutUs</button>
  </div>
</template>

<style></style>
