<template>
  <m-space direction="column" size="large">
    <m-slider label="DISABLED" disabled v-model="value" />
    <m-slider label="READONLY" readonly v-model="value" />
  </m-space>
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
