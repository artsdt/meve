<template>
  <div class="example">
    <m-space>
      <m-tag>默认标签</m-tag>
      <m-tag type="primary">主要标签</m-tag>
      <m-tag type="info">信息标签</m-tag>
      <m-tag type="warning">警告标签</m-tag>
      <m-tag type="success">成功标签</m-tag>
      <m-tag type="error">错误标签</m-tag>
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
