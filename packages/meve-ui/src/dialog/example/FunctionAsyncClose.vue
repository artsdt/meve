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
      Dialog({
        message: '我是米薇',
        onBeforeClose(action, done) {
          const { clear } = Message.loading({
            forbidClick: true,
            duration: Infinity,
            content: '正在异步关闭',
          })

          setTimeout(() => {
            clear()
            Message(`Action: ${action}`)
            done()
          }, 1000)
        },
      })
    },
  },
}
</script>
