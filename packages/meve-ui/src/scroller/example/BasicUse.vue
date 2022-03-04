<template>
  <m-scroller :height="600">
    <m-scroller style="width: 300px" :height="300">
      <div class="scroller-item" v-for="i in items" :key="i">{{ i }}</div>
    </m-scroller>
    <m-button type="primary" @click="push">Push</m-button>
    <div class="scroller-item" v-for="i in items" :key="i">{{ i }}</div>
  </m-scroller>
</template>

<script>
import Scrollbar from '..'
import Button from '../../button'

let count = 0

export default {
  components: {
    [Scrollbar.name]: Scrollbar,
    [Button.name]: Button,
  },
  data: () => ({
    items: [],
  }),
  methods: {
    push() {
      for (let i = 0; i < 10; i++) {
        this.items.push(count++)
      }
    },
  },
}
</script>

<style scoped lang="less">
.scroller-item {
  height: 50px;
}

.scroller {
  height: 300px;
  overflow: auto;
}
</style>
