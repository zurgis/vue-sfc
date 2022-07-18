<script setup lang="ts">
import { computed, ref } from 'vue'
import arrowLeftImg from './icons/arrow_left.svg'
import arrowRightImg from './icons/arrow_right.svg'
import VButton from '../VButton.vue'

interface IPages {
  [index: number]: {
    value: number
    selected: boolean
  } | {
    ellipsis: boolean
  }
}

const props = defineProps<{
  count: number
  perPage: number
  totalVisible?: number
}>()

const emit = defineEmits<{
  (e: 'click', value: number): void
}>()

const icons = {
  left: { size: "xs" as const, src: arrowLeftImg },
  right: { size: "xs" as const, src: arrowRightImg }
}

const length = Math.floor(props.count / props.perPage)
const totalVisible = props.totalVisible && props.totalVisible > 2 ? props.totalVisible : 3

const selected = ref(1)

const items = computed(() => {
  let pages: IPages = {}

  function addPage(index: number) {
    const page = {
      value: index + 1, 
      selected: index === (selected.value - 1)
    }

    pages[index] = page 
  }

  if (length <= totalVisible) {
    for (let index = 0; index < length; index++) {
      addPage(index)
    }
  } 
  else {
    const middle = Math.floor(totalVisible / 2)

    function setEllipsis(index: number) {
      const ellipsis = {
        ellipsis: true
      }

      pages[index] = ellipsis
    }

    // Add first page
    addPage(0)

    let left = 0
    if (selected.value - middle > 0) {
      left = selected.value - 1 - middle
    }

    let right = left + totalVisible - 1
    if (right >= length) {
      right = length - 1
      left = right - totalVisible + 1
    }

    if (left > 1) {
      setEllipsis(left - 1)
    }

    for (let index = left; index <= right && index < length - 1; index++) {
      addPage(index)
    }

    if (right + 1 < length - 1) {
      setEllipsis(right + 1)
    }

    // Add last page
    addPage(length - 1)
  }

  return pages
})

function handlePageSelected(index: number) {
  if (selected.value === index) return

  selected.value = index
  
  emit('click', selected.value)
}

function prevPage() {
  if (selected.value <= 1) return

  handlePageSelected(selected.value - 1)
}

function nextPage() {
  if (selected.value >= props.count) return

  handlePageSelected(selected.value + 1)
}
</script>

<template>
  <div class="pagination">
    <VButton 
      :appearance="'flat'"
      :icon="icons.left"
      @click="prevPage"
    />

    <template v-for="item in items">
      <VButton 
        v-if="'ellipsis' in item"
        :appearance="'flat'"
        :value="'...'"
        :disabled="true"
      />

      <VButton 
        v-else
        :appearance="'flat'"
        :value="String(item.value)"
        :class="item.selected ? 'selected': null"
        @click="handlePageSelected(item.value)"
      />
    </template>

    <VButton 
      :appearance="'flat'"
      :icon="icons.right"
      @click="nextPage"
    />
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: row;

  >.selected {
    background-color: #0000000a;
  }
}
</style>
