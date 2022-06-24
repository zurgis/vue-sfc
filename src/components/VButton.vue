<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'

defineProps<{
  type?: ButtonHTMLAttributes["type"]
  value?: string
  icon?: string
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
    <img class="button-icon" v-if="icon" :src="icon" alt="">

    {{ value }}
  </button>
</template>

<style lang="scss" scoped>
</style>
