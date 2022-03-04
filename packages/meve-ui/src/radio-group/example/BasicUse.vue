<template>
  <m-radio v-model="value">Agree</m-radio>
</template>

<script>
import Radio from '../../radio'

export default {
  components: {
    [Radio.name]: Radio,
  },
  data: () => ({
    value: false,
  }),
}
</script>
