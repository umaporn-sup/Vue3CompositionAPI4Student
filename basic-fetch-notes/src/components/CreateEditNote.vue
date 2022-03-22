<script setup>
import { ref, computed } from 'vue'
defineEmits(['createNote', 'updateNote'])
const props = defineProps({
  currentNote: {
    type: Object,
    default: {}
  }
})
console.log(props.currentNote)

const newNote = computed(() => {
  return { id: props.currentNote.id, noteDetail: props.currentNote.noteDetail }
})
console.log(newNote.value)
// const newNote = ref('')
</script>

<template>
  <div>
    <h2>Create/Edit Note</h2>
    Note Detail <input type="text" v-model="newNote.noteDetail" />
    <button v-if="newNote.id > 0" @click="$emit('updateNote', newNote)">
      Update
    </button>
    <button v-else @click="$emit('createNote', newNote.noteDetail)">
      Create
    </button>
  </div>
</template>

<style></style>
