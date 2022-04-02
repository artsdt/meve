<template>
  <m-space direction="column" size="large">
    <m-date-picker label="NORMAL" placeholder="Please pick date" v-model="value" />
    <m-date-picker label="SMALL" placeholder="Please pick date" size="small" v-model="value" />
    <m-date-picker label="MINI" placeholder="Please pick date" size="mini" v-model="value" />
  </m-space>
</template>

<script>
import DatePicker from '..'
import Space from '../../space'

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [Space.name]: Space,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
