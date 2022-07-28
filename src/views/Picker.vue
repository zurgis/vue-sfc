<script setup lang="ts">
import VDatepicker from '../components/VDatepicker/VDatepicker.vue'
import VMonthpicker from '../components/VDatepicker/VMonthpicker.vue'

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

  <div>
    <VMonthpicker
      :year="2022"
      :month="6"
    />
    </div>
</template>

<style lang="ts" scoped>
</style>