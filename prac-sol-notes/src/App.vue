<script setup>
import { ref, computed } from 'vue'
const newNote = ref('')
const notes = ref([])
const keywords = ref('')
const filterNotes = computed(() =>
  notes.value.filter((note) =>
    note.toLowerCase().includes(keywords.value.toLowerCase())
  )
)
const addNote = () => {
  notes.value.push(newNote.value)
  console.log(notes.value)
}
const colorMe = (myNote) => {
  console.log(myNote)
}
</script>

<template>
  <div>
    <div v-show="notes.length > 0">
      Filter Notes:
      <input type="text" v-model="keywords" />
      <ul>
        <li v-for="note in filterNotes">
          {{ note }}
          <button @click="colorMe(note)">Color Me</button>
        </li>
      </ul>
    </div>
    New note:
    <input type="text" v-model="newNote" />
    <button @click="addNote">Add Note</button>
  </div>
</template>

<style></style>
