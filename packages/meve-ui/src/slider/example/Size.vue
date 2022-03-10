<template>
  <m-space direction="column" size="large">
    <m-slider label="NORMAL" v-model="value" />
    <m-slider label="SMALL" size="small" v-model="value" />
    <m-slider label="MINI" size="mini" v-model="value" />
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
