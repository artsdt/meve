<template>
  <m-uploader v-model="files">
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
    files: [
      {
        name: '加载状态',
        state: 'loading',
        progress: 50,
      },
      {
        name: '链接',
        state: 'success',
        url: 'https://www.baidu.com',
      },
      {
        name: '图片',
        state: 'error',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    ],
  }),
}
</script>
