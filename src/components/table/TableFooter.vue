<script setup lang="ts">
defineProps<{
  footers?: Array<{
    rowspan?: number
    value: string
  }>[]
}>()
</script>

<template>
  <tfoot>
    <tr v-for="items in footers">
      <td :rowspan="item.rowspan" v-for="item in items">
        {{ item.value }}
      </td>
    </tr>
  </tfoot>
</template>

<style lang="scss" scoped>
</style>
