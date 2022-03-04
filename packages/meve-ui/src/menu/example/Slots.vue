<template>
  <m-menu :expanded-names.sync="expandedNames" :selected-names.sync="selectedNames">
    <m-menu-item-group name="1" label="Meve: 1">
      <m-menu-item name="1-1" label="Meve: 1-1" />
    </m-menu-item-group>
    <m-menu-item-group name="2" label="Meve: 2">
      <m-menu-item name="2-1" label="Meve: 2-1" />
    </m-menu-item-group>
    <m-menu-item name="3-1" label="Meve: 3" />
  </m-menu>
</template>

<script>
import Menu from '..'
import MenuItem from '../../menu-item'
import MenuItemGroup from '../../menu-item-group'

export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup,
  },
  data: () => ({
    expandedNames: [],
    selectedNames: [],
  }),
}
</script>
