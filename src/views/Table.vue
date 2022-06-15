<script setup lang="ts">
import TableVue from '../components/table/Table.vue';

const headers = [
  [
    { colspan: 4, name: 'Column1' },
  ],
  [
    { name: 'Content1' },
    { name: 'Content2' },
    { name: 'Content3' },
    { name: 'Content4' }
  ],
]

const contents = [
  [
    { name: 'Entry1' },
    { name: 'Entry2' },
    { rowspan: 2, name: 'Entry3' },
    { name: 'Entry4' }
  ],
  [
    { name: 'Entry1' },
    { name: 'Entry2' },
    { name: 'Entry4' }
  ],
]

const footers = [
  [
    { name: 'Footer1' },
    { name: 'Footer2' },
    { rowspan: 2, name: 'Footer3' },
    { name: 'Footer4' }
  ],
  [
    { name: 'Footer1' },
    { name: 'Footer2' },
    { name: 'Footer4' }
  ]
]
</script>

<template>
  <TableVue :headers="headers" :contents="contents" :footers="footers" />
</template>

<style lang="scss">
</style>