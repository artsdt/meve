<template>
  <m-space>
    <m-button type="primary" @click="start">Start</m-button>
    <m-button type="primary" @click="finish" :disabled="disabled">Finish</m-button>
    <m-button type="primary" @click="error">Error</m-button>
  </m-space>
</template>

<script>
import LoadingBar from '..'
import Button from '../../button'
import Space from '../../space'

export default {
  components: {
    [Button.name]: Button,
    [Space.name]: Space,
  },

  data: () => ({
    disabled: true,
  }),

  methods: {
    start() {
      this.disabled = false
      LoadingBar.start()
    },

    finish() {
      this.disabled = true
      LoadingBar.finish()
    },

    error() {
      this.disabled = true
      LoadingBar.error()
    },
  },
}
</script>
