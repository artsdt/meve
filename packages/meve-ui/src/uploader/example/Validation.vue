<template>
  <m-uploader
    v-model="files"
    :rules="[
      (v, u) => u.getSuccess().length === v.length || 'There are files that have not been uploaded successfully',
    ]"
  >
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
