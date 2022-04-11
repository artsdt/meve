<template>
  <m-uploader v-model="files" @before-read="handleBeforeRead">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
import Uploader from '..'
import Button from '../../button'
import Message from '../../message'

export default {
  components: {
    [Uploader.name]: Uploader,
    [Button.name]: Button,
  },
  data: () => ({
    files: [],
  }),
  methods: {
    handleBeforeRead(file) {
      if (file.file.size <= 1 * 1024 * 1024) {
        Message.success('文件小于1M，上传成功')
        return true
      } 
        Message.warning('文件大于1M，不能上传')
        return false
      
    },
  },
}
</script>
