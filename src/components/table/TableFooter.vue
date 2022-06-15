<script setup lang="ts">
defineProps<{
  footers?: Array<{
    rowspan?: number
    name: string
  }>[]
}>()
</script>

<template>
  <tfoot>
    <tr v-for="items in footers">
      <td :rowspan="item.rowspan" v-for="item in items">
        {{ item.name }}
      </td>
    </tr>
  </tfoot>
</template>

<style lang="scss" scoped>
</style>
