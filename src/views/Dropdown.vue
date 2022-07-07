<script setup lang="ts">
import VDropdown from '../components/VDropdown.vue'
import VButton from '../components/VButton.vue'
import VList from '../components/VList/VList.vue'
import VListItem from '../components/VList/VListItem.vue'
</script>

<template>
  <div class="dropdown">
    <VDropdown :name="'Dropdown'">
      <VButton 
        appearance="flat" 
        value="Button1" 
      />

      <VButton 
        appearance="flat" 
        value="Button2" 
      />

      <VList>
        <VListItem>
          <VButton 
            appearance="flat" 
            value="Button3" 
          />
        </VListItem>

        <VListItem>
          <VButton 
            appearance="flat" 
            value="Button4" 
          />
        </VListItem>
      </VList>
    </VDropdown>
  </div>
</template>

<style lang="scss">
</style>
