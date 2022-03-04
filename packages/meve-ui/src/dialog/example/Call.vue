<template>
  <div class="example">
    <m-button type="primary" @click="show = true">组件声明式调用</m-button>

    <m-dialog
      v-model="show"
      title="你好"
      message="我是米薇!"
      @confirm="showMessage('confirm')"
      @cancel="showMessage('cancel')"
      @close="showMessage('close')"
    />
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
    async showMessage(action) {
      Message(`Action: ${action}`)
    },
  },
}
</script>
