<script setup lang="ts">
import calendarTodayImg from './icons/calendar_today.svg'
import VIcon from '../VIcon.vue'

defineProps<{
  value?: string
}>()
</script>

<template>
  <div class="datepicker-wrapper">
    <div class="input">
      <input 
        type="text"
        class="input-datepicker" 
        placeholder="Выберите дату..." 
        :value="value"
      />

      <VIcon 
        :size="'xs'" 
        :src="calendarTodayImg" 
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.datepicker-wrapper {
  display: flex;
  box-shadow: 0 .5px 1px #000000;
  border-radius: 5px;
}

.input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3px 5px;

  &-datepicker {
    border: none;
    cursor: default;

    &:focus {
      outline: none;
    }
  }
}
</style>