<script setup lang="ts">
import { ref } from 'vue'
import arrowLeftImg from './icons/arrow_left.svg'
import arrowRightImg from './icons/arrow_right.svg'
import VDatepickerInput from './VDatepickerInput.vue'
import VButton from '../VButton.vue'
import VDay from './VDay.vue'

const props = defineProps<{
  type: 'single' | 'range'
  year: number
  month: number
}>()

const emit = defineEmits<{
  (e: 'click', selected: number[]): void
}>()

const icons = {
  left: { size: "lg" as const, src: arrowLeftImg },
  right: { size: "lg" as const, src: arrowRightImg }
}

const months = [
  'Январь', 'Февраль', 'Март', 
  'Апрель', 'Май', 'Июнь', 
  'Июль', 'Август', 'Сентябрь', 
  'Октябрь', 'Ноябрь', 'Декабрь'
]

const isOpened = ref(false)
const date = ref()

const year = ref(props.year)
const month = ref(props.month)
const prevMonth = ref(month.value - 1)
const nextMonth = ref(month.value + 1)

function toggle() {
  isOpened.value = !isOpened.value
}

function prev() {
  if (prevMonth.value === 0) {
    month.value = 0
    nextMonth.value = 1
    prevMonth.value = 11
  }
  else {
    month.value = prevMonth.value === 11 ? 11 : month.value - 1
    prevMonth.value = month.value - 1
    nextMonth.value = month.value === 11 ? 0 : month.value + 1

    if (prevMonth.value === 10) year.value -= 1
  }
}

function next() {
  if (nextMonth.value === 11) {
    month.value = 11
    nextMonth.value = 0
    prevMonth.value = 10
  }
  else {
    month.value = nextMonth.value === 0 ? 0 : month.value + 1
    prevMonth.value = month.value === 0 ? 11 : month.value - 1
    nextMonth.value = month.value + 1

    if (nextMonth.value === 1) year.value += 1
  }
}

function click(selected: number[]) {
  if (props.type === 'single') {
    const first = new Date(selected[0])

    date.value = `${first.getDate()}.${first.getMonth() + 1}.${first.getFullYear()}`
  }

  emit('click', selected)
}
</script>

<template>
  <div class="datepicker-wrapper">
    <VDatepickerInput 
      :value="date"
      @click="toggle" 
    />

    <div 
      class="datepicker"
      v-show="isOpened"
    >
      <div class="datepicker-content">
        <div class="datepicker-header">
          <VButton 
            :appearance="'icon'"
            :icon="icons.left"
            @click="prev"
          />

          <div>
            {{ months[month] }} {{ year }}
          </div>

          <VButton 
            :appearance="'icon'"
            :icon="icons.right"
            @click="next"
          />
        </div>

        <VDay 
          class="datepicker-body"
          :type="type"
          :year="year" 
          :month="month"
          @click="click"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.datepicker-wrapper {
  margin-bottom: 10px;
}

.datepicker {
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 210px;
  box-shadow: 0 .5px 1px #000000;
  border-radius: 5px;

  &-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;

    >.datepicker-header {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: bold;
    }

    >.datepicker-body {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>