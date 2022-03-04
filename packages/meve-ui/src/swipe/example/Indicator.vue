<template>
  <m-swipe ref="swipe" class="swipe">
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>

    <template #indicator="{ index, length }">
      <div class="indicators">
        <div class="indicator" v-for="l in length" :key="l" @click="$refs.swipe.to(l - 1)">
          {{ l }}
        </div>
      </div>
    </template>
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
}

.swipe-item {
  width: 100%;
  height: 190px;
  object-fit: cover;
  pointer-events: none;
}

.indicators {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
}

.indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
}
</style>
