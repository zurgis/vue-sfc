<script setup lang="ts">
import { computed } from 'vue'
import { Notification, useNotificationStore } from './notification'

const notificationStore = useNotificationStore()

const items = computed(() => notificationStore.$state.items)

function close(item: Notification) {
  notificationStore.removeNotification(item)
}
</script>

<template>
  <div class="notification-wrapper">
    <TransitionGroup name="notification">
      <div 
        class="notification" 
        v-for="item in items"
        :key="item.id"
        :class="item.type"
      >
        <div class="notification-title">
          {{ item.title }}
        </div>

        <div class="notification-content">
          {{ item.message }}
        </div>

        <button
          type="button" 
          class="notification-close" 
          @click="close(item)"
        >
          Close
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>

.notification-wrapper {
  position: fixed;
  margin: 0;
  padding: 0;
}

.notification {
  width: 400px;
  border-radius: 10px;
  margin-top: 10px;

  &.success {
    background-color: #c0e2b7;
    box-shadow: 0 0 3px #c0e2b7;
  }

  &.warning {
    background-color: #e2e1b7;
    box-shadow: 0 0 3px #e2e1b7;
  }

  &.error {
    background-color: #e2b7b7;
    box-shadow: 0 0 3px #e2b7b7;
  }

  &-enter-from, &-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  &-enter-active, &-leave-active {
    transition: all 0.5s ease;
  }

  &-leave-active {
    position: absolute;
  }
}
</style>
