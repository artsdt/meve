<template>
  <div class="example">
    <m-space align="center">
      <m-button type="primary" size="large">大型按钮</m-button>
      <m-button type="primary">普通按钮</m-button>
      <m-button type="primary" size="small">小型按钮</m-button>
      <m-button type="primary" size="mini">迷你按钮</m-button>
    </m-space>
  </div>
</template>

<script>
import Button from '..'
import Space from '../../space'

export default {
  components: {
    [Button.name]: Button,
    [Space.name]: Space,
  },
}
</script>
