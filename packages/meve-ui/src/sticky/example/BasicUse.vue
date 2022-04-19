<template>
  <div ref="example" class="example">
    <m-sticky :offset-top="66">
      <m-button type="primary">黏在距离窗口顶部66像素的位置</m-button>
    </m-sticky>
  </div>
</template>

<script>
import Sticky from '..'
import Button from '../../button'

export default {
  components: {
    [Sticky.name]: Sticky,
    [Button.name]: Button,
  },
}
</script>
