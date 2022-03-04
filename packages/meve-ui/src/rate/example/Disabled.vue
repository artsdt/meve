<template>
  <m-space direction="column">
    <m-rate disabled v-model="value" />
    <m-rate readonly v-model="value" />
  </m-space>
</template>

<script>
import Rate from '..'
import Space from '../../space'

export default {
  components: {
    [Rate.name]: Rate,
    [Space.name]: Space,
  },
  data: () => ({
    value: 3,
  }),
}
</script>
