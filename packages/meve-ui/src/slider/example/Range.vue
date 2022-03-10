<template>
  <m-slider range v-model="value" />
</template>

<script>
import Slider from '..'

export default {
  components: {
    [Slider.name]: Slider,
  },
  data: () => ({
    value: [40, 60],
  }),
}
</script>
