<script setup lang="ts">
defineProps<{
  contents: Array<{
    rowspan?: number
    key?: string
    identifier: number | string
    value: string
    type?: string
    isActive?: boolean
  }>[]
}>()

defineEmits<{
  (
    event: 'change', 
    identifier: number | string, 
    value: string, 
    key?: string
  ): void
}>()
</script>

<template>
  <tbody>
    <tr v-for="items in contents">
      <template v-for="item in items">
        <td :rowspan="item.rowspan">
          <div v-if="item.isActive" class="item-body">
            <input 
              :type="item.type ? item.type : 'text'" 
              :value="item.value" 
              @change="$emit(
                'change', 
                item.identifier,
                ($event.target as HTMLInputElement).value,
                item.key
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
