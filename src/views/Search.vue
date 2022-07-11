<script setup lang="ts">
import { ref } from 'vue'
import VSearch from '../components/VSearch/VSearch.vue'
import VList from '../components/VList/VList.vue'

const items = ref([
  { value: 'Item1' },
  { value: 'Item2' },
  { value: 'Item3' }
])

const desiredData = (value: string) => {
  items.value = items.value.filter(desired => desired.value === value)
}
</script>

<template>
  <div>
    <VSearch @search="desiredData" />

    <VList :items="items" />
  </div>
</template>

<style lang="scss" scoped>
div {
  &:first-child {
    margin-bottom: 10px;
  }
}
</style>