<script setup lang="ts">
import VButton from '../VButton.vue'

defineProps<{
  items?: Array<{
    value: string
    isActive?: boolean
  }>
}>()

defineEmits<{
  (event: 'click'): void
}>()
</script>

<template>
  <template v-if="items">
    <li 
      class="list-item" 
      v-for="item in items" 
    >
      <template v-if="item.isActive">
        <VButton 
          appearance="flat" 
          :value="item.value" 
          @click="$emit('click')"
        />
      </template>

      <template v-else>
        {{ item.value }}
      </template>
    </li>
  </template>

  <li class="list-item slots">
    <slot></slot>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &.slots {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
}
</style>
