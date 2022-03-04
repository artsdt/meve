<template>
  <div class="example">
    <m-space>
      <m-button type="primary" @click="center = !center">中间弹出</m-button>
      <m-button type="primary" @click="top = !top">上方弹出</m-button>
      <m-button type="primary" @click="right = !right">右侧弹出</m-button>
      <m-button type="primary" @click="bottom = !bottom">下方弹出</m-button>
      <m-button type="primary" @click="left = !left">左侧弹出</m-button>
    </m-space>

    <m-popup v-model="center">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup position="top" v-model="top">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup position="right" v-model="right">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup position="bottom" v-model="bottom">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup position="left" v-model="left">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>
  </div>
</template>

<script>
import Popup from '..'
import Button from '../../button'
import Space from '../../Space'

export default {
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Space.name]: Space,
  },
  data: () => ({
    top: false,
    right: false,
    bottom: false,
    left: false,
    center: false,
  }),
}
</script>

<style scoped>
.text {
  width: 300px;
  padding: 20px;
  color: #888;
}
</style>
