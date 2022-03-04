<template>
  <div class="app-code">
    <div
      :id="`clip-target-${cid}`"
      class="app-code-target"
      ref="code"
      :style="{
        height: height >= 0 ? `${height}px` : undefined,
      }"
    >
      <slot/>
    </div>
    <div class="app-code-toolbar">
      <m-button round @click="toggle">
        <m-icon name="xml" size="18" />
      </m-button>

      <m-button
        :id="`clip-trigger-${cid}`"
        :data-clipboard-target="`#clip-target-${cid}`"
        round
        v-if="height > 0"
      >
        <m-icon name="content-copy" size="18" />
      </m-button>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import { nextTick, doubleRaf } from '../utils/shared'
import { Message } from '@meve/ui'

let clipId = 0
const offset = 10

export default {
  name: 'AppCode',
  data: () => ({
    height: 0,
    cid: clipId++
  }),

  mounted() {
    const trigger = new Clipboard(`#clip-trigger-${this.cid}`)

    trigger.on('success', () => {
      Message.success('The code was successfully copied to the clipboard')
    })
  },

  methods: {
    async toggle() {
      const foldHeight = 0

      if (this.height === foldHeight) {
        this.height = -1
        await nextTick()
        const { offsetHeight } = this.$refs.code

        this.height = foldHeight
        await doubleRaf()

        if (offsetHeight - foldHeight < offset) {
          this.height = foldHeight
        } else {
          this.height = offsetHeight
        }
      } else {
        const { offsetHeight } = this.$refs.code

        this.height = offsetHeight
        await doubleRaf()
        this.height = foldHeight
      }
    }
  }
}
</script>

<style scoped lang="less">
.app-code {
  margin-top: 24px;
  border-top: 1px dashed #eee;

  &-toolbar {
    display: flex;
    align-items: center;
    color: #888;

    button {
      margin-right: 10px;
    }
  }

  &-target {
    transition: all .25s;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 20px;
  }
}
</style>
