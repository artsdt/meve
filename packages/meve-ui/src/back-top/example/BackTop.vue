<template>
  <m-back-top :target="window" />
</template>

<script>
import BackTop from '..'

export default {
  components: {
    [BackTop.name]: BackTop,
  },
  data: () => ({
    window,
  }),
}
</script>
