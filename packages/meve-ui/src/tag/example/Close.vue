<template>
  <div class="example">
    <m-space align="center">
      <m-tag closeable @close="handleClose">可关闭标签</m-tag>
      <m-tag closeable :close-icon-size="12" @close="handleClose">可关闭标签</m-tag>
    </m-space>
  </div>
</template>

<script>
import Tag from '..'
import Space from '../../space'
import Message from '../../message'

export default {
  components: {
    [Tag.name]: Tag,
    [Space.name]: Space,
  },
  methods: {
    handleClose() {
      Message.success('Close ok')
    },
  },
}
</script>
