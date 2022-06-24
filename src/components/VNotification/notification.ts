import { defineStore } from "pinia"

export interface INotification {
  type: string
  duration?: number
  title?: string
  message: string
  id?: number
}

interface IState {
  id: number
  items: Array<INotification>
}

export const useNotificationStore = defineStore('notification', {
  state: (): IState => ({
    id: 0,
    items: []
  }),

  actions: {
    increaseId() {
      this.id++
    },

    addNotification(item: INotification) {
      item.id = this.id
      item.duration = item.duration || 3000

      if (this.items.length === 6) {
        this.removeNotification(this.items[0])
      }

      this.items.push(item)
      this.notificationDuration(item)
      this.increaseId()
    },

    removeNotification(item: INotification) {
      this.items = this.items.filter(notification => notification.id !== item.id)
    },

    notificationDuration(item: INotification) {
      setTimeout(() => this.removeNotification(item), item.duration)
    }
  }
})
