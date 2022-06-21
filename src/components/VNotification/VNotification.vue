<script setup lang="ts">
import { Notification, useNotificationStore } from './notification'

const notificationStore = useNotificationStore()

const items = notificationStore.$state.items

function close(item: Notification) {
  notificationStore.removeNotification(item)
}
</script>

<template>
  <div class="notification-wrapper">
    <div 
      class="notification" 
      v-for="item in items"
      :class="item.type"
    >
      <div class="notification-title">
        {{ item.title }}
      </div>

      <div class="notification-content">
        {{ item.message }}
      </div>

      <button type="button" @click="close(item)">Close</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.notification-wrapper {
  position: fixed;
  margin: 0;
  padding: 0;
  top: 50px;
  left: calc(100% - 400px);
}
.notification {
  width: 400px;
  border-radius: 10px;
  margin-top: 10px;

  &.success {
    background-color: #c0e2b7;
  }

  &.warning {
    background-color: #e2e1b7;
  }

  &.error {
    background-color: #e2b7b7;
  }
}
</style>
