<template>
  <div class="example">
    <m-space align="center">
      <m-tag type="primary" size="large">大型标签</m-tag>
      <m-tag type="primary">普通标签</m-tag>
      <m-tag type="primary" size="small">小型标签</m-tag>
      <m-tag type="primary" size="mini">迷你标签</m-tag>
    </m-space>
  </div>
</template>

<script>
import Tag from '..'
import Space from '../../space'

export default {
  components: {
    [Tag.name]: Tag,
    [Space.name]: Space,
  },
}
</script>
