<script setup lang="ts">
import { computed } from 'vue'
import arrowLeftImg from './icons/arrow_left.svg'
import arrowRightImg from './icons/arrow_right.svg'
import VButton from '../VButton.vue'

const props = defineProps<{
  count: number 
  perPage: number
}>()

const icons = {
  left: { size: "xs" as const, src: arrowLeftImg },
  right: { size: "xs" as const, src: arrowRightImg }
}

const ellipsis = '...'

const page = 9

const range = computed(() => {
  if (props.count <= 0) return []

  const even = props.count % 2 === 0 // false
  const middle = even ? props.count / 2 : Math.floor(props.count / 2) // 7
  const left = even ? middle : middle + 1 // 8
  const right = props.count - middle // 8

  if (left - page >= 0) {
    return [Array.from({ length: 3 }, (v: number = 1, k) => v + k), ellipsis, props.count]
  } else if (page - right >= 0) {
    const rangeStart = props.count - 2
    return [1, ellipsis, Array.from({ length: 3 }, (v: number = rangeStart, k) => v + k)]
  } else {
    const rangeLength = Math.max(1, 3 - 3)
    console.info(rangeLength)
    const rangeStart = rangeLength === 1 ? props.count : props.count - Math.ceil(rangeLength / 2) + 1

    return [1, ellipsis, Array.from({ length: rangeLength }, (v: number = rangeStart, k) => v + k), ellipsis, props.count]
  }
})
</script>

<template>
  <div class="pagination">
    <VButton 
      :appearance="'flat'"
      :icon="icons.left"
    />

    <VButton 
      v-for="item in range"
      :appearance="'flat'"
      :value="String(item)"
    />

    <VButton 
      :appearance="'flat'"
      :icon="icons.right"
    />
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: row;
}
</style>
