<template>
  <m-dropdown :options="options">
    <m-button type="primary">点我下拉</m-button>
  </m-dropdown>
</template>

<script>
import Dropdown from '..'
import Button from '../../button'
import Icon from '../../icon'

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
        icon: 'information',
      },
      {
        key: 2,
        label: 'Meve: 2',
        icon: (h) => h(Icon, { props: { name: 'information' }, style: { marginRight: '4px' } }),
      },
    ],
  }),
}
</script>
