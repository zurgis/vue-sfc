<script setup lang="ts">
import VListItem from './VListItem.vue'

defineProps<{
  items?: Array<{
    value: string
    isActive?: boolean
  }>
}>()

const emit = defineEmits<{
  (event: 'click'): void
}>()

function onClickItem() {
  emit('click')
}
</script>

<template>
  <ul class="list">
    <template v-if="items">
      <VListItem 
        v-for="item in items"
        :value="item.value"
        :is-active="item.isActive"
      />
      
      <slot></slot>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
