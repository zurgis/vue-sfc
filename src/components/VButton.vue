<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'
import VIcon from './VIcon.vue'

defineProps<{
  type?: ButtonHTMLAttributes["type"]
  value?: string
  icon?: {
    size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
    src: string
  }
}>()

defineEmits<{
  (event: 'click'): void
}>()
</script>

<template>
  <button 
    class="button" 
    :type="type || 'button'" 
    @click="$emit('click')"
  >
    <VIcon v-if="icon" :size="icon.size" :src="icon.src" />

    {{ value }}
  </button>
</template>

<style lang="scss" scoped>
</style>
