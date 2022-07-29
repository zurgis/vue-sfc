<script setup lang="ts">
import VSelect from '../components/VSelect.vue'

const items = ['Variant1', 'Variant2', 'Variant3']

function click(selected: string) {
  console.info('check', selected)
}
</script>

<template>
  <div>
    <VSelect 
      :items="items" 
      @click="click" 
    />

    <VSelect 
      :appearance="'flat'" 
      :items="items" 
      @click="click"
    />

    <VSelect 
      :appearance="'outline'" 
      :items="items"
      @click="click" 
    />
  </div>
</template>

<style lang="scss" scoped>
</style>