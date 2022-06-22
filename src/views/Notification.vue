<script setup lang="ts">
import VNotification from '../components/VNotification/VNotification.vue'
import { useNotificationStore } from '../components/VNotification/notification'

function showSuccess() {
  useNotificationStore().addNotification({
    type: 'success', 
    //duration: 5000, 
    title: 'Success', 
    message: 'Success Notification'
  })
}

function showWarning() {
  useNotificationStore().addNotification({
    type: 'warning', 
    duration: 5000, 
    title: 'Warning', 
    message: 'Warning Notification' 
  })
}

function showError() {
  useNotificationStore().addNotification({
    type: 'error', 
    duration: 5000, 
    title: 'Error', 
    message: 'Error Notification' 
  })
}
</script>

<template>
  <div class="notification">
    <VNotification />
  </div>
  
  <div class="notification-buttons">
    <button type="button" @click="showSuccess">Success Notification</button>
    <button type="button" @click="showWarning">Warning Notification</button>
    <button type="button" @click="showError">Error Notification</button>
  </div>
</template>

<style lang="scss">
.notification {
  >.notification-wrapper {
    top: 50px;
    left: calc(100% - 420px);
  }
}

.notification-buttons {
  button {
    display: block;
    margin-top: 10px;
    width: 100px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
