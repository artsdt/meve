<template>
  <m-image
    lazy
    width="100px"
    loading="https://xxx.xxx/loading.png"
    error="https://xxx.xxx/error.png"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
</template>

<script>
import Image from '..'

export default {
  components: {
    [Image.name]: Image,
  },
}
</script>
