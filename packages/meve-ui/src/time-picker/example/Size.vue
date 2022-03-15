<template>
  <m-space direction="column" size="large">
    <m-time-picker label="NORMAL" placeholder="What is your name?" v-model="value" />
    <m-time-picker label="SMALL" placeholder="What is your name?" size="small" v-model="value" />
    <m-time-picker label="MINI" placeholder="What is your name?" size="mini" v-model="value" />
  </m-space>
</template>

<script>
import TimePicker from '..'
import Space from '../../space'

export default {
  components: {
    [TimePicker.name]: TimePicker,
    [Space.name]: Space,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
