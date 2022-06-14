<script setup lang="ts">
defineProps<{
  contents: Array<{
    name: String
  }>
}>()
</script>

<template>
  <tbody>
    <tr>
      <td v-for="content in contents">
        {{ content.name }}
      </td>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
</style>
