<template>
  <m-space>
    <m-image width="100px" height="100px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <m-image width="100px" height="100px" fit="cover" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <m-image width="100px" height="100px" fit="contain" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <m-image width="100px" height="100px" fit="none" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <m-image width="100px" height="100px" fit="scale-down" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
  </m-space>
</template>

<script>
import Image from '..'
import Space from '../../space'

export default {
  components: {
    [Space.name]: Space,
    [Image.name]: Image,
  },
}
</script>
