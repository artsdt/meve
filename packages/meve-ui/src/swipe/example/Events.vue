<template>
  <m-swipe ref="swipe" class="swipe" @change="handleChange">
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
  </m-swipe>
</template>

<script>
import Swipe from '..'
import SwipeItem from '../../swipe-item'
import resize from './mixins/resize'
import Message from '../../message'

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  mixins: [resize],
  methods: {
    handleChange(index) {
      Message(index)
    },
  },
}
</script>

<style scoped lang="less">
.swipe {
  width: 100%;
}

.swipe-item {
  width: 100%;
  height: 190px;
  object-fit: cover;
  pointer-events: none;
}
</style>
