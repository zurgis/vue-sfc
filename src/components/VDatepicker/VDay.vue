<script setup lang="ts">
import { Ref, ref } from 'vue'
import VButton from '../VButton.vue'

interface IDays {
  stamp: number
  day: number
  valid: boolean
  today: boolean
}

const props = defineProps<{
  type: 'single' | 'range'
  year: number
  month: number
}>()

const emit = defineEmits<{
  (e: 'click', selected: number[]): void
}>()

const weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const selected: Ref<number[]> = ref([])

function isToday(date: Date) {
  const today = new Date()

  return date.getFullYear() === today.getFullYear() 
    && date.getMonth() === today.getMonth()
    && date.getDay() === today.getDay()
}

function getDayCountOfMonth(year: number, month: number) {
  if ([3, 5, 8, 10].includes(month)) {
    return 30
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29
    }
    else {
      return 28
    }
  }

  return 31
}

function prevDays() {
  const first = new Date(props.year, props.month)

  if (first.getDay() === 1) return []

  const days = []
  const count = getDayCountOfMonth(props.year, props.month - 1)
  const date = new Date(props.year, props.month - 1, count)
  const nums = date.getDay()

  for (let i = 0; i < nums; i++) {
    const day = {
      stamp: + new Date(props.year, props.month - 1, count - i),
      day: count - i,
      valid: false,
      today: false
    }

    days.unshift(day)
  }

  return days
}

function currentDays() {
  const days = []
  const count = getDayCountOfMonth(props.year, props.month)

  for (let i = 0; i < count; i++) {
    const date = new Date(props.year, props.month, i + 1)

    const day = {
      stamp: + date,
      day: i + 1,
      valid: true,
      today: isToday(date)
    }

    days.push(day)
  }
  
  return days
}

function nextDays() {
  
  function getRemain() {
    if (first.getDay() === 0 && last.getDay() === 6 && count === 28) {
      return 14 - last.getDay()
    }

    if (
      (first.getDay() === 5 || first.getDay() === 6) && count === 31 || 
      first.getDay() === 0 && (count === 30 || 31) ||
      first.getDay() === 6 && count === 30
    ) {
      return 7 - last.getDay()
    }

    return 14 - last.getDay()
  }

  const days = []
  const count = getDayCountOfMonth(props.year, props.month)
  const first = new Date(props.year, props.month)
  const last = new Date(props.year, props.month, count)

  const remain = getRemain()

  for (let i = 0; i < remain; i++) {
    const day = {
      stamp: + new Date(props.year, props.month + 1, i + 1),
      day: i + 1,
      valid: false,
      today: false
    }

    days.push(day)
  }

  return days
}

function getDays() {
  const days: Array<IDays> = []

  return days.concat(prevDays()).concat(currentDays()).concat(nextDays())
}

function click(stamp: number) {
  if (props.type === 'single') {
    selected.value[0] = stamp
  }
  else if (props.type === 'range') {
    if (selected.value.length === 2) {
      selected.value = []
    }

    selected.value.push(stamp)
  }

  emit('click', selected.value)
}
</script>

<template>
  <div class="day">
    <div
      class="weeks"
      v-for="item in weeks"
    >
      {{ item }}
    </div>

    <VButton 
      class="days"
      v-for="item in getDays()"
      :appearance="'flat'"
      :value="String(item.day)"
      @click="click(item.stamp)"
    />
  </div>
</template>

<style lang="scss" scoped>
.day {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  >.weeks {
    height: 25px;
    width: 25px;
    flex-grow: 1;
    font-size: 12px;
    font-weight: bold;
    color: #0000006d;
  }

  >.days {
    height: 25px;
    width: 25px;
    flex-grow: 1;
  }
}
</style>
