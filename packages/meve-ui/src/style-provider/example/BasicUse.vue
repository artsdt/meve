<template>
  <m-style-provider :style-vars="styleVars">
    <m-button type="primary" @click="toggleTheme"> 切换样式变量 </m-button>
  </m-style-provider>
</template>

<script>
import StyleProvider from '..'
import Button from '../../button'

export default {
  components: {
    [StyleProvider.Component.name]: StyleProvider.Component,
    [Button.name]: Button,
  },
  data: () => ({
    styleVars: null,
  }),
  methods: {
    toggleTheme() {
      this.styleVars = this.styleVars
        ? null
        : {
            '--button-primary-color': 'var(--color-success)',
            '--button-primary-hover-color': 'var(--color-deep-success)',
          }
    },
  },
}
</script>
