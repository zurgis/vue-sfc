<script setup lang="ts">
import { ref } from 'vue'
import VButton from '../components/VButton.vue'
import VDialog from '../components/VDialog/VDialog.vue'
import VPagination from '../components/VPagination/VPagination.vue'

const isOpened = ref(false)

function toggle() {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <div>
    <VButton 
      :value="'Show Dialog'"
      @click="toggle"
    />

    <VDialog 
      :is-opened="isOpened"
      @close="toggle"
    >
      <VPagination :count="100" :per-page="10" />
    </VDialog>
  </div>
</template>

<style lang="scss">
</style>