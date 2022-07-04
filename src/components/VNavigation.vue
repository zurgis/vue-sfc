<script setup lang="ts">
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
    <ul class="nav-ul">
      <li 
        class="nav-li" 
        v-for="route in routes"
      >
        <router-link 
          class="nav-link"
          :to="{
            name: route.name, 
            params: route.params || {}
          }"
        >
          {{ route.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
