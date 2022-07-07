<script setup lang="ts">
defineProps<{
  value?: string
}>()

defineEmits<{
  (event: 'click'): void
}>()
</script>

<template>
  <template v-if="value">
    <li class="list-item">
      {{ value }}
    </li>
  </template>

  <template v-else>
    <li class="list-item">
      <slot></slot>
    </li>
  </template>
</template>

<style lang="scss" scoped>
.list-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
