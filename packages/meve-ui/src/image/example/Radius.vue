<template>
  <m-space>
    <m-image width="100px" height="100px" fit="cover" :radius="10" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

    <m-image width="100px" height="100px" fit="cover" radius="50%" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
  </m-space>
</template>

<script>
import Image from '..'
import Space from '../../space'

export default {
  components: {
    [Image.name]: Image,
    [Space.name]: Space,
  },
}
</script>
