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
      item.duration = item.duration || 3000

      if (this.items.length === 6) {
        this.removeNotification(this.items[0])
      }

      this.items.push(item)
      this.notificationDuration(item)
      this.increaseId()
    },

    removeNotification(item: Notification) {
      this.items = this.items.filter(notification => notification.id !== item.id)
    },

    notificationDuration(item: Notification) {
      setTimeout(() => this.removeNotification(item), item.duration)
    }
  }
})
