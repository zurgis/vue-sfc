<script setup lang="ts">
import VListItem from './VListItem.vue'

defineProps<{
  items?: Array<{
    value: string
  }>
}>()
</script>

<template>
  <ul class="list">
    <VListItem :items="items" />

    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  border: 1px solid;
}
</style>
