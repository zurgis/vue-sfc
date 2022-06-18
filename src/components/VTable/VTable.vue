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
    key?: string
    identifier: number | string
    value: string
    type?: string
    isActive?: boolean
  }>[],

  footers?: Array<{
    rowspan?: number
    value: string
  }>[]
}>()

const emit = defineEmits<{
  (
    event: 'changeItemBody', 
    identifier: number | string, 
    value: string, 
    key?: string
  ): void
}>()

function onChangeItemBody(identifier: number | string, value: string, key?: string) {
  emit('changeItemBody', identifier, value, key)
}
</script>

<template>
  <table class="table">
    <VTableHeader :headers=headers />
    <VTableBody :contents=contents @change="onChangeItemBody" />
    <VTableFooter :footers="footers" />
  </table>
</template>

<style lang="scss" scoped>
.table {
  border: 1px solid #000;
}
</style>
