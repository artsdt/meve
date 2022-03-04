<template>
  <div class="example">
    <m-space :size="[20, 44]">
      <m-popover trigger="click" placement="top-start">
        <div class="text">米薇</div>

        <template #trigger>
          <m-button type="primary">top-start</m-button>
        </template>
      </m-popover>

      <m-popover trigger="click" placement="top">
        <div class="text">米薇</div>

        <template #trigger>
          <m-button type="primary">top</m-button>
        </template>
      </m-popover>

      <m-popover trigger="click" placement="top-end">
        <div class="text">米薇</div>

        <template #trigger>
          <m-button type="primary">top-end</m-button>
        </template>
      </m-popover>
    </m-space>

    <div style="margin-top: 20px">
      <m-space :size="[20, 130]">
        <m-popover trigger="click" placement="left-start">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">left-start</m-button>
          </template>
        </m-popover>

        <m-popover trigger="click" placement="right-start">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">right-start</m-button>
          </template>
        </m-popover>
      </m-space>
    </div>

    <div style="margin-top: 20px">
      <m-space :size="[20, 208]">
        <m-popover trigger="click" placement="left">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">left</m-button>
          </template>
        </m-popover>

        <m-popover trigger="click" placement="right">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">right</m-button>
          </template>
        </m-popover>
      </m-space>
    </div>

    <div style="margin-top: 20px">
      <m-space :size="[20, 145]">
        <m-popover trigger="click" placement="left-end">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">left-end</m-button>
          </template>
        </m-popover>

        <m-popover trigger="click" placement="right-end">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">right-end</m-button>
          </template>
        </m-popover>
      </m-space>
    </div>

    <div style="margin-top: 20px">
      <m-space :size="[20, 11]">
        <m-popover trigger="click" placement="bottom-start">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">bottom-start</m-button>
          </template>
        </m-popover>

        <m-popover trigger="click" placement="bottom">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">bottom</m-button>
          </template>
        </m-popover>

        <m-popover trigger="click" placement="bottom-end">
          <div class="text">米薇</div>

          <template #trigger>
            <m-button type="primary">bottom-end</m-button>
          </template>
        </m-popover>
      </m-space>
    </div>
  </div>
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

<style scoped>
.text {
  font-size: 54px;
}
</style>
