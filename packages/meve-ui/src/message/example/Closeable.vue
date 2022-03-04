<template>
  <m-button type="primary" @click="showMessage">不可关闭</m-button>
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
      Message({
        closeable: false,
        content:
          'The term metaverse has its origins in the 1992 science fiction novel Snow Crash as a portmanteau of meta and universe.',
      })
    },
  },
}
</script>
