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
}

.input-text:hover {
  background-color: #c5c5c5;
}

.input-text:focus {
  outline: none;
  border: 2px solid #c5c5c5;
}
</style>
