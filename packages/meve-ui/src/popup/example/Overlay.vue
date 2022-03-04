<template>
  <div class="example">
    <m-space>
      <m-button type="primary" @click="overlayStyle = !overlayStyle">遮罩层样式</m-button>
      <m-button type="primary" @click="overlayClass = !overlayClass">遮罩层类名</m-button>
    </m-space>

    <m-popup
      :overlay-style="{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }"
      v-model="overlayStyle"
    >
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup overlay-class="custom-overlay" v-model="overlayClass">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>
  </div>
</template>

<script>
import Popup from '..'
import Button from '../../button'
import Space from '../../space'

export default {
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Space.name]: Space,
  },
  data: () => ({
    overlayStyle: false,
    overlayClass: false,
  }),
}
</script>

<style>
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped>
.text {
  width: 300px;
  padding: 20px;
  color: #888;
}
</style>
