<template>
  <m-slider label="Slide your progress!" v-model="value" />
</template>

<script>
import Slider from '..'

export default {
  components: {
    [Slider.name]: Slider,
  },
  data: () => ({
    value: 20,
  }),
}
</script>
