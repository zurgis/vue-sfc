<script setup lang="ts">
import { computed } from 'vue'
import { INotification, useNotificationStore } from './notification'
import closeImg from './icons/close.svg'
import VButton from '../VButton.vue'

const notificationStore = useNotificationStore()

const items = computed(() => notificationStore.$state.items)

function close(item: INotification) {
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
        <div class="notification-content">
          <div v-if="item.title" class="notification-title">
            {{ item.title }}
          </div>

          <div class="notification-body">
            {{ item.message }}
          </div>
        </div>

        <VButton 
          class="notification-close" 
          :icon=closeImg
          @click="close(item)"
        />
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border-radius: 10px;
  margin-top: 10px;

  .notification-content {
    margin: 5px 5px;
    width: calc(100% - 35px);
    text-align: center;
    word-wrap: break-word;
    font-size: small;

    >.notification-title {
      font-weight: bold;
    }
  }

  &.success {
    background-color: #c0e2b7;
    box-shadow: 0 0 3px #c0e2b7;

    .notification-title {
      border-bottom: 1px solid #9cc192;
    }
  }

  &.warning {
    background-color: #e2e1b7;
    box-shadow: 0 0 3px #e2e1b7;

    .notification-title {
      border-bottom: 1px solid #c1c192;
    }
  }

  &.error {
    background-color: #e2b7b7;
    box-shadow: 0 0 3px #e2b7b7;

    .notification-title {
      border-bottom: 1px solid #c19292;
    }
  }

  &-close {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    height: 20px;
    width: 20px;
    margin-right: 5px;

    &:hover {
      cursor: pointer;
    }

    :deep(.button-icon) {
      height: 12px;
      width: 12px;
    }
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
