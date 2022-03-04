<template>
  <m-button type="primary" @click="showDialog">函数式调用</m-button>
</template>

<script>
import Dialog from '..'
import Button from '../../button'
import Space from '../../space'
import Message from '../../message'

export default {
  components: {
    [Button.name]: Button,
    [Space.name]: Space,
  },
  methods: {
    async showDialog() {
      const action = await Dialog(
        '元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造'
      )

      Message(`Action: ${action}`)
    },
  },
}
</script>
