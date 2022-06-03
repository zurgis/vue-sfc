<script setup lang="ts">
defineProps<{
  routes: Array<{
    label: String,
    name: String,
    params?: Array<{
      name: String,
      value: String
    }>
  }>
}>()
</script>

<template>
  <div id="nav">
    <ul>
      <li v-for="route in routes">
        <router-link 
          :to="{
            name: route.name, 
            params: route.params || {}
          }"
        >
          {{ route.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
