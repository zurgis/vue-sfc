<script setup lang="ts">
import TableHeaderVue from './TableHeader.vue'
import TableBodyVue from './TableBody.vue';

const headers = [
  [
    { colspan: 2, name: 'Column1' },
    { name: 'Column2' },
  ],
  [
    { name: 'Content1' },
    { name: 'Content2' },
    { name: 'Content3' }
  ],
]

const contents = [
  { name: 'Entry1' },
  { name: 'Entry2' }
]
</script>

<template>
  <div>
    <table>
      <TableHeaderVue :headers=headers />

      <TableBodyVue :contents=contents />
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  border: 1px solid #000;
}
</style>
