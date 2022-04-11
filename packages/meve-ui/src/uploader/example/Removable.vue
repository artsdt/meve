<template>
  <m-uploader v-model="files" @before-remove="handleBeforeRemove">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
import Uploader from '..'
import Button from '../../button'
import Dialog from '../../dialog'

export default {
  components: {
    [Uploader.name]: Uploader,
    [Button.name]: Button,
  },
  data: () => ({
    files: [
      {
        name: '图片',
        state: 'success',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    ],
  }),
  methods: {
    async handleBeforeRemove() {
      const action = await Dialog({
        title: '是否删除?',
        message: '删除后无法撤回',
      })

      return action === 'confirm'
    },
  },
}
</script>
