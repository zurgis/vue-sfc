<script setup lang="ts">
import VList from '../components/VList/VList.vue'
import VListItem from '../components/VList/VListItem.vue'
import VButton from '../components/VButton.vue'

const items = [
  { value: 'Item1' },
  { value: 'Item2' },
  { value: 'Item3', isActive: true }
]
</script>

<template>
  <div>
    <VList :items="items">
      <VListItem>
        <VButton :value="'Button1 Button1 Button1'" />
      </VListItem>

      <VListItem>
        <VButton class="flat" :value="'Button2'" />
      </VListItem>

      <VListItem>
        <VButton class="outline" :value="'Button3'" />
      </VListItem>
    </VList>
  </div>
</template>

<style lang="scss">
</style>
