<template>
  <div class="example">
    <m-space>
      <m-button class="example-icon" v-for="icon in icons" :key="icon" round :data-clipboard-text="icon">
        <m-icon :name="icon" />
      </m-button>
    </m-space>
  </div>
</template>

<script>
import Icon from '..'
import Button from '../../button'
import Space from '../../space'
import icons from '@meve/icons'
import Clipboard from 'clipboard'
import Message from '../../message'

export default {
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Space.name]: Space,
  },
  data: () => ({
    icons,
    clipboard: null,
  }),
  mounted() {
    this.clipboard = new Clipboard('.example-icon', {
      text: (trigger) => `<m-icon name="${trigger.getAttribute('data-clipboard-text')}" />`,
    })

    this.clipboard.on('success', (e) => {
      Message.success(`${e.text} was successfully copied to the clipboard`)
    })
  },
  beforeDestroy() {
    this.clipboard.destroy()
  },
}
</script>
