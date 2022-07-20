<script setup lang="ts">
import VDatepicker from '../components/VDatepicker/VDatepicker.vue'

function getSelectedItems(selected: number[]) {
  console.info(selected)
}
</script>

<template>
  <div>
    <VDatepicker 
      :type="'single'"
      :year="2022" 
      :month="6" 
      @click="getSelectedItems" 
    />
  </div>
</template>

<style lang="ts" scoped>
</style>