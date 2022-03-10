<template>
  <m-space :size="[0, 80]">
    <m-slider vertical v-model="value" />
    <m-slider vertical range v-model="rangeValue" />
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
    rangeValue: [20, 60],
  }),
}
</script>
