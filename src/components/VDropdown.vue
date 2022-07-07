<script setup lang="ts">
import { ref } from 'vue'
import VButton from './VButton.vue'

defineProps<{
  name?: string
  icon?: {
    size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
    src: string
  }
}>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="dropdown">
    <VButton 
      :icon=icon
      :value="name"
      @click="toggle"
    />

    <Transition name="dropdown-items">
      <div 
        class="dropdown-items" 
        v-show="isOpen"
      >
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-items {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 5px;
  border: 1px solid #000000;
  border-radius: 5px;

  &-enter-from, &-leave-to {
    opacity: 0;
    transform: translateY(-20%);
  }

  &-enter-active, &-leave-active {
    transition: all .5s ease;
  }
}
</style>
