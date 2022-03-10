<template>
  <m-space direction="column" :size="[24, 0]">
    <m-slider :rules="[(v) => v >= 50 || 'You must slide value >= 50']" v-model="value" />
    <m-slider
      :rules="[([v1, v2]) => v2 - v1 >= 50 || 'You must slide range value total >= 50']"
      range
      v-model="rangeValue"
    />
  </m-space>
</template>

<script>
import Slider from '..'
import Space from '../../space'

export default {
  components: {
    [Slider.name]: Slider,
    [Space.name]: Space,
  },
  data: () => ({
    value: 20,
    rangeValue: [20, 30],
  }),
}
</script>
