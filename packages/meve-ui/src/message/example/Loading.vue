<template>
  <m-button type="primary" @click="showMessage">加载</m-button>
</template>

<script>
import Message from '../index'
import Button from '../../button'

export default {
  components: {
    [Button.name]: Button,
  },
  methods: {
    showMessage() {
      const { clear } = Message.loading({
        duration: Infinity,
        closeable: false,
        forbidClick: true,
        content: 'loading....',
      })

      setTimeout(() => {
        clear()
        Message('success!')
      }, 1000)
    },
  },
}
</script>
