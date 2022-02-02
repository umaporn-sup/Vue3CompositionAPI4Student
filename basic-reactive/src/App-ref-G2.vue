<script setup>
import { ref } from 'vue'
console.clear()
const hasError = ref(false)
console.log(hasError.value)
hasError.value = !hasError.value
console.log(hasError.value)

const student = ref({ studentId: 1234, studentName: 'Thiti' })
console.log(student.value)
console.log(student.value.studentName)

const ids = ref([111, 121, 131, 142])
console.log(ids.value)
console.log(ids.value[1])

function filterId(id) {
  return id > 120
}
const idsMorethan120 = ids.value.filter((id) => id > 120)
console.log(idsMorethan120)
</script>

<template>
  <p>hasError:{{ hasError }}</p>
  <p>student: {{ student }}</p>
  <p>student id: {{ student.studentId }}</p>
  <p>ids:{{ ids }}</p>
  <p>ids[0]: {{ ids[0] }}</p>
</template>

<style></style>
