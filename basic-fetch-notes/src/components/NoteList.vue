<script setup>
defineEmits(['deleteNote', 'editNote'])
defineProps({
  notes: {
    type: Array,
    require: true
  }
})
</script>

<template>
  <div>
    <h2>Note List</h2>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        Note Id:{{ note.id }}, Note Detail: {{ note.noteDetail }}
        <button @click="$emit('editNote', note)">Edit</button>
        <button @click="$emit('deleteNote', note.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style></style>
