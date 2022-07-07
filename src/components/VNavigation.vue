<script setup lang="ts">
import VList from './VList/VList.vue'
import VListItem from './VList/VListItem.vue'

defineProps<{
  routes: Array<{
    label: string
    name: string
    params?: Array<{
      name: string
      value: string
    }>
  }>
}>()
</script>

<template>
  <nav class="nav">
    <VList>
      <VListItem v-for="route in routes">
        <router-link 
          class="nav-link"
          :to="{
            name: route.name, 
            params: route.params || {}
          }"
        >
          {{ route.label }}
        </router-link>
      </VListItem>
    </VList>
  </nav>
</template>

<style lang="scss" scoped>
</style>
