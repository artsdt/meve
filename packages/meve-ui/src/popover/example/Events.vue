<template>
  <m-space>
    <m-popover :y="4" @open="handleOpen" @close="handleClose" @opened="handleOpened" @closed="handleClosed">
      <div>自恨罗衣掩诗句，举头空羡榜中名</div>

      <template #trigger>
        <m-button type="primary">Hover 触发</m-button>
      </template>
    </m-popover>

    <m-popover
      trigger="click"
      :y="4"
      @open="handleOpen"
      @close="handleClose"
      @opened="handleOpened"
      @closed="handleClosed"
    >
      <div>自恨罗衣掩诗句，举头空羡榜中名</div>

      <template #trigger>
        <m-button type="primary">Click 触发</m-button>
      </template>
    </m-popover>
  </m-space>
</template>

<script>
import Popover from '..'
import Button from '../../button'
import Space from '../../space'
import Message from '../../message'

export default {
  components: {
    [Popover.name]: Popover,
    [Button.name]: Button,
    [Space.name]: Space,
  },
  methods: {
    handleOpen() {
      Message('open')
    },

    handleClose() {
      Message('close')
    },

    handleOpened() {
      Message('opened')
    },

    handleClosed() {
      Message('closed')
    },
  },
}
</script>
