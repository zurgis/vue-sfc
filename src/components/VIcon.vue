<script setup lang="ts">
defineProps<{
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
  src: string
  alt?: string
}>()
</script>

<template>
  <img 
    class="icon" 
    :src="src" 
    :alt="alt"
    :class="size || 'sm'"
  >
</template>

<style lang="scss" scoped>
.icon {
  &.\32xs {
    height: 10px;
    width: 10px;
  }

  &.xs {
    height: 12px;
    width: 12px;
  }

  &.sm {
    height: 14px;
    width: 14px;
  }

  &.lg {
    height: 20px;
    width: 20px;
  }

  &.xl {
    height: 24px;
    width: 24px;
  }

  &.\32xl {
    height: 32px;
    width: 32px;
  }
}
</style>