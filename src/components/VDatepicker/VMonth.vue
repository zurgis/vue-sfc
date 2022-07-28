<script setup lang="ts">
import VButton from '../VButton.vue'

defineProps<{
  month: number
}>()

const emit = defineEmits<{
  (e: 'click', index: number): void
}>()

const months = [
  'Янв', 'Фев', 'Мар',
  'Апр', 'Май', 'Июн',
  'Июл', 'Авг', 'Сен',
  'Окт', 'Ноя', 'Дек'
]

function click(index: number) {
  emit('click', index)
}
</script>

<template>
  <div class="months">
    <VButton 
      class="month"
      v-for="(item, index) in months"
      :appearance="'flat'"
      :value="String(item)"
      @click="click(index)"
    />
  </div>
</template>

<style lang="scss" scoped>
.months {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  >.month {
    height: 25px;
    width: 50px;
    flex-grow: 1;
  }
}
</style>