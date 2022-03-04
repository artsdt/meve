<template>
  <m-space>
    <m-menu class="menu" :options="options" :expanded-names.sync="expandedNames" :selected-names.sync="selectedNames" />

    <m-menu
      class="menu"
      :indent="54"
      :options="options"
      :expanded-names.sync="expandedNames"
      :selected-names.sync="selectedNames"
    />
  </m-space>
</template>

<script>
import Menu from '..'
import Space from '../../space'

export default {
  components: {
    [Menu.name]: Menu,
    [Space.name]: Space,
  },
  data: () => ({
    expandedNames: [],
    selectedNames: [],
    options: [
      {
        name: '1',
        label: 'Meve: 1',
        children: [
          {
            name: '1-1',
            label: 'Meve: 1-1',
            children: [
              {
                name: '1-1-1',
                label: 'Meve: 1-1-1',
                children: [
                  {
                    name: '1-1-1-1',
                    label: 'Meve: 1-1-1-1',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }),
}
</script>

<style scoped>
.menu {
  width: 256px;
}
</style>
