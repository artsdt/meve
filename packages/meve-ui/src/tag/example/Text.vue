<template>
  <div class="example">
    <m-space>
      <m-tag text closeable>默认标签</m-tag>
      <m-tag type="primary" text closeable>主要标签</m-tag>
      <m-tag type="info" text closeable>信息标签</m-tag>
      <m-tag type="warning" text closeable>警告标签</m-tag>
      <m-tag type="success" text closeable>成功标签</m-tag>
      <m-tag type="error" text closeable>错误标签</m-tag>
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
