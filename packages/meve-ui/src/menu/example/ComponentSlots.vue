<template>
  <m-menu :expanded-names.sync="expandedNames" :selected-names.sync="selectedNames">
    <m-menu-item-group name="1">
      <m-menu-item name="1-1">
        <template #label>Meve: 1-1</template>
      </m-menu-item>

      <template #label>Meve: 1</template>
      <template #icon><m-icon class="icon" name="information" /></template>
    </m-menu-item-group>
    <m-menu-item-group name="2">
      <m-menu-item name="2-1">
        <template #label>Meve: 2-1</template>
      </m-menu-item>

      <template #label>Meve: 2</template>
      <template #icon><m-icon class="icon" name="warning" /></template>
    </m-menu-item-group>
    <m-menu-item name="3-1" disabled>
      <template #label>Meve: 3</template>
      <template #icon><m-icon class="icon" name="checkbox-marked-circle" /></template>
    </m-menu-item>
  </m-menu>
</template>

<script>
import Menu from '..'
import MenuItem from '../../menu-item'
import MenuItemGroup from '../../menu-item-group'
import Icon from '../../icon'

export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup,
    [Icon.name]: Icon,
  },
  data: () => ({
    expandedNames: [],
    selectedNames: [],
  }),
}
</script>

<style scoped>
.icon {
  margin-right: 10px;
}
</style>
