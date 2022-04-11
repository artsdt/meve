<template>
  <m-uploader :maxlength="1" v-model="files">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
import Uploader from '..'
import Button from '../../button'

export default {
  components: {
    [Uploader.name]: Uploader,
    [Button.name]: Button,
  },
  data: () => ({
    files: [],
  }),
}
</script>
