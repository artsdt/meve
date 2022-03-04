<template>
  <div class="example">
    <m-space>
      <m-button type="primary" @click="showDialog({ title: '米薇', message: '我是米薇!' })"> 修改标题 </m-button>

      <m-button
        type="primary"
        @click="
          showDialog({
            title: '米薇',
            message: '我是米薇!',
            confirmButton: false,
            cancelButton: false,
          })
        "
      >
        隐藏按钮
      </m-button>

      <m-button
        type="primary"
        @click="
          showDialog({
            title: '米薇',
            message: '我是米薇!',
            confirmButtonType: 'error',
            cancelButtonType: 'error',
          })
        "
      >
        按钮类型
      </m-button>

      <m-button
        type="primary"
        @click="
          showDialog({
            title: '米薇',
            message: '我是米薇!',
            confirmButtonText: '好的',
            cancelButtonText: '告辞',
          })
        "
      >
        按钮文字
      </m-button>

      <m-button
        type="primary"
        @click="
          showDialog({
            title: '米薇',
            message: '我是米薇!',
            messageAlign: 'center',
          })
        "
      >
        文字对齐
      </m-button>
    </m-space>
  </div>
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
    async showDialog(options) {
      const action = await Dialog(options)

      Message(`Action: ${action}`)
    },
  },
}
</script>
