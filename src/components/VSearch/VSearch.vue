<script setup lang="ts">
import { ref } from 'vue'
import searchImg from './icons/search.svg'
import closeImg from './icons/close.svg'
import VIcon from '../VIcon.vue'
import VButton from '../VButton.vue'

defineEmits<{
  (e: 'search', value: string): void
}>()

const icon = { size: "xs" as const, src: closeImg }

const value = ref('')

function clear() {
  value.value = ''
}
</script>

<template>
  <div class="search-wrapper">
    <div class="search">
      <VIcon 
        :size="'xs'" 
        :src="searchImg" 
      />

      <input 
        type="text"
        class="search-text" 
        placeholder="Поиск..." 
        v-model="value"
        @change="$emit('search', value)"
      />

      <VButton 
        v-show="value"
        appearance="icon"
        :icon="icon"
        @click="clear"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  box-shadow: 0 .5px 1px #000000;
  border-radius: 5px;
}

.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3px 5px;

  &-text {
    border: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
