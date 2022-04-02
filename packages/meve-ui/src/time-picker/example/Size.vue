<template>
  <m-space direction="column" size="large">
    <m-time-picker label="NORMAL" placeholder="Please pick time" v-model="value" />
    <m-time-picker label="SMALL" placeholder="Please pick time" size="small" v-model="value" />
    <m-time-picker label="MINI" placeholder="Please pick time" size="mini" v-model="value" />
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
