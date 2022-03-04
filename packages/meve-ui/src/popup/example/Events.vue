<template>
  <div class="example">
    <m-button type="primary" @click="show = !show">开启遮罩层</m-button>

    <m-popup
      v-model="show"
      @open="showMessage('open')"
      @close="showMessage('close')"
      @opened="showMessage('opened')"
      @closed="showMessage('closed')"
    >
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>
  </div>
</template>

<script>
import Popup from '..'
import Button from '../../button'
import Message from '../../message'

export default {
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
  },
  data: () => ({
    show: false,
  }),
  methods: {
    showMessage(message) {
      Message(message)
    },
  },
}
</script>

<style scoped>
.text {
  width: 300px;
  padding: 20px;
  color: #888;
}
</style>
