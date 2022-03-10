<template>
  <m-slider v-model="value" />
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
