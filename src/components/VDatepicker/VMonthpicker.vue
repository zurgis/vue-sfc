<script setup lang="ts">
import { ref } from 'vue'
import arrowLeftImg from './icons/arrow_left.svg'
import arrowRightImg from './icons/arrow_right.svg'
import VDatepickerInput from './VDatepickerInput.vue'
import VButton from '../VButton.vue'
import VMonth from './VMonth.vue'

const props = defineProps<{
  year: number
  month: number
}>()

const emit = defineEmits<{
  (e: 'click', selected: number): void
}>()

const icons = {
  left: { size: "lg" as const, src: arrowLeftImg },
  right: { size: "lg" as const, src: arrowRightImg }
}

const isOpened = ref(false)
const date = ref()

const year = ref(props.year)
const month = ref(props.month)

function toggle() {
  isOpened.value = !isOpened.value
}

function prev() {
  year.value -= 1
}

function next() {
  year.value += 1
}

function click(selected: number) {
  emit('click', selected)
}
</script>

<template>
  <div class="monthpicker-wrapper">
    <VDatepickerInput 
      :value="date"
      @click="toggle" 
    />

    <div 
      class="monthpicker"
      v-show="isOpened"
    >
      <div class="monthpicker-content">
        <div class="monthpicker-header">
          <VButton 
            :appearance="'icon'"
            :icon="icons.left"
            @click="prev"
          />

          <div>
            {{ year }}
          </div>

          <VButton 
            :appearance="'icon'"
            :icon="icons.right"
            @click="next"
          />
        </div>

        <VMonth 
          class="monthpicker-body"
          :month="month"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.monthpicker-wrapper {
  position: relative;
}

.monthpicker {
  margin-top: 10px;
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

    >.monthpicker-header {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: bold;
    }

    >.monthpicker-body {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>