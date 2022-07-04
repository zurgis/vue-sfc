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
      <td 
        v-for="item in items" 
        :rowspan="item.rowspan"
      >
        {{ item.value }}
      </td>
    </tr>
  </tfoot>
</template>

<style lang="scss" scoped>
</style>
