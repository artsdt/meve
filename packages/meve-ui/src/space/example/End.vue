<template>
  <m-space justify="end">
    <m-button type="primary">按钮</m-button>
    <m-button type="primary">按钮</m-button>
    <m-button type="primary">按钮</m-button>
  </m-space>
</template>

<script>
import Space from '..'
import Button from '../../button'

export default {
  components: {
    [Space.name]: Space,
    [Button.name]: Button,
  },
}
</script>
