<template>
  <m-time-picker clearable placeholder="Please pick time" v-model="value" />
</template>

<script>
import TimePicker from '..'

export default {
  components: {
    [TimePicker.name]: TimePicker,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
