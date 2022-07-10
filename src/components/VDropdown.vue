<script setup lang="ts">
import { ref } from 'vue'
import VButton from './VButton.vue'

defineProps<{
  appearance?: 'flat' | 'outline' | 'icon'
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
      :appearance="appearance"
      :icon=icon
      :value="name"
      @click="toggle"
    />

    <Transition name="dropdown-animations">
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
.dropdown {
  &-items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: absolute;
    margin-top: 5px;
    left: 50%;
    transform: translateX(-50%);
    outline: 1px solid #0000000a;
    box-shadow: 0 0 3px #0000000a;
    border-radius: 5px;
    background-color: #ffffff;
    z-index: 1;
  }

  &-animations {
    &-enter-from, &-leave-to {
      opacity: 0;
      transform: translate(-50%, -20%)
    }

    &-enter-active, &-leave-active {
      transition: all .5s ease;
    }
  }
}
</style>
