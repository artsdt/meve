<template>
  <m-dropdown :options="options">
    <m-button type="primary">点我下拉</m-button>
  </m-dropdown>
</template>

<script>
import Dropdown from '..'
import Button from '../../button'

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
}
</script>
