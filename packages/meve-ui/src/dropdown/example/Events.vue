<template>
  <m-dropdown
    :options="options"
    @select="handleSelect"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed"
  >
    <m-button type="primary">点我下拉</m-button>
  </m-dropdown>
</template>

<script>
import Dropdown from '..'
import Button from '../../button'
import Message from '../../message'

export default {
  components: {
    [Dropdown.name]: Dropdown,
    [Button.name]: Button,
  },
  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
      },
      {
        key: 2,
        label: 'Meve: 2',
      },
    ],
  }),
  methods: {
    handleSelect(option) {
      Message(`Select: ${option.label}`)
    },
    handleOpen() {
      Message('Open')
    },
    handleOpened() {
      Message('Opened')
    },
    handleClose() {
      Message(`Close`)
    },
    handleClosed() {
      Message(`Closed`)
    },
  },
}
</script>
