<script setup>
import { ref, onBeforeMount } from 'vue'
import CreateEditNote from './components/CreateEditNote.vue'
import NoteList from './components/NoteList.vue'
const notes = ref([])
// GET
onBeforeMount(async () => {
  await getNotes()
  console.log(notes.value)
})

const getNotes = async () => {
  const res = await fetch('http://localhost:5000/notes')
  if (res.status === 200) {
    notes.value = await res.json()
    console.log(notes.value)
    return notes.value
  } else console.log('error, cannot get notes')
}

//DELETE
const removeNote = async (removeNoteId) => {
  const res = await fetch(`http://localhost:5000/notes/${removeNoteId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    notes.value = notes.value.filter((note) => note.id !== removeNoteId)
    console.log('deleted successfullly')
  } else console.log('error, cannot delete')
}

// CREATE
const createNewNote = async (newNote) => {
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

    console.log('created successfully')
  } else console.log('error, cannot create')
}
// EDIT
const editingNote = ref({})

const toEditingMode = (editNote) => {
  editingNote.value = editNote
  console.log(editingNote.value)
}
const modifyNote = async (replaceNote) => {
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
    const modifyNote = await res.json()
    notes.value = notes.value.map((note) =>
      note.id === modifyNote.id
        ? { ...note, noteDetail: modifyNote.noteDetail }
        : note
    )

    console.log('edited successfully')
    editingNote.value = {}
  } else console.log('error, cannot edit')
}
</script>

<template>
  <div>
    <CreateEditNote
      @createNote="createNewNote"
      :currentNote="editingNote"
      @updateNote="modifyNote"
    />
    <NoteList
      :notes="notes"
      @deleteNote="removeNote"
      @editNote="toEditingMode"
    />
  </div>
</template>

<style></style>
