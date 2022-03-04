<template>
  <div class="example">
    <m-space>
      <m-button>默认按钮</m-button>
      <m-button type="primary">主要按钮</m-button>
      <m-button type="info">信息按钮</m-button>
      <m-button type="warning">警告按钮</m-button>
      <m-button type="success">成功按钮</m-button>
      <m-button type="error">错误按钮</m-button>
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
