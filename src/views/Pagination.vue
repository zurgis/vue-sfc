<script setup lang="ts">
import VPagination from '../components/VPagination/VPagination.vue'
import VPagination1 from '../components/VPagination/VPagination1.vue'
</script>

<template>
  <div>
    <VPagination :count="15" :per-page="10" />

    <VPagination1 :count="15"/>
  </div>
</template>

<style lang="scss">
</style>