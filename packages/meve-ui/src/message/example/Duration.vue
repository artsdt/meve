<template>
  <m-button type="primary" @click="showMessage">存在1秒</m-button>
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
        duration: 1000,
        content:
          'The term metaverse has its origins in the 1992 science fiction novel Snow Crash as a portmanteau of meta and universe.',
      })
    },
  },
}
</script>
