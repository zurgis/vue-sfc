<script setup lang="ts">
import TableHeaderVue from './TableHeader.vue'
import TableBodyVue from './TableBody.vue'
import TableFooter from './TableFooter.vue'

defineProps<{
  headers?: Array<{
    colspan?: number
    value: string
  }>[],

  contents: Array<{
    rowspan?: number
    identifier: number | string
    value: string
    isActive?: boolean
  }>[],

  footers?: Array<{
    rowspan?: number
    value: string
  }>[]
}>()

const emit = defineEmits<{
  (event: 'changeItemBody', identifier: number | string, value: string): void
}>()

function onChangeItemBody(identifier: number | string, value: string) {
  emit('changeItemBody', identifier, value)
}
</script>

<template>
  <div>
    <table>
      <TableHeaderVue :headers=headers />
      <TableBodyVue :contents=contents @change="onChangeItemBody" />
      <TableFooter :footers=footers />
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  border: 1px solid #000;
}
</style>
