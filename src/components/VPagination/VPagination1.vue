<script setup lang="ts">
import { computed, ref } from 'vue'
import arrowLeftImg from './icons/arrow_left.svg'
import arrowRightImg from './icons/arrow_right.svg'
import VButton from '../VButton.vue'

const props = defineProps<{
  count: number
}>()

const icons = {
  left: { size: "xs" as const, src: arrowLeftImg },
  right: { size: "xs" as const, src: arrowRightImg }
}

const pageRange = 3
const marginPages = 1
// let innerValue = 1

interface Pages {
  index?: {
    index: number
    content: number
    selected: boolean
  } | {
    ellipsis: boolean
  }
}

// const selected = computed({
//   get() {
//     return innerValue
//   },

//   set(newValue) {
//     innerValue = newValue
//   }
// })

const selected = ref(1)

const items: any = computed(() => {
  let pages: Pages = {}

  if (props.count <= pageRange) {
    for (let index = 0; index < props.count; index++) {
      const page = {
        index: index,
        content: index + 1,
        // selected: index === (Number(selected) - 1)
        //selected: index === (selected.value - 1)
        selected: index === selected.value
      }

      pages[index] = page
    }
  } 
  else {
    const halfRange = Math.floor(pageRange / 2)

    function setItem(index: number) {
      const page = {
        index: index,
        content: index + 1,
        // selected: index === (Number(selected) - 1)
        selected: index === (selected.value - 1)
      }

      pages[index] = page
    }

    function setEllipsis(index: number) {
      const ellipsis = {
        ellipsis: true
      }

      pages[index] = ellipsis
    }

    for (let i = 0; i < marginPages; i++) {
      setItem(i)
    }

    let selectedRangeLow = 0
    // if (Number(selected) - halfRange > 0) {
    //   selectedRangeLow = Number(selected) - 1 - halfRange
    // }
    if (selected.value - halfRange > 0) {
      selectedRangeLow = selected.value - 1 - halfRange
    }

    let selectedRangeHigh = selectedRangeLow + pageRange - 1
    if (selectedRangeHigh >= props.count) {
      selectedRangeHigh = props.count - 1
      selectedRangeLow = selectedRangeHigh - pageRange + 1
    }

    for (let i = selectedRangeLow; i <= selectedRangeHigh && i < props.count - 1; i++) {
      setItem(i)
    }

    if (selectedRangeLow > marginPages) {
      setEllipsis(selectedRangeLow - 1)
    }

    if (selectedRangeHigh + 1 < props.count - marginPages) {
      setEllipsis(selectedRangeHigh + 1)
    }

    for (let i = props.count - 1; i >= props.count - marginPages; i--) {
      setItem(i)
    }
  }

  console.info(pages)
  return pages
})

function handlePageSelected(selected1: number) {
  // if (Number(selected) === selected1) return
  if (selected.value === selected1) return

  console.log(selected1)

  // innerValue = selected1
  selected.value = selected1
  //console.log(innerValue)
}

function prevPage() {
  // if (Number(selected) <= 1) return

  // handlePageSelected(Number(selected) - 1)

  if (selected.value <= 1) return

  handlePageSelected(selected.value - 1)
}

function nextPage() {
  // if (Number(selected) >= props.count) return
  if (selected.value >= props.count) return

  //handlePageSelected(Number(selected) + 1)
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
        v-if="item.ellipsis"
        :appearance="'flat'"
        :value="'...'"
      />

      <VButton 
        v-else
        :appearance="'flat'"
        :value="String(item.content)"
        @click="handlePageSelected(item.index + 1)"
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
}
</style>