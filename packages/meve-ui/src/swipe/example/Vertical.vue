<template>
  <m-swipe ref="swipe" class="swipe" vertical>
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

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  mixins: [resize],
}
</script>

<style scoped lang="less">
.swipe {
  width: 100%;
  height: 190px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
