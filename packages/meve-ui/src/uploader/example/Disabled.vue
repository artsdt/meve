<template>
  <m-space direction="column" size="large">
    <m-uploader disabled v-model="files">
      <m-button disabled>文件上传</m-button>
    </m-uploader>
    <m-uploader readonly v-model="files">
      <m-button disabled>文件上传</m-button>
    </m-uploader>
  </m-space>
</template>

<script>
import Uploader from '..'
import Button from '../../button'
import Space from '../../space'

export default {
  components: {
    [Space.name]: Space,
    [Uploader.name]: Uploader,
    [Button.name]: Button,
  },
  data: () => ({
    files: [
      {
        name: '一个文件',
      },
    ],
  }),
}
</script>
