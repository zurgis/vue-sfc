<script setup lang="ts">
import closeImg from './icons/close.svg'
import VButton from '../VButton.vue'

defineProps<{
  isOpened: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const icon = { size: 'xs' as const, src: closeImg }
</script>

<template>
  <div 
    class="dialog-wrapper"
    v-show="isOpened"
  >
    <div class="dialog">
      <VButton 
        class="dialog-close"
        :appearance="'icon'"
        :icon="icon"
        @click="$emit('close')"
      />

      <div class="dialog-content">
        <slot class="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: #0000006d;

  >.dialog {
    position: fixed;
    top: calc(50% - 60px);
    left: 50%;
    transform: translate(-50%, calc(-50% + 60px));
    box-shadow: 0 .5px 1px #000000;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 20px;

    >.dialog-close {
      position: fixed;
      top: 10px;
      left: calc(100% - 20px);
    }
  }
}
</style>