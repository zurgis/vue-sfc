<script setup lang="ts">
defineProps<{
  headers: Array<{
    colspan: any,
    name: String
  }>
}>()
</script>

<template>
  <thead >
    <tr v-for="header in headers">
      <th :colspan="content.colspan" v-for="content in header">
        {{ content.name }}
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
th {
  border: 1px solid #000;
}
</style>
