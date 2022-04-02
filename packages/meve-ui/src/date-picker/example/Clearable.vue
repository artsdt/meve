<template>
  <m-date-picker clearable placeholder="Please pick date" v-model="value" />
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
