<script setup lang="ts">
defineProps<{
  headers: Array<{
    colspan?: number
    name: string
  }>[]
}>()
</script>

<template>
  <thead >
    <tr v-for="header in headers">
      <th :colspan="item.colspan" v-for="item in header">
        {{ item.name }}
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
th {
  border: 1px solid #000;
}
</style>
