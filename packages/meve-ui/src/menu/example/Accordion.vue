<template>
  <m-menu accordion :options="options" :expanded-names.sync="expandedNames" :selected-names.sync="selectedNames" />
</template>

<script>
import Menu from '..'

export default {
  components: {
    [Menu.name]: Menu,
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
          },
          {
            name: '1-2',
            label: 'Meve: 1-2',
          },
        ],
      },
      {
        name: '2',
        label: 'Meve: 2',
        children: [
          {
            name: '2-1',
            label: 'Meve: 2-1',
          },
          {
            name: '2-2',
            label: 'Meve: 2-2',
          },
        ],
      },
      {
        name: '3',
        label: 'Meve: 3',
      },
    ],
  }),
}
</script>
