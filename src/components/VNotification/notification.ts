import { defineStore } from "pinia"

export interface Notification {
  type: string
  duration?: number
  title?: string
  message: string
  id?: number
}

interface State {
  id: number
  items: Array<Notification>
}

export const useNotificationStore = defineStore('notification', {
  state: (): State => ({
    id: 0,
    items: []
  }),

  actions: {
    increaseId() {
      this.id++
    },

    addNotification(item: Notification) {
      item.id = this.id
      this.items.push(item)
      this.timeoutNotification(item)
      this.increaseId()
    },

    removeNotification(item: Notification) {
      const index = this.items.findIndex(notification => notification.id === item.id)
      this.items.splice(index, 1)
    },

    timeoutNotification(item: Notification) {
      setTimeout(() => this.removeNotification(item), item.duration)
    }
  }
})
