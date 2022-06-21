<script setup lang="ts">
defineProps<{
  name?: string
  icon?: string
}>()
</script>

<template>
  <div>
    <button>
      <img v-if="icon" :src="icon" alt="">
      <span v-if="name">{{ name }}</span>
    </button>

    <div></div>
  </div>
</template>

<style lang="scss" scoped>
</style>
