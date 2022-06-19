<script setup lang="ts">
import VTable from '../components/VTable/VTable.vue'

const headers = [
  [
    { colspan: 4, value: 'Column1' },
  ],
  [
    { value: 'Content1' },
    { value: 'Content2' },
    { value: 'Content3' },
    { value: 'Content4' }
  ]
]

const contents = [
  [
    { identifier: 1, value: 'Entry1' },
    { value: 'Entry2', 
      isActive: true, 
      editor: { 
        identifier: 2, 
        type: 'text', 
        title: 'Content2' 
      } 
    },
    { identifier: 3, value: 'Entry3' },
    { identifier: 4, value: 'Entry4' }
  ],
  [
    { identifier: 5, value: 'Entry1' },
    { value: 'Entry2', isActive: true, editor: { identifier: 6, type: 'text' } },
    { identifier: 7, value: 'Entry3' },
    { identifier: 8, value: 'Entry4' }
  ]
]

const footers = [
  [
    { value: 'Footer1' },
    { value: 'Footer2' },
    { rowspan: 2, value: 'Footer3' },
    { value: 'Footer4' }
  ],
  [
    { value: 'Footer1' },
    { value: 'Footer2' },
    { value: 'Footer4' }
  ]
]

function onValueChange(identifier: number | string, value: string, title?: string) {
  if (title === 'Content2') {
    alert(`
      identifier: ${ identifier } 
      value: ${ value }
      title: ${ title }
    `)
  } else {
    alert(`
      identifier: ${ identifier } 
      value: ${ value }
    `)
  }
}
</script>

<template>
  <div>
    <VTable 
      :headers="headers" 
      :contents="contents" 
      :footers="footers" 
      @change-item-body="onValueChange"
    />
  </div>
</template>

<style lang="scss">
</style>