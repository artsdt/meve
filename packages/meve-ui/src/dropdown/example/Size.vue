<template>
  <m-space>
    <m-dropdown :options="options" size="small">
      <m-button type="primary">小</m-button>
    </m-dropdown>

    <m-dropdown :options="options">
      <m-button type="primary">中</m-button>
    </m-dropdown>

    <m-dropdown :options="options" size="large">
      <m-button type="primary">大</m-button>
    </m-dropdown>
  </m-space>
</template>

<script>
import Dropdown from '..'
import Button from '../../button'
import Space from '../../space'

export default {
  components: {
    [Dropdown.name]: Dropdown,
    [Button.name]: Button,
    [Space.name]: Space,
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
