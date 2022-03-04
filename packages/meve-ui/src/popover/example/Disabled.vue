<template>
  <m-space>
    <m-popover :y="4" disabled>
      <div>自恨罗衣掩诗句，举头空羡榜中名</div>

      <template #trigger>
        <m-button type="primary">Hover 触发</m-button>
      </template>
    </m-popover>

    <m-popover trigger="click" :y="4" disabled>
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

export default {
  components: {
    [Popover.name]: Popover,
    [Button.name]: Button,
    [Space.name]: Space,
  },
}
</script>
