<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  appearance?: 'flat' | 'outline'
  items: Array<string>
}>()

defineEmits<{
  (e: 'click', selected: string): void
}>()

const selected = ref('Выберите значение...')
</script>

<template>
  <select
    class="select"
    :class="appearance"
    v-model="selected"
    @change="$emit('click', selected)"
  >
    <option :disabled="true">Выберите значение...</option>

    <option
      v-for="item in items"
    >
      {{ item }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.select {
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
}
</style>