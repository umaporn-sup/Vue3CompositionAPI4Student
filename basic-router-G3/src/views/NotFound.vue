<script setup>
import { useRouter } from 'vue-router'
const appRouter = useRouter()
const closeModal = () => appRouter.push({ name: 'Home' })
</script>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header"><h3>Page Not Found</h3></div>
        <div class="modal-body">Please try again!</div>
        <div class="modal-button">
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-header h3 {
  margin-top: 0;
  color: red;
}

.modal-body {
  margin: 20px 0;
}
.modal-button {
  display: flex;
  justify-content: end;
}
</style>
