<script setup lang="ts">
defineProps<{
  title?: string
  identifier: number | string
  value?: string
  placeholder?: string
}>()

defineEmits<{
  (
    event: 'change',
    identifier: number | string, 
    value: string, 
    title?: string
  ): void
}>()
</script>

<template>
  <input 
    type="text"
    class="input-text" 
    :placeholder="placeholder" 
    :value="value"
    @change="$emit(
      'change',
      identifier,
      ($event.target as HTMLInputElement).value,
      title
    )"
  />
</template>

<style lang="scss" scoped>
.input-text {
  border: none;
  text-align: center;

  &:hover {
    background-color: #0000000a;
  }

  &:focus {
    outline: none;
    border: 2px solid #0000000a;
  }
}
</style>
