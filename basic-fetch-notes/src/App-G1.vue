<script setup>
import { ref, onBeforeMount } from 'vue'
import NoteList from './components/NoteList-G1.vue'
import CreateEditNote from './components/CreateEditNote-G1.vue'
const notes = ref([])
// GET method
const getNotes = async () => {
  const res = await fetch('http://localhost:5000/notes')
  if (res.status === 200) notes.value = await res.json()
  else console.log('not found')
}

onBeforeMount(async () => {
  await getNotes()
  console.log(notes.value)
})

// DELETE method
const removeNote = async (deleteNoteId) => {
  const res = await fetch(`http://localhost:5000/notes/${deleteNoteId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    notes.value = notes.value.filter((note) => note.id !== deleteNoteId)
    console.log('deleted successfully')
  } else console.log('error, cannot delete')
}

// CREATE method
const createNewNote = async (newNoteDetail) => {
  // console.log(newNote)
  const res = await fetch('http://localhost:5000/notes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      noteDetail: newNoteDetail
    })
  })
  if (res.status === 201) {
    const addedNote = await res.json()
    notes.value.push(addedNote)
    console.log('added successfully')
  } else {
    console.log('error, cannot add')
  }
}

// EDIT
const editingNote = ref({})
const toEditingMode = (editNote) => {
  editingNote.value = editNote
  console.log(editingNote.value)
}

const editNote = async (newNote) => {
  const res = await fetch(`http://localhost:5000/notes/${newNote.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      noteDetail: newNote.noteDetail
    })
  })
  if (res.status === 200) {
    const modifyData = await res.json()
    console.log(modifyData.id)
    notes.value = notes.value.map((note) =>
      note.id === modifyData.id
        ? { ...note, noteDetail: modifyData.noteDetail }
        : note
    )
    console.log('updated successfully')
  } else {
    console.log('error, cannot update')
  }
}
</script>

<template>
  <div>
    <CreateEditNote
      @createNote="createNewNote"
      :currentNote="editingNote"
      @updateNote="editNote"
    />
    <NoteList
      :notes="notes"
      @deleteNote="removeNote"
      @editNote="toEditingMode"
    />
  </div>
</template>

<style></style>
