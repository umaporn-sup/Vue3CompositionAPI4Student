<script setup>
import { ref, onBeforeMount } from 'vue'
import NoteList from './components/NoteList-G3.vue'
import CreateEditNote from './components/CreateEditNote.vue'
const notes = ref([])
// GET
const getNotes = async () => {
  const res = await fetch('http://localhost:5000/notes')
  if (res.status === 200) {
    notes.value = await res.json()
    console.log(notes.value)
  } else console.log('error, cannot get data')
}
onBeforeMount(async () => {
  await getNotes()
})

// DELETE
const removeNote = async (deleteNoteId) => {
  console.log(deleteNoteId)
  const res = await fetch(`http://localhost:5000/notes/${deleteNoteId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    notes.value = notes.value.filter((note) => note.id !== deleteNoteId)
    console.log('deleted successfully')
  } else console.log('error, cannot delete data')
}
// POST
const createNewNote = async (newNote) => {
  console.log(newNote)
  const res = await fetch('http://localhost:5000/notes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ noteDetail: newNote })
  })
  if (res.status === 201) {
    const addedNote = await res.json()
    notes.value.push(addedNote)
    console.log('added sucessfully')
  } else console.log('error, cannot be added')
}

// PUT
const editingNote = ref({})
const toEditMode = (editNote) => {
  console.log(editNote)
  editingNote.value = editNote
}
const updateNote = async (replaceNote) => {
  const res = await fetch(`http://localhost:5000/notes/${replaceNote.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      noteDetail: replaceNote.noteDetail
    })
  })
  if (res.status === 200) {
    const editedNote = await res.json()
    notes.value = notes.value.map((note) =>
      note.id === editedNote.id
        ? { ...note, noteDetail: editedNote.noteDetail }
        : note
    )
    console.log('edited successfully')
  } else console.log('error, cannot be added')

  editingNote.value = {}
}
</script>

<template>
  <div>
    <CreateEditNote
      @createNote="createNewNote"
      :currentNote="editingNote"
      @updateNote="updateNote"
    />
    <NoteList :notes="notes" @deleteNote="removeNote" @editNote="toEditMode" />
  </div>
</template>

<style></style>
