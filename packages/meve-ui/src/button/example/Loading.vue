<template>
  <div class="example">
    <m-space align="center">
      <m-button type="primary" loading>加载中...</m-button>
      <m-button type="primary" loading :loading-size="14">加载中...</m-button>
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
