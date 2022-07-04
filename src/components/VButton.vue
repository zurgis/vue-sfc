<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'
import VIcon from './VIcon.vue'

defineProps<{
  type?: ButtonHTMLAttributes["type"]
  appearance?: 'flat' | 'outline' | 'icon'
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
    :class="appearance"
    @click="$emit('click')"
  >
    <VIcon 
      v-if="icon" 
      :size="icon.size" 
      :src="icon.src" 
    />

    {{ value }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  box-shadow: 0 .5px 1px #000000;

  &:hover {
    cursor: pointer;
    background-color: #0000000a;
    box-shadow: 0 1px 2px #000000;
  }

  &.flat {
    box-shadow: none;
  }

  &.outline {
    box-shadow: none;
    outline: 1px solid #000000;
  }

  &.icon {
    box-shadow: none;
    min-width: 0;
    padding: 0;
  }
}
</style>
