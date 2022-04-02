<template>
  <m-button type="primary" @click="toggleRootTheme">切换根节点样式变量</m-button>
</template>

<script>
import StyleProvider from '../index'
import Button from '../../button'

export default {
  components: {
    [Button.name]: Button,
  },
  data: () => ({
    rootStyleVars: null,
  }),
  methods: {
    toggleRootTheme() {
      this.rootStyleVars = this.rootStyleVars
        ? null
        : {
            '--color-primary': '#F06292',
            '--color-deep-primary': '#EC407A',
          }
      StyleProvider(this.rootStyleVars)
    },
  },
}
</script>
