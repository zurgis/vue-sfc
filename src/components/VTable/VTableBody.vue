<script setup lang="ts">
import moreHorizImg from './icons/more_horiz.svg'
import VInput from '../VInput.vue'
import VDropdown from '../VDropdown.vue'

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

  isEnableActions?: boolean
}>()

const emit = defineEmits<{
  (e: 'change', ...args: any[]): void
}>()

const icon = { size: "lg" as const, src: moreHorizImg }

function onChangeItemBody(...args: any[]) {
  emit('change', ...args)
}
</script>

<template>
  <tbody>
    <tr v-for="items in contents">
      <template v-for="item in items">
        <td :rowspan="item.rowspan">
          <div v-if="!isEnableActions && item.isActive && item.editor">
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

      <template v-if="isEnableActions">
        <td class="actions">
          <VDropdown 
            :appearance="'icon'" 
            :icon="icon"
          >
            <slot name="actions" />
          </VDropdown>
        </td>
      </template>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: center;
  position: relative;
}
</style>
