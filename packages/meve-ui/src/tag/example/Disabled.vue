<template>
  <div class="example">
    <m-space align="center">
      <m-tag readonly closeable>只读标签</m-tag>
      <m-tag disabled closeable>禁用标签</m-tag>
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
