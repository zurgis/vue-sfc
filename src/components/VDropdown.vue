<script setup lang="ts">
import VButton from './VButton.vue'

defineProps<{
  name?: string
  icon?: {
    size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
    src: string
  }
}>()
</script>

<template>
  <div>
    <VButton 
      :icon=icon
      :value="name"
      @click=""
    />

    <!-- <div>
      <VButton />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
</style>
