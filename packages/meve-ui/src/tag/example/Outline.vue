<template>
  <div class="example">
    <m-space>
      <m-tag text outline closeable>默认标签</m-tag>
      <m-tag type="primary" text outline closeable>主要标签</m-tag>
      <m-tag type="info" text outline closeable>信息标签</m-tag>
      <m-tag type="warning" text outline closeable>警告标签</m-tag>
      <m-tag type="success" text outline closeable>成功标签</m-tag>
      <m-tag type="error" text outline closeable>错误标签</m-tag>
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
