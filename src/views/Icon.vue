<script setup lang="ts">
import logoImg from '../assets/logo.png'
import VIcon from '../components/VIcon.vue'
</script>

<template>
  <div class="icons">
    <VIcon :size="'2xs'" :src="logoImg" />
    <VIcon :size="'xs'" :src="logoImg" />
    <VIcon :src="logoImg" />
    <VIcon :size="'lg'" :src="logoImg" />
    <VIcon :size="'xl'" :src="logoImg" />
    <VIcon :size="'2xl'" :src="logoImg" />
  </div>
</template>

<style lang="scss">
.icons {
  height: 50px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>