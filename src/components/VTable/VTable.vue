<script setup lang="ts">
import VTableHeader from './VTableHeader.vue'
import VTableBody from './VTableBody.vue'
import VTableFooter from './VTableFooter.vue'

defineProps<{
  headers?: Array<{
    colspan?: number
    value: string
  }>[],

  contents: Array<{
    rowspan?: number
    value: string
    isActive?: boolean
    editor?: {
      identifier: number | string
      type: string
      title?: string
      placeholder?: string
    }
  }>[]

  footers?: Array<{
    rowspan?: number
    value: string
  }>[]
}>()

const emit = defineEmits<{
  (event: 'changeItemBody', ...args: any[]): void
}>()

function onChangeItemBody(...args: any[]) {
  emit('changeItemBody', ...args)
}
</script>

<template>
  <table class="table">
    <VTableHeader :headers=headers />
    <VTableBody 
      :contents=contents 
      @change="onChangeItemBody" 
    />
    <VTableFooter :footers="footers" />
  </table>
</template>

<style lang="scss" scoped>
.table {
  border: 1px solid #000;
}
</style>
