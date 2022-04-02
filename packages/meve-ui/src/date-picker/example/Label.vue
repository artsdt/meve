<template>
  <m-date-picker label="YOUR DATE" placeholder="Please pick date" v-model="value" />
</template>

<script>
import DatePicker from '..'

export default {
  components: {
    [DatePicker.name]: DatePicker,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
