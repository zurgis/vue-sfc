<script setup lang="ts">
import TableHeaderVue from './TableHeader.vue'
import TableBodyVue from './TableBody.vue'
import TableFooter from './TableFooter.vue'

defineProps<{
  headers?: Array<{
    colspan?: number
    name: string
  }>[],

  contents: Array<{
    rowspan?: number
    name: string
  }>[],

  footers?: Array<{
    rowspan?: number
    name: string
  }>[]
}>()
</script>

<template>
  <div>
    <table>
      <TableHeaderVue :headers=headers />
      <TableBodyVue :contents=contents />
      <TableFooter :footers=footers />
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  border: 1px solid #000;
}
</style>
