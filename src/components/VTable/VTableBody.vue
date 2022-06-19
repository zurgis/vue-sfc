<script setup lang="ts">
import VInput from '../VInput.vue'

defineProps<{
  contents: Array<{
    rowspan?: number
    value: string
    isActive?: boolean
    editor?: {
      identifier: number | string
      type: string
      title?: string
      placeholder?: string
    }
  }>[]
}>()

const emit = defineEmits<{
  (event: 'change', ...args: any[]): void
}>()

function onChangeItemBody(...args: any[]) {
  emit('change', ...args)
}
</script>

<template>
  <tbody>
    <tr v-for="items in contents">
      <template v-for="item in items">
        <td :rowspan="item.rowspan">
          <div v-if="item.isActive && item.editor">
            <template v-if="item.editor.type === 'text'">
              <VInput
                :title="item.editor.title"
                :identifier="item.editor.identifier"
                :placeholder="item.editor.placeholder"
                :value="item.value"
                @change="onChangeItemBody"
              />
            </template>
          </div>
          
          <div v-else>
            {{ item.value }}
          </div>
        </td>
      </template>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
</style>
