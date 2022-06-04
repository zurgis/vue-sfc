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
  <nav>
    <ul>
      <li v-for="route in routes">
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
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
