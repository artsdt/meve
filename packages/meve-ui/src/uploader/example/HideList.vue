<template>
  <div class="example">
    <m-uploader hide-list v-model="files">
      <m-button>文件上传</m-button>
    </m-uploader>

    <div class="custom-list">
      <div class="custom-item" v-for="file in files" :key="file.name">{{ file.name }}</div>
    </div>
  </div>
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
