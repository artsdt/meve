<template>
  <m-space direction="column" size="large">
    <m-rate label="NORMAL" v-model="value" />
    <m-rate label="SMALL" size="small" v-model="value" />
    <m-rate label="MINI" size="mini" v-model="value" />
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
    value: 0,
  }),
}
</script>
