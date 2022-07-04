<script setup lang="ts">
defineProps<{
  headers?: Array<{
    colspan?: number
    value: string
  }>[]
}>()
</script>

<template>
  <thead>
    <tr v-for="header in headers">
      <th 
        v-for="item in header" 
        :colspan="item.colspan"
      >
        {{ item.value }}
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
th {
  border: 1px solid #000;
}
</style>
