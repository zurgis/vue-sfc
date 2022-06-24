<script setup lang="ts">
import { useNotificationStore } from '../components/VNotification/notification'
import VNotification from '../components/VNotification/VNotification.vue'
import VButton from '../components/VButton.vue'

function showSuccess() {
  useNotificationStore().addNotification({
    type: 'success', 
    duration: 50000, 
    title: 'Success', 
    message: 'Success Notification'
  })
}

function showWarning() {
  useNotificationStore().addNotification({
    type: 'warning', 
    duration: 50000, 
    message: 'Warning Notification' 
  })
}

function showError() {
  useNotificationStore().addNotification({
    type: 'error', 
    duration: 50000, 
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
    <VButton value="Success Notification" @click="showSuccess"/>
    <VButton value="Warning Notification" @click="showWarning"/>
    <VButton value="Error Notification" @click="showError"/>
  </div>
</template>

<style lang="scss">
.notification {
  >.notification-wrapper {
    top: 50px;
    left: calc(100% - 320px);
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
