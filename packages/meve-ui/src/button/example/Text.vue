<template>
  <div class="example">
    <m-space>
      <m-button text>默认按钮</m-button>
      <m-button type="primary" text>主要按钮</m-button>
      <m-button type="info" text>信息按钮</m-button>
      <m-button type="warning" text>警告按钮</m-button>
      <m-button type="success" text>成功按钮</m-button>
      <m-button type="error" text>错误按钮</m-button>
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
