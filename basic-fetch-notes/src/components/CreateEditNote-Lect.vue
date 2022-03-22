<script setup>
import { ref, computed, onUpdated } from 'vue'
defineEmits(['createNote', 'updateNote'])
const props = defineProps({
  currentNote: {
    type: Object,
    default: {}
  }
})

onUpdated(() => {
  console.log(props.currentNote)
})
const newNote = computed(() => {
  console.log(props.currentNote)
  return {
    id: props.currentNote.id,
    noteDetail: props.currentNote.noteDetail
  }
})
</script>

<template>
  <div>
    <h2 v-show="currentNote.id > 0">Edit Note</h2>

    <h2 v-show="currentNote.id === undefined">Create Note</h2>

    Note Detail: <input type="text" v-model="newNote.noteDetail" />
    <button v-if="newNote.id > 0" @click="$emit('updateNote', newNote)">
      Save
    </button>
    <button v-else @click="$emit('createNote', newNote.noteDetail)">
      Create
    </button>
  </div>
</template>

<style></style>
