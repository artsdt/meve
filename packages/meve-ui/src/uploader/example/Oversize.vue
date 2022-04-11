<template>
  <m-uploader :maxsize="1024" v-model="files" @oversize="handleOversize">
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
    handleOversize() {
      Message('文件大小超过限制')
    },
  },
}
</script>
