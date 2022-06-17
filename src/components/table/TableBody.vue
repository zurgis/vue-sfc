<script setup lang="ts">
defineProps<{
  contents: Array<{
    rowspan?: number
    identifier: number | string
    value: string
    isActive?: boolean
  }>[]
}>()

defineEmits<{
  (event: 'change', identifier: number | string, value: string): void
}>()
</script>

<template>
  <tbody>
    <tr v-for="items in contents">
      <template v-for="item in items">
        <td :rowspan="item.rowspan">
          <div v-if="item.isActive" class="item-body">
            <input 
              type="text" 
              :value="item.value" 
              @change="$emit(
                'change', 
                item.identifier,
                ($event.target as HTMLInputElement).value
              )" 
            />
          </div>
          
          <div v-else class="item-body">
            {{ item.value }}
          </div>
        </td>
      </template>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
.item-body {
  input[type=text] {
    border: none;
    text-align: center;
  }

  input[type=text]:hover {
    background-color: #c5c5c5;
  }

  input[type=text]:focus {
    outline: none;
    border: 2px solid #c5c5c5;
  }
}
</style>
