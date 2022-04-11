<template>
  <m-uploader v-model="files" @after-read="handleAfterRead">
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
    timer: null,
    files: [],
  }),
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    handleAfterRead(file) {
      file.state = 'loading'

      this.timer = setInterval(() => {
        if (file.progress === 100) {
          file.state = 'success'
          clearInterval(this.timer)
          return
        }

        file.progress += 20
      }, 200)
    },
  },
}
</script>
