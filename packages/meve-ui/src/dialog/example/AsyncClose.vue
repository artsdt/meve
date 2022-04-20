<template>
  <div class="example">
    <m-button type="primary" @click="show = true">组件声明式调用</m-button>

    <m-dialog v-model="show" title="你好" message="我是米薇!" @before-close="handleBeforeClose" />
  </div>
</template>

<script>
import Dialog from '..'
import Message from '../../message'

export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data: () => ({
    show: false,
  }),
  methods: {
    handleBeforeClose(action, done) {
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
  },
}
</script>
